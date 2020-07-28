'use strict'

var random = require('./random')
var max = require('./max')
var min = require('./min')
var commafy = require('./commafy')
var round = require('./round')
var ceil = require('./ceil')
var floor = require('./floor')
var toFixed = require('./toFixed')
var toInteger = require('./toInteger')
var toNumber = require('./toNumber')
var toNumberString = require('./toNumberString')
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
  round: round,
  ceil: ceil,
  floor: floor,
  toFixed: toFixed,
  toNumber: toNumber,
  toNumberString: toNumberString,
  toInteger: toInteger,
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
  sum,
  mean
}

module.exports = numberExports
