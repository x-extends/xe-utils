var assign = require('./assign')
var objectEach = require('./objectEach')
var lastObjectEach = require('./lastObjectEach')
var objectMap = require('./objectMap')
var mapEach = require('./mapEach')
var lastMapEach = require('./lastMapEach')
var setEach = require('./setEach')
var lastSetEach = require('./lastSetEach')
var merge = require('./merge')

var objectExports = {
  assign: assign,
  objectEach: objectEach,
  lastObjectEach: lastObjectEach,
  objectMap: objectMap,
  mapEach: mapEach,
  lastMapEach: lastMapEach,
  setEach: setEach,
  lastSetEach: lastSetEach,
  merge: merge
}

module.exports = objectExports
