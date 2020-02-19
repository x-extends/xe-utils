var toNumber = require('./toNumber')

var assign = require('../object/assign')
var toValString = require('../string/toString')

/**
  * 千分位分隔符、小数点
  *
  * @param {String/Number} num 数值
  * @param {Object} 参数 {spaceNumber: 分割位数(默认3), separator: 分隔符(默认,), digits: 小数位数(默认null)}
  * @return {String}
 */
function commafy (num, options) {
  num = toValString(num).replace(/,/g, '')
  if (num) {
    var opts = assign({ spaceNumber: 3, separator: ',' }, options)
    var optDigits = opts.digits || opts.fixed
    var result = (optDigits ? toNumber(num).toFixed(optDigits) : num).split('.')
    return result[0].replace(new RegExp('(?=(?!(\\b))(\\d{' + opts.spaceNumber + '})+$)', 'g'), opts.separator) + (result[1] ? '.' + result[1] : '')
  }
  return num
}

module.exports = commafy
