var staticLocation = require('./staticLocation')

var helperGetLocatOrigin = require('./helperGetLocatOrigin')

var lastIndexOf = require('./lastIndexOf')

function getBaseURL () {
  if (staticLocation) {
    var pathname = staticLocation.pathname
    var lastIndex = lastIndexOf(pathname, '/') + 1
    return helperGetLocatOrigin() + (lastIndex === pathname.length ? pathname : pathname.substring(0, lastIndex))
  }
  return ''
}

module.exports = getBaseURL
