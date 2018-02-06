import * as core from './src/core'
import * as browse from './src/browse'

function XEUtils () {}

/**
 * 函数扩展
 *
 * @param {Object} methods 扩展函数对象
 */
function mixin (methods) {
  return core.objectAssign(XEUtils, methods)
}

var a = ''; core.each(core, function (c, k) { a += k + ': ' + k + ', ' }); console.log(a)
var b = ''; core.each(browse, function (c, k) { b += k + ': ' + k + ', ' }); console.log(b)

mixin(core)
mixin(browse)
XEUtils.mixin = mixin
XEUtils.version = '1.5.2'

export * from './src/core'
export * from './src/browse'
export default XEUtils
