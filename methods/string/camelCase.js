var toValString = require('././toString')

/**
  * 将带字符串转成驼峰字符串,例如： project-name 转为 projectName
  *
  * @param {String} str 字符串
  * @return {String}
  */
function camelCase (str) {
  return toValString(str).replace(/(-[a-zA-Z])/g, function (text, u) {
    return u.substring(1).toLocaleUpperCase()
  })
}

module.exports = camelCase
