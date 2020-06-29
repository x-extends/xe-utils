/**
  * 判断对象自身属性中是否具有指定的属性
  *
  * @param {Object} obj 对象
  * @param {String/Number} key 键值
  * @return {Boolean}
  */
function hasOwnProp (obj, key) {
  return obj && obj.hasOwnProperty ? obj.hasOwnProperty(key) : false
}

module.exports = hasOwnProp
