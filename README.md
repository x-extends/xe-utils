# XEUtils 是一个轻量级的函数库，提供一套实用丰富函数

## 通过NPM安装最新版本

``` shell
npm install xe-utils --save
```

### 部分引入
``` shell
import { dateToString, stringToDate } from 'xe-utils'

const dateStr = dateToString(new Date())
const date = stringToDate(dateStr)
```

### 引入所有
``` shell
import XEUtils from 'xe-utils'

const dateStr = XEUtils.dateToString(new Date())
const date = XEUtils.stringToDate(dateStr)
```

### Vue全局安装
``` shell
import Vue from 'vue'
import XEUtils from 'xe-utils'
import VXEUtils from 'vxe-utils'

Vue.use(VXEUtils, XEUtils)

// 通过vue实例的调用方式
var date = this.$utils.stringToDate('2017-12-20', 'yyyy-MM-dd')
```

### 混合函数
#### 文件 ./customs.js
``` shell
export function custom1 () {
  console.log('自定义函数')
} 
```
#### 代码
``` shell
import Vue from 'vue'
import XEUtils from 'xe-utils'
import VXEUtils from 'vxe-utils'
import customs from './customs'

XEUtils.mixin(customs)
Vue.use(VXEUtils, XEUtils)

// 调用自定义扩展函数
this.$utils.custom1()
```

