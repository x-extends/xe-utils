var helperCreateTreeFunc = require('./helperCreateTreeFunc')

var arrayEach = require('./arrayEach')

var assign = require('../object/assign')

function searchTreeItem (parentAllow, parent, obj, iterate, context, path, node, parseChildren, opts) {
  var paths, nodes, rest, isAllow, hasChild
  var rests = []
  var hasOriginal = opts.original
  var mapChildren = opts.mapChildren || parseChildren
  arrayEach(obj, function (item, index) {
    paths = path.concat(['' + index])
    nodes = node.concat([item])
    isAllow = parentAllow || iterate.call(context, item, index, obj, paths, parent, nodes)
    hasChild = parseChildren && item[parseChildren]
    if (isAllow || hasChild) {
      rest = hasOriginal ? item : assign({}, item)
    }
    if (isAllow || hasChild) {
      rest[mapChildren] = searchTreeItem(isAllow, item, item[parseChildren], iterate, context, paths, nodes, parseChildren, opts)
      if (isAllow || rest[mapChildren].length) {
        rests.push(rest)
      }
    } else if (isAllow) {
      rests.push(rest)
    }
  })
  return rests
}

/**
  * 从树结构中根据回调查找数据
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iterate(item, index, items, path, parent, nodes) 回调
  * @param {Object} options {children: 'children'}
  * @param {Object} context 上下文
  * @return {Array}
  */
var searchTree = helperCreateTreeFunc(function (parent, obj, iterate, context, path, nodes, parseChildren, opts) {
  return searchTreeItem(0, parent, obj, iterate, context, path, nodes, parseChildren, opts)
})

module.exports = searchTree
