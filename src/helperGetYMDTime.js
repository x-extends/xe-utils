var helperDateGetTime = require('./helperDateGetTime')
var helperDateGetFullYear = require('./helperDateGetFullYear')
var helperDateGetMonth = require('./helperDateGetMonth')
var helperDateGetDate = require('./helperDateGetDate')

function helperGetYMD (date) {
  return new Date(helperDateGetFullYear(date), helperDateGetMonth(date), helperDateGetDate(date))
}

function helperGetYMDTime (date) {
  return helperDateGetTime(helperGetYMD(date))
}

module.exports = helperGetYMDTime
