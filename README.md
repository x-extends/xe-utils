# XEUtils 函数库

[![npm version](https://img.shields.io/npm/v/xe-utils.svg?style=flat-square)](https://www.npmjs.org/package/xe-utils)
[![npm downloads](https://img.shields.io/npm/dm/xe-utils.svg?style=flat-square)](http://npm-stat.com/charts.html?package=xe-utils)

XEUtils 提供一套实用的函数，支持常用基础函数、支持任意格式的日期处理函数，cookie操作函数等...

## 兼容性
支持 IE8+、Edge、Chrome、Firefox、Opera、Safari等...

## CDN 安装
使用 script 方式安装，XEUtils 会定义为全局变量  
生产环境请使用 xe-utils.min.js，更小的压缩版本，可以带来更快的速度体验。
### cdnjs 获取最新版本
[点击浏览](https://cdn.jsdelivr.net/npm/xe-utils/)已发布的所有 npm 包源码
``` shell
<script src="https://cdn.jsdelivr.net/npm/xe-utils/dist/xe-utils.js"></script>
```
### unpkg 获取最新版本
[点击浏览](https://unpkg.com/xe-utils/)已发布的所有 npm 包源码
``` shell
<script src="https://unpkg.com/xe-utils/dist/xe-utils.js"></script>
```

## AMD 安装
### require.js 安装示例
``` shell
// require 配置
require.config({
  paths: {
    // ...,
    'xe-utils': './dist/xe-utils.min'
  }
})
```

## ES6 Module 安装方式
``` shell
npm install xe-utils --save
```

### import 部分导入
``` shell
import { dateToString, stringToDate } from 'xe-utils'

const dateStr = dateToString(new Date(), 'yyyy-MM-dd')
const date = stringToDate('11/20/2017 10:10:30', 'MM/dd/yyyy HH:mm:ss')
```

### import 导入所有
``` shell
import XEUtils from 'xe-utils'

const dateStr = XEUtils.dateToString(new Date(), 'yyyy-MM-dd')
const date = XEUtils.stringToDate('11/20/2017 10:10:30', 'MM/dd/yyyy HH:mm:ss')
```

## API
### isNaN (val) 判断是否非数值
```shell
import XEUtils from 'xe-utils'

XEUtils.isNaN(undefined) // true
XEUtils.isNaN({}) // true
XEUtils.isNaN('num') // true 
XEUtils.isNaN(true) // false
XEUtils.isNaN(null) // false
XEUtils.isNaN('') // false
```
### isFinite (val) 判断是否为有限数值
```shell
import XEUtils from 'xe-utils'

XEUtils.isFinite(NaN) // false
XEUtils.isFinite(0) // true
XEUtils.isFinite(2e64) // true
```
### isArray (val) 判断是否数组
```shell
import XEUtils from 'xe-utils'

XEUtils.isArray(null) // false
XEUtils.isArray({}) // false
XEUtils.isArray([1,2,3]) // true
```
### isFloat (val) 判断是否小数
```shell
import XEUtils from 'xe-utils'

XEUtils.isFloat(null) // false
XEUtils.isFloat(0) // false
XEUtils.isFloat(3) // false
XEUtils.isFloat(3.3) // true
```
### isInteger (val) 判断是否整数
```shell
import XEUtils from 'xe-utils'

XEUtils.isInteger(null) // false
XEUtils.isInteger(3.3) // false
XEUtils.isInteger(3) // true
XEUtils.isInteger(0) // true
```
#### isFunction (val) 判断是否方法
```shell
import XEUtils from 'xe-utils'

XEUtils.isFunction({}) // false
XEUtils.isFunction(function(){}) // true
```
### isBoolean (val) 判断是否Boolean对象
```shell
import XEUtils from 'xe-utils'

XEUtils.isBoolean('false') // false
XEUtils.isBoolean(true) // true
```
### isString (val) 判断是否String对象
```shell
import XEUtils from 'xe-utils'

XEUtils.isString(1) // false
XEUtils.isString(true) // false
XEUtils.isString('') // true
XEUtils.isString('abc') // true
```
### isNumber (val) 判断是否Number对象
```shell
import XEUtils from 'xe-utils'

XEUtils.isNumber(null) // false
XEUtils.isNumber('1') // false
XEUtils.isNumber(1) // true
```
### isRegExp (val) 判断是否RegExp对象
```shell
import XEUtils from 'xe-utils'

XEUtils.isRegExp(null) // false
XEUtils.isRegExp('a') // false
XEUtils.isRegExp(new RegExp('a')) // true
XEUtils.isRegExp(/\a/) // true
```
### isObject (val) 判断是否Object对象
```shell
import XEUtils from 'xe-utils'

XEUtils.isObject(null) // true
XEUtils.isObject([]) // true
XEUtils.isObject({}) // true
XEUtils.isObject(123) // false
```
### isPlainObject (val) 判断是否是一个对象
```shell
import XEUtils from 'xe-utils'

XEUtils.sPlainObject(null) // false
XEUtils.isPlainObject([]) // false
XEUtils.isPlainObject(123) // false
XEUtils.isPlainObject({}) // true
```
### isDate (val) 判断是否Date对象
```shell
import XEUtils from 'xe-utils'

XEUtils.isDate('2017-12-20') // false
XEUtils.isDate({}) // false
XEUtils.isDate(1514096716800) // false
XEUtils.isDate(new Date()) // true
```
### isError (val) 判断是否Error对象
```shell
import XEUtils from 'xe-utils'

XEUtils.isError(null) // false
XEUtils.isError({}) // false
XEUtils.isError(new Error('error')) // true
```
### isTypeError (val) 判断是否TypeError对象
```shell
import XEUtils from 'xe-utils'

XEUtils.isTypeError(null) // false
XEUtils.isTypeError({}) // false
XEUtils.isTypeError(new TypeError('error')) // true
```
### isEmpty (val) 判断是否为空,包括空对象、空数值、空字符串
```shell
import XEUtils from 'xe-utils'

XEUtils.isEmpty(0) // true
XEUtils.isEmpty('') // true
XEUtils.isEmpty(null) // true
XEUtils.isEmpty({}) // true
XEUtils.isEmpty([]]) // true
```
### isNull (val) 判断是否为Null
```shell
import XEUtils from 'xe-utils'

XEUtils.isNull(0) // false
XEUtils.isNull('') // false
XEUtils.isNull(null) // true
```
### isSymbol (val) 判断是否Symbol对象
```shell
import XEUtils from 'xe-utils'

XEUtils.isSymbol('a') // false
XEUtils.isSymbol(Symbol('a')) // true
```
### isArguments (val) 判断是否Arguments对象
```shell
import { isArguments } from 'xe-utils'

isArguments([]) // false
isArguments(arguments) // true
```
### isElement (val) 判断是否Element对象
```shell
import XEUtils from 'xe-utils'

XEUtils.isElement({}) // false
XEUtils.isElement(document.createElement('div')) // true
```
### isDocument (val) 判断是否Document对象
```shell
import XEUtils from 'xe-utils'

XEUtils.isDocument(document.createElement('div')) // false
XEUtils.isDocument(document) // true
```
### isWindow (val) 判断是否Window对象
```shell
import XEUtils from 'xe-utils'

XEUtils.isWindow(document) // false
XEUtils.isWindow(window) // true
```
### isFormData (val) 判断是否FormData对象
```shell
import { isFormData } from 'xe-utils'

isFormData({}) // false
isFormData(new FormData()) // true
```
### isLeapYear (date) 判断是否闰年
```shell
import XEUtils from 'xe-utils'

XEUtils.isLeapYear('2018-12-01') // false
XEUtils.isLeapYear('2020-12-01') // true
XEUtils.isLeapYear(new Date('2020/12/01')) // true
```
### getType (obj) 获取对象类型
```shell
import XEUtils from 'xe-utils'

XEUtils.getType() // 'undefined'
XEUtils.getType(null) // 'null'
XEUtils.getType('') // 'string'
XEUtils.getType(1) // 'number'
XEUtils.getType([]) // 'array'
XEUtils.getType({}) // 'object'
XEUtils.getType(function(){}) // 'function'
```
### uniqueId (  ) 获取一个全局唯一标识
```shell
import XEUtils from 'xe-utils'

XEUtils.uniqueId() // 1
XEUtils.uniqueId() // 2
```
### getSize ( obj ) 返回对象的长度
```shell
import XEUtils from 'xe-utils'

XEUtils.getSize('123') // 3
XEUtils.getSize([1, 3]) // 2
XEUtils.getSize({a: 2, b: 5}) // 2
```
### indexOf (obj, val) 返回对象第一个索引值
```shell
import XEUtils from 'xe-utils'

XEUtils.indexOf([11], 22) // -1
XEUtils.indexOf([11, 22], 22) // 1
```
### lastIndexOf (obj, val) 从最后开始的索引值,返回对象第一个索引值
```shell
import XEUtils from 'xe-utils'

XEUtils.lastIndexOf([11], 22) // -1
XEUtils.lastIndexOf([11, 22], 22) // 1
```
### includes (obj, val) 判断对象是否包含该值,成功返回true否则false
```shell
import XEUtils from 'xe-utils'

XEUtils.includes([11], 22) // false
XEUtils.includes([11, 22], 22) // true
```
### assign/objectAssign (target, ...) 浅拷贝一个或者多个对象到目标对象中
```shell
import XEUtils, { objectAssign } from 'xe-utils'

const obj1 = {a: null}
XEUtils.assign(obj1, {a: 11}) // {a: 11}
const obj2 = {c: null}
objectAssign(obj2, {a: 11}, {b: 22}) // {a: 11, b: 22, c: null}
```
### stringToJson (str) 字符串转JSON
```shell
import XEUtils from 'xe-utils'

XEUtils.stringToJson('{"a":1}') // {a: 1}
XEUtils.stringToJson('[11,22]') // [11, 22]
```
### jsonToString (obj) JSON转字符串
```shell
import XEUtils from 'xe-utils'

XEUtils.jsonToString({a: 1}) // '{"a":1}'
XEUtils.jsonToString([11, 22]) // '[11,22]'
```
### keys/objectKeys (obj) 获取对象所有属性
```shell
import XEUtils, { objectKeys } from 'xe-utils'

XEUtils.keys({a: 11}) // ['a']
objectKeys([11, 22]) // [0, 1]
```
### values/objectValues (obj) 获取对象所有值
```shell
import XEUtils, { objectValues } from 'xe-utils'

XEUtils.values({a: 11}) // [11]
objectValues([11, 22]) // [11, 22]
```
### entries/objectEntries (obj) 获取对象所有属性、值
```shell
import XEUtils from 'xe-utils'

XEUtils.objectEntries({a: 11}) // [['a', 11]]
XEUtils.objectEntries([11, 22]) // [[0, 11], [1, 22]]
```
### first/arrayFirst (obj) 获取对象第一个值
```shell
import XEUtils, { arrayFirst } from 'xe-utils'

XEUtils.first({a: 11, b : 22}) // 11
arrayFirst([11, 22]) // 11
```
### last/arrayLast (obj) 获取对象最后一个值
```shell
import XEUtils, { arrayLast } from 'xe-utils'

XEUtils.last({a: 11, b: 22}) // 22
arrayLast([11, 22]) // 22
```
### each ( obj, iteratee, context ) 迭代器
```shell
import XEUtils from 'xe-utils'

const result = []
XEUtils.each({a: 11, b: 22}, (item, key) => {
  if (key === 'b') {
    result.push(item)
  }
}) // [22]
```
### groupBy ( obj, iteratee, context ) 集合分组,默认使用键值分组,如果有iteratee则使用结果进行分组
```shell
import XEUtils from 'xe-utils'

const result1 = XEUtils.groupBy([{type: 'a'}, {type: 'b'}]], 'type') // {a: [{a: 'a'}], b: [{b: 'b'}]}
const result2 = XEUtils.groupBy([{type: 'a'}, {type: 'b'}]], (item, key) => {
  return item.type
}) // {a: [{a: 'a'}], b: [{b: 'b'}]}
```
### objectMap ( obj, iteratee, context ) 指定方法后的返回值组成的新对象
```shell
import XEUtils from 'xe-utils'

const result = []
XEUtils.objectMap([{type: 'a'}, {type: 'b'}]], (item, key) => {
  return item.type
}) // {a: {type: 'a', b: {type: 'b'}}}
```
### clone (obj, deep) 浅拷贝/深拷贝
```shell
import XEUtils from 'xe-utils'

const v1 = {a: 11, b: {b1: 22}
const v2 = XEUtils.clone({a: 11, b: 22})
if (v1.b === v2.b) {
  // true
}
const v3 = XEUtils.clone(v1, true)
if (v1.b === v3.b) {
  // false
}
```

### uniq/arrayUniq ( array ) 数组去重
```shell
import XEUtils, { arrayUniq } from 'xe-utils'

XEUtils.uniq([11, 22, 33, 33, 22, 55]) // [11, 22, 33, 55]
arrayUniq([11, 22, 33, 33, 22, 55]) // [11, 22, 33, 55]
```
### union/arrayUnion ( ...array ) 将多个数的值返回唯一的并集数组
```shell
import XEUtils, { arrayUnion } from 'xe-utils'

XEUtils.union([11, 22], [33, 22], [44, 11]) // [11, 22, 33, 44]
arrayUnion([11, 22], [33, 22], [44, 11]) // [11, 22, 33, 44]
```
### sort/arraySort ( arr, iteratee, context ) 数组按属性值升序
```shell
import XEUtils, { arraySort } from 'xe-utils'

XEUtils.sort([{a: 9}, {a: 4}, {a: 5}], 'a') // [{a: 4}, {a: 5}, {a: 9}]
arraySort([{a: 9}, {a: 4}, {a: 5}], (v1, v2) => {
  return v1.a > v2.a ? 1 : -1
}) // [{a: 4}, {a: 5}, {a: 9}]

```
### shuffle/arrayShuffle ( array ) 将一个数组随机打乱，返回一个新的数组
```shell
import XEUtils, { arrayShuffle } from 'xe-utils'

XEUtils.shuffle([11, 22, 33, 44, 55]) // [22, 33, 55, 11, 44]
arrayShuffle([11, 22, 33, 44, 55]) // [22, 33, 55, 11, 44]
```
### sample/arraySample ( array, number ) 从一个数组中随机返回几个元素
```shell
import XEUtils, { arraySample } from 'xe-utils'

XEUtils.sample([11, 22, 33, 44, 55], 3) // [22, 33, 55]
arraySample([11, 22, 33, 44, 55], 3) // [22, 33, 55]
```
### some/arraySome ( obj, iteratee, context ) 对象中的值中的每一项运行给定函数,如果函数对任一项返回true,则返回true,否则返回false
```shell
import XEUtils, { arraySome } from 'xe-utils'

XEUtils.some([{a: 11}, {a: 22}]], (item, key) => {
  return item.a === 55
}) // false
arraySome([{a: 11}, {a: 22}]], (item, key) => {
  return item.a === 11
}) // true
```
### every/arrayEvery ( obj, iteratee, context ) 对象中的值中的每一项运行给定函数,如果该函数对每一项都返回true,则返回true,否则返回false
```shell
import XEUtils, { arrayEvery } from 'xe-utils'

XEUtils.every([{a: 11}, {a: 22}]], (item, key) => {
  return item.a === 11
}) // false
arrayEvery([{a: 11}, {a: 22}]], (item, key) => {
  return item.a === 11 || item.a === 22
}) // true
```
### filter/arrayFilter ( obj, iteratee, context ) 根据回调过滤数据
```shell
import XEUtils, { arrayFilter } from 'xe-utils'

XEUtils.filter([{a: 11}, {a: 22}]], (item, key) => {
  return item.a > 11
}) // [{a: 22}]
arrayFilter([{a: 11}, {a: 22}]], (item, key) => {
  return item.a > 11
}) // [{a: 22}]
```
### find/arrayFind ( obj, iteratee, context ) 查找匹配第一条数据
```shell
import XEUtils, { arrayFind } from 'xe-utils'

XEUtils.find([{a: 11}, {a: 22}]], (item, key) => {
  return item.a === 55
}) // null
arrayFind([{a: 11}, {a: 22}]], (item, key) => {
  return item.a === 22
}) // {a: 22}
```
### map/arrayMap ( obj, iteratee, context ) 指定方法后的返回值组成的新数组
```shell
import XEUtils, { arrayMap } from 'xe-utils'

XEUtils.map([{a: 11}, {a: 22}]], (item, key) => {
  return item.a
}) // [11, 22]
arrayMap([{a: 11}, {a: 22}]], (item, key) => {
  return item.a
}) // [11, 22]
```

### now/timestamp ( ) 返回时间戳
```shell
import XEUtils, { timestamp } from 'xe-utils'

XEUtils.now() // 1514096716800
timestamp() // 1514096716800
```
### stringToDate ( str, format ) 任意格式字符串转为日期(yyyy年份、MM月份、dd天、HH小时、mm分钟、ss秒、SSS毫秒)
```shell
import XEUtils from 'xe-utils'

XEUtils.stringToDate('2017-12-20') // Wed Dec 20 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.stringToDate('2017-12-20 10:10:30') // Wed Dec 20 2017 10:10:30 GMT+0800 (中国标准时间)
XEUtils.stringToDate('12/20/2017', 'MM/dd/yyyy') // Wed Dec 20 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.stringToDate('12/20/2017 10:10:30.100', 'MM/dd/yyyy HH:mm') // Wed Dec 20 2017 10:10:00 GMT+0800 (中国标准时间)
XEUtils.stringToDate('12/20/2017 10:10:30.100', 'MM/dd/yyyy HH:mm:ss.SSS') // Wed Dec 20 2017 10:10:30 GMT+0800 (中国标准时间)
```
### dateToString ( date, format ) 日期化为任意格式字符串(yyyy年份、MM月份、dd天、HH小时、mm分钟、ss秒、S毫秒、E星期几、q季度)
```shell
import XEUtils from 'xe-utils'

XEUtils.dateToString(1513735830000) // '2017-12-20 10:10:30'
XEUtils.dateToString(new Date()) // '2017-12-20 10:10:30'
XEUtils.dateToString('2017-12-20 10:10:30', 'MM/dd/yyyy') // '12/20/2017'
XEUtils.dateToString(new Date(), 'yyyy-MM-dd') // '2017-12-20'
XEUtils.dateToString(new Date(), 'yyyy-MM-dd HH:mm:ss.S') // '2017-12-20 10:10:30.100'
XEUtils.dateToString(new Date(), 'yyyy年MM月dd日 HH时mm分ss秒S毫秒,星期E 第q季度') // '2017年12月20日 10时10分30秒100毫秒,星期三 第四季度'
```
### getWhatMonth ( date, mode, month ) 返回前几个月或后几个月的日期,可以指定月初或月末，默认当前
```shell
import XEUtils from 'xe-utils'

XEUtils.getWhatMonth(new Date(), -1) // Mon Nov 20 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatMonth(1513735830000, -1) // Mon Nov 20 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatMonth('2017-12-20', -1) // Mon Nov 20 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatMonth('2017-12-20', 1) // Sat Jan 20 2018 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatMonth('2017-12-20', -1, 'first') // Wed Nov 01 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatMonth('2017-12-20', 1, 'last') // Wed Jan 31 2018 00:00:00 GMT+0800 (中国标准时间)
```
### getWhatWeek ( date, mode, week ) 返回前几周或后几周的日期,可以指定星期几，默认当前
```shell
import XEUtils from 'xe-utils'

XEUtils.getWhatWeek(new Date(), -1) // Sun Dec 17 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatWeek(1513735830000, -1) // Sun Dec 17 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatWeek('2017-12-20', -1) // Sun Dec 17 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatWeek('2017-12-20', 1) // Sun Dec 31 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatWeek('2017-12-20', -1, 5) // Fri Dec 15 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatWeek('2017-12-20', 1, 0) // Sun Dec 31 2017 00:00:00 GMT+0800 (中国标准时间)
```
### getWhatDay ( date, day ) 返回前几天或后几天的日期
```shell
import XEUtils from 'xe-utils'

XEUtils.getWhatDay(new Date(), -1) // Tue Dec 19 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatDay(1513735830000, -1) // Tue Dec 19 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatDay('2017-12-20', -1) // Tue Dec 19 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatDay('2017-12-20', 1) // Tue Dec 21 2017 00:00:00 GMT+0800 (中国标准时间)
```
### getDaysOfMonth ( date, month ) 返回当前日期月份的天数,可以指定前几个月或后几个月，默认当前
```shell
import XEUtils from 'xe-utils'

XEUtils.getDaysOfMonth(new Date()) // 31
XEUtils.getDaysOfMonth(1513735830000) // 31
XEUtils.getDaysOfMonth('2017-12-20') // 31
XEUtils.getDaysOfMonth('2017-12-20', -1) // 30
XEUtils.getDaysOfMonth('2017-12-20', 1) // 31
```
### getDateDiff ( startDate, endDate, rules ) 返回两个日期之间差距
```shell
import XEUtils from 'xe-utils'

XEUtils.getDateDiff('2017-11-20', '2017-12-21') // {MM: 1, dd: 1}
XEUtils.getDateDiff('2017-12-20', '2017-12-21') // {dd: 1}
XEUtils.getDateDiff('2017-12-20', '2017-12-21') // {dd: 1, ss: 30}
const dateDiff = XEUtils.getDateDiff('2017-12-20 10:10:30', '2017-12-21 10:15:00')
const content = `${dateDiff.mm}分${dateDiff.ss}秒` // '4分30秒'
```

### getRandom ( min, max ) 获取一个指定范围内随机数
```shell
import XEUtils from 'xe-utils'

XEUtils.getRandom() // 0 ~ 9
XEUtils.getRandom(3, 6) // 3 ~ 6
XEUtils.getRandom(10, 100) // 10 ~ 100
```
### min/arrayMin ( arr, iteratee ) 获取最小值
```shell
import XEUtils, { arrayMin } from 'xe-utils'

XEUtils.min([22, 66, 77, 11]) // 11
arrayMin([{a: 11}, {a: 44}], 'a') // 11
arrayMin([{a: 11}, {a: 44}], (item) => {
  return item.a
}) // {a: 11}
```
### max/arrayMax ( arr, iteratee ) 获取最大值
```shell
import XEUtils, { arrayMax } from 'xe-utils'

XEUtils.max([22, 66, 77, 11]) // 77
arrayMax([{a: 11}, {a: 44}], 'a') // 44
arrayMax([{a: 11}, {a: 44}], (item) => {
  return item.a
}) // {a: 44}
```

### escape ( str ) 转义HTML字符串，替换&, <, >, ", ', `字符
```shell
import XEUtils from 'xe-utils'

XEUtils.escape('<a>link</a>') // '&lt;a&gt;link&lt;/a&gt;'
```
### unescape ( str ) 反转escape
```shell
import XEUtils from 'xe-utils'

XEUtils.unescape('&lt;a&gt;link&lt;/a&gt;') // '<a>link</a>'
```

### browse ( ) 获取浏览器内核
```shell
import XEUtils from 'xe-utils'

XEUtils.browse() // {-khtml: false, -moz: false, -ms: fasle, -o: false, -webkit: true}
```

### locat ( ) 获取地址栏信息
```shell
import XEUtils from 'xe-utils'

XEUtils.locat() // {hash: '', host: '', hostname: '', href: '', protocol: '', port: '', origin: '', query: {...}, params: {...}, ...}
```

### cookie ( ) Cookie操作函数
```shell
import XEUtils from 'xe-utils'

XEUtils.cookie() // 获取所有
XEUtils.cookie('name') // 根据name获取
XEUtils.cookie('name', null, {expires: -1}) // 删除
XEUtils.cookie([{name: 'name', expires: -1}]) // 批量删除
XEUtils.cookie('name', 'value') // 添加/修改
XEUtils.cookie([{name: 'name', value: 'value'}]) // 批量添加/修改
XEUtils.cookie('name', 'value', {domain: 'xxx.com', path: '/', expires: 7, secure: true}) // 添加并设置domain/path/secure/expires 7天后过期
XEUtils.cookie([{name: 'name', value: 'value', domain: 'xxx.com', path: '/', expires: 7, secure: true}]) // 批量添加并设置domain/path/secure/expires 7天后过期

XEUtils.cookie.getJSON() // 获取所有
XEUtils.cookie.setItem('name', 'value') // 添加/修改
XEUtils.cookie.getItem('name') // 根据name获取
XEUtils.cookie.removeItem('name') // 删除
```

## 混合函数
### 文件 ./customs.js
``` shell
export function custom1 () {
  console.log('自定义函数')
} 
```
### 示例 ./main.js
``` shell
import Vue from 'vue'
import XEUtils from 'xe-utils'
import customs from './customs'

XEUtils.mixin(customs)

// 调用自定义扩展函数
XEUtils.custom1()
```

## License
Copyright (c) 2017-present, Xu Liangzhan