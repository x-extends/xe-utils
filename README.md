# xe-utils 提供一整套实用函数式编程功能

## 通过NPM安装最新版本

``` shell
npm install vxe-utils --save
```

### 按需引入
``` shell
import { dateToString, stringToDate } from 'xe-utils'

let dateStr = dateToString(new Date())
let date = stringToDate(dateStr)
```

### 引入所有
``` shell
import * as XEUtils from 'xe-utils'

let dateStr = XEUtils.dateToString(new Date())
let date = XEUtils.stringToDate(dateStr)
```

### Vue全局安装，通过实例调用this.$utils函数this默认指向当前vue实例
``` shell
import Vue from 'vue'
import VXEUtils from 'vxe-utils'

Vue.use(VXEUtils)

// 在Vue实例中使用
let date = this.$utils.stringToDate('2017-12-20', 'yyyy-MM-dd')
```
## API :
### *./core/base*
#### isNaN (val) 判断是否非数值
```shell
this.$utils.isNaN(undefined) // true
this.$utils.isNaN({}) // true
this.$utils.isNaN('num') // true 
this.$utils.isNaN(true) // false
this.$utils.isNaN(null) // false
this.$utils.isNaN('') // false
```
#### isFinite (val) 判断是否为有限数值
```shell
this.$utils.isFinite(NaN) // false
this.$utils.isFinite(0) // true
this.$utils.isFinite(2e64) // true
```
#### isArray (val) 判断是否数组
```shell
this.$utils.isArray(null) // false
this.$utils.isArray({}) // false
this.$utils.isArray([1,2,3]) // true
```
#### isFloat (val) 判断是否小数
```shell
this.$utils.isFloat(null) // false
this.$utils.isFloat(0) // false
this.$utils.isFloat(3) // false
this.$utils.isFloat(3.3) // true
```
#### isInteger (val) 判断是否整数
```shell
this.$utils.isInteger(null) // false
this.$utils.isInteger(3.3) // false
this.$utils.isInteger(3) // true
this.$utils.isInteger(0) // true
```
#### isFunction (val) 判断是否方法
```shell
this.$utils.isFunction({}) // false
this.$utils.isFunction(function(){}) // true
```
#### isBoolean (val) 判断是否Boolean对象
```shell
this.$utils.isBoolean('false') // false
this.$utils.isBoolean(true) // true
```
#### isString (val) 判断是否String对象
```shell
this.$utils.isString(1) // false
this.$utils.isString(true) // false
this.$utils.isString('') // true
this.$utils.isString('abc') // true
```
#### isNumber (val) 判断是否Number对象
```shell
this.$utils.isNumber(null) // false
this.$utils.isNumber('1') // false
this.$utils.isNumber(1) // true
```
#### isRegExp (val) 判断是否RegExp对象
```shell
this.$utils.isRegExp(null) // false
this.$utils.isRegExp('a') // false
this.$utils.isRegExp(new RegExp('a')) // true
this.$utils.isRegExp(/\a/) // true
```
#### isObject (val) 判断是否Object对象
```shell
this.$utils.isObject(null) // true
this.$utils.isObject([]) // true
this.$utils.isObject({}) // true
this.$utils.isObject(123) // false
```
#### isPlainObject (val) 判断是否是一个对象
```shell
this.$utils.isPlainObject(null) // false
this.$utils.isPlainObject([]) // false
this.$utils.isPlainObject(123) // false
this.$utils.isPlainObject({}) // true
```
#### isDate (val) 判断是否Date对象
```shell
this.$utils.isDate('2017-12-20') // false
this.$utils.isDate({}) // false
this.$utils.isDate(1514096716800) // false
this.$utils.isDate(new Date()) // true
```
#### isError (val) 判断是否Error对象
```shell
this.$utils.isError(null) // false
this.$utils.isError({}) // false
this.$utils.isError(new Error('error')) // true
```
#### isTypeError (val) 判断是否TypeError对象
```shell
this.$utils.isTypeError(null) // false
this.$utils.isTypeError({}) // false
this.$utils.isTypeError(new TypeError('error')) // true
```
#### isEmpty (val) 判断是否为空,包括空对象、空数值、空字符串
```shell
this.$utils.isEmpty(0) // true
this.$utils.isEmpty('') // true
this.$utils.isEmpty(null) // true
this.$utils.isEmpty({}) // true
this.$utils.isEmpty([]]) // true
```
#### isNull (val) 判断是否为Null
```shell
this.$utils.isNull(0) // false
this.$utils.isNull('') // false
this.$utils.isNull(null) // true
```
#### isSymbol (val) 判断是否Symbol对象
```shell
this.$utils.isSymbol('a') // false
this.$utils.isSymbol(Symbol('a')) // true
```
#### isArguments (val) 判断是否Arguments对象
```shell
this.$utils.isArguments([]) // false
this.$utils.isArguments(arguments) // true
```
#### isElement (val) 判断是否Element对象
```shell
this.$utils.isElement({}) // false
this.$utils.isElement(document.createElement('div')) // true
```
#### isDocument (val) 判断是否Document对象
```shell
this.$utils.isDocument(document.createElement('div')) // false
this.$utils.isDocument(document) // true
```
#### isWindow (val) 判断是否Window对象
```shell
this.$utils.isWindow(document) // false
this.$utils.isWindow(window) // true
```
#### isFormData (val) 判断是否FormData对象
```shell
this.$utils.isFormData({}) // false
this.$utils.isFormData(new FormData()) // true
```
#### isLeapYear (date) 判断是否闰年
```shell
this.$utils.isLeapYear('2018-12-01') // false
this.$utils.isLeapYear('2020-12-01') // true
this.$utils.isLeapYear(new Date('2020/12/01')) // true
```
#### getType (obj) 获取对象类型
```shell
this.$utils.getType() // 'undefined'
this.$utils.getType(null) // 'null'
this.$utils.getType('') // 'string'
this.$utils.getType(1) // 'number'
this.$utils.getType([]) // 'array'
this.$utils.getType({}) // 'object'
this.$utils.getType(function(){}) // 'function'
```
#### uniqueId (  ) 获取一个全局唯一标识
```shell
this.$utils.uniqueId() // 1
this.$utils.uniqueId() // 2
```
#### size ( obj ) 返回对象的长度
```shell
this.$utils.size('123') // 3
this.$utils.size([1, 3]) // 2
this.$utils.size({a: 2, b: 5}) // 2
```
#### indexOf (obj, val) 返回对象第一个索引值
```shell
this.$utils.indexOf([11], 22) // -1
this.$utils.indexOf([11, 22], 22) // 1
```
#### lastIndexOf (obj, val) 从最后开始的索引值,返回对象第一个索引值
```shell
this.$utils.lastIndexOf([11], 22) // -1
this.$utils.lastIndexOf([11, 22], 22) // 1
```
#### includes (obj, val) 判断对象是否包含该值,成功返回true否则false
```shell
this.$utils.includes([11], 22) // false
this.$utils.includes([11, 22], 22) // true
```
#### assign (target, ...) 浅拷贝一个或者多个对象到目标对象中
```shell
let obj1 = {a: null}
this.$utils.assign(obj1, {a: 11}) // {a: 11}
this.$utils.extend(obj1, {a: 11}) // {a: 11}
let obj2 = {c: null}
this.$utils.assign(obj2, {a: 11}, {b: 22}) // {a: 11, b: 22, c: null}
this.$utils.extend(obj2, {a: 11}, {b: 22}) // {a: 11, b: 22, c: null}
```
#### stringToJson (str) 字符串转JSON
```shell
this.$utils.stringToJson('{"a":1}') // {a: 1}
this.$utils.stringToJson('[11,22]') // [11, 22]
```
#### jsonToString (obj) JSON转字符串
```shell
this.$utils.jsonToString({a: 1}) // '{"a":1}'
this.$utils.jsonToString([11, 22]) // '[11,22]'
```
#### keys (obj) 获取对象所有属性
```shell
this.$utils.keys({a: 11}) // ['a']
this.$utils.keys([11, 22]) // [0, 1]
```
#### values (obj) 获取对象所有值
```shell
this.$utils.values({a: 11}) // [11]
this.$utils.values([11, 22]) // [11, 22]
```
#### entries (obj) 获取对象所有属性、值
```shell
this.$utils.entries({a: 11}) // [['a', 11]]
this.$utils.entries([11, 22]) // [[0, 11], [1, 22]]
```
#### first (obj) 获取对象第一个值
```shell
this.$utils.first({a: 11, b : 22}) // 11
this.$utils.first([11, 22]) // 11
```
#### last (obj) 获取对象最后一个值
```shell
this.$utils.last({a: 11, b: 22}) // 22
this.$utils.last([11, 22]) // 22
```
#### each ( obj, iteratee, context ) 迭代器
```shell
let result = []
this.$utils.each({a: 11, b: 22}, (item, key) => {
  // // this 指向当前vue实例
  if (key === 'b') {
    result.push(item)
  }
}) // [22]
```
#### groupBy ( obj, iteratee, context ) 集合分组,默认使用键值分组,如果有iteratee则使用结果进行分组
```shell
let result1 = this.$utils.groupBy([{type: 'a'}, {type: 'b'}]], 'type') // {a: [{a: 'a'}], b: [{b: 'b'}]}
let result2 = this.$utils.groupBy([{type: 'a'}, {type: 'b'}]], (item, key) => {
  // // this 指向当前vue实例
  return item.type
}) // {a: [{a: 'a'}], b: [{b: 'b'}]}
```
#### mapObject ( obj, iteratee, context ) 指定方法后的返回值组成的新对象
```shell
let result = []
this.$utils.mapObject([{type: 'a'}, {type: 'b'}]], (item, key) => {
  // // this 指向当前vue实例
  return item.type
}) // {a: {type: 'a', b: {type: 'b'}}}
```
#### clone (obj, deep) 浅拷贝/深拷贝
```shell
let v1 = {a: 11, b: {b1: 22}
let v2 = this.$utils.clone({a: 11, b: 22})
if (v1.b === v2.b) {
  // true
}
let v3 = this.$utils.clone(v1, true)
if (v1.b === v3.b) {
  // false
}
```

