/* eslint-disable valid-typeof */
var staticStrUndefined = require('./staticStrUndefined')

/**
  * 判断是否Map对象
  *
  * @param {Object} obj 对象
  * @return {Boolean}
 */
var supportMap = typeof Map !== staticStrUndefined
function isMap (obj) {
  return supportMap && obj instanceof Map
}

module.exports = isMap
