function helperNumberDecimal (numStr) {
  return (numStr.split('.')[1] || '').length
}

module.exports = helperNumberDecimal
