var staticStrUndefined = require('./staticStrUndefined')
var staticDocument = require('./staticDocument')
var staticWindow = require('./staticWindow')

var assign = require('./assign')
var arrayEach = require('./arrayEach')

/* eslint-disable valid-typeof */
function isBrowseStorage (storage) {
  try {
    var testKey = '__xe_t'
    storage.setItem(testKey, 1)
    storage.removeItem(testKey)
    return true
  } catch (e) {
    return false
  }
}

function isBrowseType (type) {
  return navigator.userAgent.indexOf(type) > -1
}

/**
  * 获取浏览器内核
  * @return Object
  */
function browse () {
  var $body, isChrome, isEdge
  var isMobile = false
  var result = {
    isNode: false,
    isMobile: isMobile,
    isPC: false,
    isDoc: !!staticDocument
  }
  if (!staticWindow && typeof process !== staticStrUndefined) {
    result.isNode = true
  } else {
    isEdge = isBrowseType('Edge')
    isChrome = isBrowseType('Chrome')
    isMobile = /(Android|webOS|iPhone|iPad|iPod|SymbianOS|BlackBerry|Windows Phone)/.test(navigator.userAgent)
    if (result.isDoc) {
      $body = staticDocument.body || staticDocument.documentElement
      arrayEach(['webkit', 'khtml', 'moz', 'ms', 'o'], function (core) {
        result['-' + core] = !!$body[core + 'MatchesSelector']
      })
    }
    assign(result, {
      edge: isEdge,
      firefox: isBrowseType('Firefox'),
      msie: !isEdge && result['-ms'],
      safari: !isChrome && !isEdge && isBrowseType('Safari'),
      isMobile: isMobile,
      isPC: !isMobile,
      isLocalStorage: isBrowseStorage(staticWindow.localStorage),
      isSessionStorage: isBrowseStorage(staticWindow.sessionStorage)
    })
  }
  return result
}

module.exports = browse
