var helperStringSubstring = require('./helperStringSubstring')

function helperNumberOffsetPoint (str, offsetIndex) {
  return helperStringSubstring(str, 0, offsetIndex) + '.' + helperStringSubstring(str, offsetIndex, str.length)
}

module.exports = helperNumberOffsetPoint
