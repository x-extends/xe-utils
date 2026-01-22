/* eslint-disable valid-typeof */
var staticStrUndefined = require('./staticStrUndefined')

/**
  * 判断是否Set对象
  *
  * @param {Object} obj 对象
  * @return {Boolean}
 */
var supportSet = typeof Set !== staticStrUndefined
function isSet (obj) {
  return supportSet && obj instanceof Set
}

module.exports = isSet
