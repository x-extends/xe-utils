'use strict'

var setupDefaults = require('./setupDefaults')

var arrayEach = require('./array/arrayEach')
var each = require('./base/each')
var isFunction = require('./base/isFunction')

var assign = require('./object/assign')

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

function setup (options) {
  return assign(setupDefaults, options)
}

function XEUtils () {}

XEUtils.v = 'v2'
XEUtils.mixin = mixin
XEUtils.setup = setup

module.exports = XEUtils
