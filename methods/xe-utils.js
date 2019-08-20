'use strict'

var setupDefaults = require('./setupDefaults')

var each = require('./base/each')
var isFunction = require('./base/isFunction')

var assign = require('./object/assign')

function mixin (methods) {
  each(methods, function (fn, name) {
    XEUtils[name] = isFunction(fn) && fn._c !== false ? function () {
      var result = fn.apply(XEUtils.$context, arguments)
      XEUtils.$context = null
      return result
    } : fn
  })
  return XEUtils
}

function setup (options) {
  assign(setupDefaults, options)
}

function XEUtils () {}

XEUtils.mixin = mixin
XEUtils.setup = setup

module.exports = XEUtils
