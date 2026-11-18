var helperCreateTreeFunc = require('./helperCreateTreeFunc')
var helperArraySlice = require('./helperArraySlice')

var each = require('./each')

function eachTreeItem (parent, obj, iterate, context, path, node, parseChildren, opts) {
  if (!obj) {
    return
  }
  var hasContext = context != null

  each(obj, function (item, index) {
    var paths = helperArraySlice(path, 0)
    paths.push('' + index)
    var nodes = helperArraySlice(node, 0)
    nodes.push(item)

    if (hasContext) {
      iterate.call(context, item, index, obj, paths, parent, nodes)
    } else {
      iterate(item, index, obj, paths, parent, nodes)
    }

    if (item) {
      var children = item[parseChildren]
      if (children) {
        paths.push(parseChildren)
        eachTreeItem(item, children, iterate, context, paths, nodes, parseChildren, opts)
      }
    }
  })
}

var eachTree = helperCreateTreeFunc(eachTreeItem)

module.exports = eachTree
