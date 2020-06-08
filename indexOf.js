var helperCreateIndexOf = require('./helperCreateIndexOf')

var arrayIndexOf = require('./arrayIndexOf')

/**
  * 返回对象第一个索引值
  *
  * @param {Object} obj 对象
  * @param {Object} val 值
  * @return {Number}
  */
var indexOf = helperCreateIndexOf('indexOf', arrayIndexOf)

module.exports = indexOf
