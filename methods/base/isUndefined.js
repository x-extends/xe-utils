var staticStrUndefined = require('../static/staticStrUndefined')

var helperCreateInTypeof = require('./helperCreateInTypeof')

/**
  * 判断是否Undefined
  *
  * @param {Object} obj 对象
  * @return {Boolean}
  */
var isUndefined = helperCreateInTypeof(staticStrUndefined)

module.exports = isUndefined
