'use strict'

var random = require('./random')
var max = require('./max')
var min = require('./min')
var commafy = require('./commafy')
var toFixedString = require('./toFixedString')
var toFixedNumber = require('./toFixedNumber')
var toInteger = require('./toInteger')
var toNumber = require('./toNumber')

var numberExports = {
  random: random,
  min: min,
  max: max,
  commafy: commafy,
  toFixedString: toFixedString,
  toFixedNumber: toFixedNumber,
  toNumber: toNumber,
  toInteger: toInteger
}

module.exports = numberExports
