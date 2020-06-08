var helperCreateTreeFunc = require('./helperCreateTreeFunc')

function findTreeItem (parent, obj, iterate, context, path, node, parseChildren, opts) {
  if (obj) {
    var item, index, len, paths, nodes, match
    for (index = 0, len = obj.length; index < len; index++) {
      item = obj[index]
      paths = path.concat(['' + index])
      nodes = node.concat([item])
      if (iterate.call(context, item, index, obj, paths, parent, nodes)) {
        return { index: index, item: item, path: paths, items: obj, parent: parent, nodes: nodes }
      }
      if (parseChildren && item) {
        match = findTreeItem(item, item[parseChildren], iterate, context, paths.concat([parseChildren]), nodes, parseChildren, opts)
        if (match) {
          return match
        }
      }
    }
  }
}

/**
  * 从树结构中查找匹配第一条数据的键、值、路径
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iterate(item, index, items, path, parent, nodes) 回调
  * @param {Object} options {children: 'children'}
  * @param {Object} context 上下文
  * @return {Object} { item, index, items, path, parent, nodes }
  */
var findTree = helperCreateTreeFunc(findTreeItem)

module.exports = findTree
