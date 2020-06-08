/* eslint-disable valid-typeof */
var staticStrUndefined = require('./staticStrUndefined')

/**
  * 判断是否WeakSet对象
  *
  * @param {Object} obj 对象
  * @return {Boolean}
 */
var supportWeakSet = typeof WeakSet !== staticStrUndefined
function isWeakSet (obj) {
  return supportWeakSet && obj instanceof WeakSet
}

module.exports = isWeakSet
