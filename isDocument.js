var staticDocument = require('./staticDocument')

/**
  * 判断是否Document对象
  *
  * @param {Object} obj 对象
  * @return {Boolean}
  */
function isDocument (obj) {
  return !!(obj && staticDocument && obj.nodeType === 9)
}

module.exports = isDocument
