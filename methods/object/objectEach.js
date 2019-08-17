var hasOwnProp = require('../base/hasOwnProp')

function objectEach (obj, iterate, context) {
  if (obj) {
    for (var key in obj) {
      if (hasOwnProp(obj, key)) {
        iterate.call(context || this, obj[key], key, obj)
      }
    }
  }
}

module.exports = objectEach
