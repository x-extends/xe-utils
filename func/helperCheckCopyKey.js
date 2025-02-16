function helperCheckCopyKey (key, val) {
  return key !== '__proto__' && key !== 'constructor' && (!val || typeof val !== 'function')
}

module.exports = helperCheckCopyKey
