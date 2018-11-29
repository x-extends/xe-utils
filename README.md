# javascript 函数库、工具类

[![npm version](https://img.shields.io/npm/v/xe-utils.svg?style=flat-square)](https://www.npmjs.org/package/xe-utils)
[![npm downloads](https://img.shields.io/npm/dm/xe-utils.svg?style=flat-square)](http://npm-stat.com/charts.html?package=xe-utils)

XEUtils 提供一套实用的基础函数、任意格式的日期转换函数，浏览器相关操作函数等...

## 兼容性

![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_7-8/internet-explorer_7-8_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png)
--- | --- | --- | --- | --- | --- |
7+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 6.1+ ✔ |

## CDN 安装

### cdnjs 获取最新版本

[点击浏览](https://cdn.jsdelivr.net/npm/xe-utils/)

```HTML
<script src="https://cdn.jsdelivr.net/npm/xe-utils/dist/xe-utils.js"></script>
```

### unpkg 获取最新版本

[点击浏览](https://unpkg.com/xe-utils/)

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

## API

* [全局参数设置](#全局参数设置)
* *基础函数*
  * [isNaN (val) 判断是否非数值](#isnan-val-判断是否非数值)
  * [isFinite (val) 判断是否为有限数值](#isfinite-val-判断是否为有限数值)
  * [isUndefined (val) 判断 Undefined](#isundefined-val-判断-undefined)
  * [isArray (val) 判断是否数组](#isarray-val-判断是否数组)
  * [isFloat (val) 判断是否小数](#isfloat-val-判断是否小数)
  * [isInteger (val) 判断是否整数](#isinteger-val-判断是否整数)
  * [isBoolean (val) 判断是否 Boolean 对象](#isboolean-val-判断是否-boolean-对象)
  * [isString (val) 判断是否 String 对象](#isstring-val-判断是否-string-对象)
  * [isNumber (val) 判断是否 Number 对象](#isnumber-val-判断是否-number-对象)
  * [isRegExp (val) 判断是否 RegExp 对象](#isregexp-val-判断是否-regexp-对象)
  * [isObject (val) 判断是否 Object 对象](#isobject-val-判断是否-object-对象)
  * [isPlainObject (val) 判断是否是一个对象](#isplainobject-val-判断是否是一个对象)
  * [isDate (val) 判断是否 Date 对象](#isdate-val-判断是否-date-对象)
  * [isError (val) 判断是否 Error 对象](#iserror-val-判断是否-error-对象)
  * [isTypeError (val) 判断是否 TypeError 对象](#istypeerror-val-判断是否-typeerror-对象)
  * [isEmpty (val) 判断是否为空,包括空对象、空数值、空字符串](#isempty-val-判断是否为空包括空对象空数值空字符串)
  * [isNull (val) 判断是否为 Null](#isnull-val-判断是否为-null)
  * [isSymbol (val) 判断是否 Symbol 对象](#issymbol-val-判断是否-symbol-对象)
  * [isArguments (val) 判断是否 Arguments 对象](#isarguments-val-判断是否-arguments-对象)
  * [isElement (val) 判断是否 Element 对象](#iselement-val-判断是否-element-对象)
  * [isDocument (val) 判断是否 Document 对象](#isdocument-val-判断是否-document-对象)
  * [isWindow (val) 判断是否 Window 对象](#iswindow-val-判断是否-window-对象)
  * [isFormData (val) 判断是否 FormData 对象](#isformdata-val-判断是否-formdata-对象)
  * [isMap (val) 判断是否 Map 对象](#ismap-val-判断是否-map-对象)
  * [isWeakMap (val) 判断是否 WeakMap 对象](#isweakmap-val-判断是否-weakmap-对象)
  * [isSet (val) 判断是否 Set 对象](#isset-val-判断是否-set-对象)
  * [isWeakSet (val) 判断是否 WeakSet 对象](#isweakset-val-判断是否-weakset-对象)
  * [isLeapYear (date) 判断是否闰年](#isleapyear-date-判断是否闰年)
  * [isDateSame (date1, date2, format) 判断两个日期是否相同](#isdatesame-date1-date2-format-判断两个日期是否相同)
* *常用函数*
  * [toNumber ( num ) 转数值](#tonumber--num--转数值)
  * [toInteger ( num ) 转整数](#tointeger--num--转整数)
  * [toArray ( array, iteratee [, context] ) 根据数组或可迭代对象中创建一个新的数组](#toarrayfrom--array-iteratee--context--根据数组或可迭代对象中创建一个新的数组)
  * [toStringJSON (str) 字符串转 JSON](#tostringjson-str-字符串转-json)
  * [toJSONString (obj) JSON 转字符串](#tojsonstring-obj-json-转字符串)
  * [getType (obj) 获取对象类型](#gettype-obj-获取对象类型)
  * [getSize ( obj ) 返回对象的长度](#getsize--obj--返回对象的长度)
  * [uniqueId ( prefix ) 获取一个全局唯一标识](#uniqueid--prefix--获取一个全局唯一标识)
  * [uniq ( array ) 数组去重](#uniq--array--数组去重)
  * [union ( ...array ) 将多个数的值返回唯一的并集数组](#union--array--将多个数的值返回唯一的并集数组)
  * [random ( min, max ) 获取一个指定范围内随机数](#random--min-max--获取一个指定范围内随机数)
  * [range ( start, stop, step ) 序号列表生成函数](#range--start-stop-step--序号列表生成函数)
  * [clear (obj[, defs, assigns]) 清空对象; defs如果不传（清空所有属性）、如果传对象（清空并继承)、如果传值(给所有赋值)](#clear-obj-defs-assigns-清空对象-defs如果不传清空所有属性如果传对象清空并继承如果传值给所有赋值)
  * [remove (obj, iteratee) 移除对象属性](#remove-obj-iteratee-移除对象属性)
  * [assign (destination, ...sources) 浅拷贝一个或者多个对象到目标对象中，如果第一值是true，则使用深拷贝](#assignextend-destination-sources-浅拷贝一个或者多个对象到目标对象中如果第一值是true则使用深拷贝)
  * [extend (destination, ...sources) 浅拷贝一个或者多个对象到目标对象中，如果第一值是true，则使用深拷贝](#assignextend-destination-sources-浅拷贝一个或者多个对象到目标对象中如果第一值是true则使用深拷贝)
  * [clone (obj, deep) 浅拷贝/深拷贝](#clone-obj-deep-浅拷贝深拷贝)
  * [destructuring (obj, ...target) 将一个或者多个对象值解构到目标对象](#destructuring-obj-target-将一个或者多个对象值解构到目标对象)
  * [trim ( str ) 去除字符串左右两边的空格](#trim--str--去除字符串左右两边的空格)
  * [trimLeft ( str ) 去除字符串左边的空格](#trimleft--str--去除字符串左边的空格)
  * [trimRight ( str ) 去除字符串右边的空格](#trimright--str--去除字符串右边的空格)
  * [escape ( str ) 转义HTML字符串，替换&, <, >, ", ', `字符](#escape--str--转义html字符串替换-----字符)
  * [unescape ( str ) 反转 escape](#unescape--str--反转-escape)
  * [camelCase ( str ) 将带驼峰字符串转成字符串](#camelcase--str--将带驼峰字符串转成字符串)
  * [kebabCase ( str ) 将字符串转成驼峰字符串](#kebabcase--str--将字符串转成驼峰字符串)
  * [repeat ( str, count ) 将字符串重复 n 次](#repeat--str-count--将字符串重复-n-次)
  * [padStart ( str, targetLength, padString ) 用指定字符从前面开始补全字符串](#padstart--str-targetlength-padstring--用指定字符从前面开始补全字符串)
  * [padEnd ( str, targetLength [, padString] ) 用指定字符从后面开始补全字符串](#padend--str-targetlength--padstring--用指定字符从后面开始补全字符串)
  * [startsWith ( str, val [, startIndex] ) 判断字符串是否在源字符串的头部](#startswith--str-val--startindex--判断字符串是否在源字符串的头部)
  * [endsWith ( str, val [, startIndex] ) 判断字符串是否在源字符串的尾部](#endswith--str-val--startindex--判断字符串是否在源字符串的尾部)
  * [slice ( array, start, end ) 裁剪 Arguments 或数组 array，从 start 位置开始到 end 结束，但不包括 end 本身的位置](#slice--array-start-end--裁剪-arguments-或数组-array从-start-位置开始到-end-结束但不包括-end-本身的位置)
  * [indexOf (obj, val) 返回对象第一个索引值](#indexof-obj-val-返回对象第一个索引值)
  * [findIndexOf (obj, iteratee [, context]) 返回对象第一个索引值](#findindexof-obj-iteratee--context-返回对象第一个索引值)
  * [lastIndexOf (obj, val) 从最后开始的索引值,返回对象第一个索引值](#lastindexof-obj-val-从最后开始的索引值返回对象第一个索引值)
  * [findLastIndexOf (obj, iteratee [, context]) 从最后开始的索引值，返回对象第一个索引值](#findlastindexof-obj-iteratee--context-从最后开始的索引值返回对象第一个索引值)
  * [includes (obj, val) 判断对象是否包含该值,成功返回 true 否则 false](#includes-obj-val-判断对象是否包含该值成功返回-true-否则-false)
  * [includeArrays (array1, array2) 判断数组是否包含另一数组](#includearrays-array1-array2-判断数组是否包含另一数组)
  * [each ( obj, iteratee [, context] ) 通用迭代器](#eachforofarrayeachobjecteach--obj-iteratee--context--迭代器)
  * [arrayEach ( obj, iteratee [, context] ) 数组迭代器](#eachforofarrayeachobjecteach--obj-iteratee--context--迭代器)
  * [objectEach ( obj, iteratee [, context] ) 对象迭代器](#eachforofarrayeachobjecteach--obj-iteratee--context--迭代器)
  * [lastEach ( obj, iteratee [, context] ) 通用迭代器，从最后开始迭代](#lasteachlastforoflastarrayeachlastobjecteach--obj-iteratee--context--迭代器从最后开始迭代)
  * [lastArrayEach ( obj, iteratee [, context] ) 数组迭代器，从最后开始迭代](#lasteachlastforoflastarrayeachlastobjecteach--obj-iteratee--context--迭代器从最后开始迭代)
  * [lastObjectEach ( obj, iteratee [, context] ) 对象迭代器，从最后开始迭代](#lasteachlastforoflastarrayeachlastobjecteach--obj-iteratee--context--迭代器从最后开始迭代)
  * [forOf ( obj, iteratee [, context] ) 通用迭代器,支持 return false 跳出循环 break](#eachforofarrayeachobjecteach--obj-iteratee--context--迭代器)
  * [lastForOf ( obj, iteratee [, context] ) 通用迭代器,从最后开始迭代，支持 return false 跳出循环 break](#lasteachlastforoflastarrayeachlastobjecteach--obj-iteratee--context--迭代器从最后开始迭代)
  * [keys (obj) 获取对象所有属性](#keys-obj-获取对象所有属性)
  * [values (obj) 获取对象所有值](#values-obj-获取对象所有值)
  * [entries (obj) 获取对象所有属性、值](#entries-obj-获取对象所有属性值)
  * [first (obj) 获取对象第一个值](#first-obj-获取对象第一个值)
  * [last (obj) 获取对象最后一个值](#last-obj-获取对象最后一个值)
  * [groupBy ( obj, iteratee [, context] ) 集合分组,默认使用键值分组，如果有 iteratee 则使用结果进行分组](#groupby--obj-iteratee--context--集合分组默认使用键值分组如果有-iteratee-则使用结果进行分组)
  * [countBy ( obj, iteratee [, context] ) 集合分组统计，返回各组中对象的数量统计](#countby--obj-iteratee--context--集合分组统计返回各组中对象的数量统计)
  * [sortBy ( arr, iteratee [, context] ) 数组按属性值升序](#sortby--arr-iteratee--context--数组按属性值升序)
  * [shuffle ( array ) 将一个数组随机打乱，返回一个新的数组](#shuffle--array--将一个数组随机打乱返回一个新的数组)
  * [sample ( array, number ) 从一个数组中随机返回几个元素](#sample--array-number--从一个数组中随机返回几个元素)
  * [some ( obj, iteratee [, context] ) 对象中的值中的每一项运行给定函数,如果函数对任一项返回 true,则返回 true,否则返回 false](#some--obj-iteratee--context--对象中的值中的每一项运行给定函数如果函数对任一项返回-true则返回-true否则返回-false)
  * [every ( obj, iteratee [, context] ) 对象中的值中的每一项运行给定函数,如果该函数对每一项都返回 true,则返回 true,否则返回 false](#every--obj-iteratee--context--对象中的值中的每一项运行给定函数如果该函数对每一项都返回-true则返回-true否则返回-false)
  * [filter ( obj, iteratee [, context] ) 根据回调过滤数据](#filter--obj-iteratee--context--根据回调过滤数据)
  * [find ( obj, iteratee [, context] ) 查找匹配第一条数据](#find--obj-iteratee--context--查找匹配第一条数据)
  * [findKey ( obj, iteratee [, context] ) 查找匹配第一条数据的键](#findkey--obj-iteratee--context--查找匹配第一条数据的键)
  * [map ( obj, iteratee [, context] ) 指定方法后的返回值组成的新数组](#map--obj-iteratee--context--指定方法后的返回值组成的新数组)
  * [objectMap ( obj, iteratee [, context] ) 指定方法后的返回值组成的新对象](#objectmap--obj-iteratee--context--指定方法后的返回值组成的新对象)
  * [pick (obj, array) 根据 keys 过滤指定的属性值 或者 接收一个判断函数，返回一个新的对象](#pick-obj-array-根据-keys-过滤指定的属性值-或者-接收一个判断函数返回一个新的对象)
  * [omit (obj, array) 根据 keys 排除指定的属性值 或者 接收一个判断函数，返回一个新的对象](#omit-obj-array-根据-keys-排除指定的属性值-或者-接收一个判断函数返回一个新的对象)
  * [copyWithin ( array, target, start [, end] ) 浅复制数组的一部分到同一数组中的另一个位置,数组大小不变](#copywithin--array-target-start--end--浅复制数组的一部分到同一数组中的另一个位置数组大小不变)
  * [sum ( obj, iteratee [, context] ) 求和函数，将数值相加](#sum--obj-iteratee--context--求和函数将数值相加)
  * [mean ( obj, iteratee [, context] ) 求平均值函数](#mean--obj-iteratee--context--求平均值函数)
  * [reduce ( array, iteratee [, initialValue] ) 接收一个函数作为累加器，数组中的每个值（从左到右）开始合并，最终为一个值](#reduce--array-iteratee--initialvalue--接收一个函数作为累加器数组中的每个值从左到右开始合并最终为一个值)
  * [chunk ( array, size ) 将一个数组分割成大小的组。如果数组不能被平均分配，那么最后一块将是剩下的元素](#chunk--array-size--将一个数组分割成大小的组如果数组不能被平均分配那么最后一块将是剩下的元素)
  * [min ( arrb[, iteratee] ) 获取最小值](#min--arrb-iteratee--获取最小值)
  * [max ( arr [, iteratee] ) 获取最大值](#max--arr--iteratee--获取最大值)
  * [commafy ( num [, options] ) 数值千分位分隔符、小数点](#commafy--num--options--数值千分位分隔符小数点)
* *日期函数*
  * [now ( ) 返回当前时间戳](#now---返回当前时间戳)
  * [timestamp ( date[, format] ) 将日期格式化为时间戳](#timestamp--date-format--将日期格式化为时间戳)
  * [stringToDate ( str, format ) 任意格式字符串转为日期](#stringtodate--str-format--任意格式字符串转为日期)
  * [dateToString ( date [, format, options] ) 日期格式化为任意格式字符串](#datetostring--date--format-options--日期格式化为任意格式字符串)
  * [getWhatYear ( date, year [, month] ) 返回前几年或后几年的日期,可以指定年初(first)、年末(last)、月份(0~11)，默认当前](#getwhatyear--date-year--month--返回前几年或后几年的日期可以指定年初first年末last月份011默认当前)
  * [getWhatMonth ( date, month [, day] ) 返回前几月或后几月的日期,可以指定月初(first)、月末(last)、天数，默认当前](#getwhatmonth--date-month--day--返回前几月或后几月的日期可以指定月初first月末last天数默认当前)
  * [getWhatWeek ( date, week [, day] ) 返回前几周或后几周的日期,可以指定星期几(0~6)，默认当前](#getwhatweek--date-week--day--返回前几周或后几周的日期可以指定星期几06默认当前)
  * [getWhatDay ( date, day [, mode] ) 返回前几天或后几天的日期](#getwhatday--date-day--mode--返回前几天或后几天的日期)
  * [getDayOfYear ( date [, year] ) 返回某个年份的天数,可以指定前几个年或后几个年，默认当前](#getdayofyear--date--year--返回某个年份的天数可以指定前几个年或后几个年默认当前)
  * [getYearDay ( date ) 返回某个年份的第几天](#getyearday--date--返回某个年份的第几天)
  * [getYearWeek ( date ) 返回某个年份的第几周](#getyearweek--date--返回某个年份的第几周)
  * [getMonthWeek ( date ) 返回某个月份的第几周](#getmonthweek--date--返回某个月份的第几周)
  * [getDayOfMonth ( date [, month] ) 返回某个月份的天数,可以指定前几个月或后几个月，默认当前](#getdayofmonth--date--month--返回某个月份的天数可以指定前几个月或后几个月默认当前)
  * [getDateDiff ( startDate, endDate [, rules] ) 返回两个日期之间差距,如果结束日期小于开始日期 done 为 fasle](#getdatediff--startdate-enddate--rules--返回两个日期之间差距如果结束日期小于开始日期-done-为-fasle)
* *高级函数*
  * [arrayToTree ( array, options ) 一个高性能的树结构转换函数，将一个带层级的数据列表转成树结构](#arraytotree--array-options--一个高性能的树结构转换函数将一个带层级的数据列表转成树结构)
  * [treeToArray ( array, options ) 将一个树结构转成数组列表](#treetoarray--array-options--将一个树结构转成数组列表)
  * [property ( path ) 返回一个获取对象属性的函数](#property--path--返回一个获取对象属性的函数)
  * [pluck ( array, key ) 获取数组对象中某属性值，返回一个数组](#pluck--array-key--获取数组对象中某属性值返回一个数组)
  * [invoke ( list, path, ...arguments ) 在list的每个元素上执行方法,任何传递的额外参数都会在调用方法的时候传递给它](#invoke--list-path-arguments--在list的每个元素上执行方法任何传递的额外参数都会在调用方法的时候传递给它)
  * [zip ( ) 将每个数组中相应位置的值合并在一起](#zip---将每个数组中相应位置的值合并在一起)
  * [unzip ( arrays ) 与 zip 相反](#unzip--arrays--与-zip-相反)
  * [bind (callback, context[, ...arguments]) 创建一个绑定上下文的函数](#bind-callback-context-arguments-创建一个绑定上下文的函数)
  * [once (callback, context[, ...arguments]) 创建一个只能调用一次的函数,只会返回第一次执行后的结果](#once-callback-context-arguments-创建一个只能调用一次的函数只会返回第一次执行后的结果)
  * [after (count, callback, context) 创建一个函数, 调用次数超过 count 次之后执行回调并将所有结果记住后返回](#after-count-callback-context-创建一个函数-调用次数超过-count-次之后执行回调并将所有结果记住后返回)
  * [before (count, callback, context) 创建一个函数, 调用次数不超过 count 次之前执行回调并将所有结果记住后返回](#before-count-callback-context-创建一个函数-调用次数不超过-count-次之前执行回调并将所有结果记住后返回)
  * [throttle (callback, wait[, options]) 创建一个策略函数，当被重复调用函数的时候，至少每隔多少秒毫秒调用一次该函数](#throttle-callback-wait-options-创建一个策略函数当被重复调用函数的时候至少每隔多少秒毫秒调用一次该函数)
  * [debounce (callback, wait[, options]) 创建一个防反跳策略函数，在函数最后一次调用多少毫秒之后才会再次执行，如果在期间内重复调用会重新计算延迟](#debounce-callback-wait-options-创建一个防反跳策略函数在函数最后一次调用多少毫秒之后才会再次执行如果在期间内重复调用会重新计算延迟)
* *浏览器函数*
  * [serialize ( query ) 序列化查询参数](#serialize--query--序列化查询参数)
  * [unserialize ( str ) 反转序列化查询参数](#unserialize--str--反转序列化查询参数)
  * [browse ( ) 获取浏览器信息](#browse---获取浏览器信息)
  * [locat ( ) 获取地址栏信息](#locat---获取地址栏信息)
  * [parseUrl ( url ) 解析 URL 参数](#parseurl--url--解析-url-参数)
  * [getBaseURL ( ) 获取上下文路径](#getbaseurl---获取上下文路径)
  * [cookie ( name, value, options ) Cookie 操作函数](#cookie--name-value-options--cookie-操作函数)

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

### isUndefined (val) 判断 Undefined

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

### isBoolean (val) 判断是否 Boolean 对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isBoolean('false') // false
XEUtils.isBoolean(true) // true
```

### isString (val) 判断是否 String 对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isString(1) // false
XEUtils.isString(true) // false
XEUtils.isString('') // true
XEUtils.isString('abc') // true
```

### isNumber (val) 判断是否 Number 对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isNumber(null) // false
XEUtils.isNumber('1') // false
XEUtils.isNumber(1) // true
```

### isRegExp (val) 判断是否 RegExp 对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isRegExp(null) // false
XEUtils.isRegExp('a') // false
XEUtils.isRegExp(new RegExp('a')) // true
XEUtils.isRegExp(/\a/) // true
```

### isObject (val) 判断是否 Object 对象

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

### isDate (val) 判断是否 Date 对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isDate('2017-12-20') // false
XEUtils.isDate({}) // false
XEUtils.isDate(1514096716800) // false
XEUtils.isDate(new Date()) // true
```

### isError (val) 判断是否 Error 对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isError(null) // false
XEUtils.isError({}) // false
XEUtils.isError(new Error('error')) // true
```

### isTypeError (val) 判断是否 TypeError 对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isTypeError(null) // false
XEUtils.isTypeError({}) // false
XEUtils.isTypeError(new TypeError('error')) // true
```

### isEmpty (val) 判断是否为空,包括空对象、空数值、空字符串

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isEmpty() // true
XEUtils.isEmpty(0) // true
XEUtils.isEmpty('') // true
XEUtils.isEmpty(null) // true
XEUtils.isEmpty({}) // true
XEUtils.isEmpty([]]) // true
```

### isNull (val) 判断是否为 Null

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isNull(0) // false
XEUtils.isNull('') // false
XEUtils.isNull(null) // true
```

### isSymbol (val) 判断是否 Symbol 对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isSymbol('a') // false
XEUtils.isSymbol(Symbol('a')) // true
```

### isArguments (val) 判断是否 Arguments 对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isArguments([]) // false
XEUtils.isArguments(arguments) // true
```

### isElement (val) 判断是否 Element 对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isElement({}) // false
XEUtils.isElement(document.createElement('div')) // true
```

### isDocument (val) 判断是否 Document 对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isDocument({}) // false
XEUtils.isDocument(document.createElement('div')) // false
XEUtils.isDocument(document) // true
```

### isWindow (val) 判断是否 Window 对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isWindow({}) // false
XEUtils.isWindow(document) // false
XEUtils.isWindow(window) // true
```

### isFormData (val) 判断是否 FormData 对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isFormData({}) // false
XEUtils.isFormData(new FormData()) // true
```

### isMap (val) 判断是否 Map 对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isMap({}) // false
XEUtils.isMap(new Map()) // true
```

### isWeakMap (val) 判断是否 WeakMap 对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isWeakMap({}) // false
XEUtils.isWeakMap(new WeakMap()) // true
```

### isSet (val) 判断是否 Set 对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isSet({}) // false
XEUtils.isSet(new Set()) // true
```

### isWeakSet (val) 判断是否 WeakSet 对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isWeakSet({}) // false
XEUtils.isWeakSet(new WeakSet()) // true
```

### isLeapYear (date) 判断是否闰年

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.isLeapYear(1606752000000)  // true
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

### slice ( array, start, end ) 裁剪（数组或伪数组），从 start 位置开始到 end 结束，但不包括 end 本身的位置

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.slice([11, 22, 33, 44], 1) // [22, 33, 44]
XEUtils.slice([11, 22, 33, 44], 1, 3) // [22, 33]
function method () {
  XEUtils.slice(arguments, 1, 3) // [22, 33]
}
method(11, 22, 33, 44)
```

### indexOf (obj, val) 返回对象第一个索引值

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.indexOf([11, 22, 33, 22], 55) // -1
XEUtils.indexOf([11, 22, 33, 22], 22) // 1
```

### findIndexOf (obj, iteratee [, context]) 返回对象第一个索引值

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.findIndexOf([11, 22, 33, 22], item => item === 55) // -1
XEUtils.findIndexOf([11, 22, 33, 22], item => item === 22) // 1
```

### lastIndexOf (obj, val) 从最后开始的索引值,返回对象第一个索引值

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.lastIndexOf([11, 22, 33, 22], 55) // -1
XEUtils.lastIndexOf([11, 22, 33, 22], 22) // 3
```

### findLastIndexOf (obj, iteratee [, context]) 从最后开始的索引值,返回对象第一个索引值

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.findLastIndexOf([11, 22, 33, 22], item => item === 55) // -1
XEUtils.findLastIndexOf([11, 22, 33, 22], item => item === 22) // 3
```

### includes (obj, val) 判断对象是否包含该值,成功返回 true 否则 false

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

let rest = XEUtils.bind(function (val) {
  return this.name + ' = ' + val
}, {name: 'test'})
rest(222) // 'test = 222'
rest(333) // 'test = 333'
```

### once (callback, context[, ...arguments]) 创建一个只能调用一次的函数,只会返回第一次执行后的结果

```JavaScript
import XEUtils from 'xe-utils'

let rest = XEUtils.once(function (val) {
  return this.name + ' = ' + val
}, {name: 'test'})
rest(222) // 'test = 222'
rest(333) // 'test = 222'
```

### after (count, callback, context) 创建一个函数, 调用次数超过 count 次之后执行回调并将所有结果记住后返回

```JavaScript
import XEUtils from 'xe-utils'

function getJSON (url, callback) {
  setTimeout(function() {
    callback({name: 'test1'})
  }, 200)
}

// 如果你想确保所有异步请求完成之后才执行这个函数
let finish = XEUtils.after(3, function (rests) {
  console.log('All finish')
})
getJSON('/api/list1', finish)
getJSON('/api/list2', finish)
getJSON('/api/list3', finish)
```

### before (count, callback, context) 创建一个函数, 调用次数不超过 count 次之前执行回调并将所有结果记住后返回

```JavaScript
import XEUtils from 'xe-utils'

document.querySelector('.btn').addEventListener('click', XEUtils.before(4, function (rests) {
  console.log('只能点击三次')
}))
```

### throttle (callback, wait[, options]) 创建一个策略函数，当被重复调用函数的时候，至少每隔多少秒毫秒调用一次该函数

```JavaScript
import XEUtils from 'xe-utils'

function scrollEvent (evnt) {
  console.log('至少每隔wait秒毫秒之内只会调用一次')
}

// 在计时结束之前执行
document.body.addEventListener('scroll', XEUtils.throttle(scrollEvent, 100))
// 在计时结束之前执行
document.body.addEventListener('scroll', XEUtils.throttle(scrollEvent, 100, {
  leading: true,
  trailing: false
}))
// 在计时结束之后执行
document.body.addEventListener('scroll', XEUtils.throttle(scrollEvent, 100, {
  leading: false,
  trailing: true
}))

let func = XEUtils.throttle(function (msg) {
  console.log(msg)
}, 300)
func('执行一次')
func.cancel()
func('取消后中断计时，再次调用会马上执行')
```

### debounce (callback, wait[, options]) 创建一个防反跳策略函数，在函数最后一次调用多少毫秒之后才会再次执行，如果在期间内重复调用会重新计算延迟

```JavaScript
import XEUtils from 'xe-utils'

function resizeEvent (evnt) {
  console.log('如果wait毫秒内重复调用则会重新计时，在函数最后一次调用wait毫秒之后才会执行回调')
}

// 在计时结束之后执行
document.addEventListener('resize', XEUtils.debounce(resizeEvent, 100))
// 在计时结束之前执行
document.addEventListener('resize', XEUtils.debounce(resizeEvent, 100, true))
// 在计时结束之前执行
document.addEventListener('resize', XEUtils.debounce(resizeEvent, 100, {
  leading: true,
  trailing: false
}))
// 在计时结束之后执行
document.addEventListener('resize', XEUtils.debounce(resizeEvent, 100, {
  leading: false,
  trailing: true
}))

let func = XEUtils.debounce(function (msg) {
  console.log(msg)
}, 300)
func('计时结束之前执行一次')
func.cancel()
func('取消后中重新计时，在计时结束之前执行')
```

### clear (obj[, defs, assigns]) 清空对象; defs如果不传（清空所有属性）、如果传对象（清空并继承)、如果传值(给所有赋值)

```JavaScript
import XEUtils from 'xe-utils'

let a = [11, 22, 33, 33]
XEUtils.clear(a) // []
XEUtils.clear(a, undefined) // [undefined, undefined, undefined, undefined]
XEUtils.clear(a, null) // [null, null, null, null]
let b = {b1: 11, b2: 22}
XEUtils.clear(b) // {}
XEUtils.clear(b, undefined) // {b1: undefined, b2: undefined}
XEUtils.clear(b, null) // {b1: null, b2: null}
```

### remove (obj, iteratee) 移除对象属性

```JavaScript
import XEUtils from 'xe-utils'

let list = [11, 22, 33, 44]
XEUtils.remove(list, item => item === 22) // list = [11, 33, 44]
```

### assign/extend (destination, ...sources) 浅拷贝一个或者多个对象到目标对象中，如果第一值是true，则使用深拷贝

```JavaScript
import XEUtils from 'xe-utils'

// 浅拷贝
let obj2 = {a: null}
let obj3 = {bb: {b: 11}}
let obj4 = XEUtils.assign(obj2, {a: 11}) // {a: 11, c: null, bb: {b: 11}}
obj3.bb = 22 // obj4 = {a: 11, c: null, bb: {b: 22}}

// 深拷贝
let obj2 = {a: null}
let obj3 = {bb: {b: 11}}
let obj4 = XEUtils.extend(true, obj3, {a: 11}) // {a: 11, c: null, bb: {b: 11}}
obj3.bb = 22 // obj4 = {a: 11, c: null, bb: {b: 11}}
```

### destructuring (obj, ...target) 将一个或者多个对象值解构到目标对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.destructuring({a: null}, {a: 11, b: 22, c: 33}) // {a: 11}
XEUtils.destructuring({a: 11, d: 44}, {a: 11, b: 22, c: 33}) // {a: 11, d: 44}
XEUtils.destructuring({a: 11, c: 33, d: 44}, {a: 11, b: 22, c: null, e: 55, f: 66}) // {a: 11, c: null, d: 44}
```

### toStringJSON (str) 字符串转 JSON

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.toStringJSON('{"a":1}') // {a: 1}
XEUtils.toStringJSON('[11,22]') // [11, 22]
```

### toJSONString (obj) JSON 转字符串

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.toJSONString({a: 1}) // '{"a":1}'
XEUtils.toJSONString([11, 22]) // '[11,22]'
```

### keys (obj) 获取对象所有属性

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.keys({a: 11}) // ['a']
```

### values (obj) 获取对象所有值

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.values({a: 11}) // [11]
```

### entries (obj) 获取对象所有属性、值

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.entries({a: 11}) // [['a', 11]]
XEUtils.entries([11, 22]) // [[0, 11], [1, 22]]
```

### pick (obj, array) 根据 keys 过滤指定的属性值 或者 接收一个判断函数，返回一个新的对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.pick({name: 'test11', age: 25, height: 176}, 'name', 'height') // {name: 'test11', height: 176}
XEUtils.pick({name: 'test11', age: 25, height: 176}, ['name', 'age']) // {name: 'test11', age: 25}
XEUtils.pick({name: 'test11', age: 25, height: 176}, val => XEUtils.isNumber(val)) // {age: 25, height: 176}
```

### omit (obj, array) 根据 keys 排除指定的属性值 或者 接收一个判断函数，返回一个新的对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.omit({name: 'test11', age: 25, height: 176}, 'name', 'height') // {age: 25}
XEUtils.omit({name: 'test11', age: 25, height: 176}, ['name', 'age']) // {height: 176}
XEUtils.omit({name: 'test11', age: 25, height: 176}, val => XEUtils.isNumber(val)) // {name: 'test11'}
```

### first (obj) 获取对象第一个值

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.first({a: 11, b : 22}) // 11
XEUtils.first([11, 22]) // 11
```

### last (obj) 获取对象最后一个值

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.last({a: 11, b: 22}) // 22
XEUtils.last([11, 22]) // 22
```

### each/forOf/arrayEach/objectEach ( obj, iteratee [, context] ) 迭代器

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.each([11, 22, 33], (item, key) => {
  // 通用迭代器，支持遍历任意类型
})
XEUtils.forOf([11, 22, 33], (item, key) => {
  // 通用迭代器，支持遍历任意类型，支持 return false 跳出循环 break
  return false
})
XEUtils.arrayEach([11, 22, 33], (item, index) => {
  // 数组迭代器，只能用于遍历(数组或伪数组)，性能高于 each
})
XEUtils.objectEach({a: 11, b: 22}, (item, key) => {
  // 对象迭代器，只能用于遍历对象，性能高于 each
})
```

### lastEach/lastForOf/lastArrayEach/lastObjectEach ( obj, iteratee [, context] ) 迭代器,从最后开始迭代

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.lastEach([11, 22, 33], (item, key) => {
  // 通用迭代器，支持遍历任意类型
})
XEUtils.lastForOf([11, 22, 33], (item, key) => {
  // 通用迭代器，支持遍历任意类型，支持 return false 跳出循环 break
  return false
})
XEUtils.lastArrayEach([11, 22, 33], (item, index) => {
  // 数组迭代器，只能用于遍历(数组或伪数组)，性能高于 lastEach
})
XEUtils.lastObjectEach({a: 11, b: 22}, (item, key) => {
  // 对象迭代器，只能用于遍历对象，性能高于 lastEach
})
```

### groupBy ( obj, iteratee [, context] ) 集合分组,默认使用键值分组,如果有 iteratee 则使用结果进行分组

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.groupBy([{type: 'a'}, {type: 'b'}], 'type') // {a: [{type: 'a'}], b: [{type: 'b'}]}
XEUtils.groupBy([{type: 'a'}, {type: 'a'}, {type: 'b'}], 'type')
// {a: [{type: 'a'}, {type: 'a'}], b: [{type: 'b'}]}
```

### countBy ( obj, iteratee [, context] ) 集合分组统计,返回各组中对象的数量统计

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.countBy([{type: 'a'}, {type: 'b'}], 'type') // {a: 1, b: 1}
XEUtils.countBy([{type: 'a'}, {type: 'a'}, {type: 'b'}], 'type') // {a: 2, b: 1}
```

### range ( start, stop, step ) 序号列表生成函数

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.range(0) // []
XEUtils.range(10) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
XEUtils.range(-5, 5) // [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4]
XEUtils.range(0, 10, 2) // [0, 2, 4, 6, 8]
```

### objectMap ( obj, iteratee [, context] ) 指定方法后的返回值组成的新对象

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.objectMap({a: {type: 'a'}, b: {type: 'b'}}, item => item.type) // {a: "a", b: "b"}
```

### clone (obj, deep) 浅拷贝/深拷贝

```JavaScript
import XEUtils from 'xe-utils'

let v1 = {a: 11, b: {b1: 22}}
let v2 = XEUtils.clone(v1)
if (v1.b === v2.b) {
  // true
}
let v3 = XEUtils.clone(v1, true)
if (v1.b === v3.b) {
  // false
}
```

### uniq ( array ) 数组去重

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.uniq([11, 22, 33, 33, 22, 55]) // [11, 22, 33, 55]
```

### union ( ...array ) 将多个数的值返回唯一的并集数组

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.union([11, 22], [33, 22], [44, 11]) // [11, 22, 33, 44]
```

### sortBy ( arr, iteratee [, context] ) 数组按属性值升序

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.sortBy([{a: 9}, {a: 4}, {a: 5}], 'a') // [{a: 4}, {a: 5}, {a: 9}]
XEUtils.sortBy([{a: 9}, {a: 4}, {a: 5}], 'a') // [{a: 4}, {a: 5}, {a: 9}]
XEUtils.sortBy([{a: 9}, {a: 4}, {a: 5}], (v1, v2) => v1.a > v2.a ? 1 : -1) // [{a: 4}, {a: 5}, {a: 9}]
```

### shuffle ( array ) 将一个数组随机打乱，返回一个新的数组

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.shuffle([11, 22, 33, 44, 55]) // [22, 33, 55, 11, 44]
```

### sample ( array, number ) 从一个数组中随机返回几个元素

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.sample([11, 22, 33, 44, 55], 3) // [22, 33, 55]
```

### some ( obj, iteratee [, context] ) 对象中的值中的每一项运行给定函数,如果函数对任一项返回 true,则返回 true,否则返回 false

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.some([{value: 11}, {value: 22}], item => item.value === 55) // false
```

### every ( obj, iteratee [, context] ) 对象中的值中的每一项运行给定函数,如果该函数对每一项都返回 true,则返回 true,否则返回 false

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.every([{value: 11}, {value: 22}], item => item.value === 11) // false
```

### filter ( obj, iteratee [, context] ) 根据回调过滤数据

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.filter([{value: 11}, {value: 22}], item => item.value > 11) // [{a: 22}]
```

### find ( obj, iteratee [, context] ) 查找匹配第一条数据

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.find([{value: 11}, {value: 22}], item => item.value === 55) // null
```

### findKey ( obj, iteratee [, context] ) 查找匹配第一条数据的键

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.findKey([{value: 11}, {value: 22}], item => item.value === 22) // '1'
XEUtils.findKey({aa: 11, bb: 22, cc: 33}, item => item === 22) // 'bb'
```

### map ( obj, iteratee [, context] ) 指定方法后的返回值组成的新数组

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.map([{value: 11}, {value: 22}], item => item.value) // [11, 22]
```

### copyWithin ( array, target, start [, end] ) 浅复制数组的一部分到同一数组中的另一个位置,数组大小不变

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.copyWithin([11, 22, 33, 44], 0, 2) // [33, 44, 33, 44]
XEUtils.copyWithin([11, 22, 33, 44], 0, -1) // [44, 22, 33, 44]
```

### sum ( obj, iteratee [, context] ) 求和函数，将数值相加

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.sum([22, 66, 88]) // 176
XEUtils.sum([{value: 11}, {value: 22}, {value: 66}], 'value') // 99
```

### mean ( obj, iteratee [, context] ) 求平均值函数

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.mean([22, 66, 60, 60]) // 52
XEUtils.mean([{value: 34}, {value: 22}], 'value') // 28
XEUtils.mean([{value: 11}, {value: 22}, {value: 66}], item => item.value * 2) // 66
```

### toArray ( array, iteratee [, context] ) 根据数组或可迭代对象中创建一个新的数组

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.toArray([]) // []
XEUtils.toArray({}) // []
XEUtils.toArray(arguments) // [...]
```

### reduce ( array, iteratee [, initialValue] ) 接收一个函数作为累加器，数组中的每个值（从左到右）开始合并，最终为一个值

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.reduce([22, 66, 88], (previous, item) => previous + item) // 176
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

### property ( path ) 返回一个获取对象属性的函数

```JavaScript
import XEUtils from 'xe-utils'

let getName = XEUtils.property('name')
getName({name: 'test11', age: 25, height: 176}) // 'test11'
getName({age: 25, height: 176}) // undefined
```

### pluck ( array, key ) 获取数组对象中某属性值，返回一个数组

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.pluck([{a: 11, b: 22}, {a: 33, b: 44}], 'a') // [11, 33]
XEUtils.pluck([[11, 22, 33], [44, 55, 66]], 1) // [22, 55]
```

### invoke ( list, path, ...arguments ) 在list的每个元素上执行方法,任何传递的额外参数都会在调用方法的时候传递给它

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.invoke([[3, 1, 6, 7], [3, 2, 1, 8]], 'sort') // [[1, 3, 6, 7], [1, 2, 3, 8]]
XEUtils.invoke(['123', '456'], 'split') // [['123'], ['456']]
XEUtils.invoke([123, 456], String.prototype.split, '') // [['1', '2', '3'], ['4', '5', '6']]
XEUtils.invoke([{a: {b: [2, 0, 1]}}, {a: {b: [2, 1]}}, {a: {b: [4, 8, 1]}}], ['a', 'b', 'sort'])
// [[0, 1, 2], [1, 2], [1, 4, 8]]
```

### arrayToTree ( array, options ) 一个高性能的树结构转换函数，将一个带层级的数据列表转成树结构

| 属性 | 描述 | 默认值 |
|------|------|------|
| strict | 是否严格模式，启用后会忽略错误数据 | false |
| key | 节点键值 | 'id' |
| parentKey | 父节点键值 | 'parentId' |
| children | 子节点属性 | 'children' |
| sortKey | 对树节点进行排序属性 | 默认不排序 |
| reverse | sortKey不为空是有效，默认升序 | 默认false |
| data | 数据存放属性; | null |

```JavaScript
import XEUtils from 'xe-utils'

// 默认树结构
let list1 = [
  {id: 1, name: '111'},
  {id: 2, parentId: 1, name: '222'},
  {id: 3, name: '333'},
  {id: 4, parentId: 2, name: '444'}
]
XEUtils.arrayToTree(list1)
/*
[
  {
    "id":1,
    "name":"111",
    "children":[
      {
        "id":2,
        "parentId":1,
        "name":"222",
        "children":[
          {
            "id":4,
            "parentId":2,
            "name":"444",
            "children":[]
          }
        ]
      }
    ]
  },
  {
    "id":3,
    "name":"333",
    "children":[]
  }
]
*/

// 返回带排序的树结构
let list1 = [
  {id: 1, name: '111', seq: 5},
  {id: 2, parentId: 1, name: '222', seq: 3},
  {id: 3, name: '333', seq: 6},
  {id: 4, parentId: 2, name: '444', seq: 2},
  {id: 5, parentId: 1, name: '555', seq: 1}
]
XEUtils.arrayToTree(list1, {sortKey: 'seq'})
/*
[
  {
    "id":1,
    "name":"111",
    "seq":5,
    "children":[
      {
        "id":5,
        "parentId":1,
        "name":"555",
        "seq":1,
        "children":[]
      },
      {
        "id":2,
        "parentId":1,
        "name":"222",
        "seq":3,
        "children":[
          {
            "id":4,
            "parentId":2
            ,"name":"444",
            "seq":2,
            "children":[]
          }
        ]
      }
    ]
  },
  {
    "id":3,
    "name":"333",
    "seq":6,
    "children":[]
  }
]
*/

// 自定义数据存放属性
let list2 = [
  {id: 1, name: '111'},
  {id: 2, parentId: 1, name: '222'},
  {id: 3, name: '333'},
  {id: 4, parentId: 2, name: '444'},
  {id: 5, parentId: 22, name: '555'}
]
XEUtils.arrayToTree(list2, {data: 'data'})
/*
[
  {
    "data":{"id":1,"name":"111"},
    "id":1,
    "children":[
      {
        "data":{"id":2,"parentId":1,"name":"222"},
        "id":2,
        "parentId":1,
        "children":[
          {
            "data":{"id":4,"parentId":2,"name":"444"},
            "id":4,
            "parentId":2,
            "children":[]
          }
        ]
      }
    ]
  },
  {
    "data":{"id":3,"name":"333"},
    "id":3,
    "children":[]
  },
  {
    "data":{"id":5,"parentId":22,"name":"555"},
    "id":5,
    "parentId":22,
    "children":[]
  }
]
*/

// 如果设置为严格模式，（非父子关联及冗余)的数据会被忽略
let list3 = [
  {id: 1, name: '111'},
  {id: 2, parentId: 1, name: '222'},
  {id: 3, name: '333'},
  {id: 4, parentId: 2, name: '444'},
  {id: 5, parentId: 22, name: '555'}
]
XEUtils.arrayToTree(list3, {strict: true, parentKey: 'parentId', key: 'id', children: 'children', data: 'data'})
/*
[
  {
    "data":{"id":1,"name":"111"},
    "id":1,
    "children":[
      {
        "data":{"id":2,"parentId":1,"name":"222"},
        "id":2,
        "parentId":1,
        "children":[
          {
            "data":{"id":4,"parentId":2,"name":"444"},
            "id":4,
            "parentId":2,
            "children":[]
          }
        ]
      }
    ]
  },
  {
    "data":{"id":3,"name":"333"},
    "id":3,
    "children":[]
  }
]
*/
```

### treeToArray ( array, options ) 将一个树结构转成数组列表

| 属性 | 描述 | 默认值 |
|------|------|------|
| children | 子节点属性 | 'children' |
| data | 数据存放属性 | null |

```JavaScript
import XEUtils from 'xe-utils'

let list1 = [
  {
    "id":1,
    "name":"111",
    "children":[
      {
        "id":2,
        "parentId":1,
        "name":"222",
        "children":[
          {
            "id":4,
            "parentId":2,
            "name":"444",
            "children":[]
          }
        ]
      }
    ]
  },
  {
    "id":3,
    "name":"333",
    "children":[]
  }
]
XEUtils.treeToArray(list1)
/*
[
  {id: 1, name: '111'},
  {id: 2, parentId: 1, name: '222'},
  {id: 3, name: '333'},
  {id: 4, parentId: 2, name: '444'}
]
*/

let list2 = [
  {
    "data":{"id":1,"name":"111"},
    "id":1,
    "children":[
      {
        "data":{"id":2,"parentId":1,"name":"222"},
        "id":2,
        "parentId":1,
        "children":[
          {
            "data":{"id":4,"parentId":2,"name":"444"},
            "id":4,
            "parentId":2,
            "children":[]
          }
        ]
      }
    ]
  },
  {
    "data":{"id":3,"name":"333"},
    "id":3,
    "children":[]
  },
  {
    "data":{"id":5,"parentId":22,"name":"555"},
    "id":5,
    "parentId":22,
    "children":[]
  }
]
XEUtils.treeToArray(list2, {data: 'data'})
/*
[
  {id: 1, name: '111'},
  {id: 2, parentId: 1, name: '222'},
  {id: 3, name: '333'},
  {id: 4, parentId: 2, name: '444'},
  {id: 5, parentId: 22, name: '555'}
]
*/
```

### now ( ) 返回当前时间戳

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.now() // 1514096716800
```

### timestamp ( date[, format] ) 将日期格式化为时间戳

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.timestamp(new Date()) // 1514096716800
XEUtils.timestamp('2018-12-01') // 1543593600000
XEUtils.timestamp('2017/12/20 10:10:30.459', 'yyyy/MM/dd HH:mm:ss.SSS') // 1513735830459
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

XEUtils.stringToDate('2017-12-20')
// Wed Dec 20 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.stringToDate('2017-12-20 10:10:30')
// Wed Dec 20 2017 10:10:30 GMT+0800 (中国标准时间)
XEUtils.stringToDate('12/20/2017', 'MM/dd/yyyy')
// Wed Dec 20 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.stringToDate('20171220101030', 'yyyyMMddHHmmss')
// Wed Dec 20 2017 10:10:30 GMT+0800 (中国标准时间)
XEUtils.stringToDate('2017/12/20 10:10:30', 'yyyy/MM/dd HH:mm:ss')
// Wed Dec 20 2017 10:10:00 GMT+0800 (中国标准时间)
XEUtils.stringToDate('12/20/2017 10:10:30.100', 'MM/dd/yyyy HH:mm:ss.SSS')
// Wed Dec 20 2017 10:10:30 GMT+0800 (中国标准时间)
```

### dateToString ( date [, format, options] ) 日期格式化为任意格式字符串

| 属性 | 描述 | 备注 | 值 |
|------|------|------|------|
| yy | 年份 | 自动截取后两位 |  |
| yyyy | 年份 |  |
| M | 月份 |  | 1~12 |
| MM | 月份 | 自动补0 | 01~12 |
| d | 日 |  | 1~31 |
| dd | 日 | 自动补0 | 01~31 |
| h | 12小时制 |  | 1~12 |
| hh | 12小时制 | 自动补0 | 01~12 |
| H | 24小时制 |  | 0~23 |
| HH | 24小时制 | 自动补0 | 00~23 |
| m | 分钟 |  | 0~59 |
| mm | 分钟 | 自动补0 | 00~59 |
| s | 秒 |  | 0~59 |
| ss | 秒 | 自动补0 | 00~59 |
| S | 毫秒 |  | 0~999 |
| SSS | 毫秒 | 自动补0 | 000~999 |
| a | 上午,下午 |  | am/pm |
| A | 上午,下午 |  | AM/PM |
| D | 年份的第几天 |  | 1~366 |
| e | 星期几 |  | 0~6 |
| E | 星期几 |  | 1~7 |
| q | 季度 |  | 1~4 |
| w | 年份的第几周 | 如果属于上个年份最后周期，返回0 | 0~53 |
| W | 月份的第几周 | 如果属于上个月份最后周期，返回0 | 0~5 |
| z | 时区 |  | GMT |
| Z | 时区值 |  | [+-]HHmm |

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.dateToString(1513735830000)
// '2017-01-01 14:05:30'
XEUtils.dateToString(new Date())
// '2017-01-01 14:05:30'
XEUtils.dateToString('2017-01-01 10:05:30', 'MM/dd/yyyy')
// '01/01/2017'
XEUtils.dateToString('2017-01-01 10:05:30', 'M/d/yyyy')
// '1/1/2017'
XEUtils.dateToString(new Date(), 'yyyyMMddHHmmssSSS')
// '20170101140530099'
XEUtils.dateToString(new Date(), 'yyyy-MM-dd')
// '2017-01-01'
XEUtils.dateToString(new Date(), 'yy-M-d')
// '17-1-1'
XEUtils.dateToString(new Date(), 'yyyy-MM-dd HH:mm:ss.SSS')
// '2017-01-01 14:05:30.099'
XEUtils.dateToString(new Date(), 'yyyy-MM-dd hh:mm:ss.SSSZ')
// '2017-01-01 02:05:30.099+0800'
XEUtils.dateToString(new Date(), 'yyyy-MM-dd hh:mm:ss.SSS zZ')
// '2017-01-01 02:05:30.099 GMT+0800'
XEUtils.dateToString('2017-11-20 10:05:30', 'yyyy-M-d h:m:s.S')
// '2017-11-20 2:5:30.99'
XEUtils.dateToString(new Date(), 'yyyy-M-d H:m:s.S')
// '2017-1-1 14:5:30.99'
XEUtils.dateToString(new Date(), 'yyyy-M-d h:m:s.S')
// '2017-1-1 2:5:30.99'
XEUtils.dateToString(new Date(), 'yyyy年MM月dd日 HH时mm分ss秒S毫秒,星期E 第q季度')
// '2017年01月01日 14时05分30秒99毫秒,星期3 第4季度'
XEUtils.dateToString(new Date(), 'yy年M月d日 HH时m分s秒S毫秒,星期E 第q季度')
// '17年1月1日 14时5分30秒99毫秒,星期3 第4季度'
XEUtils.dateToString(new Date(), 'yyyy年MM月dd日 hh时mm分ss秒SSS毫秒zZ 星期E e 第q季 今年第D天 今年第w周 当月第W周 a A')
// '2018年05月29日 09时44分46秒647毫秒GMT+0800 星期2 1 第2季 今年第149天 今年第22周 当月第4周 am AM'
```

### getWhatYear ( date, year [, month] ) 返回前几年或后几年的日期,可以指定年初(first)、年末(last)、月份(0~11)，默认当前

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.getWhatYear(new Date(), -1) // Mon Nov 20 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatYear(1513735830000, -1) // Tue Dec 20 2016 10:10:30 GMT+0800 (中国标准时间)
XEUtils.getWhatYear('2017-12-20', -1) // Tue Dec 20 2016 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatYear('2017-12-20', 1) // Thu Dec 20 2018 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatYear('2017-12-20', 0, 'first') // Sun Jan 01 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatYear('2017-12-20', 0, 'last') // Sun Dec 31 2017 23:59:59 GMT+0800 (中国标准时间)
```

### getWhatMonth ( date, month [, day] ) 返回前几月或后几月的日期,可以指定月初(first)、月末(last)、天数，默认当前

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.getWhatMonth(new Date(), -1) // Mon Nov 20 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatMonth(1513735830000, -1) // Mon Nov 20 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatMonth('2017-12-20', -1) // Mon Nov 20 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatMonth('2017-12-20', 1) // Sat Jan 20 2018 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatMonth('2017-12-20', -1, 'first') // Wed Nov 01 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatMonth('2017-12-20', 1, 'last') // Wed Jan 31 2018 23:59:59 GMT+0800 (中国标准时间)
```

### getWhatWeek ( date, week [, day] ) 返回前几周或后几周的日期,可以指定星期几(0~6)，默认当前

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.getWhatWeek(new Date(), -1) // Sun Dec 17 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatWeek(1513735830000, -1) // Sun Dec 17 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatWeek('2017-12-20', -1) // Sun Dec 17 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatWeek('2017-12-20', 1) // Sun Dec 31 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatWeek('2017-12-20', -1, 5) // Fri Dec 15 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatWeek('2017-12-20', 1, 0) // Sun Dec 31 2017 00:00:00 GMT+0800 (中国标准时间)
```

### getWhatDay ( date, day [, mode] ) 返回前几天或后几天的日期

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.getWhatDay(new Date(), -1) // Tue Dec 19 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatDay(1513735830000, -1) // Tue Dec 19 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatDay('2017-12-20', -1) // Tue Dec 19 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatDay('2017-12-20', 1) // Tue Dec 21 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatDay('2017-12-20', 0, 'first') // Wed Dec 20 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatDay('2017-12-20', 0, 'last') // Wed Dec 20 2017 23:59:59 GMT+0800 (中国标准时间)
```

### getDayOfYear ( date [, year] ) 返回某个年份的天数,可以指定前几个年或后几个年，默认当前

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.getDayOfYear(new Date()) // 365
XEUtils.getDayOfYear(1513735830000) // 365
XEUtils.getDayOfYear('2017-12-20') // 365
XEUtils.getDayOfYear('2019-12-20', 1) // 366
XEUtils.getDayOfYear('2020-12-20') // 366
```

### getYearDay ( date ) 返回某个年份的第几天

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.getYearDay(new Date()) // 149
XEUtils.getYearDay('2017-01-20') // 20
XEUtils.getYearDay('2018-05-20') // 140
```

### getYearWeek ( date ) 返回某个年份的第几周

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.getYearWeek(new Date()) // 22
XEUtils.getYearWeek('2017-01-20') // 3
XEUtils.getYearWeek('2018-05-20') // 20
```

### getMonthWeek ( date ) 返回某个月份的第几周

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.getMonthWeek(new Date()) // 4
XEUtils.getMonthWeek('2017-01-20') // 3
XEUtils.getMonthWeek('2018-05-20') // 2
```

### getDayOfMonth ( date [, month] ) 返回某个月份的天数,可以指定前几个月或后几个月，默认当前

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.getDayOfMonth(new Date()) // 31
XEUtils.getDayOfMonth(1513735830000) // 31
XEUtils.getDayOfMonth('2017-12-20') // 31
XEUtils.getDayOfMonth('2017-12-20', -1) // 30
XEUtils.getDayOfMonth('2017-12-20', 1) // 31
```

### getDateDiff ( startDate, endDate [, rules] ) 返回两个日期之间差距,如果结束日期小于开始日期 done 为 fasle

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.getDateDiff('2017-11-20', '2017-12-21') // {MM: 1, dd: 1}
XEUtils.getDateDiff('2017-12-20', '2017-12-21') // {dd: 1}
XEUtils.getDateDiff('2017-12-20', '2017-12-21') // {dd: 1, ss: 30}
XEUtils.getDateDiff('2018-01-01', '2017-12-21') // {done: false}
let dateDiff = XEUtils.getDateDiff('2017-12-20 10:10:30', '2017-12-21 10:15:00')
let content = `${dateDiff.mm}分${dateDiff.ss}秒` // '4分30秒'
```

### random ( min, max ) 获取一个指定范围内随机数

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.random() // 0 ~ 9
XEUtils.random(3, 6) // 3 ~ 6
XEUtils.random(0, 5) // 0 ~ 5
XEUtils.random(10, 100) // 10 ~ 100
```

### min ( arrb[, iteratee] ) 获取最小值

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.min([22, 66, 77, 11]) // 11
XEUtils.min([{a: 11}, {a: 44}], 'a') // {a: 11}
XEUtils.min([{a: 11}, {a: 44}], item => item.a) // {a: 11}
```

### max ( arr [, iteratee] ) 获取最大值

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.max([22, 66, 77, 11]) // 77
XEUtils.max([{a: 11}, {a: 44}], 'a') // {a: 44}
XEUtils.max([{a: 11}, {a: 44}], item => item.a) // {a: 44}
```

### commafy ( num [, options] ) 数值千分位分隔符、小数点

```JavaScript
import XEUtils from 'xe-utils'

// 千分位格式化 1,000,000
XEUtils.commafy(1000000)
// 格式化金额 1,000,000.00
XEUtils.commafy('1000000', {fixed: 2})
// 格式化银行卡 6660 0000 0000 0001
XEUtils.commafy(6660000000000001, {spaceNumber: 4, separator: ' '})
// 字符串每隔3位分割 111,111,111,111,111,111,111,111,111,111,111
XEUtils.commafy('111111111111111111111111111111111')
```

### toNumber ( num ) 转数值

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.toNumber(123) // 123
XEUtils.toNumber('12.3') // 12.3
XEUtils.toNumber('abc') // 0
```

### toInteger ( num ) 转整数

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.toInteger(123) // 123
XEUtils.toInteger('12.3') // 12
XEUtils.toInteger('abc') // 0
```

### trim ( str ) 去除字符串左右两边的空格

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.trim(' abc ') // 'abc'
```

### trimLeft ( str ) 去除字符串左边的空格

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.trimLeft(' abc ') // 'abc '
```

### trimRight ( str ) 去除字符串右边的空格

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.trimRight(' abc ') // ' aa'
```

### escape ( str ) 转义HTML字符串，替换&, <, >, ", ', `字符

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.escape('<a>link</a>') // '&lt;a&gt;link&lt;/a&gt;'
```

### unescape ( str ) 反转 escape

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.unescape('&lt;a&gt;link&lt;/a&gt;') // '<a>link</a>'
```

### camelCase ( str ) 将带驼峰字符串转成字符串

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.camelCase('project-name') // 'projectName'
```

### kebabCase ( str ) 将字符串转成驼峰字符串

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.kebabCase('projectName') // 'project-name'
```

### repeat ( str, count ) 将字符串重复 n 次

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.repeat('a', 5) // aaaaa
XEUtils.repeat('ab', 3) // ababab
```

### padStart ( str, targetLength, padString ) 用指定字符从前面开始补全字符串

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.padStart('a', 5, 'b') // bbbba
```

### padEnd ( str, targetLength [, padString] ) 用指定字符从后面开始补全字符串

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.padEnd('a', 5, 'b') // abbbb
```

### startsWith ( str, val [, startIndex] ) 判断字符串是否在源字符串的头部

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.startsWith('abc', 'b') // false
```

### endsWith ( str, val [, startIndex] ) 判断字符串是否在源字符串的尾部

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.endsWith('abc', 5, 'a') // false
```

### serialize ( query ) 序列化查询参数

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.serialize({id: 123, name: 'n1'}) // id=123&name=n1
```

### unserialize ( str ) 反转序列化查询参数

```JavaScript
import XEUtils from 'xe-utils'

XEUtils.unserialize('id=123&name=n1') // {id: 123, name: 'n1'}
```

### browse ( ) 获取浏览器信息

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
//   isPC: true,
//   isLocalStorage: true,
//   isSessionStorage: true
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

### cookie ( name, value, options ) Cookie 操作函数

```JavaScript
import XEUtils from 'xe-utils'

// 获取所有
XEUtils.cookie()
// 根据name获取
XEUtils.cookie('name')
// 删除
XEUtils.cookie('name', null, {expires: -1})
XEUtils.cookie('name', null, {expires: -1, path: '/'})
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

// 判断name是否存在
XEUtils.cookie.isKey(name)
// 添加
XEUtils.cookie.setItem(name, value, option)
XEUtils.cookie.setItem(name, value, option).setItem(name, value, option)
// 根据name获取
XEUtils.cookie.getItem(name)
// 删除
XEUtils.cookie.removeItem(name)
XEUtils.cookie.removeItem(name, {path: '/'})
// 获取所有name
XEUtils.cookie.keys()
// 获取所有
XEUtils.cookie.getJSON()
```

## 全局参数设置

```JavaScript
import XEUtils from 'xe-ajax'

XEUtils.setup({
  cookies: {
    path: '/'
  },
  treeOptions: {strict: false, parentKey: 'parentId', key: 'id', children: 'children', data: null},
  formatDate: 'yyyy-MM-dd HH:mm:ss.SSS',
  formatString: 'yyyy-MM-dd HH:mm:ss',
  formatStringMatchs : {
    E: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    q: [null, '第一季度', '第二季度', '第三季度', '第四季度']
  },
  commafys: {spaceNumber: 3, separator: ',', fixed: 0}
})
```

## 扩展函数

允许用您自己的实用函数扩展到XEUtils

### 文件 ./util.js

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
import util from './util'

XEUtils.mixin(util)

// 调用自定义扩展函数
XEUtils.toDateStr(new Date()) // 2018-01-01 10:00
```

## License

Copyright (c) 2017-present, Xu Liangzhan