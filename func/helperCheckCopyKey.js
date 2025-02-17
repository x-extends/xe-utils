function helperCheckCopyKey (key) {
  return key !== '__proto__' && key !== 'constructor'
}

module.exports = helperCheckCopyKey
