var setupDefaults = require('./setupDefaults')

var map = require('./map')
var orderBy = require('./orderBy')

var clone = require('./clone')
var includes = require('./includes')
var each = require('./each')
var remove = require('./remove')

var assign = require('./assign')

function strictTree (array, optChildren) {
  each(array, function (item) {
    if (item.children && !item.children.length) {
      remove(item, optChildren)
    }
  })
}

/**
  * 将一个带层级的数据列表转成树结构
  *
  * @param {Array} array 数组
  * @param {Object} options {strict: false, parentKey: 'parentId', key: 'id', children: 'children', mapChildren: 'children', data: 'data'}
  * @return {Array}
  */
function toArrayTree (array, options) {
  var opts = assign({}, setupDefaults.treeOptions, options)
  var optStrict = opts.strict
  var optKey = opts.key
  var optParentKey = opts.parentKey
  var optChildren = opts.children
  var optMapChildren = opts.mapChildren
  var optSortKey = opts.sortKey
  var optReverse = opts.reverse
  var optData = opts.data
  var result = []
  var treeMap = {}
  var idsMap = {}
  var id, treeData, parentId

  if (optSortKey) {
    array = orderBy(clone(array), optSortKey)
    if (optReverse) {
      array = array.reverse()
    }
  }

  each(array, function (item) {
    id = item[optKey]
    idsMap[id] = true
  })

  each(array, function (item) {
    id = item[optKey]

    if (optData) {
      treeData = {}
      treeData[optData] = item
    } else {
      treeData = item
    }

    parentId = item[optParentKey]
    treeMap[id] = treeMap[id] || []
    treeMap[parentId] = treeMap[parentId] || []
    treeMap[parentId].push(treeData)
    treeData[optKey] = id
    treeData[optParentKey] = parentId
    treeData[optChildren] = treeMap[id]
    if (optMapChildren) {
      treeData[optMapChildren] = treeMap[id]
    }

    if (!optStrict || (optStrict && !parentId)) {
      if (!idsMap[parentId]) {
        result.push(treeData)
      }
    }
  })

  if (optStrict) {
    strictTree(array, optChildren)
  }

  return result
}

module.exports = toArrayTree
