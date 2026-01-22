function helperNumberOffsetPoint (str, offsetIndex) {
  return str.substring(0, offsetIndex) + '.' + str.substring(offsetIndex, str.length)
}

module.exports = helperNumberOffsetPoint
