var toString = require('./toString')

/**
  * 将字符串重复 n次
  *
  * @param {String} str 字符串
  * @param {Number} count 次数
  * @return {String}
  */
function repeat (str, count) {
  var rest = toString(str)
  if (rest.repeat) {
    return rest.repeat(count)
  }
  var list = isNaN(count) ? [] : new Array(parseInt(count))
  return list.join(rest) + (list.length > 0 ? rest : '')
}

module.exports = repeat
