var eachTree = require('./eachTree')

/**
  * 从树结构中根据回调过滤数据
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iterate(item, index, items, path, parent) 回调
  * @param {Object} options {children: 'children'}
  * @param {Object} context 上下文
  * @return {Array}
  */
function filterTree (obj, iterate, options, context) {
  var result = []
  if (obj && iterate) {
    eachTree(obj, function (item, index, items, path, parent, nodes) {
      if (iterate.call(context, item, index, items, path, parent, nodes)) {
        result.push(item)
      }
    }, options)
  }
  return result
}

module.exports = filterTree
