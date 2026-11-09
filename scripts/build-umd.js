const fs = require('fs')
const path = require('path')
const terser = require('terser')
const esbuild = require('esbuild')

const config = require('./build-config')
const pkg = require('../package.json')
const { cleanDir } = require('./clean-dir')

const SRC = config.libDir
const OUT = config.outDir
const ESM = config.esDir
const LIB_OUT = config.libDir

const UTILS_FUNCS = ['static', 'object', 'array', 'base', 'number', 'date', 'string', 'function', 'url', 'web']

// ---------- 源文件收集 ----------

function listHelpers (ext = '.js') {
  return fs.readdirSync(SRC)
    .filter((f) => f.startsWith('helper') && f.endsWith(ext))
    .sort()
    .map((f) => path.join(SRC, f))
}

function listFuncFiles (groupName, ext = '.js') {
  const agg = path.join(SRC, `${groupName}.js`)
  if (!fs.existsSync(agg)) return []
  delete require.cache[require.resolve(agg)]
  const mod = require(agg)
  return Object.keys(mod)
    .map((func) => path.join(SRC, `${func}${ext}`))
    .filter((p) => fs.existsSync(p))
}

function collectJsPaths () {
  const paths = [
    path.join(SRC, 'setupDefaults.js'),
    path.join(SRC, 'ctor.js'),
    ...listHelpers('.js')
  ]
  UTILS_FUNCS.forEach((name) => {
    paths.push(...listFuncFiles(name, '.js'))
  })
  paths.push(path.join(SRC, 'index.js'))
  return paths.filter((p) => fs.existsSync(p))
}

function collectDtsPaths () {
  const paths = [
    path.join(SRC, 'setupDefaults.d.ts'),
    path.join(SRC, 'ctor.d.ts')
  ]
  UTILS_FUNCS.forEach((name) => {
    paths.push(...listFuncFiles(name, '.d.ts'))
  })
  return paths.filter((p) => fs.existsSync(p))
}

function stripCjs (code) {
  return code
    .replace(/(\n'use strict')/g, '')
    .replace(/(\/\*\s{1}CommonJS\s{1}\*\/[^\n]+)/g, '')
    .replace(/(\nvar\s{1}\{\s{1}[\s,_a-zA-Z0-9]+\s{1}\}\s{1}=\s{1}require\(.+\)[^\n]*)/g, '')
    .replace(/(\nvar\s{1}[_a-zA-Z0-9]+\s{1}=\s{1}require\(.+\)[^\n]*)/g, '')
    .replace(/(\nmodule\.exports\s{1}={1}[^\n]+)/g, '')
    .replace(/(\nmodule\.exports\.default\s{1}={1}[^\n]+)/g, '')
}

// ---------- UMD ----------

function buildUmd (paths) {
  const start = `/**
 * ${config.fileName}.js v${config.version}
 * MIT License.
 * @preserve
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.${config.exportName} = factory());
}(this, function () {'use strict'
`
  const end = `
  return ${config.exportName}
}))
`

  const concatSource = '\n' + paths
    .map((p) => fs.readFileSync(p, 'utf8'))
    .join('\n')

  const stripped = stripCjs(concatSource).replace(/@VERSION/g, config.version)
  return start + stripped + end
}

// ---------- all.esm.js ----------

async function buildAllEsm (esIndexFile, outFile) {
  await esbuild.build({
    entryPoints: [esIndexFile],
    bundle: true,
    format: 'esm',
    platform: 'neutral',
    target: 'es2015',
    outfile: outFile,
    banner: {
      js: `/**
 * ${config.fileName}.js v${config.version}
 * MIT License.
 * @preserve
 */`
    },
    logLevel: 'warning'
  })
}

// ---------- d.ts ----------

