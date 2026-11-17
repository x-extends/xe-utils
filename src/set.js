var helperCheckCopyKey = require('./helperCheckCopyKey')
var hasOwnProp = require('./hasOwnProp')

var staticParsePathNames = require('./staticParsePathNames')
var staticParsePathIdxs = require('./staticParsePathIdxs')
var helperParsePath = require('./helperParsePath')

function setIsPrototypePolluted (key) {
  return key === '__proto__' || key === 'constructor' || key === 'prototype'
}

/**
 * 设置对象属性上的值。如果属性不存在则创建它
 * @param {Object/Array} obj 对象
 * @param {String/Function} property 键、路径
 * @param {Object} value 值
 */
function set (obj, property, value) {
  if (!obj || !helperCheckCopyKey(property)) return obj

  // 快路径：已存在的简单属性直接赋值
  if ((obj[property] || hasOwnProp(obj, property)) && !setIsPrototypePolluted(property)) {
    obj[property] = value
    return obj
  }

  var len = helperParsePath(property)
  if (len === 0) {
    return obj
  }

  var cur = obj
  for (var i = 0; i < len; i++) {
    var isEnd = i === len - 1
    var key = staticParsePathNames[i]
    var idx = staticParsePathIdxs[i]
    // 下一段是纯下标 [n] 则建数组，否则建对象
    var nextIsIndex = !isEnd && staticParsePathNames[i + 1] === null
    var nextIdx = isEnd ? 0 : staticParsePathIdxs[i + 1]

    if (key === null) {
      // 纯下标段 [n]：原版无条件覆盖（不复用已存在值），容器类型由下一段决定
      var ra = isEnd ? value : (nextIsIndex ? new Array(nextIdx + 1) : {})
      cur[idx] = ra
      cur = ra
    } else if (idx === -1) {
      // 普通属性
      if (setIsPrototypePolluted(key)) continue
      if (cur[key]) {
        if (isEnd) cur[key] = value
        cur = cur[key]
      } else {
        var ro = isEnd ? value : (nextIsIndex ? new Array(nextIdx + 1) : {})
        cur[key] = ro
        cur = ro
      }
    } else {
      // 对象内数组元素 foo[n]
      var r = isEnd ? value : (nextIsIndex ? new Array(nextIdx + 1) : {})
      if (cur[key]) {
        if (isEnd) {
          cur[key][idx] = value
        } else if (cur[key][idx]) {
          cur = cur[key][idx]
          continue
        } else {
          cur[key][idx] = r
        }
      } else {
        cur[key] = new Array(idx + 1)
        cur[key][idx] = r
      }
      cur = r
    }
  }
  return obj
}

module.exports = set
