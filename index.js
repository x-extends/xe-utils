import * as core from './src/core'
import * as browse from './src/browse'

function XEUtils () {}

/**
 * 函数扩展
 *
 * @param {Object} methods 扩展函数对象
 */
function mixin (methods) {
  core.objectEach(methods, function (fn, name) {
    XEUtils[name] = core.isFunction(fn) ? function () {
      var result = fn.apply(XEUtils.context, arguments)
      XEUtils.context = null
      return result
    } : fn
  })
}

mixin(core)
mixin(browse)
XEUtils.mixin = mixin
XEUtils.version = '1.5.4'

export * from './src/core'
export * from './src/browse'
export default XEUtils
