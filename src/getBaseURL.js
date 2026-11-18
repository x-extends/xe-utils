var staticLocation = require('./staticLocation')

var helperGetLocatOrigin = require('./helperGetLocatOrigin')
var helperStringSubstring = require('./helperStringSubstring')

var lastIndexOf = require('./lastIndexOf')

function getBaseURL () {
  if (staticLocation) {
    var pathname = staticLocation.pathname
    var lastIndex = lastIndexOf(pathname, '/') + 1
    return helperGetLocatOrigin() + (lastIndex === pathname.length ? pathname : helperStringSubstring(pathname, 0, lastIndex))
  }
  return ''
}

module.exports = getBaseURL
