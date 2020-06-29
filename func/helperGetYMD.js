var helperGetDateFullYear = require('./helperGetDateFullYear')
var helperGetDateMonth = require('./helperGetDateMonth')

function helperGetYMD (date) {
  return new Date(helperGetDateFullYear(date), helperGetDateMonth(date), date.getDate())
}

module.exports = helperGetYMD
