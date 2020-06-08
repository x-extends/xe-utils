var isString = require('./isString')
var isNumber = require('./isNumber')

/**
  * 判断是否Element对象
  *
  * @param {Object} obj 对象
  * @return {Boolean}
  */
function isElement (obj) {
  return !!(obj && isString(obj.nodeName) && isNumber(obj.nodeType))
}

module.exports = isElement
