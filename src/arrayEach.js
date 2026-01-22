function arrayEach (list, iterate, context) {
  if (list) {
    if (list.forEach) {
      list.forEach(iterate, context)
    } else {
      for (var index = 0, len = list.length; index < len; index++) {
        iterate.call(context, list[index], index, list)
      }
    }
  }
}

module.exports = arrayEach
