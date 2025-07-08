function helperLog (type, msg) {
  return (console[type] || console.log)(msg)
}

module.exports = helperLog
