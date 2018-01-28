/**
  * 获取浏览器内核
  * @return Object
  */
var $body = document.body || document.documentElement
export function browse () {
  var result = {};
  ['webkit', 'khtml', 'moz', 'ms', 'o'].forEach(function (core) {
    result['-' + core] = !!$body[core + 'MatchesSelector']
  })
  return result
}
