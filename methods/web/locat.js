var staticLocation = require('../static/staticLocation')

var parseUrl = require('../url/parseUrl')

/**
  * 获取地址栏信息
  *
  * @return Object
  */
function locat () {
  return staticLocation ? parseUrl(staticLocation.href) : {}
}

module.exports = locat
