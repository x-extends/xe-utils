const fs = require('fs')
const path = require('path')

const config = require('./build-config')
const { cleanDir } = require('./clean-dir')

function walk (dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name)
    const stat = fs.statSync(full)
    if (stat.isDirectory()) walk(full, out)
    else out.push(full)
  }
  return out
}

function cjsToEsm (code) {
  // var x = require('./x')  →  import x from './x.js'
  code = code.replace(
    /^(?:var|let|const)\s+([A-Za-z_$][\w$]*)\s*=\s*require\(\s*(['"])([^'"]+)\2\s*\)\s*;?/gm,
    (_, name, q, spec) => {
      const resolved = spec.endsWith('.js') ? spec : `${spec}.js`
      return `import ${name} from ${q}${resolved}${q};`
    }
  )
  // var { a, b } = require('./x')  →  import { a, b } from './x.js'
  code = code.replace(
    /^(?:var|let|const)\s+(\{[^}]+\})\s*=\s*require\(\s*(['"])([^'"]+)\2\s*\)\s*;?/gm,
    (_, names, q, spec) => {
      const resolved = spec.endsWith('.js') ? spec : `${spec}.js`
      return `import ${names} from ${q}${resolved}${q};`
    }
  )
  // module.exports = xxx  →  export default xxx
  code = code.replace(/^module\.exports\s*=\s*/gm, 'export default ')
  // @VERSION 替换
  if (config.version) {
    code = code.replace(/(['"])@VERSION\1/g, `$1${config.version}$1`)
  }
  return code
}

/**
 * 参照旧 gulp 逻辑：
 *   1. 取 index.js 中第一个 { ... } 整块
 *   2. 把块内 "key: value" 替换成 "key"（相同时）或 "value as key"（不同时）
 *   3. 结果插入到 export default 之前
 */
function injectIndexExports (code) {
  const exportRest = code.match(/\{[\s\S]*\}/)
  if (!exportRest) return code
  const exportStr = exportRest[0].replace(/([a-zA-Z]+):\s([a-zA-Z]+)/g, (text, n, v) => {
    if (n === v) {
      return `${n}`
    }
    return `${v} as ${n}`
  })
  return code.replace('export default', `export ${exportStr}\n\nexport default `)
}

function main () {
  const { libDir, esDir } = config

  if (!fs.existsSync(libDir)) {
    throw new Error(`lib2 目录不存在: ${libDir}（请先运行 build-lib）`)
  }

  cleanDir(esDir, 'build-esm')

  const files = walk(libDir)
  let jsCount = 0
  let dtsCount = 0

  for (const file of files) {
    const rel = path.relative(libDir, file)
    const out = path.join(esDir, rel)
    fs.mkdirSync(path.dirname(out), { recursive: true })

    if (file.endsWith('.d.ts')) {
      fs.copyFileSync(file, out)
      dtsCount++
    } else if (file.endsWith('.js')) {
      let code = cjsToEsm(fs.readFileSync(file, 'utf8'))
      if (path.basename(file) === 'index.js') {
        code = injectIndexExports(code)
      }
      fs.writeFileSync(out, code, 'utf8')
      jsCount++
    }
  }

  console.log(`[build-esm] ✓ ${jsCount} 个 js + ${dtsCount} 个 d.ts → ${path.relative(process.cwd(), esDir)}/`)
}

main()
