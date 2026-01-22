var hasOwnProp = require('./hasOwnProp')

/**
  * 判断对象是否包含该值,成功返回true否则false
  *
  * @param {Object} obj 对象
  * @param {Object} val 值
  * @return {Boolean}
  */
function includes (obj, val) {
  if (obj) {
    if (obj.includes) {
      return obj.includes(val)
    }
    for (var key in obj) {
      if (hasOwnProp(obj, key)) {
        if (val === obj[key]) {
          return true
        }
      }
    }
  }
  return false
}

module.exports = includes
