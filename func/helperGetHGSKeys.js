function helperGetHGSKeys (property) {
  // 以最快的方式判断数组，可忽略准确性
  return property ? (property.splice && property.join ? property : ('' + property).split('.')) : []
}

module.exports = helperGetHGSKeys
