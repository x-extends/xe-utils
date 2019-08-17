'use strict'

'use strict'

var setupDefaults = require('./setupDefaults')

var assign = require('./object/assign')

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
  return assign(XEUtils, methods)
}

function setup (options) {
  assign(setupDefaults, options)
}

mixin(methodExports)

XEUtils.mixin = mixin
XEUtils.setup = setup

module.exports = XEUtils
module.exports.default = XEUtils
