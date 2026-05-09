var setupDefaults = require('./setupDefaults')
var helperLog = require('./helperLog')

var orderBy = require('./orderBy')

var clone = require('./clone')
var eqNull = require('./eqNull')
var each = require('./each')
var remove = require('./remove')

var assign = require('./assign')

function strictTree (array, optChildren) {
  each(array, function (item) {
    if (item[optChildren] && !item[optChildren].length) {
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
  var optRootValues = opts.rootValues
  var optRootParentVal = opts.rootParentValue
  var optSortKey = opts.sortKey
  var optReverse = opts.reverse
  var optData = opts.data
  var result = []
  var defTreeMaps = {}
  var empTreeMaps = {}
  var idDefMaps = {}
  var idEmpMaps = {}
  var rootIdMaps = {}
  var isDefaultRootParentVal = optRootParentVal === undefined
  var id, treeData, parentId, idMaps, isIdNull, isPdNull, idTreeMaps, pdTreeMaps

  if (optSortKey) {
    array = orderBy(clone(array), optSortKey)
    if (optReverse) {
      array = array.reverse()
    }
  }


  if (optRootValues && optRootValues.length) {
    each(optRootValues, function (v) {
      rootIdMaps[v] = 1
    })
  }

  each(array, function (item) {
    id = item[optKey]
    idMaps = eqNull(id) ? idEmpMaps : idDefMaps
    if (idMaps[id]) {
      helperLog('warn', 'Duplicate primary key=' + id)
    }
    idMaps[id] = true
  })

  each(array, function (item) {
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
    if (optMapChildren) {
      treeData[optMapChildren] = idTreeMaps[id]
    }

    if (optRootValues && optRootValues.length) {
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
  })

  if (optStrict) {
    strictTree(array, optChildren)
  }

  return result
}

module.exports = toArrayTree
