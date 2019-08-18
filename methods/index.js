'use strict'

'use strict'

var setupDefaults = require('./setupDefaults')

var assign = require('./object/assign')
var each = require('./base/each')
var isFunction = require('./base/isFunction')

var baseExports = require('./base')
var arrayExports = require('./array')
var objectExports = require('./object')
var browseExports = require('./browse')
var cookieExports = require('./cookie')
var dateExports = require('./date')
var locatExports = require('./locat')
var numberExports = require('./number')
var stringExports = require('./string')
var functionExports = require('./function')
var methodExports = {}

assign(
  methodExports,
  baseExports,
  arrayExports,
  objectExports,
  browseExports,
  cookieExports,
  dateExports,
  locatExports,
  numberExports,
  stringExports,
  functionExports
)

function XEUtils () {}

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

mixin(methodExports)

XEUtils.mixin = mixin
XEUtils.setup = setup

module.exports = XEUtils
module.exports.default = XEUtils
