var helperStringIndexOf = require('./helperStringIndexOf')

function arrayIndexOf (list, val) {
  if (list.indexOf) {
    return helperStringIndexOf(list, val)
  }
  for (var index = 0, len = list.length; index < len; index++) {
    if (val === list[index]) {
      return index
    }
  }
}

module.exports = arrayIndexOf