### *./core/array*
#### uniq ( array ) 数组去重
```shell
this.$utils.uniq([11, 22, 33, 33, 22, 55]) // [11, 22, 33, 55]
```
#### union ( ...array ) 将多个数的值返回唯一的并集数组
```shell
this.$utils.union([11, 22], [33, 22], [44, 11]) // [11, 22, 33, 44]
```
#### sort ( arr, iteratee, context ) 数组按属性值升序
```shell
this.$utils.sort([{a: 9}, {a: 4}, {a: 5}], 'a') // [{a: 4}, {a: 5}, {a: 9}]
this.$utils.sort([{a: 9}, {a: 4}, {a: 5}], (v1, v2) => {
  // // this 指向当前vue实例
  return v1.a > v2.a ? 1 : -1
}) // [{a: 4}, {a: 5}, {a: 9}]
```
#### shuffle ( array ) 将一个数组随机打乱，返回一个新的数组
```shell
this.$utils.shuffle([11, 22, 33, 44, 55]) // [22, 33, 55, 11, 44]
```
#### sample ( array, number ) 从一个数组中随机返回几个元素
```shell
this.$utils.sample([11, 22, 33, 44, 55], 3) // [22, 33, 55]
```
#### some ( obj, iteratee, context ) 对象中的值中的每一项运行给定函数,如果函数对任一项返回true,则返回true,否则返回false
```shell
this.$utils.some([{a: 11}, {a: 22}]], (item, key) => {
  // // this 指向当前vue实例
  return item.a === 55
}) // false
this.$utils.some([{a: 11}, {a: 22}]], (item, key) => {
  // // this 指向当前vue实例
  return item.a === 11
}) // true
```
#### every ( obj, iteratee, context ) 对象中的值中的每一项运行给定函数,如果该函数对每一项都返回true,则返回true,否则返回false
```shell
this.$utils.every([{a: 11}, {a: 22}]], (item, key) => {
  // // this 指向当前vue实例
  return item.a === 11
}) // false
this.$utils.every([{a: 11}, {a: 22}]], (item, key) => {
  // // this 指向当前vue实例
  return item.a === 11 || item.a === 22
}) // true
```
#### filter ( obj, iteratee, context ) 根据回调过滤数据
```shell
this.$utils.filter([{a: 11}, {a: 22}]], (item, key) => {
  // // this 指向当前vue实例
  return item.a > 11
}) // [{a: 22}]
```
#### find ( obj, iteratee, context ) 查找匹配第一条数据
```shell
this.$utils.find([{a: 11}, {a: 22}]], (item, key) => {
  // // this 指向当前vue实例
  return item.a === 55
}) // null
this.$utils.find([{a: 11}, {a: 22}]], (item, key) => {
  // // this 指向当前vue实例
  return item.a === 22
}) // {a: 22}
```
#### map ( obj, iteratee, context ) 指定方法后的返回值组成的新数组
```shell
this.$utils.map([{a: 11}, {a: 22}]], (item, key) => {
  // // this 指向当前vue实例
  return item.a
}) // [11, 22]
```

