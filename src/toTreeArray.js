var setupDefaults = require('./setupDefaults')

var assign = require('./assign')

function unTreeList (result, parentItem, array, optKey, optParentKey, optChildren, optData, optUpdated, optClear) {
  for (var i = 0, len = array.length; i < len; i++) {
    var item = array[i]
    var childList = item[optChildren]
    if (optData) {
      item = item[optData]
    }
    if (optUpdated) {
      item[optParentKey] = parentItem ? parentItem[optKey] : null
    }
    result.push(item)
    if (childList && childList.length) {
      unTreeList(result, item, childList, optKey, optParentKey, optChildren, optData, optUpdated, optClear)
    }
    if (optClear) {
      // delete 会让对象退化为字典模式，但语义要求删除，保留
      delete item[optChildren]
    }
  }
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
  var opts = assign({}, setupDefaults.treeOptions, options)
  if (!array) {
    return []
  }
  return unTreeList(
    [],
    null,
    array,
    opts.key,
    opts.parentKey,
    opts.children,
    opts.data,
    opts.updated !== false,
    opts.clear
  )
}

module.exports = toTreeArray
