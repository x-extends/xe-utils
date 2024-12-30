var setupDefaults = require('./setupDefaults')

var arrayEach = require('./arrayEach')

var assign = require('./assign')

function unTreeList (result, parentItem, array, opts) {
  var optKey = opts.key
  var optParentKey = opts.parentKey
  var optChildren = opts.children
  var optData = opts.data
  var optUpdated = opts.updated
  var optClear = opts.clear
  arrayEach(array, function (item) {
    var childList = item[optChildren]
    if (optData) {
      item = item[optData]
    }
    if (optUpdated !== false) {
      item[optParentKey] = parentItem ? parentItem[optKey] : null
    }
    result.push(item)
    if (childList && childList.length) {
      unTreeList(result, item, childList, opts)
    }
    if (optClear) {
      delete item[optChildren]
    }
  })
  return result
}

/**
  * 将一个树结构转成数组列表
  *
  * @param {Array} array 数组
  * @param {Object} options { children: 'children', data: 'data', clear: false }
  * @return {Array}
  */
function toTreeArray (array, options) {
  return unTreeList([], null, array, assign({}, setupDefaults.treeOptions, options))
}

module.exports = toTreeArray
