/* eslint-disable valid-typeof */
var staticStrUndefined = require('./staticStrUndefined')

/**
  * 判断是否WeakMap对象
  *
  * @param {Object} obj 对象
  * @return {Boolean}
 */
var supportWeakMap = typeof WeakMap !== staticStrUndefined
function isWeakMap (obj) {
  return supportWeakMap && obj instanceof WeakMap
}

module.exports = isWeakMap
