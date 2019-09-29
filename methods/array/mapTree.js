var helperCreateTreeFunc = require('./helperCreateTreeFunc')

var map = require('./map')

function mapTreeItem (parent, obj, iterate, context, path, node, parseChildren, opts) {
  var paths, nodes, rest
  var mapChildren = opts.mapChildren || parseChildren
  return map(obj, function (item, index) {
    paths = path.concat(['' + index])
    nodes = node.concat([item])
    rest = iterate.call(context, item, index, obj, paths, parent, nodes)
    if (rest && item && parseChildren && item[parseChildren]) {
      rest[mapChildren] = mapTreeItem(item, item[parseChildren], iterate, context, paths, nodes, parseChildren, opts)
    }
    return rest
  })
}

/**
  * 从树结构中指定方法后的返回值组成的新数组
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iterate(item, index, items, path, parent, nodes) 回调
  * @param {Object} options {children: 'children'}
  * @param {Object} context 上下文
  * @return {Object/Array}
  */
var mapTree = helperCreateTreeFunc(mapTreeItem)

module.exports = mapTree
