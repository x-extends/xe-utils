var helperCreateTreeFunc = require('./helperCreateTreeFunc')

function findTreeItem (parent, obj, iterate, context, path, parseChildren, opts) {
  if (obj) {
    var item, index, len, paths, match
    for (index = 0, len = obj.length; index < len; index++) {
      item = obj[index]
      paths = path.concat(['' + index])
      if (iterate.call(context, item, index, obj, paths, parent)) {
        return { index: index, item: item, path: paths, items: obj, parent: parent }
      }
      if (parseChildren && item) {
        match = findTreeItem(item, item[parseChildren], iterate, context, paths.concat([parseChildren]), parseChildren, opts)
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
  * @param {Function} iterate(item, index, items, path, parent) 回调
  * @param {Object} options {children: 'children'}
  * @param {Object} context 上下文
  * @return {Object} { item, index, items, path }
  */
var findTree = helperCreateTreeFunc(findTreeItem)

module.exports = findTree
