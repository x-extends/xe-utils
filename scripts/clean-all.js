const fs = require('fs')
const path = require('path')

const config = require('./build-config')
const { ROOT, PROTECTED } = require('./clean-dir')

const DRY_RUN = process.argv.includes('--dry-run')

function walkSrc (dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name)
    const stat = fs.statSync(full)
    if (stat.isDirectory()) walkSrc(full, out)
    else out.push(path.relative(config.srcDir, full))
  }
  return out
}

// ---------- 1. 清根目录副本 ----------

function cleanRootCopies () {
  const { srcDir, rootDir } = config

  if (!fs.existsSync(srcDir)) {
    console.log('[clean-all] src 不存在，跳过根目录副本清理')
    return { removed: 0, skipped: 0 }
  }

  const relPaths = walkSrc(srcDir)
  let removed = 0
  let skipped = 0

  for (const rel of relPaths) {
    if (rel.startsWith('..') || path.isAbsolute(rel)) {
      skipped++
      continue
    }

    const top = rel.split(path.sep)[0]
    if (PROTECTED.has(top)) {
      skipped++
      continue
    }

    const target = path.join(rootDir, rel)

    if (!fs.existsSync(target)) continue
    const stat = fs.statSync(target)
    if (!stat.isFile()) continue

    if (DRY_RUN) {
      console.log(`[clean-all] (dry) ${path.relative(ROOT, target)}`)
    } else {
      fs.rmSync(target, { force: true })
      console.log(`[clean-all] 删除 ${path.relative(ROOT, target)}`)
    }
    removed++
  }

  return { removed, skipped }
}

// ---------- 2. 删除构建产物目录 ----------

// 直接删除整个目录，不重建；带安全检查
function removeDir (dir) {
  const abs = path.resolve(dir)
  const rel = path.relative(ROOT, abs)

  // 安全检查：必须在项目内
  if (!rel || rel === '..' || rel.startsWith('..' + path.sep) || path.isAbsolute(rel)) {
    throw new Error(`[clean-all] 拒绝删除（不在项目内）: ${abs}`)
  }

  // 安全检查：一级目录不能是受保护目录
  const top = rel.split(path.sep)[0]
  if (PROTECTED.has(top)) {
    throw new Error(`[clean-all] 拒绝删除（受保护目录）: ${abs}`)
  }

  if (!fs.existsSync(abs)) {
    console.log(`[clean-all] ${rel} 不存在，跳过`)
    return false
  }

  if (DRY_RUN) {
    console.log(`[clean-all] (dry) 删除目录 ${rel}${path.sep}`)
    return true
  }

  fs.rmSync(abs, { recursive: true, force: true })
  console.log(`[clean-all] 删除目录 ${rel}${path.sep}`)
  return true
}

function cleanDirs () {
  const dirs = [config.libDir, config.esDir, config.outDir]
  for (const dir of dirs) {
    removeDir(dir)
  }
}

// ---------- 主流程 ----------

function main () {
  console.log(DRY_RUN ? '[clean-all] 预演模式，不实际删除' : '[clean-all] 开始清理')

  const rootResult = cleanRootCopies()
  cleanDirs()

  const verb = DRY_RUN ? '将删除' : '已删除'
  console.log(
    `[clean-all] 根目录副本：${verb} ${rootResult.removed} 个文件` +
    (rootResult.skipped ? `，跳过 ${rootResult.skipped} 个` : '')
  )
  console.log(DRY_RUN ? '[clean-all] 预演完成' : '[clean-all] 清理完成')
}

main()
