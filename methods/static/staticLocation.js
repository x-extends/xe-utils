var staticStrUndefined = require('./staticStrUndefined')

/* eslint-disable valid-typeof */
var staticLocation = typeof location === staticStrUndefined ? 0 : location

module.exports = staticLocation
