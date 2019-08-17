function arrayEach (obj, iterate, context) {
  if (obj) {
    if (obj.forEach) {
      obj.forEach(iterate, context)
    } else {
      for (var index = 0, len = obj.length; index < len; index++) {
        iterate.call(context || this, obj[index], index, obj)
      }
    }
  }
}

module.exports = arrayEach