### *./core/date*
#### now ( ) 返回时间戳
```shell
this.$utils.now() // 1514096716800
```
#### stringToDate ( str, format ) 字符串转为日期(yyyy年份、MM月份、dd天、HH小时、mm分钟、ss秒、SSS毫秒)
```shell
this.$utils.stringToDate('2017-12-20') // Wed Dec 20 2017 00:00:00 GMT+0800 (中国标准时间)
this.$utils.stringToDate('2017-12-20 10:10:30') // Wed Dec 20 2017 10:10:30 GMT+0800 (中国标准时间)
this.$utils.stringToDate('12/20/2017', 'MM/dd/yyyy') // Wed Dec 20 2017 00:00:00 GMT+0800 (中国标准时间)
this.$utils.stringToDate('12/20/2017 10:10:30.100', 'MM/dd/yyyy HH:mm') // Wed Dec 20 2017 10:10:00 GMT+0800 (中国标准时间)
this.$utils.stringToDate('12/20/2017 10:10:30.100', 'MM/dd/yyyy HH:mm:ss.SSS') // Wed Dec 20 2017 10:10:30 GMT+0800 (中国标准时间)
```
#### dateToString ( date, format ) 日期格式化为字符串(yyyy年份、MM月份、dd天、HH小时、mm分钟、ss秒、S毫秒、E星期几、q季度)
```shell
this.$utils.dateToString(1513735830000) // '2017-12-20 10:10:30'
this.$utils.dateToString(new Date()) // '2017-12-20 10:10:30'
this.$utils.dateToString('2017-12-20 10:10:30', 'MM/dd/yyyy') // '12/20/2017'
this.$utils.dateToString(new Date(), 'yyyy-MM-dd') // '2017-12-20'
this.$utils.dateToString(new Date(), 'yyyy-MM-dd HH:mm:ss.S') // '2017-12-20 10:10:30.100'
this.$utils.dateToString(new Date(), 'yyyy年MM月dd日 HH时mm分ss秒S毫秒,星期E 第q季度') // '2017年12月20日 10时10分30秒100毫秒,星期三 第四季度'
```
#### getWhatMonth ( date, mode, month ) 返回前几个月或后几个月的日期,可以指定月初或月末，默认当前
```shell
this.$utils.getWhatMonth(new Date(), -1) // Mon Nov 20 2017 00:00:00 GMT+0800 (中国标准时间)
this.$utils.getWhatMonth(1513735830000, -1) // Mon Nov 20 2017 00:00:00 GMT+0800 (中国标准时间)
this.$utils.getWhatMonth('2017-12-20', -1) // Mon Nov 20 2017 00:00:00 GMT+0800 (中国标准时间)
this.$utils.getWhatMonth('2017-12-20', 1) // Sat Jan 20 2018 00:00:00 GMT+0800 (中国标准时间)
this.$utils.getWhatMonth('2017-12-20', -1, 'first') // Wed Nov 01 2017 00:00:00 GMT+0800 (中国标准时间)
this.$utils.getWhatMonth('2017-12-20', 1, 'last') // Wed Jan 31 2018 00:00:00 GMT+0800 (中国标准时间)
```
#### getWhatWeek ( date, mode, week ) 返回前几周或后几周的日期,可以指定星期几，默认当前
```shell
this.$utils.getWhatWeek(new Date(), -1) // Sun Dec 17 2017 00:00:00 GMT+0800 (中国标准时间)
this.$utils.getWhatWeek(1513735830000, -1) // Sun Dec 17 2017 00:00:00 GMT+0800 (中国标准时间)
this.$utils.getWhatWeek('2017-12-20', -1) // Sun Dec 17 2017 00:00:00 GMT+0800 (中国标准时间)
this.$utils.getWhatWeek('2017-12-20', 1) // Sun Dec 31 2017 00:00:00 GMT+0800 (中国标准时间)
this.$utils.getWhatWeek('2017-12-20', -1, 5) // Fri Dec 15 2017 00:00:00 GMT+0800 (中国标准时间)
this.$utils.getWhatWeek('2017-12-20', 1, 0) // Sun Dec 31 2017 00:00:00 GMT+0800 (中国标准时间)
```
#### getWhatDay ( date, day ) 返回前几天或后几天的日期
```shell
this.$utils.getWhatDay(new Date(), -1) // Tue Dec 19 2017 00:00:00 GMT+0800 (中国标准时间)
this.$utils.getWhatDay(1513735830000, -1) // Tue Dec 19 2017 00:00:00 GMT+0800 (中国标准时间)
this.$utils.getWhatDay('2017-12-20', -1) // Tue Dec 19 2017 00:00:00 GMT+0800 (中国标准时间)
this.$utils.getWhatDay('2017-12-20', 1) // Tue Dec 21 2017 00:00:00 GMT+0800 (中国标准时间)
```
#### getDaysOfMonth ( date, month ) 返回当前日期月份的天数,可以指定前几个月或后几个月，默认当前
```shell
this.$utils.getDaysOfMonth(new Date()) // 31
this.$utils.getDaysOfMonth(1513735830000) // 31
this.$utils.getDaysOfMonth('2017-12-20') // 31
this.$utils.getDaysOfMonth('2017-12-20', -1) // 30
this.$utils.getDaysOfMonth('2017-12-20', 1) // 31
```
#### getDateDiff ( startDate, endDate, rules ) 返回两个日期之间差距
```shell
this.$utils.getDateDiff('2017-11-20', '2017-12-21') // {MM: 1, dd: 1}
this.$utils.getDateDiff('2017-12-20', '2017-12-21') // {dd: 1}
this.$utils.getDateDiff('2017-12-20', '2017-12-21') // {dd: 1, ss: 30}
let dateDiff = this.$utils.getDateDiff('2017-12-20 10:10:30', '2017-12-21 10:15:00')
let content = `${dateDiff.mm}分${dateDiff.ss}秒` // '4分30秒'
```