function buildDts (paths) {
  const start = `/**
  * ${pkg.description || config.fileName}
  * @version ${config.version}
  */
declare namespace ${config.exportName} {
`
  const end = `
}
`
  const concatSource = paths
    .map((p) => fs.readFileSync(p, 'utf8'))
    .join('\n')

  const stripped = concatSource
    .replace(/(export default.+[^\n]+)/g, '')
    .replace(/(import.+[^\n]+)/g, '')
    .replace(/(export declare)/g, 'export')
    .replace(/(declare module (([\s\S])*?)\n})/g, '')

  return start + stripped + end
}

// ---------- 主流程 ----------

async function main () {
  if (!fs.existsSync(SRC)) throw new Error(`lib 目录不存在: ${SRC}（请先运行 build-lib）`)

  cleanDir(OUT, 'build-umd')

  const jsPaths = collectJsPaths()

  // 1. UMD 未压缩
  const jsSource = buildUmd(jsPaths)
  const plainFile = path.join(OUT, `${config.fileName}.umd.js`)
  fs.writeFileSync(plainFile, jsSource, 'utf8')

  // 2. UMD 压缩
  const minResult = await terser.minify(jsSource, {
    compress: { passes: 2, unsafe: true },
    format: { comments: /@preserve/ }
  })
  if (minResult.error) throw minResult.error
  const minFile = path.join(OUT, `${config.fileName}.umd.min.js`)
  fs.writeFileSync(minFile, minResult.code, 'utf8')

  // 3. index.umd.js / index.umd.min.js
  const indexPlain = path.join(OUT, 'index.umd.js')
  const indexMin = path.join(OUT, 'index.umd.min.js')
  fs.copyFileSync(plainFile, indexPlain)
  fs.copyFileSync(minFile, indexMin)

  // 4. all.esm.js —— 从 es/index.js 打包
  const esIndex = path.join(ESM, 'index.js')
  if (!fs.existsSync(esIndex)) {
    throw new Error(`找不到 ESM 入口: ${esIndex}（请先运行 build-esm）`)
  }
  const allEsmFile = path.join(OUT, 'all.esm.js')
  await buildAllEsm(esIndex, allEsmFile)

  // 4.1 再复制一份到 es/index.esm.js
  const esIndexEsm = path.join(ESM, 'index.esm.js')
  fs.copyFileSync(allEsmFile, esIndexEsm)

  // 5. d.ts
  const dtsPaths = collectDtsPaths()
  const dtsSource = buildDts(dtsPaths)
  const dtsFile = path.join(OUT, `${config.fileName}.d.ts`)
  fs.writeFileSync(dtsFile, dtsSource, 'utf8')

  // 6. 4 个 UMD 再输出一份到 lib/
  fs.mkdirSync(LIB_OUT, { recursive: true })
  for (const f of [plainFile, minFile, indexPlain, indexMin]) {
    fs.copyFileSync(f, path.join(LIB_OUT, path.basename(f)))
  }

  // 输出
  const size = (f) => (fs.statSync(f).size / 1024).toFixed(2) + ' KB'
  const rel = (f) => path.relative(process.cwd(), f)
  console.log(`[build-umd] ✓ ${jsPaths.length} 个 js, ${dtsPaths.length} 个 d.ts`)
  console.log(`  → ${rel(plainFile)}        (${size(plainFile)})`)
  console.log(`  → ${rel(minFile)}          (${size(minFile)})`)
  console.log(`  → ${rel(indexPlain)}        (${size(indexPlain)})`)
  console.log(`  → ${rel(indexMin)}          (${size(indexMin)})`)
  console.log(`  → ${rel(allEsmFile)}         (${size(allEsmFile)})`)
  console.log(`  → ${rel(esIndexEsm)}         (${size(esIndexEsm)})`)
  console.log(`  → ${rel(dtsFile)}`)
  console.log(`  → ${rel(LIB_OUT)}/  (4 个 UMD 副本)`)
}

main().catch((e) => { console.error('[build-umd] ✗', e.message); process.exit(1) })
