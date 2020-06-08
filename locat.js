var staticLocation = require('./staticLocation')

var parseUrl = require('./parseUrl')

/**
  * 获取地址栏信息
  *
  * @return Object
  */
function locat () {
  return staticLocation ? parseUrl(staticLocation.href) : {}
}

module.exports = locat
