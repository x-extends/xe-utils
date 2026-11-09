const fs = require('fs')
const path = require('path')

const config = require('./build-config')
const { cleanDir } = require('./clean-dir')

function copyDir (src, dest) {
  for (const name of fs.readdirSync(src)) {
    const s = path.join(src, name)
    const d = path.join(dest, name)
    const stat = fs.statSync(s)
    if (stat.isDirectory()) {
      fs.mkdirSync(d, { recursive: true })
      copyDir(s, d)
    } else {
      fs.copyFileSync(s, d)
    }
  }
}

function countFiles (dir) {
  let n = 0
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name)
    if (fs.statSync(full).isDirectory()) n += countFiles(full)
    else n++
  }
  return n
}

function main () {
  const { srcDir, libDir, rootDir } = config
  if (!fs.existsSync(srcDir)) throw new Error(`src 目录不存在: ${srcDir}`)

  // 1. src → lib2（整目录清理后重建）
  cleanDir(libDir, 'build-lib')
  copyDir(srcDir, libDir)

  // 2. src → 根目录（直接覆盖同名文件，不清理其他文件）
  copyDir(srcDir, rootDir)

  const count = countFiles(libDir)
  console.log(`[build-lib] ✓ src → ${path.relative(process.cwd(), libDir)}/ (${count} 个文件)`)
  console.log(`[build-lib] ✓ src → 根目录 (${count} 个文件，直接覆盖)`)
}

main()
