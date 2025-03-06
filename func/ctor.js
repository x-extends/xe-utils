'use strict'

var setupDefaults = require('./setupDefaults')

var arrayEach = require('./arrayEach')
var each = require('./each')
var isFunction = require('./isFunction')

var assign = require('./assign')

var XEUtils = function () {}

function mixin () {
  arrayEach(arguments, function (methods) {
    each(methods, function (fn, name) {
      XEUtils[name] = isFunction(fn) ? function () {
        var result = fn.apply(XEUtils.$context, arguments)
        XEUtils.$context = null
        return result
      } : fn
    })
  })
}

function setConfig (options) {
  return assign(setupDefaults, options)
}

function getConfig () {
  return setupDefaults
}

var version = '@VERSION'

XEUtils.VERSION = version
XEUtils.version = version
XEUtils.mixin = mixin
XEUtils.setup = setConfig
XEUtils.setConfig = setConfig
XEUtils.getConfig = getConfig

module.exports = XEUtils
