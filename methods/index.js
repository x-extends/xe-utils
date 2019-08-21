'use strict'

var XEUtils = require('./xe-utils')

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

XEUtils.mixin(
  assign(
    {},
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
)

module.exports = XEUtils
module.exports.default = XEUtils
