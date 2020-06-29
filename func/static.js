'use strict'

var staticStrUndefined = require('./staticStrUndefined')
var staticStrLast = require('./staticStrLast')
var staticStrFirst = require('./staticStrFirst')
var staticDayTime = require('./staticDayTime')
var staticWeekTime = require('./staticWeekTime')
var staticLocation = require('./staticLocation')
var staticWindow = require('./staticWindow')
var staticDocument = require('./staticDocument')
var staticEncodeURIComponent = require('./staticEncodeURIComponent')
var staticDecodeURIComponent = require('./staticDecodeURIComponent')
var staticObjectToString = require('./staticObjectToString')
var staticParseInt = require('./staticParseInt')
var staticEscapeMap = require('./staticEscapeMap')
var staticHGKeyRE = require('./staticHGKeyRE')

var staticExports = {
  staticStrUndefined: staticStrUndefined,
  staticStrLast: staticStrLast,
  staticStrFirst: staticStrFirst,
  staticDayTime: staticDayTime,
  staticWeekTime: staticWeekTime,
  staticLocation: staticLocation,
  staticWindow: staticWindow,
  staticDocument: staticDocument,
  staticEncodeURIComponent: staticEncodeURIComponent,
  staticDecodeURIComponent: staticDecodeURIComponent,
  staticObjectToString: staticObjectToString,
  staticParseInt: staticParseInt,
  staticEscapeMap: staticEscapeMap,
  staticHGKeyRE: staticHGKeyRE
}

module.exports = staticExports
