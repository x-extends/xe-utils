var helperCreateTreeFunc = require('./helperCreateTreeFunc')

var assign = require('./assign')

function searchTreeItem (matchParent, parent, obj, iterate, context, path, nodes, parseChildren, opts) {
  var rests = []
  if (!obj) {
    return rests
  }
  var len = obj.length
  if (!len) {
    return rests
  }

  var hasOriginal = opts.original
  var sourceData = opts.data
  var mapChildren = opts.mapChildren || parseChildren
  var isEvery = opts.isEvery
  var hasContext = context != null
  var count = 0
  var index, item, paths, items, isMatch, childData, rest, children

  for (index = 0; index < len; index++) {
    item = obj[index]
    paths = path.concat('' + index)
    items = nodes.concat(item)

    if (hasContext) {
      isMatch = (matchParent && !isEvery) || iterate.call(context, item, index, obj, paths, parent, items)
    } else {
      isMatch = (matchParent && !isEvery) || iterate(item, index, obj, paths, parent, items)
    }

    childData = parseChildren ? item[parseChildren] : undefined

    if (isMatch || childData) {
      if (hasOriginal) {
        rest = item
      } else {
        rest = assign({}, item)
        if (sourceData) {
          rest[sourceData] = item
        }
      }
      children = searchTreeItem(isMatch, item, childData, iterate, context, paths, items, parseChildren, opts)
      rest[mapChildren] = children
      if (isMatch || children.length) {
        rests[count++] = rest
      }
    }
  }
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
