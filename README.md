# XEUtils 函数库

[![npm version](https://img.shields.io/npm/v/xe-utils.svg?style=flat-square)](https://www.npmjs.org/package/xe-utils)
[![npm downloads](https://img.shields.io/npm/dm/xe-utils.svg?style=flat-square)](http://npm-stat.com/charts.html?package=xe-utils)

XEUtils 提供一套实用的基础函数、任意格式的日期转换函数，浏览器相关操作函数等...

## 兼容性

![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_7-8/internet-explorer_7-8_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png)
--- | --- | --- | --- | --- | --- |
7+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 6.1+ ✔ |

## CDN 安装

使用 script 方式安装，XEUtils 会定义为全局变量
生产环境请使用 xe-utils.min.js，更小的压缩版本，可以带来更快的速度体验。

### cdnjs 获取最新版本

[点击浏览](https://cdn.jsdelivr.net/npm/xe-utils/)已发布的所有 npm 包源码

```HTML
<script src="https://cdn.jsdelivr.net/npm/xe-utils/dist/xe-utils.js"></script>
```

### unpkg 获取最新版本

[点击浏览](https://unpkg.com/xe-utils/)已发布的所有 npm 包源码

```HTML
<script src="https://unpkg.com/xe-utils/dist/xe-utils.js"></script>
```

## AMD 安装

### require.js

```JavaScript
// require 配置
require.config({
  paths: {
    // ...,
    'xe-utils': './dist/xe-utils.min'
  }
})
define('xe-utils', function (XEUtils) {
  XEUtils.dateToString(new Date()) // 2018-01-01 10:30:00
})
```

## NPM 安装

```JavaScript
npm install xe-utils --save
```

### NodeJS 导入

```JavaScript
const XEUtils = require('xe-utils')
```

### ES6 Module import 部分导入

```JavaScript
import { dateToString, stringToDate } from 'xe-utils'

dateToString(new Date()) // 2018-01-01 10:30:00
stringToDate('2018-01-01 10:30:00') // Mon Jan 01 2018 10:30:00 GMT+0800 (中国标准时间)
```

### ES6 Module import 导入所有

```JavaScript
import XEUtils from 'xe-utils'
```

## 全局参数设置

```JavaScript
import XEUtils from 'xe-ajax'

XEUtils.setup({
  formatDate: 'yyyy-MM-dd HH:mm:ss.SSS',
  formatString: 'yyyy-MM-dd HH:mm:ss',
  formatStringMatchs : {
    W: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    q: [null, '第一季度', '第二季度', '第三季度', '第四季度']
  },
  commafys: {spaceNumber: 3, separator: ',', fixed: 0}
})
```

## API

### isNaN (val) 判断是否非数值

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isNaN(undefined) // true
XEUtils.isNaN({}) // true
XEUtils.isNaN('num') // true
XEUtils.isNaN(true) // false
XEUtils.isNaN(null) // false
XEUtils.isNaN('') // false
```

### isFinite (val) 判断是否为有限数值

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isFinite(NaN) // false
XEUtils.isFinite(0) // true
XEUtils.isFinite(2e64) // true
```

### isUndefined (val) 判断Undefined

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isUndefined(0) // false
XEUtils.isUndefined() // true
```

### isArray (val) 判断是否数组

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isArray(null) // false
XEUtils.isArray({}) // false
XEUtils.isArray([1,2,3]) // true
```

### isFloat (val) 判断是否小数

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isFloat(null) // false
XEUtils.isFloat(0) // false
XEUtils.isFloat(3) // false
XEUtils.isFloat(3.3) // true
```

### isInteger (val) 判断是否整数

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isInteger(null) // false
XEUtils.isInteger(3.3) // false
XEUtils.isInteger(3) // true
XEUtils.isInteger(0) // true
```

#### isFunction (val) 判断是否方法

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isFunction({}) // false
XEUtils.isFunction(function(){}) // true
```

### isBoolean (val) 判断是否Boolean对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isBoolean('false') // false
XEUtils.isBoolean(true) // true
```

### isString (val) 判断是否String对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isString(1) // false
XEUtils.isString(true) // false
XEUtils.isString('') // true
XEUtils.isString('abc') // true
```

### isNumber (val) 判断是否Number对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isNumber(null) // false
XEUtils.isNumber('1') // false
XEUtils.isNumber(1) // true
```

### isRegExp (val) 判断是否RegExp对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isRegExp(null) // false
XEUtils.isRegExp('a') // false
XEUtils.isRegExp(new RegExp('a')) // true
XEUtils.isRegExp(/\a/) // true
```

### isObject (val) 判断是否Object对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isObject(null) // true
XEUtils.isObject([]) // true
XEUtils.isObject({}) // true
XEUtils.isObject(123) // false
```

### isPlainObject (val) 判断是否是一个对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.sPlainObject(null) // false
XEUtils.isPlainObject([]) // false
XEUtils.isPlainObject(123) // false
XEUtils.isPlainObject({}) // true
```

### isDate (val) 判断是否Date对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isDate('2017-12-20') // false
XEUtils.isDate({}) // false
XEUtils.isDate(1514096716800) // false
XEUtils.isDate(new Date()) // true
```

### isError (val) 判断是否Error对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isError(null) // false
XEUtils.isError({}) // false
XEUtils.isError(new Error('error')) // true
```

### isTypeError (val) 判断是否TypeError对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isTypeError(null) // false
XEUtils.isTypeError({}) // false
XEUtils.isTypeError(new TypeError('error')) // true
```

### isEmpty (val) 判断是否为空,包括空对象、空数值、空字符串

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isEmpty(0) // true
XEUtils.isEmpty('') // true
XEUtils.isEmpty(null) // true
XEUtils.isEmpty({}) // true
XEUtils.isEmpty([]]) // true
```

### isNull (val) 判断是否为Null

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isNull(0) // false
XEUtils.isNull('') // false
XEUtils.isNull(null) // true
```

### isSymbol (val) 判断是否Symbol对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isSymbol('a') // false
XEUtils.isSymbol(Symbol('a')) // true
```

### isArguments (val) 判断是否Arguments对象

```JavaScript
import { isArguments } from 'xe-utils'

isArguments([]) // false
isArguments(arguments) // true
```

### isElement (val) 判断是否Element对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isElement({}) // false
XEUtils.isElement(document.createElement('div')) // true
```

### isDocument (val) 判断是否Document对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isDocument(document.createElement('div')) // false
XEUtils.isDocument(document) // true
```

### isWindow (val) 判断是否Window对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isWindow(document) // false
XEUtils.isWindow(window) // true
```

### isFormData (val) 判断是否FormData对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isFormData({}) // false
XEUtils.isFormData(new FormData()) // true
```

### isMap (val) 判断是否Map对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isMap({}) // false
XEUtils.isMap(new Map()) // true
```

### isWeakMap (val) 判断是否WeakMap对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isWeakMap({}) // false
XEUtils.isWeakMap(new WeakMap()) // true
```

### isSet (val) 判断是否Set对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isSet({}) // false
XEUtils.isSet(new Set()) // true
```

### isWeakSet (val) 判断是否WeakSet对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isWeakSet({}) // false
XEUtils.isWeakSet(new WeakSet()) // true
```

### isLeapYear (date) 判断是否闰年

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isLeapYear() // 判断当前年 true
XEUtils.isLeapYear('2018-12-01') // false
XEUtils.isLeapYear('2020-12-01') // true
XEUtils.isLeapYear(new Date('2020/12/01')) // true
```

### isDateSame (date1, date2, format) 判断两个日期是否相同

```JavaScript
import XEUtils from 'xe-utils'

// 例如：new Date() => 2018-12-01
XEUtils.isDateSame('2018-12-01', '2018-12-01') // true
XEUtils.isDateSame(new Date(), '2018-12-01', 'yyyy') // 判断是否同一年 true
XEUtils.isDateSame(new Date(), XEUtils.stringToDate('12/30/2018', 'MM/dd/yyyy'), 'MM') // 判断是否同一月 true
XEUtils.isDateSame(new Date(), new Date(), 'dd') // 判断是否同一日 true
XEUtils.isDateSame(new Date(), new Date(), 'yyyyMMdd') // 判断是否同年同月同日 true
```

### getType (obj) 获取对象类型

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.getType() // 'undefined'
XEUtils.getType(null) // 'null'
XEUtils.getType('') // 'string'
XEUtils.getType(1) // 'number'
XEUtils.getType([]) // 'array'
XEUtils.getType({}) // 'object'
XEUtils.getType(function(){}) // 'function'
```

### uniqueId ( prefix ) 获取一个全局唯一标识

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.uniqueId() // 1
XEUtils.uniqueId() // 2
XEUtils.uniqueId('prefix_') // 'prefix_3'
```

### getSize ( obj ) 返回对象的长度

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.getSize('123') // 3
XEUtils.getSize([1, 3]) // 2
XEUtils.getSize({a: 2, b: 5}) // 2
```

### indexOf (obj, val) 返回对象第一个索引值

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.indexOf([11], 22) // -1
XEUtils.indexOf([11, 22], 22) // 1
```

### lastIndexOf (obj, val) 从最后开始的索引值,返回对象第一个索引值

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.lastIndexOf([11], 22) // -1
XEUtils.lastIndexOf([11, 22], 22) // 1
```

### includes (obj, val) 判断对象是否包含该值,成功返回true否则false

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.includes([11], 22) // false
XEUtils.includes([11, 22], 22) // true
```

### includeArrays (array1, array2) 判断数组是否包含另一数组

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.includeArrays([11, 22, 33], []) // true
XEUtils.includeArrays([11, 22, 33], [11]) // true
XEUtils.includeArrays([11, 22, 33], [22, 33]) // true
XEUtils.includeArrays([11, 22, 33], [22, 44]) // false
```

### bind (callback, context[, ...arguments]) 创建一个绑定上下文的函数

```JavaScript
import XEUtils from 'xe-utils'

var rest = XEUtils.bind(function (val) {
  return this.name + ' = ' + val
}, {name: 'test'})
rest(222) // 'test = 222'
```

### once (callback, context[, ...arguments]) 创建一个只能调用一次的函数,只会返回第一次执行后的结果

```JavaScript
import XEUtils from 'xe-utils'

var rest = XEUtils.once(function (val) {
  return this.name + ' = ' + val
}, {name: 'test'})
rest(222) // 'test = 222'
rest(333) // 'test = 222'
```

### clearObject (obj, defs) 清空对象,支持默认值

```JavaScript
import XEUtils from 'xe-utils'

var a = [11, 22, 33, 33]
XEUtils.clearObject(a) // []
XEUtils.clearObject(a, [11]) // [11]
var b = {b1: 11, b2: 22}
XEUtils.clearObject(b) // {}
XEUtils.clearObject(b, {b1: 11}) // {b1: 11}
```

### assign/objectAssign/extend ([deep], target, ...) 浅拷贝一个或者多个对象到目标对象中，如果第一值是true，则使用深拷贝

```JavaScript
import XEUtils, { objectAssign } from 'xe-utils'

const obj1 = {a: null}
XEUtils.assign(obj1, {a: 11}) // {a: 11}

// 浅拷贝
const obj2 = {a: null}
const obj3 = {bb: {b: 11}}
const obj4 = objectAssign(obj2, {a: 11}) // {a: 11, c: null, bb: {b: 11}}
obj3.bb = 22 // obj4 = {a: 11, c: null, bb: {b: 22}}

// 深拷贝
const obj2 = {a: null}
const obj3 = {bb: {b: 11}}
const obj4 = XEUtils.extend(true, obj3, {a: 11}) // {a: 11, c: null, bb: {b: 11}}
obj3.bb = 22 // obj4 = {a: 11, c: null, bb: {b: 11}}
```

### stringToJson (str) 字符串转JSON

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.stringToJson('{"a":1}') // {a: 1}
XEUtils.stringToJson('[11,22]') // [11, 22]
```

### jsonToString (obj) JSON转字符串

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.jsonToString({a: 1}) // '{"a":1}'
XEUtils.jsonToString([11, 22]) // '[11,22]'
```

### keys/objectKeys (obj) 获取对象所有属性

```JavaScript
import XEUtils, { objectKeys } from 'xe-utils'

XEUtils.keys({a: 11}) // ['a']
objectKeys([11, 22]) // [0, 1]
```

### values/objectValues (obj) 获取对象所有值

```JavaScript
import XEUtils, { objectValues } from 'xe-utils'

XEUtils.values({a: 11}) // [11]
objectValues([11, 22]) // [11, 22]
```

### entries/objectEntries (obj) 获取对象所有属性、值

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.objectEntries({a: 11}) // [['a', 11]]
XEUtils.objectEntries([11, 22]) // [[0, 11], [1, 22]]
```

### first/arrayFirst (obj) 获取对象第一个值

```JavaScript
import XEUtils, { arrayFirst } from 'xe-utils'

XEUtils.first({a: 11, b : 22}) // 11
arrayFirst([11, 22]) // 11
```

### last/arrayLast (obj) 获取对象最后一个值

```JavaScript
import XEUtils, { arrayLast } from 'xe-utils'

XEUtils.last({a: 11, b: 22}) // 22
arrayLast([11, 22]) // 22
```

### each/forEach/objectEach/arrayEach ( obj, iteratee, context ) 迭代器

```JavaScript
import XEUtils, { objectEach, arrayEach } from 'xe-utils'

XEUtils.each({a: 11, b: 22}, (item, key) => {
  // 通用迭代器
})
XEUtils.forEach([11, 22, 33], (item, index) => {
  // 数组迭代器
})
arrayEach([11, 22, 33], (item, index) => {
  // 数组迭代器
})
objectEach({a: 11, b: 22}, (item, key) => {
  // 对象迭代器
})
```

### groupBy ( obj, iteratee, context ) 集合分组,默认使用键值分组,如果有iteratee则使用结果进行分组

```JavaScript
import XEUtils from 'xe-utils'

const result1 = XEUtils.groupBy([{type: 'a'}, {type: 'b'}], 'type') // {a: [{type: 'a'}], b: [{type: 'b'}]}
const result2 = XEUtils.groupBy([{type: 'a'}, {type: 'b'}], item => item.type) // {a: [{a: 'a'}], b: [{b: 'b'}]}
```

### objectMap ( obj, iteratee, context ) 指定方法后的返回值组成的新对象

```JavaScript
import XEUtils from 'xe-utils'

const result = []
XEUtils.objectMap({a: {type: 'a'}, b: {type: 'b'}}, item => item.type) // {a: "a", b: "b"}
```

### clone (obj, deep) 浅拷贝/深拷贝

```JavaScript
import XEUtils from 'xe-utils'

const v1 = {a: 11, b: {b1: 22}}
const v2 = XEUtils.clone(v1)
if (v1.b === v2.b) {
  // true
}
const v3 = XEUtils.clone(v1, true)
if (v1.b === v3.b) {
  // false
}
```

### uniq/arrayUniq ( array ) 数组去重

```JavaScript
import XEUtils, { arrayUniq } from 'xe-utils'

XEUtils.uniq([11, 22, 33, 33, 22, 55]) // [11, 22, 33, 55]
arrayUniq([11, 22, 33, 33, 22, 55]) // [11, 22, 33, 55]
```

### union/arrayUnion ( ...array ) 将多个数的值返回唯一的并集数组

```JavaScript
import XEUtils, { arrayUnion } from 'xe-utils'

XEUtils.union([11, 22], [33, 22], [44, 11]) // [11, 22, 33, 44]
arrayUnion([11, 22], [33, 22], [44, 11]) // [11, 22, 33, 44]
```

### sort/arraySort ( arr, iteratee, context ) 数组按属性值升序

```JavaScript
import XEUtils, { arraySort } from 'xe-utils'

XEUtils.sort([{a: 9}, {a: 4}, {a: 5}], 'a') // [{a: 4}, {a: 5}, {a: 9}]
arraySort([{a: 9}, {a: 4}, {a: 5}], (v1, v2) => v1.a > v2.a ? 1 : -1) // [{a: 4}, {a: 5}, {a: 9}]
```

### shuffle/arrayShuffle ( array ) 将一个数组随机打乱，返回一个新的数组

```JavaScript
import XEUtils, { arrayShuffle } from 'xe-utils'

XEUtils.shuffle([11, 22, 33, 44, 55]) // [22, 33, 55, 11, 44]
arrayShuffle([11, 22, 33, 44, 55]) // [22, 33, 55, 11, 44]
```

### sample/arraySample ( array, number ) 从一个数组中随机返回几个元素

```JavaScript
import XEUtils, { arraySample } from 'xe-utils'

XEUtils.sample([11, 22, 33, 44, 55], 3) // [22, 33, 55]
arraySample([11, 22, 33, 44, 55], 3) // [22, 33, 55]
```

### some/arraySome ( obj, iteratee, context ) 对象中的值中的每一项运行给定函数,如果函数对任一项返回true,则返回true,否则返回false

```JavaScript
import XEUtils, { arraySome } from 'xe-utils'

XEUtils.some([{value: 11}, {value: 22}], item => item.value === 55) // false
arraySome([{value: 11}, {value: 22}], item => item.value === 11) // true
```

### every/arrayEvery ( obj, iteratee, context ) 对象中的值中的每一项运行给定函数,如果该函数对每一项都返回true,则返回true,否则返回false

```JavaScript
import XEUtils, { arrayEvery } from 'xe-utils'

XEUtils.every([{value: 11}, {value: 22}], item => item.value === 11) // false
arrayEvery([{value: 11}, {value: 22}]], item => item.value === 11 || item.value === 22) // true
```

### filter/arrayFilter ( obj, iteratee, context ) 根据回调过滤数据

```JavaScript
import XEUtils, { arrayFilter } from 'xe-utils'

XEUtils.filter([{value: 11}, {value: 22}], item => item.value > 11) // [{a: 22}]
arrayFilter([{value: 11}, {value: 22}], item => item.value > 11) // [{a: 22}]
```

### find/arrayFind ( obj, iteratee, context ) 查找匹配第一条数据

```JavaScript
import XEUtils, { arrayFind } from 'xe-utils'

XEUtils.find([{value: 11}, {value: 22}], item => item.value === 55) // null
arrayFind([{value: 11}, {value: 22}], item => item.value === 22) // {a: 22}
```

### map/arrayMap ( obj, iteratee, context ) 指定方法后的返回值组成的新数组

```JavaScript
import XEUtils, { arrayMap } from 'xe-utils'

XEUtils.map([{value: 11}, {value: 22}], item => item.value) // [11, 22]
arrayMap([{value: 11}, {value: 22}], item => item.value) // [11, 22]
```

### copyWithin/arrayCopyWithin ( array, target, start, end ) 浅复制数组的一部分到同一数组中的另一个位置,数组大小不变

```JavaScript
import XEUtils, { arrayCopyWithin } from 'xe-utils'

XEUtils.copyWithin([11, 22, 33, 44], 0, 2) // [33, 44, 33, 44]
XEUtils.copyWithin([11, 22, 33, 44], 0, -1) // [44, 22, 33, 44]
arrayCopyWithin([11, 22, 33, 44], 0, 2) // [33, 44, 33, 44]
arrayCopyWithin([11, 22, 33, 44], 0, -1) // [44, 22, 33, 44]
```

### sum/arraySum ( obj, iteratee, context ) 求和函数，将数值相加

```JavaScript
import XEUtils, { arraySum } from 'xe-utils'

XEUtils.sum([22, 66, 88]) // 176
XEUtils.sum([{value: 11}, {value: 22}, {value: 66}], 'value') // 99
arraySum([{value: 11}, {value: 22}, {value: 66}], item => item.value * 2) // 198
```

### mean/arrayMean ( obj, iteratee, context ) 求平均值函数

```JavaScript
import XEUtils, { arrayMean } from 'xe-utils'

XEUtils.mean([22, 66, 60, 60]) // 52
XEUtils.mean([{value: 34}, {value: 22}], 'value') // 28
arrayMean([{value: 11}, {value: 22}, {value: 66}], item => item.value * 2) // 66
```

### from ( array, callback, context ) 根据数组或可迭代对象中创建一个新的数组

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.from([]) // []
XEUtils.from({}) // []
XEUtils.from(arguments) // [...]
```

### reduce/arrayReduce ( array, callback, initialValue ) 接收一个函数作为累加器，数组中的每个值（从左到右）开始合并，最终为一个值

```JavaScript
import XEUtils, { arrayReduce } from 'xe-utils'

XEUtils.reduce([22, 66, 88], (previous, item) => previous + item) // 176
arrayReduce([22, 66, 88], (previous, item) => (previous + item) * 2) // 528
```

### zip ( ) 将每个数组中相应位置的值合并在一起

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.zip(['name1', 'name2', 'name3'], [true, true, false], [30, 40, 20])
// [['name1', true, 30], ['name2', true, 40], ['name3', false, 20]]
```

### unzip ( arrays ) 与 zip 相反

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.unzip([['name1', true, 30], ['name2', true, 40], ['name3', false, 20]])
// [['name1', 'name2', 'name3'], [true, true, false], [30, 40, 20]]
```

### chunk ( array, size ) 将一个数组分割成大小的组。如果数组不能被平均分配，那么最后一块将是剩下的元素

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.chunk(['a', 'b', 'c', 'd'], 2) // [['a', 'b'], ['c', 'd']]
XEUtils.chunk(['a', 'b', 'c', 'd'], 3) // [['a', 'b', 'c'], ['d']]
```

### now/timestamp ( ) 返回时间戳

```JavaScript
import XEUtils, { timestamp } from 'xe-utils'

XEUtils.now() // 1514096716800
timestamp() // 1514096716800
```

### stringToDate ( str, format ) 任意格式字符串转为日期

| 属性 | 描述 |
|------|------|
| yyyy | 年份 |
| MM | 月份 |
| dd | 日 |
| HH | 小时 |
| mm | 分钟 |
| ss | 秒 |
| SSS | 毫秒 |

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.stringToDate('2017-12-20') // Wed Dec 20 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.stringToDate('2017-12-20 10:10:30') // Wed Dec 20 2017 10:10:30 GMT+0800 (中国标准时间)
XEUtils.stringToDate('12/20/2017', 'MM/dd/yyyy') // Wed Dec 20 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.stringToDate('2017/12/20 10:10:30', 'yyyy/MM/dd HH:mm') // Wed Dec 20 2017 10:10:00 GMT+0800 (中国标准时间)
XEUtils.stringToDate('12/20/2017 10:10:30.100', 'MM/dd/yyyy HH:mm:ss.SSS') // Wed Dec 20 2017 10:10:30 GMT+0800 (中国标准时间)
```

### dateToString ( date[, format, options] ) 日期格式化为任意格式字符串

| 属性 | 描述 | 备注 | 值 |
|------|------|------|------|
| yy | 年份 | 自动截取后两位 |  |
| yyyy | 年份 |  |
| M | 月份 |  | 1~12 |
| MM | 月份 | 自动补0 | 1~12 |
| d | 日 |  | 1~31 |
| dd | 日 | 自动补0 | 1~31 |
| h | 12小时制 |  | 1~12 |
| hh | 12小时制 | 自动补0 | 1~12 |
| H | 24小时制 |  | 0~23 |
| HH | 24小时制 | 自动补0 | 0~23 |
| m | 分钟 |  | 0~59 |
| mm | 分钟 | 自动补0 | 0~59 |
| s | 秒 |  | 0~59 |
| ss | 秒 | 自动补0 | 0~59 |
| S | 毫秒 |  | 0~999 |
| SSS | 毫秒 | 自动补0 | 0~999 |
| a | 上午,下午 |  | am/pm |
| A | 上午,下午 |  | AM/PM |
| D | 年份的第几天 |  | 1~366 |
| e | 星期几 |  | 0~6 |
| E | 星期几 |  | 1~7 |
| q | 季度 |  | 1~4 |
| w | 年份的第几周 |  | 1~53 |
| W | 月份的第几周 |  | 1~5 |
| z | 时区 |  | GMT |
| Z | 时区值 |  | [+-]HHmm |

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.dateToString(1513735830000) // '2017-01-01 14:05:30'
XEUtils.dateToString(new Date()) // '2017-01-01 14:05:30'
XEUtils.dateToString('2017-01-01 10:05:30', 'MM/dd/yyyy') // '01/01/2017'
XEUtils.dateToString('2017-01-01 10:05:30', 'M/d/yyyy') // '1/1/2017'
XEUtils.dateToString(new Date(), 'yyyy-MM-dd') // '2017-01-01'
XEUtils.dateToString(new Date(), 'yy-M-d') // '17-1-1'
XEUtils.dateToString(new Date(), 'yyyy-MM-dd HH:mm:ss.SSS') // '2017-01-01 14:05:30.099'
XEUtils.dateToString(new Date(), 'yyyy-MM-dd hh:mm:ss.SSSZ') // '2017-01-01 02:05:30.099+0800'
XEUtils.dateToString(new Date(), 'yyyy-MM-dd hh:mm:ss.SSS zZ') // '2017-01-01 02:05:30.099 GMT+0800'
XEUtils.dateToString('2017-11-20 10:05:30', 'yyyy-M-d h:m:s.S') // '2017-11-20 2:5:30.99'
XEUtils.dateToString(new Date(), 'yyyy-M-d H:m:s.S') // '2017-1-1 14:5:30.99'
XEUtils.dateToString(new Date(), 'yyyy-M-d h:m:s.S') // '2017-1-1 2:5:30.99'
XEUtils.dateToString(new Date(), 'yyyy年MM月dd日 HH时mm分ss秒S毫秒,星期E 第q季度') // '2017年01月01日 14时05分30秒99毫秒,星期3 第4季度'
XEUtils.dateToString(new Date(), 'yy年M月d日 HH时m分s秒S毫秒,星期E 第q季度') // '17年1月1日 14时5分30秒99毫秒,星期3 第4季度'
XEUtils.dateToString(new Date(), 'yyyy年MM月dd日 hh时mm分ss秒SSS毫秒 星期E e 第q季度 今年第D天 今年第w周 当月第W周 a A 时区zZ')
// 2018年05月29日 09时44分46秒647毫秒 星期2 1 第2季度 今年第149天 今年第22周 当月第4周 am AM 时区GMT+0800
```

### getWhatYear ( date, year, month ) 返回前几年或后几年的日期,可以指定年初(first)、年末(last)、月份(0~11)，默认当前

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.getWhatYear(new Date(), -1) // Mon Nov 20 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatYear(1513735830000, -1) // Tue Dec 20 2016 10:10:30 GMT+0800 (中国标准时间)
XEUtils.getWhatYear('2017-12-20', -1) // Tue Dec 20 2016 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatYear('2017-12-20', 1) // Thu Dec 20 2018 00:00:00 GMT+0800 (中国标准时间)
```

### getWhatMonth ( date, mode, month ) 返回前几月或后几月的日期,可以指定月初(first)、月末(last)、天数，默认当前

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.getWhatMonth(new Date(), -1) // Mon Nov 20 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatMonth(1513735830000, -1) // Mon Nov 20 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatMonth('2017-12-20', -1) // Mon Nov 20 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatMonth('2017-12-20', 1) // Sat Jan 20 2018 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatMonth('2017-12-20', -1, 'first') // Wed Nov 01 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatMonth('2017-12-20', 1, 'last') // Wed Jan 31 2018 00:00:00 GMT+0800 (中国标准时间)
```

### getWhatWeek ( date, mode, week ) 返回前几周或后几周的日期,可以指定星期几(0~6)，默认当前

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.getWhatWeek(new Date(), -1) // Sun Dec 17 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatWeek(1513735830000, -1) // Sun Dec 17 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatWeek('2017-12-20', -1) // Sun Dec 17 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatWeek('2017-12-20', 1) // Sun Dec 31 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatWeek('2017-12-20', -1, 5) // Fri Dec 15 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatWeek('2017-12-20', 1, 0) // Sun Dec 31 2017 00:00:00 GMT+0800 (中国标准时间)
```

### getWhatDay ( date, day ) 返回前几天或后几天的日期

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.getWhatDay(new Date(), -1) // Tue Dec 19 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatDay(1513735830000, -1) // Tue Dec 19 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatDay('2017-12-20', -1) // Tue Dec 19 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatDay('2017-12-20', 1) // Tue Dec 21 2017 00:00:00 GMT+0800 (中国标准时间)
```

### getDayOfYear ( date, month ) 返回当前年份的天数,可以指定前几个年或后几个年，默认当前

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.getDayOfYear(new Date()) // 365
XEUtils.getDayOfYear(1513735830000) // 365
XEUtils.getDayOfYear('2017-12-20') // 365
XEUtils.getDayOfYear('2019-12-20', 1) // 366
XEUtils.getDayOfYear('2020-12-20') // 366
```

### getYearDay ( date ) 返回当前年的第几天

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.getYearDay(new Date()) // 149
XEUtils.getYearDay('2017-01-20') // 20
XEUtils.getYearDay('2018-05-20') // 140
```

### getYearWeek ( date ) 返回当前年的第几周

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.getYearWeek(new Date()) // 22
XEUtils.getYearWeek('2017-01-20') // 3
XEUtils.getYearWeek('2018-05-20') // 20
```

### getMonthWeek ( date ) 返回当前月的第几周

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.getMonthWeek(new Date()) // 4
XEUtils.getMonthWeek('2017-01-20') // 3
XEUtils.getMonthWeek('2018-05-20') // 2
```

### getDayOfMonth ( date, month ) 返回当前月份的天数,可以指定前几个月或后几个月，默认当前

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.getDayOfMonth(new Date()) // 31
XEUtils.getDayOfMonth(1513735830000) // 31
XEUtils.getDayOfMonth('2017-12-20') // 31
XEUtils.getDayOfMonth('2017-12-20', -1) // 30
XEUtils.getDayOfMonth('2017-12-20', 1) // 31
```

### getDateDiff ( startDate, endDate, rules ) 返回两个日期之间差距,如果结束日期小于开始日期done为fasle

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.getDateDiff('2017-11-20', '2017-12-21') // {MM: 1, dd: 1}
XEUtils.getDateDiff('2017-12-20', '2017-12-21') // {dd: 1}
XEUtils.getDateDiff('2017-12-20', '2017-12-21') // {dd: 1, ss: 30}
XEUtils.getDateDiff('2018-01-01', '2017-12-21') // {done: false}
const dateDiff = XEUtils.getDateDiff('2017-12-20 10:10:30', '2017-12-21 10:15:00')
const content = `${dateDiff.mm}分${dateDiff.ss}秒` // '4分30秒'
```

### getRandom ( min, max ) 获取一个指定范围内随机数

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.getRandom() // 0 ~ 9
XEUtils.getRandom(3, 6) // 3 ~ 6
XEUtils.getRandom(10, 100) // 10 ~ 100
```

### min/arrayMin ( arr, iteratee ) 获取最小值

```JavaScript
import XEUtils, { arrayMin } from 'xe-utils'

XEUtils.min([22, 66, 77, 11]) // 11
arrayMin([{a: 11}, {a: 44}], 'a') // 11
arrayMin([{a: 11}, {a: 44}], item => item.a) // {a: 11}
```

### max/arrayMax ( arr, iteratee ) 获取最大值

```JavaScript
import XEUtils, { arrayMax } from 'xe-utils'

XEUtils.max([22, 66, 77, 11]) // 77
arrayMax([{a: 11}, {a: 44}], 'a') // 44
arrayMax([{a: 11}, {a: 44}], item => item.a) // {a: 44}
```

### commafy ( num, options ) 数值千分位分隔符、小数点

```JavaScript
import XEUtils from 'xe-utils'

// 千分位格式化 1,000,000
XEUtils.commafy(1000000)
// 格式化金额 1,000,000.00
XEUtils.commafy(1000000, {fixed: 2})
// 格式化银行卡 1234 1234 1234 1234
XEUtils.commafy(1234123412341234, {spaceNumber: 4, separator: ' ', fixed: 0})
```

### toNumber/stringToNumber ( num ) 转数值

```JavaScript
import XEUtils, { stringToNumber } from 'xe-utils'

XEUtils.toNumber(123) // 123
XEUtils.toNumber('12.3'}) // 12.3
stringToNumber('abc') // 0
```

### toInteger/stringToInteger ( num ) 转整数

```JavaScript
import XEUtils, { stringToInteger } from 'xe-utils'

XEUtils.toInteger(123) // 123
XEUtils.toInteger('12.3'}) // 12
stringToInteger('abc') // 0
```

### trim/stringTrim ( str ) 去除字符串左右两边的空格

```JavaScript
import XEUtils, { stringTrim } from 'xe-utils'

XEUtils.trim(' abc ') // 'abc'
stringTrim(' abc ') // 'abc'
```

### trimLeft/stringTrimLeft ( str ) 去除字符串左边的空格

```JavaScript
import XEUtils, { stringTrimLeft } from 'xe-utils'

XEUtils.trimLeft(' abc ') // 'abc '
stringTrimLeft(' abc ')  // 'abc '
```

### trimRight/stringTrimRight ( str ) 去除字符串右边的空格

```JavaScript
import XEUtils, { stringTrimRight } from 'xe-utils'

XEUtils.trimRight(' abc ') // ' aa'
stringTrimRight(' abc ') // ' aa'
```

### escape ( str ) 转义HTML字符串，替换&, <, >, ", ', `字符

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.escape('<a>link</a>') // '&lt;a&gt;link&lt;/a&gt;'
```

### unescape ( str ) 反转escape

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.unescape('&lt;a&gt;link&lt;/a&gt;') // '<a>link</a>'
```

### camelCase ( str ) 将带驼峰字符串转成字符串

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.camelCase('projectName') // 'project-name'
```

### kebabCase ( str ) 将字符串转成驼峰字符串

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.kebabCase('project-name') // 'projectName'
```

### stringRepeat ( str, count ) 将字符串重复 n 次

```JavaScript
import XEUtils, { stringRepeat } from 'xe-utils'

XEUtils.repeat('a', 5) // aaaaa
stringRepeat('a', 5) // aaaaa
```

### padStart/stringPadStart ( str, targetLength, padString ) 用指定字符从前面开始补全字符串

```JavaScript
import XEUtils, { stringPadStart } from 'xe-utils'

XEUtils.padStart('a', 5, 'b') // bbbba
stringPadStart('a', 5, 'b') // bbbba
```

### padEnd/stringPadEnd ( str, targetLength, padString ) 用指定字符从后面开始补全字符串

```JavaScript
import XEUtils, { stringPadEnd } from 'xe-utils'

XEUtils.padEnd('a', 5, 'b') // abbbb
stringPadEnd('a', 5, 'b') // abbbb
```

### startsWith/stringStartsWith ( str, val, startIndex ) 判断字符串是否在源字符串的头部

```JavaScript
import XEUtils, { stringStartsWith } from 'xe-utils'

XEUtils.startsWith('abc', 'b') // false
stringStartsWith('abc', 'a') // true
```

### endsWith/stringEndsWith ( str, val, startIndex ) 判断字符串是否在源字符串的尾部

```JavaScript
import XEUtils, { stringEndsWith } from 'xe-utils'

XEUtils.endsWith('abc', 5, 'a') // false
stringEndsWith('abc', 5, 'c') // true
```

### browse ( ) 获取浏览器内核

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.browse()
// {
//   "-khtml": false,
//   "-moz": false,
//   "-ms": fasle,
//   "-o": false,
//   "-webkit": true,
//   isMobile: false,
//   isNode: false,
//   isPC: true
// }
```

### locat ( ) 获取地址栏信息

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.locat()
// {
//   hash: '',
//   hostname: '',
//   protocol: '',
//   port: '',
//   origin: '',
//   ...
// }
```

### parseUrl ( url ) 解析 URL 参数

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.parseUrl('http://xuliangzhan.com:8080/demo?id=123')
// {
//   hostname: 'xuliangzhan.com',
//   protocol: 'http:',
//   port: '8080',
//   ...
// }
```

### getBaseURL ( ) 获取上下文路径

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.getBaseURL() // http://xuliangzhan.com/demo/
```

### cookie ( ) Cookie 操作函数

```JavaScript
import XEUtils from 'xe-utils'

// 获取所有
XEUtils.cookie()
// 根据name获取
XEUtils.cookie('name')
// 删除
XEUtils.cookie('name', null, {expires: -1})
// 添加/修改
XEUtils.cookie('name', 'value')
// 指定 10 秒后过期
XEUtils.cookie('name', 'value', {expires: '10s'})
// 指定 1 分钟后过期
XEUtils.cookie('name', 'value', {expires: '1m'})
// 指定 1 小时后过期
XEUtils.cookie('name', 'value', {expires: '1H'})
// 指定 1 天后过期
XEUtils.cookie('name', 'value', {expires: '1d'})
// 指定 1 月后过期
XEUtils.cookie('name', 'value', {expires: '1M'})
// 指定 1 年后过期
XEUtils.cookie('name', 'value', {expires: '1y'})
// 指定时间戳后过期
XEUtils.cookie('name', 'value', {expires: 1525541938031})
// 指定日期过期
XEUtils.cookie('name', 'value', {expires: new Date()})
// 指定 UTCString 格式日期
XEUtils.cookie('name', 'value', {expires: new Date().toUTCString()})
// 指定数值 1 天后过期
XEUtils.cookie('name', 'value', {expires: 1})
// 完整设置domain/path/secure/expires
XEUtils.cookie('name', 'value', {domain: 'xxx.com', path: '/', expires: 7, secure: true})

// 批量删除
XEUtils.cookie([{name: 'name', expires: -1}])
// 批量添加/修改
XEUtils.cookie([{name: 'name', value: 'value'}])
// 批量添加并设置domain/path/secure/expires 7天后过期
XEUtils.cookie([{name: 'name', value: 'value', domain: 'xxx.com', path: '/', expires: 7, secure: true}])

// 添加
XEUtils.cookie.setItem('name', 'value')
// 根据name获取
XEUtils.cookie.getItem('name')
// 删除
XEUtils.cookie.removeItem('name')
// 获取所有
XEUtils.cookie.getJSON()
```

## 混合函数

### 文件 ./customs.js

```JavaScript
import XEUtils from 'xe-utils'

export function toDateStr (date) {
  return XEUtils.dateToString(date, 'yyyy-MM-dd HH:mm')
}
```

### 示例 ./main.js

```JavaScript
import Vue from 'vue'
import XEUtils from 'xe-utils'
import customs from './customs'

XEUtils.mixin(customs)

// 调用自定义扩展函数
XEUtils.toDateStr() // 2018-01-01 10:00
```

## License

Copyright (c) 2017-present, Xu Liangzhan