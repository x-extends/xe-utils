const fs = require('fs')
const path = require('path')

const ROOT = path.resolve(__dirname, '..')
const PROTECTED = new Set(['src', 'scripts', 'node_modules', '.git', '.vscode'])

function cleanDir (dir, label = 'clean') {
  const abs = path.resolve(dir)
  const rel = path.relative(ROOT, abs)

  if (!rel || rel === '..' || rel.startsWith('..' + path.sep) || path.isAbsolute(rel)) {
    throw new Error(`[${label}] 拒绝清理（不在项目内）: ${abs}`)
  }

  const top = rel.split(path.sep)[0]
  if (PROTECTED.has(top)) {
    throw new Error(`[${label}] 拒绝清理受保护目录: ${abs}`)
  }

  if (fs.existsSync(abs) && !fs.statSync(abs).isDirectory()) {
    throw new Error(`[${label}] 拒绝清理（不是目录）: ${abs}`)
  }

  fs.rmSync(abs, { recursive: true, force: true })
  fs.mkdirSync(abs, { recursive: true })
  return abs
}

module.exports = { cleanDir, ROOT, PROTECTED }
