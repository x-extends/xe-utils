var setupDefaults = require('./setupDefaults')
var helperLog = require('./helperLog')
var helperCreateEmptyObj = require('./helperCreateEmptyObj')

var orderBy = require('./orderBy')

var eqNull = require('./eqNull')
var isArray = require('./isArray')

var assign = require('./assign')

function strictTree (array, optChildren) {
  for (var i = 0, len = array.length; i < len; i++) {
    var item = array[i]
    var children = item[optChildren]
    if (children && !children.length) {
      delete item[optChildren]
    }
  }
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
  var optRootValues = opts.rootValues
  var optRootParentVal = opts.rootParentValue
  var optSortKey = opts.sortKey
  var optReverse = opts.reverse
  var optData = opts.data
  var result = []
  var defTreeMaps = helperCreateEmptyObj()
  var empTreeMaps = helperCreateEmptyObj()
  var idDefMaps = helperCreateEmptyObj()
  var idEmpMaps = helperCreateEmptyObj()
  var rootIdMaps = helperCreateEmptyObj()
  var isDefaultRootParentVal = optRootParentVal === undefined
  var hasRootValues = optRootValues && optRootValues.length > 0
  var mapChildrenDiff = optMapChildren && optMapChildren !== optChildren
  var i, len, item, id, treeData, parentId, idMaps, isIdNull, isPdNull, idTreeMaps, pdTreeMaps

  if (optSortKey) {
    array = orderBy(array, optSortKey)
    if (optReverse) {
      array = array.reverse()
    }
  }

  if (!isArray(array)) {
    return result
  }

  len = array.length

  if (hasRootValues) {
    for (i = 0; i < optRootValues.length; i++) {
      rootIdMaps[optRootValues[i]] = 1
    }
  }

  for (i = 0; i < len; i++) {
    item = array[i]
    id = item[optKey]
    idMaps = eqNull(id) ? idEmpMaps : idDefMaps
    if (idMaps[id]) {
      helperLog('warn', 'Duplicate primary key=' + id)
    }
    idMaps[id] = true
  }

  for (i = 0; i < len; i++) {
    item = array[i]
    id = item[optKey]
    isIdNull = eqNull(id)

    if (optData) {
      treeData = {}
      treeData[optData] = item
    } else {
      treeData = item
    }

    parentId = item[optParentKey]
    isPdNull = eqNull(parentId)

    idTreeMaps = isIdNull ? empTreeMaps : defTreeMaps

    idTreeMaps[id] = idTreeMaps[id] || []
    treeData[optKey] = id
    treeData[optParentKey] = parentId

    if (id === parentId) {
      parentId = null
      helperLog('warn', 'Error infinite Loop. key=' + id + ' parentKey=' + id)
    }

    pdTreeMaps = isPdNull ? empTreeMaps : defTreeMaps
    idMaps = isPdNull ? idEmpMaps : idDefMaps

    pdTreeMaps[parentId] = pdTreeMaps[parentId] || []
    pdTreeMaps[parentId].push(treeData)
    treeData[optChildren] = idTreeMaps[id]
    if (mapChildrenDiff) {
      treeData[optMapChildren] = idTreeMaps[id]
    }

    if (hasRootValues) {
      if (rootIdMaps[id]) {
        result.push(treeData)
      }
    } else if (isDefaultRootParentVal) {
      if (!optStrict || (optStrict && isPdNull)) {
        if (!idMaps[parentId]) {
          result.push(treeData)
        }
      }
    } else {
      if (parentId === optRootParentVal) {
        result.push(treeData)
      }
    }
  }

  if (optStrict) {
    strictTree(array, optChildren)
  }

  return result
}

module.exports = toArrayTree
