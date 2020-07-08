'use strict'

var noop = require('./noop')
var property = require('./property')
var bind = require('./bind')
var once = require('./once')
var after = require('./after')
var before = require('./before')
var throttle = require('./throttle')
var debounce = require('./debounce')
var delay = require('./delay')

var functionExports = {
  noop: noop,
  property: property,
  bind: bind,
  once: once,
  after: after,
  before: before,
  throttle: throttle,
  debounce: debounce,
  delay: delay
}

module.exports = functionExports