### *./core/number*
#### random ( min, max ) 获取一个指定范围内随机数
```shell
this.$utils.random() // 0 ~ 9
this.$utils.random(3, 6) // 3 ~ 6
this.$utils.random(10, 100) // 10 ~ 100
```
#### min ( arr, iteratee ) 获取最小值
```shell
this.$utils.min([22, 66, 77, 11]) // 11
this.$utils.min([{a: 11}, {a: 44}], 'a') // 11
this.$utils.min([{a: 11}, {a: 44}], (item) => {
  // // this 指向当前vue实例
  return item.a
}) // {a: 11}
```
#### max ( arr, iteratee ) 获取最大值
```shell
this.$utils.max([22, 66, 77, 11]) // 77
this.$utils.max([{a: 11}, {a: 44}], 'a') // 44
this.$utils.max([{a: 11}, {a: 44}], (item) => {
  // // this 指向当前vue实例
  return item.a
}) // {a: 44}
```

### *./core/string*
#### escape ( str ) 转义HTML字符串，替换&, <, >, ", ', `字符
```shell
this.$utils.escape('<a>link</a>') // '&lt;a&gt;link&lt;/a&gt;'
```
#### unescape ( str ) 反转escape
```shell
this.$utils.escape('&lt;a&gt;link&lt;/a&gt;') // '<a>link</a>'
```

