var helperDateGetFullYear = require('./helperDateGetFullYear')
var helperDateGetMonth = require('./helperDateGetMonth')
var helperDateGetDate = require('./helperDateGetDate')

function helperGetUTCDateTime (date) {
  return Date.UTC(helperDateGetFullYear(date), helperDateGetMonth(date), helperDateGetDate(date))
}

module.exports = helperGetUTCDateTime
