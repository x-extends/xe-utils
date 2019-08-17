var staticStrUndefined = require('./staticStrUndefined')

/* eslint-disable valid-typeof */
var staticDocument = typeof document === staticStrUndefined ? 0 : document

module.exports = staticDocument
