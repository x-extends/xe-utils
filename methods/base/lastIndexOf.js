var helperCreateIndexOf = require('./helperCreateIndexOf')

var arrayLastIndexOf = require('../array/arrayLastIndexOf')

/**
  * 从最后开始的索引值,返回对象第一个索引值
  *
  * @param {Object} array 对象
  * @param {Object} val 值
  * @return {Number}
  */
var lastIndexOf = helperCreateIndexOf('lastIndexOf', arrayLastIndexOf)

module.exports = lastIndexOf
