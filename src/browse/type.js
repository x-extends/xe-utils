import { arrayEach } from '../core/base'

/**
  * 获取浏览器内核
  * @return Object
  */
export function browse () {
  var result = {}
  var $body = document.body || document.documentElement
  arrayEach(['webkit', 'khtml', 'moz', 'ms', 'o'], function (core) {
    result['-' + core] = !!$body[core + 'MatchesSelector']
  })
  return result
}
