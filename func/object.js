'use strict'

var assign = require('./assign')
var objectEach = require('./objectEach')
var lastObjectEach = require('./lastObjectEach')
var objectMap = require('./objectMap')
var merge = require('./merge')

var objectExports = {
  assign: assign,
  objectMap: objectMap,
  objectEach: objectEach,
  lastObjectEach: lastObjectEach,
  merge: merge
}

module.exports = objectExports
