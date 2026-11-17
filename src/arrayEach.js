function arrayEach (list, iterate, context) {
  if (list) {
    var index, len = list.length
    if (context != null) {
      for (index = 0; index < len; index++) {
        iterate.call(context, list[index], index, list)
      }
    } else {
      for (index = 0; index < len; index++) {
        iterate(list[index], index, list)
      }
    }
  }
}

module.exports = arrayEach
