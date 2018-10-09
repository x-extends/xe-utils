'use strict'

var baseExports = require('./base')

function isBrowseStorage (storage) {
  try {
    if (storage && storage.getItem) {
      var testKey = '_xe_t'
      storage.setItem(testKey, 1)
      storage.removeItem(testKey)
      return true
    }
  } catch (e) {}
  return false
}

/**
  * 获取浏览器内核
  * @return Object
  */
function browse () {
  var result = {
    isNode: false,
    isMobile: /(Android|webOS|iPhone|iPad|iPod|SymbianOS|BlackBerry|Windows Phone)/.test(navigator.userAgent),
    isPC: false
  }
  if (typeof window === 'undefined' && typeof process !== 'undefined') {
    result.isNode = true
  } else {
    result.isPC = !result.isMobile
    result.isLocalStorage = isBrowseStorage(window.localStorage)
    result.isSessionStorage = isBrowseStorage(window.sessionStorage)
    if (typeof document !== 'undefined') {
      var $dom = document
      var $body = $dom.body || $dom.documentElement
      baseExports.each(['webkit', 'khtml', 'moz', 'ms', 'o'], function (core) {
        result['-' + core] = !!$body[core + 'MatchesSelector']
      })
    }
  }
  return result
}

var browseExports = {
  browse: browse
}

module.exports = browseExports
