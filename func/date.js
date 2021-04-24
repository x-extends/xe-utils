'use strict'

var getWhatYear = require('./getWhatYear')
var getWhatQuarter = require('./getWhatQuarter')
var getWhatMonth = require('./getWhatMonth')
var getWhatDay = require('./getWhatDay')
var toStringDate = require('./toStringDate')
var toDateString = require('./toDateString')
var now = require('./now')
var timestamp = require('./timestamp')
var isValidDate = require('./isValidDate')
var isDateSame = require('./isDateSame')
var getWhatWeek = require('./getWhatWeek')
var getYearDay = require('./getYearDay')
var getYearWeek = require('./getYearWeek')
var getMonthWeek = require('./getMonthWeek')
var getDayOfYear = require('./getDayOfYear')
var getDayOfMonth = require('./getDayOfMonth')
var getDateDiff = require('./getDateDiff')

var dateExports = {
  now: now,
  timestamp: timestamp,
  isValidDate: isValidDate,
  isDateSame: isDateSame,
  toStringDate: toStringDate,
  toDateString: toDateString,
  getWhatYear: getWhatYear,
  getWhatQuarter: getWhatQuarter,
  getWhatMonth: getWhatMonth,
  getWhatWeek: getWhatWeek,
  getWhatDay: getWhatDay,
  getYearDay: getYearDay,
  getYearWeek: getYearWeek,
  getMonthWeek: getMonthWeek,
  getDayOfYear: getDayOfYear,
  getDayOfMonth: getDayOfMonth,
  getDateDiff: getDateDiff
}

module.exports = dateExports
