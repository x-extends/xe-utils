import * as core from './src/core'
import * as browse from './src/browse'

function XEUtils () {}

/**
 * 函数扩展
 *
 * @param {Object} methods 扩展函数对象
 */
export function mixin (methods) {
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      var fn = methods[name]
      XEUtils[name] = typeof fn === 'function' ? function () {
        var rest = fn.apply(XEUtils.context || window, arguments)
        XEUtils.context = window
        return rest
      } : fn
    })
  }
}

mixin(core)
mixin(browse)

export var constructor = XEUtils
export * from './src/core'
export * from './src/browse'
