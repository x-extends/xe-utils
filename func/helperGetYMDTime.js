var helperGetDateTime = require('./helperGetDateTime')
var helperGetYMD = require('./helperGetYMD')

function helperGetYMDTime (date) {
  return helperGetDateTime(helperGetYMD(date))
}

module.exports = helperGetYMDTime
