function helperGetUTCDateTime (dates) {
  return Date.UTC(dates[0], dates[1], dates[2], dates[3], dates[4], dates[5], dates[6])
}

module.exports = helperGetUTCDateTime
