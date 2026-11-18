var helperStringReplace = require('./helperStringReplace')

var toValueString = require('./toValueString')
var keys = require('./keys')

function helperFormatEscaper (dataMap) {
  var replaceRegexp = new RegExp('(?:' + keys(dataMap).join('|') + ')', 'g')
  return function (str) {
    return helperStringReplace(toValueString(str), replaceRegexp, function (match) {
      return dataMap[match]
    })
  }
}

module.exports = helperFormatEscaper
