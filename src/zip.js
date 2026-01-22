var unzip = require('./unzip')

/**
 * 将每个数组中相应位置的值合并在一起
 *
 * @param {Array*} array 数组
 */
function zip () {
  return unzip(arguments)
}

module.exports = zip
