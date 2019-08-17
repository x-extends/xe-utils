var indexOf = require('../base/indexOf')

/**
  * 判断对象是否包含该值,成功返回true否则false
  *
  * @param {Object} obj 对象
  * @param {Object} val 值
  * @return {Boolean}
  */
function includes (obj, val) {
  return indexOf(obj, val) !== -1
}

module.exports = includes
