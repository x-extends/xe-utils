var helperStringRepeat = require('../string/helperStringRepeat')
var helperNumberOffsetPoint = require('./helperNumberOffsetPoint')

/**
 * 数值转字符串，科学计数转字符串
 * @param { Number } num 数值
 *
 * @return {Number}
 */
function toNumberString(num) {
  var rest = '' + num
  var scienceMatchs = rest.match(/^([-+]?)((\d+)|((\d+)?[.](\d+)?))e([-+]{1})([0-9]+)$/)
  if (scienceMatchs) {
    var isNegative = num < 0
    var absFlag = isNegative ? '-' : ''
    var intNumStr = scienceMatchs[3] || ''
    var dIntNumStr = scienceMatchs[5] || ''
    var dFloatNumStr = scienceMatchs[6] || ''
    var sciencFlag = scienceMatchs[7]
    var scienceNumStr = scienceMatchs[8]
    var floatOffsetIndex = scienceNumStr - dFloatNumStr.length
    var intOffsetIndex = scienceNumStr - intNumStr.length
    var dIntOffsetIndex = scienceNumStr - dIntNumStr.length
    if (sciencFlag === '+') {
      if (intNumStr) {
        return absFlag + intNumStr + helperStringRepeat('0', scienceNumStr)
      }
      if (floatOffsetIndex > 0) {
        return absFlag + dIntNumStr + dFloatNumStr + helperStringRepeat('0', floatOffsetIndex)
      }
      return absFlag + dIntNumStr + helperNumberOffsetPoint(dFloatNumStr, scienceNumStr)
    }
    if (intNumStr) {
      if (intOffsetIndex > 0) {
        return absFlag + '0.' + helperStringRepeat('0', Math.abs(intOffsetIndex)) + intNumStr
      }
      return absFlag + helperNumberOffsetPoint(intNumStr, intOffsetIndex)
    }
    if (dIntOffsetIndex > 0) {
      return absFlag + '0.' + helperStringRepeat('0', Math.abs(dIntOffsetIndex)) + dIntNumStr + dFloatNumStr
    }
    return absFlag + helperNumberOffsetPoint(dIntNumStr, dIntOffsetIndex) + dFloatNumStr
  }
  return rest
}

module.exports = toNumberString
