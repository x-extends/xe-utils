function helperNumberDecimal (num) {
  return (('' + num).split('.')[1] || '').length
}

module.exports = helperNumberDecimal
