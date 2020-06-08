function helperNumString (num) {
  if (('' + num).indexOf('e-') >= 0) {
    var isNegative = num < 0
    return (isNegative ? '-' : '') + '0' + ('' + ((isNegative ? Math.abs(num) : num) + 1)).substr(1)
  }
  return '' + num
}

module.exports = helperNumString
