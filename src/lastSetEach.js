/**
 * Set迭代器,从最后开始迭代
 * @param collection Set
 * @param iterate 回调
 * @param context 上下文
 */
function lastSetEach(collection, iteratee, context) {
  var arr = Array.from(collection)
  for (var i = arr.length - 1; i >= 0; i--) {
    iteratee.call(context, arr[i], arr[i], collection)
  }
}

module.exports = lastSetEach
