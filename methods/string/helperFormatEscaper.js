var toString = require('./toString')
var keys = require('../base/keys')

function helperFormatEscaper (dataMap) {
  var replaceRegexp = new RegExp('(?:' + keys(dataMap).join('|') + ')', 'g')
  return function (str) {
    return toString(str).replace(replaceRegexp, function (match) {
      return dataMap[match]
    })
  }
}

module.exports = helperFormatEscaper
