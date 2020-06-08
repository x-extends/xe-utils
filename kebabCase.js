var toValString = require('./toString')

/**
  * 将带驼峰字符串转成字符串,例如： projectName 转为 project-name
  *
  * @param {String} str 字符串
  * @return {String}
  */
function kebabCase (str) {
  return toValString(str).replace(/([A-Z])/g, function (text, u) {
    return '-' + u.toLowerCase()
  })
}

module.exports = kebabCase
