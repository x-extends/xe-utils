const { spawnSync } = require('child_process')
const path = require('path')

const steps = ['build-lib.js', 'build-esm.js', 'build-umd.js']
const start = Date.now()

for (const step of steps) {
  const r = spawnSync(process.execPath, [path.join(__dirname, step)], { stdio: 'inherit' })
  if (r.status !== 0) {
    console.error(`\n[build] 步骤 ${step} 失败，退出`)
    process.exit(r.status || 1)
  }
}
console.log(`\n[build] 全部完成，总耗时 ${((Date.now() - start) / 1000).toFixed(2)}s`)
