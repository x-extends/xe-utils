'use strict'

var baseExports = require('./base')

function isMobile () {
  var agents = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'SymbianOS', 'BlackBerry', 'Windows Phone']
  for (var userAgentInfo = navigator.userAgent, i = 0; i < agents.length; i++) {
    if (userAgentInfo.indexOf(agents[i]) > 0) {
      return true
    }
  }
  return false
}

/**
  * 获取浏览器内核
  * @return Object
  */
function browse () {
  var result = {
    isNode: false,
    isMobile: false,
    isPC: false
  }
  if (typeof window === 'undefined' && typeof process !== 'undefined') {
    result.isNode = true
  } else {
    result.isMobile = isMobile()
    result.isPC = !result.isMobile
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
