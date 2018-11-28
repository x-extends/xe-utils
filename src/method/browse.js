'use strict'

var baseExports = require('./base')

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

/**
  * 获取浏览器内核
  * @return Object
  */
function browse () {
  var undef = 'undefined'
  var result = {
    isNode: false,
    isMobile: false,
    isPC: false,
    isLocalStorage: false,
    isSessionStorage: false
  }
  if (typeof window === undef && typeof process !== undef) {
    result.isNode = true
  } else {
    result.isMobile = /(Android|webOS|iPhone|iPad|iPod|SymbianOS|BlackBerry|Windows Phone)/.test(navigator.userAgent)
    result.isPC = !result.isMobile
    result.isLocalStorage = isBrowseStorage(window.localStorage)
    result.isSessionStorage = isBrowseStorage(window.sessionStorage)
    if (typeof document !== undef) {
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
