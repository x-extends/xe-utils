import { coreMethods } from './src/core/methods'
import { browseMethods } from './src/browse/methods'

function XEUtils () {}

/**
 * 函数扩展
 *
 * @param {Object} methods 扩展函数对象
 */
function mixin (methods) {
  coreMethods.objectEach(methods, function (fn, name) {
    XEUtils[name] = coreMethods.isFunction(fn) ? function () {
      var result = fn.apply(XEUtils.$context, arguments)
      XEUtils.$context = null
      return result
    } : fn
  })
}

coreMethods.objectAssign(XEUtils, {
  mixin: mixin,
  version: '1.5.12',
  $name: 'XEUtils'
})

mixin(coreMethods)
mixin(browseMethods)

export * from './src/core'
export * from './src/browse'
export default XEUtils
