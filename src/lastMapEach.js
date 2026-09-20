/**
 * Map迭代器,从最后开始迭代
 * @param collection Map
 * @param iterate 回调
 * @param context 上下文
 */
function lastMapEach(collection, iteratee, context) {
  var entries = Array.from(collection)
  for (var i = entries.length - 1; i >= 0; i--) {
    var key = entries[i][0]
    var value = entries[i][1]
    iteratee.call(context, value, key, collection)
  }
}

module.exports = lastMapEach
