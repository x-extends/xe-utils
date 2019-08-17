var helperGetDateTime = require('./helperGetDateTime')
var helperNewDate = require('./helperNewDate')

/**
 * 返回当前时间戳
 *
 * @returns Number
 */
var now = Date.now || function () {
  return helperGetDateTime(helperNewDate())
}

module.exports = now