## 'xe-utils' 函数库
#### isNaN (val) 判断是否非数值
```shell
import { isNaN } from 'xe-utils'

isNaN(undefined) // true
isNaN({}) // true
isNaN('num') // true 
isNaN(true) // false
isNaN(null) // false
isNaN('') // false
```
#### isFinite (val) 判断是否为有限数值
```shell
import { isFinite } from 'xe-utils'

isFinite(NaN) // false
isFinite(0) // true
isFinite(2e64) // true
```
#### isArray (val) 判断是否数组
```shell
import { isArray } from 'xe-utils'

isArray(null) // false
isArray({}) // false
isArray([1,2,3]) // true
```
#### isFloat (val) 判断是否小数
```shell
import { isFloat } from 'xe-utils'

isFloat(null) // false
isFloat(0) // false
isFloat(3) // false
isFloat(3.3) // true
```
#### isInteger (val) 判断是否整数
```shell
import { isInteger } from 'xe-utils'

isInteger(null) // false
isInteger(3.3) // false
isInteger(3) // true
isInteger(0) // true
```
#### isFunction (val) 判断是否方法
```shell
import { isFunction } from 'xe-utils'

isFunction({}) // false
isFunction(function(){}) // true
```
#### isBoolean (val) 判断是否Boolean对象
```shell
import { isBoolean } from 'xe-utils'

isBoolean('false') // false
isBoolean(true) // true
```
#### isString (val) 判断是否String对象
```shell
import { isString } from 'xe-utils'

isString(1) // false
isString(true) // false
isString('') // true
isString('abc') // true
```
#### isNumber (val) 判断是否Number对象
```shell
import { isNumber } from 'xe-utils'

isNumber(null) // false
isNumber('1') // false
isNumber(1) // true
```
#### isRegExp (val) 判断是否RegExp对象
```shell
import { isRegExp } from 'xe-utils'

isRegExp(null) // false
isRegExp('a') // false
isRegExp(new RegExp('a')) // true
isRegExp(/\a/) // true
```
#### isObject (val) 判断是否Object对象
```shell
import { isObject } from 'xe-utils'

isObject(null) // true
isObject([]) // true
isObject({}) // true
isObject(123) // false
```
#### isPlainObject (val) 判断是否是一个对象
```shell
import { isPlainObject } from 'xe-utils'

isPlainObject(null) // false
isPlainObject([]) // false
isPlainObject(123) // false
isPlainObject({}) // true
```
#### isDate (val) 判断是否Date对象
```shell
import { isDate } from 'xe-utils'

isDate('2017-12-20') // false
isDate({}) // false
isDate(1514096716800) // false
isDate(new Date()) // true
```
#### isError (val) 判断是否Error对象
```shell
import { isError } from 'xe-utils'

isError(null) // false
isError({}) // false
isError(new Error('error')) // true
```
#### isTypeError (val) 判断是否TypeError对象
```shell
import { isTypeError } from 'xe-utils'

isTypeError(null) // false
isTypeError({}) // false
isTypeError(new TypeError('error')) // true
```
#### isEmpty (val) 判断是否为空,包括空对象、空数值、空字符串
```shell
import { isEmpty } from 'xe-utils'

isEmpty(0) // true
isEmpty('') // true
isEmpty(null) // true
isEmpty({}) // true
isEmpty([]]) // true
```
#### isNull (val) 判断是否为Null
```shell
import { isNull } from 'xe-utils'

isNull(0) // false
isNull('') // false
isNull(null) // true
```
#### isSymbol (val) 判断是否Symbol对象
```shell
import { isSymbol } from 'xe-utils'

isSymbol('a') // false
isSymbol(Symbol('a')) // true
```
#### isArguments (val) 判断是否Arguments对象
```shell
import { isArguments } from 'xe-utils'

isArguments([]) // false
isArguments(arguments) // true
```
#### isElement (val) 判断是否Element对象
```shell
import { isElement } from 'xe-utils'

isElement({}) // false
isElement(document.createElement('div')) // true
```
#### isDocument (val) 判断是否Document对象
```shell
import { isDocument } from 'xe-utils'

isDocument(document.createElement('div')) // false
isDocument(document) // true
```
#### isWindow (val) 判断是否Window对象
```shell
import { isWindow } from 'xe-utils'

isWindow(document) // false
isWindow(window) // true
```
#### isFormData (val) 判断是否FormData对象
```shell
import { isFormData } from 'xe-utils'

isFormData({}) // false
isFormData(new FormData()) // true
```
#### isLeapYear (date) 判断是否闰年
```shell
import { isLeapYear } from 'xe-utils'

isLeapYear('2018-12-01') // false
isLeapYear('2020-12-01') // true
isLeapYear(new Date('2020/12/01')) // true
```
#### getType (obj) 获取对象类型
```shell
import { getType } from 'xe-utils'

getType() // 'undefined'
getType(null) // 'null'
getType('') // 'string'
getType(1) // 'number'
getType([]) // 'array'
getType({}) // 'object'
getType(function(){}) // 'function'
```
#### uniqueId (  ) 获取一个全局唯一标识
```shell
import { uniqueId } from 'xe-utils'

uniqueId() // 1
uniqueId() // 2
```
#### size ( obj ) 返回对象的长度
```shell
import { size } from 'xe-utils'

size('123') // 3
size([1, 3]) // 2
size({a: 2, b: 5}) // 2
```
#### indexOf (obj, val) 返回对象第一个索引值
```shell
import { indexOf } from 'xe-utils'

indexOf([11], 22) // -1
indexOf([11, 22], 22) // 1
```
#### lastIndexOf (obj, val) 从最后开始的索引值,返回对象第一个索引值
```shell
import { lastIndexOf } from 'xe-utils'

lastIndexOf([11], 22) // -1
lastIndexOf([11, 22], 22) // 1
```
#### includes (obj, val) 判断对象是否包含该值,成功返回true否则false
```shell
import { includes } from 'xe-utils'

includes([11], 22) // false
includes([11, 22], 22) // true
```
#### assign (target, ...) 浅拷贝一个或者多个对象到目标对象中
```shell
import { assign, extend } from 'xe-utils'

const obj1 = {a: null}
assign(obj1, {a: 11}) // {a: 11}
extend(obj1, {a: 11}) // {a: 11}
const obj2 = {c: null}
assign(obj2, {a: 11}, {b: 22}) // {a: 11, b: 22, c: null}
extend(obj2, {a: 11}, {b: 22}) // {a: 11, b: 22, c: null}
```
#### stringToJson (str) 字符串转JSON
```shell
import { stringToJson } from 'xe-utils'

stringToJson('{"a":1}') // {a: 1}
stringToJson('[11,22]') // [11, 22]
```
#### jsonToString (obj) JSON转字符串
```shell
import { jsonToString } from 'xe-utils'

jsonToString({a: 1}) // '{"a":1}'
jsonToString([11, 22]) // '[11,22]'
```
#### keys (obj) 获取对象所有属性
```shell
import { keys } from 'xe-utils'

keys({a: 11}) // ['a']
keys([11, 22]) // [0, 1]
```
#### values (obj) 获取对象所有值
```shell
import { values } from 'xe-utils'

values({a: 11}) // [11]
values([11, 22]) // [11, 22]
```
#### entries (obj) 获取对象所有属性、值
```shell
import { entries } from 'xe-utils'

entries({a: 11}) // [['a', 11]]
entries([11, 22]) // [[0, 11], [1, 22]]
```
#### first (obj) 获取对象第一个值
```shell
import { first } from 'xe-utils'

first({a: 11, b : 22}) // 11
first([11, 22]) // 11
```
#### last (obj) 获取对象最后一个值
```shell
import { last } from 'xe-utils'

last({a: 11, b: 22}) // 22
last([11, 22]) // 22
```
#### each ( obj, iteratee, context ) 迭代器
```shell
import { each } from 'xe-utils'

const result = []
each({a: 11, b: 22}, (item, key) => {
  if (key === 'b') {
    result.push(item)
  }
}) // [22]
this.$utils.each({a: 11, b: 22}, (item, key) => {
  if (key === 'b') {
    result.push(item)
  }
}) // [22]
```
#### groupBy ( obj, iteratee, context ) 集合分组,默认使用键值分组,如果有iteratee则使用结果进行分组
```shell
import { groupBy } from 'xe-utils'

const result1 = groupBy([{type: 'a'}, {type: 'b'}]], 'type') // {a: [{a: 'a'}], b: [{b: 'b'}]}
const result2 = groupBy([{type: 'a'}, {type: 'b'}]], (item, key) => {
  return item.type
}) // {a: [{a: 'a'}], b: [{b: 'b'}]}

var result3 = this.$utils.groupBy([{type: 'a'}, {type: 'b'}]], (item, key) => {
  return item.type
}) // {a: [{a: 'a'}], b: [{b: 'b'}]}
```
#### mapObject ( obj, iteratee, context ) 指定方法后的返回值组成的新对象
```shell
import { mapObject } from 'xe-utils'

const result = []
mapObject([{type: 'a'}, {type: 'b'}]], (item, key) => {
  return item.type
}) // {a: {type: 'a', b: {type: 'b'}}}

this.$utils.mapObject([{type: 'a'}, {type: 'b'}]], (item, key) => {
  return item.type
}) // {a: {type: 'a', b: {type: 'b'}}}
```
#### clone (obj, deep) 浅拷贝/深拷贝
```shell
import { clone } from 'xe-utils'

const v1 = {a: 11, b: {b1: 22}
const v2 = clone({a: 11, b: 22})
if (v1.b === v2.b) {
  // true
}
const v3 = clone(v1, true)
if (v1.b === v3.b) {
  // false
}
```

