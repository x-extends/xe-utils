var helperDateGetTime = require('./helperDateGetTime')
var helperNewEmptyDate = require('./helperNewEmptyDate')

/**
 * 返回当前时间戳
 *
 * @returns Number
 */
var now = Date.now || function () {
  return helperDateGetTime(helperNewEmptyDate())
}

module.exports = now
