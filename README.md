# xe-utils

[![npm version](https://img.shields.io/npm/v/xe-utils.svg?style=flat-square)](https://www.npmjs.org/package/xe-utils)
[![npm build](https://travis-ci.org/xuliangzhan/xe-utils.svg?branch=master)](https://travis-ci.org/xuliangzhan/xe-utils)
[![npm downloads](https://img.shields.io/npm/dm/xe-utils.svg?style=flat-square)](http://npm-stat.com/charts.html?package=xe-utils)
[![gzip size: JS](http://img.badgesize.io/https://unpkg.com/xe-utils/dist/xe-utils.min.js?compression=gzip&label=gzip%20size:%20JS)](http://img.badgesize.io/https://unpkg.com/xe-utils/lib/index.umd.min.js?compression=gzip&label=gzip%20size:%20JS)
[![npm license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/xuliangzhan/xe-utils/blob/master/LICENSE)

javascript 函数库、工具类，提供一套实用的基础函数、任意格式的日期转换函数，浏览器相关操作函数等...

## Browser Support

![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_7-8/internet-explorer_7-8_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png)
--- | --- | --- | --- | --- | --- |
7+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 6.1+ ✔ |

## Installing

```shell
npm install xe-utils --save
```

Using nodejs

```javascript
const XEUtils = require('xe-utils')
```

Get on [unpkg](https://unpkg.com/xe-utils/) and [cdnjs](https://cdn.jsdelivr.net/npm/xe-utils/)

```HTML
<script src="https://cdn.jsdelivr.net/npm/xe-utils"></script>
```

### ES6 Module import

```javascript
import XEUtils from 'xe-utils'

XEUtils.toDateString(Date.now()) // 2018-01-01 10:30:28
XEUtils.toStringDate('2018-01-01 10:30:00') // Mon Jan 01 2018 10:30:00 GMT+0800 (中国标准时间)
```

## API

* *全局参数*
  * setup ( options ) 设置默认全局参数
* *基础函数*
  * isNaN (val) 判断是否非数值
  * isFinite (val) 判断是否为有限数值
  * isUndefined (val) 判断 Undefined
  * isArray (val) 判断是否数组
  * isFloat (val) 判断是否小数
  * isInteger (val) 判断是否整数
  * isBoolean (val) 判断是否 Boolean 对象
  * isString (val) 判断是否 String 对象
  * isNumber (val) 判断是否 Number 对象
  * isRegExp (val) 判断是否 RegExp 对象
  * isObject (val) 判断是否 Object 对象
  * isPlainObject (val) 判断是否是一个对象
  * isDate (val) 判断是否 Date 对象
  * isError (val) 判断是否 Error 对象
  * isTypeError (val) 判断是否 TypeError 对象
  * isEmpty (val) 判断是否为空,包括空对象、空数值、空字符串
  * isNull (val) 判断是否为 Null
  * isSymbol (val) 判断是否 Symbol 对象
  * isArguments (val) 判断是否 Arguments 对象
  * isElement (val) 判断是否 Element 对象
  * isDocument (val) 判断是否 Document 对象
  * isWindow (val) 判断是否 Window 对象
  * isFormData (val) 判断是否 FormData 对象
  * isMap (val) 判断是否 Map 对象
  * isWeakMap (val) 判断是否 WeakMap 对象
  * isSet (val) 判断是否 Set 对象
  * isWeakSet (val) 判断是否 WeakSet 对象
  * isLeapYear (date) 判断是否闰年
  * isMatch (obj, source) 判断属性中的键和值是否包含在对象中
  * isEqual (obj1, obj2) 深度比较两个对象之间的值是否相等
  * isDateSame (date1, date2, format) 判断两个日期是否相同
* *常用函数*
  * toNumber ( num ) 转数值
  * toInteger ( num ) 转整数
  * toFixedNumber ( num, digits ) 和 Number.toFixed 类似，区别就是不会对小数进行四舍五入，结果返回数值
  * toFixedString ( num, digits ) 和 Number.toFixed 类似，区别就是不会对小数进行四舍五入，结果返回字符串
  * toArray ( array ) 将对象或者伪数组转为新数组
  * toStringJSON (str) 字符串转 JSON
  * toJSONString (obj) JSON 转字符串
  * getType (obj) 获取对象类型
  * getSize ( obj ) 返回对象的长度
  * uniqueId ( prefix ) 获取一个全局唯一标识
  * uniq ( array ) 数组去重
  * union ( ...array ) 将多个数的值返回唯一的并集数组
  * random ( min, max ) 获取一个指定范围内随机数
  * range ( start, stop, step ) 序号列表生成函数
  * clear (obj[, defs, assigns]) 清空对象; defs如果不传（清空所有属性）、如果传对象（清空并继承)、如果传值(给所有赋值)
  * remove (obj, iteratee) 移除对象属性
  * assign (destination, ...sources) 浅拷贝一个或者多个对象到目标对象中，如果第一值是true，则使用深拷贝
  * clone (obj, deep) 浅拷贝/深拷贝
  * destructuring (obj, ...target) 将一个或者多个对象值解构到目标对象
  * trim ( str ) 去除字符串左右两边的空格
  * trimLeft ( str ) 去除字符串左边的空格
  * trimRight ( str ) 去除字符串右边的空格
  * escape ( str ) 转义HTML字符串，替换&, <, >, ", ', `字符
  * unescape ( str ) 反转 escape
  * camelCase ( str ) 将带驼峰字符串转成字符串
  * kebabCase ( str ) 将字符串转成驼峰字符串
  * repeat ( str, count ) 将字符串重复 n 次
  * padStart ( str, targetLength, padString ) 用指定字符从前面开始补全字符串
  * padEnd ( str, targetLength [, padString] ) 用指定字符从后面开始补全字符串
  * startsWith ( str, val [, startIndex] ) 判断字符串是否在源字符串的头部
  * endsWith ( str, val [, startIndex] ) 判断字符串是否在源字符串的尾部
  * slice ( array, start, end ) 裁剪 Arguments 或数组 array，从 start 位置开始到 end 结束，但不包括 end 本身的位置
  * indexOf (obj, val) 返回对象第一个索引值
  * findIndexOf (obj, iteratee [, context]) 返回对象第一个索引值
  * lastIndexOf (obj, val) 从最后开始的索引值,返回对象第一个索引值
  * findLastIndexOf (obj, iteratee [, context]) 从最后开始的索引值，返回对象第一个索引值
  * includes (obj, val) 判断对象是否包含该值,成功返回 true 否则 false
  * includeArrays (array1, array2) 判断数组是否包含另一数组
  * each ( obj, iteratee [, context] ) 通用迭代器
  * arrayEach ( obj, iteratee [, context] ) 数组迭代器
  * objectEach ( obj, iteratee [, context] ) 对象迭代器
  * lastEach ( obj, iteratee [, context] ) 通用迭代器，从最后开始迭代
  * lastArrayEach ( obj, iteratee [, context] ) 数组迭代器，从最后开始迭代
  * lastObjectEach ( obj, iteratee [, context] ) 对象迭代器，从最后开始迭代
  * forOf ( obj, iteratee [, context] ) 通用迭代器,支持 return false 跳出循环 break
  * lastForOf ( obj, iteratee [, context] ) 通用迭代器,从最后开始迭代，支持 return false 跳出循环 break
  * has (obj, property) 检查键、路径是否是该对象的属性
  * get (obj, property, defaultValue) 获取对象的属性的值，如果值为 undefined，则返回默认值
  * set ( obj, property, value ) 设置对象属性上的值。如果属性不存在则创建它
  * keys (obj) 获取对象所有属性
  * values (obj) 获取对象所有值
  * entries (obj) 获取对象所有属性、值
  * first (obj) 获取对象第一个值
  * last (obj) 获取对象最后一个值
  * groupBy ( obj, iteratee [, context] ) 集合分组,默认使用键值分组，如果有 iteratee 则使用结果进行分组
  * countBy ( obj, iteratee [, context] ) 集合分组统计，返回各组中对象的数量统计
  * sortBy ( arr, iteratee [, context] ) 数组按属性值升序
  * shuffle ( array ) 将一个数组随机打乱，返回一个新的数组
  * sample ( array, number ) 从一个数组中随机返回几个元素
  * some ( obj, iteratee [, context] ) 对象中的值中的每一项运行给定函数,如果函数对任一项返回 true,则返回 true,否则返回 false
  * every ( obj, iteratee [, context] ) 对象中的值中的每一项运行给定函数,如果该函数对每一项都返回 true,则返回 true,否则返回 false
  * filter ( obj, iteratee [, context] ) 根据回调过滤数据
  * find ( obj, iteratee [, context] ) 查找匹配第一条数据
  * findKey ( obj, iteratee [, context] ) 查找匹配第一条数据的键
  * map ( obj, iteratee [, context] ) 指定方法后的返回值组成的新数组
  * objectMap ( obj, iteratee [, context] ) 指定方法后的返回值组成的新对象
  * zipObject ( props, values ) 根据键数组、值数组对转换为对象
  * pick (obj, array) 根据 keys 过滤指定的属性值 或者 接收一个判断函数，返回一个新的对象
  * omit (obj, array) 根据 keys 排除指定的属性值 或者 接收一个判断函数，返回一个新的对象
  * copyWithin ( array, target, start [, end] ) 浅复制数组的一部分到同一数组中的另一个位置,数组大小不变
  * sum ( obj, iteratee [, context] ) 求和函数，将数值相加
  * mean ( obj, iteratee [, context] ) 求平均值函数
  * reduce ( array, iteratee [, initialValue] ) 接收一个函数作为累加器，数组中的每个值（从左到右）开始合并，最终为一个值
  * chunk ( array, size ) 将一个数组分割成大小的组。如果数组不能被平均分配，那么最后一块将是剩下的元素
  * min ( arrb[, iteratee] ) 获取最小值
  * max ( arr [, iteratee] ) 获取最大值
  * commafy ( num [, options] ) 数值千分位分隔符、小数点
* *日期函数*
  * now ( ) 返回当前时间戳
  * timestamp ( date[, format] ) 将日期转为时间戳
  * toStringDate ( str, format ) 任意格式字符串转为日期
  * toDateString ( date [, format, options] ) 日期格式化为任意格式字符串
  * getWhatYear ( date, year [, month] ) 返回前几年或后几年的日期,可以指定年的最初时间(first)、年的最后时间(last)、年的月份(0~11)，默认当前
  * getWhatMonth ( date, month [, day] ) 返回前几月或后几月的日期,可以指定月初(first)、月末(last)、天数，默认当前
  * getWhatWeek ( date, week [, day] ) 返回前几周或后几周的日期,可以指定星期几(0~6)，默认当前
  * getWhatDay ( date, day [, mode] ) 返回前几天或后几天的日期,可以指定当天最初时间(first)、当天的最后时间(last)
  * getDayOfYear ( date [, year] ) 返回某个年份的天数,可以指定前几个年或后几个年，默认当前
  * getYearDay ( date ) 返回某个年份的第几天
  * getYearWeek ( date ) 返回某个年份的第几周
  * getMonthWeek ( date ) 返回某个月份的第几周
  * getDayOfMonth ( date [, month] ) 返回某个月份的天数,可以指定前几个月或后几个月，默认当前
  * getDateDiff ( startDate, endDate [, rules] ) 返回两个日期之间差距,如果结束日期小于开始日期 done 为 fasle
* *高级函数*
  * toArrayTree ( array, options ) 一个高性能的树结构转换函数，将一个带层级的数据列表转成树结构
  * toTreeArray ( array, options ) 将一个树结构转成数组列表
  * property ( path ) 返回一个获取对象属性的函数
  * pluck ( array, key ) 获取数组对象中某属性值，返回一个数组
  * invoke ( list, path, ...arguments ) 在list的每个元素上执行方法,任何传递的额外参数都会在调用方法的时候传递给它
  * zip ( ) 将每个数组中相应位置的值合并在一起
  * unzip ( arrays ) 与 zip 相反
  * delay (callback, wait[, ...arguments]) 该方法和 setTimeout 一样的效果，区别就是支持额外参数
  * bind (callback, context[, ...arguments]) 创建一个绑定上下文的函数
  * once (callback, context[, ...arguments]) 创建一个只能调用一次的函数,只会返回第一次执行后的结果
  * after (count, callback, context) 创建一个函数, 调用次数超过 count 次之后执行回调并将所有结果记住后返回
  * before (count, callback, context) 创建一个函数, 调用次数不超过 count 次之前执行回调并将所有结果记住后返回
  * throttle (callback, wait[, options]) 创建一个策略函数，当被重复调用函数的时候，至少每隔多少秒毫秒调用一次该函数
  * debounce (callback, wait[, options]) 创建一个防反跳策略函数，在函数最后一次调用多少毫秒之后才会再次执行，如果在期间内重复调用会重新计算延迟
* *浏览器函数*
  * serialize ( query ) 序列化查询参数
  * unserialize ( str ) 反转序列化查询参数
  * browse ( ) 获取浏览器信息
  * locat ( ) 获取地址栏信息
  * parseUrl ( url ) 解析 URL 参数
  * getBaseURL ( ) 获取上下文路径
  * cookie ( name, value, options ) Cookie 操作函数

## License

Copyright (c) 2017-present, Xu Liangzhan