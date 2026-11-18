var setupDefaults = require('./setupDefaults')

function helperLog (type, msg) {
  const onError = setupDefaults.onError
  if (onError) {
    return onError({ type: type, msg: msg })
  }
  return (console[type] || console.log)(msg)
}

module.exports = helperLog
