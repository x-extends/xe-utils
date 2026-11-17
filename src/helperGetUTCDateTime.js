function helperGetUTCDateTime (date) {
  return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
}

module.exports = helperGetUTCDateTime
