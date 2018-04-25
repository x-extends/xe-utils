'use strict'

var XEUtils = require('./utils')
var methodExports = require('../method')

/**
 * functions of mixing
 *
 * @param {Object} methods
 */
XEUtils.mixin = function (methods) {
  methodExports.objectEach(methods, function (fn, name) {
    XEUtils[name] = methodExports.isFunction(fn) ? function () {
      var result = fn.apply(XEUtils.$context, arguments)
      XEUtils.$context = null
      return result
    } : fn
  })
}

XEUtils.mixin(methodExports)

module.exports = XEUtils
module.exports.default = XEUtils