#### uniq ( array ) 数组去重
```shell
import { uniq } from 'xe-utils'

uniq([11, 22, 33, 33, 22, 55]) // [11, 22, 33, 55]
```
#### union ( ...array ) 将多个数的值返回唯一的并集数组
```shell
import { union } from 'xe-utils'

union([11, 22], [33, 22], [44, 11]) // [11, 22, 33, 44]
```
#### sort ( arr, iteratee, context ) 数组按属性值升序
```shell
import { sort } from 'xe-utils'

sort([{a: 9}, {a: 4}, {a: 5}], 'a') // [{a: 4}, {a: 5}, {a: 9}]
sort([{a: 9}, {a: 4}, {a: 5}], (v1, v2) => {
  return v1.a > v2.a ? 1 : -1
}) // [{a: 4}, {a: 5}, {a: 9}]

this.$utils.sort([{a: 9}, {a: 4}, {a: 5}], (v1, v2) => {
  return v1.a > v2.a ? 1 : -1
}) // [{a: 4}, {a: 5}, {a: 9}]
```
#### shuffle ( array ) 将一个数组随机打乱，返回一个新的数组
```shell
import { shuffle } from 'xe-utils'

shuffle([11, 22, 33, 44, 55]) // [22, 33, 55, 11, 44]
```
#### sample ( array, number ) 从一个数组中随机返回几个元素
```shell
import { sample } from 'xe-utils'

sample([11, 22, 33, 44, 55], 3) // [22, 33, 55]
```
#### some ( obj, iteratee, context ) 对象中的值中的每一项运行给定函数,如果函数对任一项返回true,则返回true,否则返回false
```shell
import { some } from 'xe-utils'

some([{a: 11}, {a: 22}]], (item, key) => {
  return item.a === 55
}) // false
some([{a: 11}, {a: 22}]], (item, key) => {
  return item.a === 11
}) // true

this.$utils.some([{a: 11}, {a: 22}]], (item, key) => {
  return item.a === 11
}) // true
```
#### every ( obj, iteratee, context ) 对象中的值中的每一项运行给定函数,如果该函数对每一项都返回true,则返回true,否则返回false
```shell
import { every } from 'xe-utils'

every([{a: 11}, {a: 22}]], (item, key) => {
  return item.a === 11
}) // false
every([{a: 11}, {a: 22}]], (item, key) => {
  return item.a === 11 || item.a === 22
}) // true

this.$utils.every([{a: 11}, {a: 22}]], (item, key) => {
  return item.a === 11 || item.a === 22
}) // true
```
#### filter ( obj, iteratee, context ) 根据回调过滤数据
```shell
import { filter } from 'xe-utils'

filter([{a: 11}, {a: 22}]], (item, key) => {
  return item.a > 11
}) // [{a: 22}]

this.$utils.filter([{a: 11}, {a: 22}]], (item, key) => {
  return item.a > 11
}) // [{a: 22}]
```
#### find ( obj, iteratee, context ) 查找匹配第一条数据
```shell
import { find } from 'xe-utils'

find([{a: 11}, {a: 22}]], (item, key) => {
  return item.a === 55
}) // null
find([{a: 11}, {a: 22}]], (item, key) => {
  return item.a === 22
}) // {a: 22}

this.$utils.find([{a: 11}, {a: 22}]], (item, key) => {
  return item.a === 22
}) // {a: 22}
```
#### map ( obj, iteratee, context ) 指定方法后的返回值组成的新数组
```shell
import { map } from 'xe-utils'

map([{a: 11}, {a: 22}]], (item, key) => {
  return item.a
}) // [11, 22]

this.$utils.map([{a: 11}, {a: 22}]], (item, key) => {
  return item.a
}) // [11, 22]
```

