'use strict'

var baseExports = require('./base')

/**
  * 获取浏览器内核
  * @return Object
  */
function browse () {
  var result = {}
  var $body = document.body || document.documentElement
  baseExports.arrayEach(['webkit', 'khtml', 'moz', 'ms', 'o'], function (core) {
    result['-' + core] = !!$body[core + 'MatchesSelector']
  })
  return result
}

var browseExports = {
  browse: browse
}

module.exports = browseExports
