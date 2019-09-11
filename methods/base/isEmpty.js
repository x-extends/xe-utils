/**
  * 判断是否为空对象
  *
  * @param {Object} obj 对象
  * @return {Boolean}
  */
function isEmpty (obj) {
  for (var key in obj) {
    return false
  }
  return true
}

module.exports = isEmpty