#### now ( ) 返回时间戳
```shell
import { now } from 'xe-utils'

now() // 1514096716800
```
#### stringToDate ( str, format ) 字符串转为日期(yyyy年份、MM月份、dd天、HH小时、mm分钟、ss秒、SSS毫秒)
```shell
import { stringToDate } from 'xe-utils'

stringToDate('2017-12-20') // Wed Dec 20 2017 00:00:00 GMT+0800 (中国标准时间)
stringToDate('2017-12-20 10:10:30') // Wed Dec 20 2017 10:10:30 GMT+0800 (中国标准时间)
stringToDate('12/20/2017', 'MM/dd/yyyy') // Wed Dec 20 2017 00:00:00 GMT+0800 (中国标准时间)
stringToDate('12/20/2017 10:10:30.100', 'MM/dd/yyyy HH:mm') // Wed Dec 20 2017 10:10:00 GMT+0800 (中国标准时间)
stringToDate('12/20/2017 10:10:30.100', 'MM/dd/yyyy HH:mm:ss.SSS') // Wed Dec 20 2017 10:10:30 GMT+0800 (中国标准时间)
```
#### dateToString ( date, format ) 日期格式化为字符串(yyyy年份、MM月份、dd天、HH小时、mm分钟、ss秒、S毫秒、E星期几、q季度)
```shell
import { dateToString } from 'xe-utils'

dateToString(1513735830000) // '2017-12-20 10:10:30'
dateToString(new Date()) // '2017-12-20 10:10:30'
dateToString('2017-12-20 10:10:30', 'MM/dd/yyyy') // '12/20/2017'
dateToString(new Date(), 'yyyy-MM-dd') // '2017-12-20'
dateToString(new Date(), 'yyyy-MM-dd HH:mm:ss.S') // '2017-12-20 10:10:30.100'
dateToString(new Date(), 'yyyy年MM月dd日 HH时mm分ss秒S毫秒,星期E 第q季度') // '2017年12月20日 10时10分30秒100毫秒,星期三 第四季度'
```
#### getWhatMonth ( date, mode, month ) 返回前几个月或后几个月的日期,可以指定月初或月末，默认当前
```shell
import { getWhatMonth } from 'xe-utils'

getWhatMonth(new Date(), -1) // Mon Nov 20 2017 00:00:00 GMT+0800 (中国标准时间)
getWhatMonth(1513735830000, -1) // Mon Nov 20 2017 00:00:00 GMT+0800 (中国标准时间)
getWhatMonth('2017-12-20', -1) // Mon Nov 20 2017 00:00:00 GMT+0800 (中国标准时间)
getWhatMonth('2017-12-20', 1) // Sat Jan 20 2018 00:00:00 GMT+0800 (中国标准时间)
getWhatMonth('2017-12-20', -1, 'first') // Wed Nov 01 2017 00:00:00 GMT+0800 (中国标准时间)
getWhatMonth('2017-12-20', 1, 'last') // Wed Jan 31 2018 00:00:00 GMT+0800 (中国标准时间)
```
#### getWhatWeek ( date, mode, week ) 返回前几周或后几周的日期,可以指定星期几，默认当前
```shell
import { getWhatWeek } from 'xe-utils'

getWhatWeek(new Date(), -1) // Sun Dec 17 2017 00:00:00 GMT+0800 (中国标准时间)
getWhatWeek(1513735830000, -1) // Sun Dec 17 2017 00:00:00 GMT+0800 (中国标准时间)
getWhatWeek('2017-12-20', -1) // Sun Dec 17 2017 00:00:00 GMT+0800 (中国标准时间)
getWhatWeek('2017-12-20', 1) // Sun Dec 31 2017 00:00:00 GMT+0800 (中国标准时间)
getWhatWeek('2017-12-20', -1, 5) // Fri Dec 15 2017 00:00:00 GMT+0800 (中国标准时间)
getWhatWeek('2017-12-20', 1, 0) // Sun Dec 31 2017 00:00:00 GMT+0800 (中国标准时间)
```
#### getWhatDay ( date, day ) 返回前几天或后几天的日期
```shell
import { getWhatDay } from 'xe-utils'

getWhatDay(new Date(), -1) // Tue Dec 19 2017 00:00:00 GMT+0800 (中国标准时间)
getWhatDay(1513735830000, -1) // Tue Dec 19 2017 00:00:00 GMT+0800 (中国标准时间)
getWhatDay('2017-12-20', -1) // Tue Dec 19 2017 00:00:00 GMT+0800 (中国标准时间)
getWhatDay('2017-12-20', 1) // Tue Dec 21 2017 00:00:00 GMT+0800 (中国标准时间)
```
#### getDaysOfMonth ( date, month ) 返回当前日期月份的天数,可以指定前几个月或后几个月，默认当前
```shell
import { getDaysOfMonth } from 'xe-utils'

getDaysOfMonth(new Date()) // 31
getDaysOfMonth(1513735830000) // 31
getDaysOfMonth('2017-12-20') // 31
getDaysOfMonth('2017-12-20', -1) // 30
getDaysOfMonth('2017-12-20', 1) // 31
```
#### getDateDiff ( startDate, endDate, rules ) 返回两个日期之间差距
```shell
import { getDateDiff } from 'xe-utils'

getDateDiff('2017-11-20', '2017-12-21') // {MM: 1, dd: 1}
getDateDiff('2017-12-20', '2017-12-21') // {dd: 1}
getDateDiff('2017-12-20', '2017-12-21') // {dd: 1, ss: 30}
const dateDiff = getDateDiff('2017-12-20 10:10:30', '2017-12-21 10:15:00')
const content = `${dateDiff.mm}分${dateDiff.ss}秒` // '4分30秒'
```

