var staticParsePathNames = require('./staticParsePathNames')
var staticParsePathIdxs = require('./staticParsePathIdxs')

var isString = require('./isString')

// 纯数字判定
function isDigits (s) {
  var l = s.length
  if (l === 0) {
    return false
  }
  for (var k = 0; k < l; k++) {
    var c = s.charCodeAt(k)
    if (c < 48 || c > 57){
       return false
    }
  }
  return true
}

function pushSeg (seg) {
  var l = seg.length
  if (l > 0 && seg.charCodeAt(l - 1) === 93 /* ] */) {
    var b = seg.lastIndexOf('[')
    if (b >= 0) {
      var idxStr = seg.slice(b + 1, l - 1)
      if (isDigits(idxStr)) {
        staticParsePathNames.push(b > 0 ? seg.slice(0, b) : null)
        staticParsePathIdxs.push(+idxStr)
        return
      }
    }
  }
  staticParsePathNames.push(seg)
  staticParsePathIdxs.push(-1)
}

// 清空复用数组并返回 0 段（表示非法/无匹配路径，让 has/get/set 落到未找到分支）
function resetNone () {
  staticParsePathNames.length = 0
  staticParsePathIdxs.length = 0
  return 0
}

/**
 * 解析键/路径为扁平段数组（结果写入复用数组，并返回 staticParsePathNames 的长度）
 * @param {String/Function} property 键、路径
 * @return {Number} 段数量
 */
function helperParsePath (property) {
  staticParsePathNames.length = 0
  staticParsePathIdxs.length = 0
  // 数组形式：按原样逐段处理
  if (property && property.splice && property.join) {
    for (var a = 0; a < property.length; a++) {
      pushSeg(String(property[a]))
    }
    return staticParsePathNames.length
  }
  // 快路径
  if (isString(property)) {
    if (property === '') {
      return 0
    }
    if (property.indexOf('.') === -1 && property.indexOf('[') === -1) {
      staticParsePathNames.push(property)
      staticParsePathIdxs.push(-1)
      return 1
    }
  }
  var s = String(property)
  var i = 0
  var len = s.length
  var nameStart = 0
  while (i < len) {
    var c = s.charCodeAt(i)
    if (c === 46 /* . */) {
      if (i <= nameStart) {
        if (i === 0 || s.charCodeAt(i - 1) === 46 /* . */) {
          return resetNone()
        }
        i++
        nameStart = i
        continue
      }
      pushSeg(s.slice(nameStart, i))
      i++
      nameStart = i
      continue
    }
    if (c === 91 /* [ */) {
      var j = i + 1
      var idx = 0
      while (j < len) {
        var cc = s.charCodeAt(j)
        if (cc < 48 || cc > 57) {
          break
        }
        idx = idx * 10 + (cc - 48)
        j++
      }
      if (j < len && s.charCodeAt(j) === 93 /* ] */) {
        var nm = i > nameStart ? s.slice(nameStart, i) : null
        staticParsePathNames.push(nm)
        staticParsePathIdxs.push(idx)
        i = j + 1
        nameStart = i
        if (i < len && s.charCodeAt(i) !== 46) nameStart = i
        continue
      }
      i++
      continue
    }
    i++
  }
  // 尾部点(a.b. / a[0].)：以分隔符结尾导致末段为空 => 非法路径
  if (len > 0 && s.charCodeAt(len - 1) === 46 /* . */) {
    return resetNone()
  }
  if (len > nameStart) {
    pushSeg(s.slice(nameStart, len))
  }
  return staticParsePathNames.length
}

module.exports = helperParsePath
