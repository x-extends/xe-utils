var lastArrayEach = require('../array/lastArrayEach')
var keys = require('../base/keys')

function lastObjectEach (obj, iterate, context) {
  lastArrayEach(keys(obj), function (key) {
    iterate.call(context, obj[key], key, obj)
  })
}

module.exports = lastObjectEach