#### random ( min, max ) 获取一个指定范围内随机数
```shell
import { random } from 'xe-utils'

random() // 0 ~ 9
random(3, 6) // 3 ~ 6
random(10, 100) // 10 ~ 100
```
#### min ( arr, iteratee ) 获取最小值
```shell
import { min } from 'xe-utils'

min([22, 66, 77, 11]) // 11
min([{a: 11}, {a: 44}], 'a') // 11
min([{a: 11}, {a: 44}], (item) => {
  return item.a
}) // {a: 11}

this.$utils.min([{a: 11}, {a: 44}], (item) => {
  return item.a
}) // {a: 11}
```
#### max ( arr, iteratee ) 获取最大值
```shell
import { max } from 'xe-utils'

max([22, 66, 77, 11]) // 77
max([{a: 11}, {a: 44}], 'a') // 44
max([{a: 11}, {a: 44}], (item) => {
  return item.a
}) // {a: 44}

this.$utils.max([{a: 11}, {a: 44}], (item) => {
  return item.a
}) // {a: 44}
```

#### escape ( str ) 转义HTML字符串，替换&, <, >, ", ', `字符
```shell
import { escape } from 'xe-utils'

escape('<a>link</a>') // '&lt;a&gt;link&lt;/a&gt;'
```
#### unescape ( str ) 反转escape
```shell
import { unescape } from 'xe-utils'

unescape('&lt;a&gt;link&lt;/a&gt;') // '<a>link</a>'
```

