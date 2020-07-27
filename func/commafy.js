var round = require('./round')
var ceil = require('./ceil')
var floor = require('./floor')

var isNumber = require('./isNumber')
var toValString = require('./toString')

var helperNumString = require('./helperNumString')

/**
  * 千分位分隔符、小数点
  *
  * @param {String/Number} num 数值
  * @param {CommafyOptions} options 参数
  * @return {String}
 */
function commafy(num, options) {
  var opts = options || {}
  var optDigits = opts.digits
  var isNum = isNumber(num)
  var rest = isNum ? (opts.ceil ? ceil : (opts.floor ? floor : round))(num, optDigits) : toValString(num).replace(/,/g, '')
  var result = isNum ? (helperNumString(optDigits ? rest.toFixed(optDigits) : rest).split('.')): (rest ? [rest] : [])
  if (result.length) {
    return result[0].replace(new RegExp('(?=(?!(\\b))(.{' + (opts.spaceNumber || 3) + '})+$)', 'g'), (opts.separator || ',')) + (result[1] ? ('.' + result[1]) : '')
  }
  return rest
}

module.exports = commafy
