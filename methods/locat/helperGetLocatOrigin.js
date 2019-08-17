var staticLocation = require('../static/staticLocation')

function helperGetLocatOrigin () {
  return staticLocation ? (staticLocation.origin || (staticLocation.protocol + '//' + staticLocation.host)) : ''
}

module.exports = helperGetLocatOrigin