#### browse ( ) 获取浏览器内核
```shell
import { browse } from 'xe-utils'

browse() // {-khtml: false, -moz: false, -ms: fasle, -o: false, -webkit: true}
this.$browse // {-khtml: false, -moz: false, -ms: fasle, -o: false, -webkit: true}
```

#### locat ( ) 获取地址栏信息
```shell
import { locat } from 'xe-utils'

locat() // {hash: '', host: '', hostname: '', href: '', protocol: '', port: '', origin: '', query: {...}, params: {...}, ...}
this.$locat() // {hash: '', host: '', hostname: '', href: '', protocol: '', port: '', origin: '', query: {...}, params: {...}, ...}
```

#### cookie ( ) Cookie操作函数
```shell
import { cookie } from 'xe-utils'

cookie() // 获取所有
cookie('name') // 根据name获取
cookie('name', null, {expires: -1}) // 删除
cookie([{name: 'name', expires: -1}]) // 批量删除
cookie('name', 'value') // 添加/修改
cookie([{name: 'name', value: 'value'}]) // 批量添加/修改
cookie('name', 'value', {domain: 'xxx.com', path: '/', expires: 7, secure: true}) // 添加并设置domain/path/secure/expires 7天后过期
cookie([{name: 'name', value: 'value', domain: 'xxx.com', path: '/', expires: 7, secure: true}]) // 批量添加并设置domain/path/secure/expires 7天后过期
```

## License
Copyright (c) 2017-present, Xu Liangzhan