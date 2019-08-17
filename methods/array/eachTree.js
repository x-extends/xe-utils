var helperCreateTreeFunc = require('./helperCreateTreeFunc')
var each = require('../base/each')

function eachTreeItem (parent, obj, iterate, context, path, parseChildren, opts) {
  var paths
  each(obj, function (item, index) {
    paths = path.concat(['' + index])
    iterate.call(context, item, index, obj, paths, parent)
    if (item && parseChildren) {
      paths.push(parseChildren)
      eachTreeItem(item, item[parseChildren], iterate, context, paths, parseChildren, opts)
    }
  })
}

/**
  * 从树结构中遍历数据的键、值、路径
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iterate(item, index, items, path, parent) 回调
  * @param {Object} options {children: 'children', mapChildren: 'children}
  * @param {Object} context 上下文
  */
var eachTree = helperCreateTreeFunc(eachTreeItem)

module.exports = eachTree
