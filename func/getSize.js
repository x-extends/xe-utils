var isArray = require('./isArray')
var isString = require('./isString')
var each = require('./each')

/**
  * 返回对象的长度
  *
  * @param {Object} obj 对象
  * @return {Number}
  */
function getSize (obj) {
  var len = 0
  if (isString(obj) || isArray(obj)) {
    return obj.length
  }
  each(obj, function () {
    len++
  })
  return len
}

module.exports = getSize
