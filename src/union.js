var uniq = require('./uniq')
var toArray = require('./toArray')

/**
  * 将多个数的值返回唯一的并集数组
  *
  * @param {...Array} 数组
  * @return {Array}
  */
function union () {
  var args = arguments
  var len = args.length
  var result = []
  var index = 0
  var item
  for (; index < len; index++) {
    item = toArray(args[index])
    for (var j = 0, jl = item.length; j < jl; j++) {
      result[result.length] = item[j]
    }
  }
  return uniq(result)
}

module.exports = union
