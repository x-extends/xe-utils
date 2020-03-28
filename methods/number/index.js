'use strict'

var random = require('./random')
var max = require('./max')
var min = require('./min')
var commafy = require('./commafy')
var toFixedString = require('./toFixedString')
var toFixedNumber = require('./toFixedNumber')
var toInteger = require('./toInteger')
var toNumber = require('./toNumber')
var add = require('./add')
var subtract = require('./subtract')
var multiply = require('./multiply')
var divide = require('./divide')
var sum = require('./sum')
var mean = require('./mean')

var numberExports = {
  random: random,
  min: min,
  max: max,
  commafy: commafy,
  toFixedString: toFixedString,
  toFixedNumber: toFixedNumber,
  toNumber: toNumber,
  toInteger: toInteger,
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
  sum,
  mean
}

module.exports = numberExports
