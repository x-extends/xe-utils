/**
  * 判断是否TypeError对象
  *
  * @param {Object} obj 对象
  * @return {Boolean}
  */
function isTypeError (obj) {
  return obj ? obj.constructor === TypeError : false
}

module.exports = isTypeError
