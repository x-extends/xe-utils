/**
  * Map迭代器
  *
  * @param {Object} obj Map
  * @param {Function} iterate(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Object}
  */
function mapEach (obj, iterate, context) {
  if (obj) {
    obj.forEach(function (v, k, o) {
      iterate.call(context || obj, v, k, o)
    })
  }
  return obj
}

module.exports = mapEach
