function helperGetHGSKeys (property) {
  // 以最快的方式判断数组，可忽略准确性
  return property ? (property.splice && property.join ? property : ('' + property).replace(/(\[\d+\])\.?/g,'$1.').replace(/\.$/, '').split('.')) : []
}

module.exports = helperGetHGSKeys
