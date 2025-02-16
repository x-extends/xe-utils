# xe-utils

[简体中文](README.md) | English  

[![gitee star](https://gitee.com/x-extends/xe-utils/badge/star.svg?theme=dark)](https://gitee.com/x-extends/xe-utils/stargazers)
[![npm version](https://img.shields.io/npm/v/xe-utils.svg?style=flat-square)](https://www.npmjs.com/package/xe-utils)
[![NodeJS with Webpack](https://github.com/x-extends/xe-utils/actions/workflows/webpack.yml/badge.svg)](https://github.com/x-extends/xe-utils/actions/workflows/webpack.yml)
[![gzip size: JS](http://img.badgesize.io/https://unpkg.com/xe-utils/dist/dist/xe-utils.umd.min.js?compression=gzip&label=gzip%20size:%20JS)](https://unpkg.com/xe-utils/dist/dist/xe-utils.umd.min.js)
[![npm downloads](https://img.shields.io/npm/dm/xe-utils.svg?style=flat-square)](http://npm-stat.com/charts.html?package=xe-utils)
[![npm license](https://img.shields.io/github/license/mashape/apistatus.svg)](LICENSE)

JavaScript libraries, utility

## Browser Support

![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_7-8/internet-explorer_7-8_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png)
--- | --- | --- | --- | --- | --- |
7+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 6+ ✔ |

## Docs

[To view the document](https://vxeui.com/xe-utils/)

## Installing

```shell
npm install xe-utils
```

Using nodejs

```javascript
const XEUtils = require('xe-utils')
```

Get on [unpkg](https://unpkg.com/xe-utils/) and [cdnjs](https://cdn.jsdelivr.net/npm/xe-utils/)

```HTML
<script src="https://cdn.jsdelivr.net/npm/xe-utils"></script>
```

### Import all methods

```javascript
import XEUtils from 'xe-utils'

XEUtils.toDateString(Date.now())
// 2018-01-01 10:30:28
XEUtils.toStringDate('2018-01-01 10:30:00')
// Mon Jan 01 2018 10:30:00 GMT+0800
```

## Import on demand

In this way, the volume can be minimized by introducing methods as needed.  
Import a single package, the size of the package gzip >≈ 60B+, import on demand.  

```javascript
import each from 'xe-utils/each'
import toDateString from 'xe-utils/toDateString'

each({ a: 11, b: 22, c: 33 }, function (item, key){
  console.log(item)
})
// 11
// 22
// 33
toDateString(Date.now(), 'yyyy-MM-dd HH:mm:ss')
// 2018-01-01 10:30:28
```

```javascript
import XEUtils from 'xe-utils/ctor'
import each from 'xe-utils/each'
import toDateString from 'xe-utils/toDateString'
import toFixedNumber from 'xe-utils/toFixedNumber'

XEUtils.mixin({
  each,
  toDateString,
  toFixedNumber
})
XEUtils.toDateString(Date.now(), 'yyyy-MM-dd HH:mm:ss')
// 2018-01-01 10:30:28
```

Import all methods by function.

```javascript
import XEUtils from 'xe-utils/ctor'
import objectMethods from 'xe-utils/object'
import arrayMethods from 'xe-utils/array'
import baseMethods from 'xe-utils/base'
import numberMethods from 'xe-utils/number'
import dateMethods from 'xe-utils/date'
import stringMethods from 'xe-utils/string'
import functionMethods from 'xe-utils/function'
import urlMethods from 'xe-utils/url'
import webMethods from 'xe-utils/web'

XEUtils.mixin(
  // Object
  objectMethods,
  // Array
  arrayMethods,
  // Base
  baseMethods,
  // Number
  numberMethods,
  // Date
  dateMethods,
  // String
  stringMethods,
  // Function
  functionMethods,
  // URL
  urlMethods,
  // Web
  webMethods
)
```

## Contributors

Thank you to everyone who contributed to this project.

[![xe-utils](https://contrib.rocks/image?repo=x-extends/xe-utils)](https://github.com/x-extends/xe-utils/graphs/contributors)

## License

[MIT](LICENSE) © 2017-present, Xu Liangzhan
