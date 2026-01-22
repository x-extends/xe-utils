var staticLocation = require('./staticLocation')

function helperGetLocatOrigin () {
  return staticLocation ? (staticLocation.origin || (staticLocation.protocol + '//' + staticLocation.host)) : ''
}

module.exports = helperGetLocatOrigin
