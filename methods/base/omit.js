var helperCreatePickOmit = require('./helperCreatePickOmit')

/**
 * 根据 key 排除指定的属性值，返回一个新的对象
 *
 * @param {Object} obj 对象
 * @param {String/Array} key 键数组
 * @return {Object}
 */
var omit = helperCreatePickOmit(0, 1)

module.exports = omit
