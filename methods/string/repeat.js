var toValString = require('./toString')

var helperStringRepeat = require('./helperStringRepeat')

/**
  * 将字符串重复 n 次
  *
  * @param {String} str 字符串
  * @param {Number} count 次数
  * @return {String}
  */
function repeat (str, count) {
  return helperStringRepeat(toValString(str), count)
}

module.exports = repeat
