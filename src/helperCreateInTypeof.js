/* eslint-disable valid-typeof */
function helperCreateInTypeof (type) {
  return function (obj) {
    return typeof obj === type
  }
}

module.exports = helperCreateInTypeof
