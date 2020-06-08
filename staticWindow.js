var staticStrUndefined = require('./staticStrUndefined')

/* eslint-disable valid-typeof */
var staticWindow = typeof window === staticStrUndefined ? 0 : window

module.exports = staticWindow
