/* eslint-disable valid-typeof */
var staticStrUndefined = require('../static/staticStrUndefined')

/**
  * 判断是否Window对象
  *
  * @param {Object} obj 对象
  * @return {Boolean}
  */
var supportWindow = typeof window !== staticStrUndefined
function isWindow (obj) {
  return !!(obj && obj === obj.window && supportWindow)
}

module.exports = isWindow
