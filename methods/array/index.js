'use strict'

var map = require('./map')
var some = require('./some')
var every = require('./every')
var includeArrays = require('./includeArrays')
var arrayEach = require('./arrayEach')
var lastArrayEach = require('./lastArrayEach')
var uniq = require('./uniq')
var union = require('./union')
var toArray = require('./toArray')
var sortBy = require('./sortBy')
var shuffle = require('./shuffle')
var sample = require('./sample')
var slice = require('./slice')
var filter = require('./filter')
var findKey = require('./findKey')
var includes = require('./includes')
var find = require('./find')
var findLast = require('./findLast')
var reduce = require('./reduce')
var copyWithin = require('./copyWithin')
var chunk = require('./chunk')
var zip = require('./zip')
var unzip = require('./unzip')
var zipObject = require('./zipObject')
var flatten = require('./flatten')
var pluck = require('./pluck')
var invoke = require('./invoke')
var invokeMap = require('./invokeMap')
var toArrayTree = require('./toArrayTree')
var toTreeArray = require('./toTreeArray')
var findTree = require('./findTree')
var eachTree = require('./eachTree')
var mapTree = require('./mapTree')
var filterTree = require('./filterTree')
var searchTree = require('./searchTree')
var arrayIndexOf = require('./arrayIndexOf')
var arrayLastIndexOf = require('./arrayLastIndexOf')

var arrayExports = {
  uniq: uniq,
  union: union,
  sortBy: sortBy,
  shuffle: shuffle,
  sample: sample,
  some: some,
  every: every,
  slice: slice,
  filter: filter,
  find: find,
  findLast: findLast,
  findKey: findKey,
  includes: includes,
  arrayIndexOf: arrayIndexOf,
  arrayLastIndexOf: arrayLastIndexOf,
  map: map,
  reduce: reduce,
  copyWithin: copyWithin,
  chunk: chunk,
  zip: zip,
  unzip: unzip,
  zipObject: zipObject,
  flatten: flatten,
  toArray: toArray,
  includeArrays: includeArrays,
  pluck: pluck,
  invoke: invoke,
  invokeMap: invokeMap,
  arrayEach: arrayEach,
  lastArrayEach: lastArrayEach,
  toArrayTree: toArrayTree,
  toTreeArray: toTreeArray,
  findTree: findTree,
  eachTree: eachTree,
  mapTree: mapTree,
  filterTree: filterTree,
  searchTree: searchTree
}

module.exports = arrayExports