### *./browse/type*
#### browse ( ) 获取浏览器内核
```shell
this.$utils.browse() // {-khtml: false, -moz: false, -ms: fasle, -o: false, -webkit: true}
```

### *./browse/locat*
#### locat ( ) 获取地址栏信息
```shell
this.$utils.locat() // {hash: '', host: '', hostname: '', href: '', protocol: '', port: '', origin: '', query: {...}, params: {...}, ...}
```

### *./browse/cookie*
#### cookie ( ) Cookie操作函数
```shell
this.$utils.cookie() // 获取所有
this.$utils.cookie('name') // 根据name获取
this.$utils.cookie('name', null, {expires: -1}) // 删除
this.$utils.cookie([{name: 'name', expires: -1}]) // 批量删除
this.$utils.cookie('name', 'value') // 添加/修改
this.$utils.cookie([{name: 'name', value: 'value'}]) // 批量添加/修改
this.$utils.cookie('name', 'value', {domain: 'xxx.com', path: '/', expires: 7, secure: true}) // 添加并设置domain/path/secure/expires 7天后过期
this.$utils.cookie([{name: 'name', value: 'value', domain: 'xxx.com', path: '/', expires: 7, secure: true}]) // 批量添加并设置domain/path/secure/expires 7天后过期
```

## License
Copyright (c) 2017-present, Xu Liangzhan