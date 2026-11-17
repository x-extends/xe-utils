var staticDayTime = require('./staticDayTime')

/**
 * 将 UTC 零点时间戳对齐到周起点
 * @param {Number} time UTC 零点时间戳
 * @param {Number} firstDay 周起始天，0=周日 ... 6=周六
 * @return {Number} 周起点的 UTC 零点时间戳
 */
function helperGetUTCWeekStartTime (time, firstDay) {
  // 1970-01-01 是周四（4），time 为 86400000 整数倍，整除无余数
  var day = ((time / staticDayTime + 4) % 7 + 7) % 7
  var offset = (day - firstDay + 7) % 7
  return time - offset * staticDayTime
}

module.exports = helperGetUTCWeekStartTime
