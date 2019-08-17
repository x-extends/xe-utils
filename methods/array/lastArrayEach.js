function lastArrayEach (obj, iterate, context) {
  for (var len = obj.length - 1; len >= 0; len--) {
    iterate.call(context || this, obj[len], len, obj)
  }
}

module.exports = lastArrayEach
