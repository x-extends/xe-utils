var assign = require('./assign')
var objectEach = require('./objectEach')
var lastObjectEach = require('./lastObjectEach')
var objectMap = require('./objectMap')

var objectExports = {
  extend: assign,
  assign: assign,
  objectMap: objectMap,
  objectEach: objectEach,
  lastObjectEach: lastObjectEach
}

module.exports = objectExports
