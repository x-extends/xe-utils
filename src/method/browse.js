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

function isBrowseType (type) {
  return navigator.userAgent.indexOf(type) > -1
}

/**
  * 获取浏览器内核
  * @return Object
  */
function browse () {
  var $body
  var $dom
  var isChrome
  var strUndefined = 'undefined'
  var result = {
    isNode: false,
    isMobile: false,
    isPC: false,
    isDoc: typeof document !== strUndefined
  }
  if (typeof window === strUndefined && typeof process !== strUndefined) {
    result.isNode = true
  } else {
    isChrome = isBrowseType('Chrome')
    if (result.isDoc) {
      $dom = document
      $body = $dom.body || $dom.documentElement
      baseExports.each(['webkit', 'khtml', 'moz', 'ms', 'o'], function (core) {
        result['-' + core] = !!$body[core + 'MatchesSelector']
      })
    }
    baseExports.assign(result, {
      safari: !isChrome && isBrowseType('Safari'),
      isMobile: /(Android|webOS|iPhone|iPad|iPod|SymbianOS|BlackBerry|Windows Phone)/.test(navigator.userAgent),
      isPC: !result.isMobile,
      isLocalStorage: isBrowseStorage(window.localStorage),
      isSessionStorage: isBrowseStorage(window.sessionStorage)
    })
  }
  return result
}

var browseExports = {
  browse: browse
}

module.exports = browseExports
