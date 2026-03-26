# xe-utils API 文档

`xe-utils` 是一个 JavaScript 工具类库，提供了丰富的函数用于处理数据类型、对象、数组、日期、数字、字符串、URL 以及浏览器操作等，支持按需加载，性能优异。

---

## 安装

```bash
npm install xe-utils
```

---

## 快速开始

```javascript
import XEUtils from 'xe-utils'

// 判断是否为数组
XEUtils.isArray([1, 2, 3]) // true

// 格式化日期
XEUtils.toDateString(new Date(), 'yyyy-MM-dd HH:mm:ss')

// 深拷贝对象
const copy = XEUtils.clone(originalObj, true)
```

---

## API 列表

### Base

#### `isNaN(val)`
判断是否非数值，如果 `val` 是一个 `NaN`，返回 `true`，否则返回 `false`。

```javascript
isNaN(undefined) // true
XEUtils.isNaN(undefined) // false
XEUtils.isNaN(NaN) // true
```

#### `isFinite(val)`
判断是否为有限数值。

```javascript
XEUtils.isFinite(NaN) // false
XEUtils.isFinite(0) // true
XEUtils.isFinite(2e64) // true
```

#### `isUndefined(val)`
判断是否为 `undefined`。

```javascript
XEUtils.isUndefined(0) // false
XEUtils.isUndefined() // true
```

#### `isArray(val)`
判断是否为数组。

```javascript
XEUtils.isArray(null) // false
XEUtils.isArray({}) // false
XEUtils.isArray([1,2,3]) // true
```

#### `isFloat(val)`
判断是否为小数。

```javascript
XEUtils.isFloat(null) // false
XEUtils.isFloat(0) // false
XEUtils.isFloat(3) // false
XEUtils.isFloat(3.3) // true
```

#### `isInteger(val)`
判断是否为整数。

```javascript
XEUtils.isInteger(null) // false
XEUtils.isInteger(3.3) // false
XEUtils.isInteger(3) // true
XEUtils.isInteger(0) // true
```

#### `isFunction(val)`
判断是否为函数。

```javascript
XEUtils.isFunction({}) // false
XEUtils.isFunction(function(){}) // true
```

#### `isBoolean(val)`
判断是否为布尔值。

```javascript
XEUtils.isBoolean('false') // false
XEUtils.isBoolean(true) // true
```

#### `isString(val)`
判断是否为字符串。

```javascript
XEUtils.isString(1) // false
XEUtils.isString(true) // false
XEUtils.isString('') // true
XEUtils.isString('abc') // true
```

#### `isNumber(val)`
判断是否为数字。

```javascript
XEUtils.isNumber(null) // false
XEUtils.isNumber('1') // false
XEUtils.isNumber(1) // true
```

#### `isRegExp(val)`
判断是否为正则表达式对象。

```javascript
XEUtils.isRegExp(null) // false
XEUtils.isRegExp('a') // false
XEUtils.isRegExp(new RegExp('a')) // true
XEUtils.isRegExp(/\d/) // true
```

#### `isObject(val)`
判断是否为对象（包括 `null`、数组、对象等）。

```javascript
XEUtils.isObject(null) // true
XEUtils.isObject([]) // true
XEUtils.isObject({}) // true
XEUtils.isObject(123) // false
```

#### `isPlainObject(val)`
判断是否为纯对象（由 `Object` 构造函数创建的对象）。

```javascript
XEUtils.isPlainObject(null) // false
XEUtils.isPlainObject([]) // false
XEUtils.isPlainObject(123) // false
XEUtils.isPlainObject({}) // true
```

#### `isDate(val)`
判断是否为日期对象，即使是 `Invalid Date` 也返回 `true`。

```javascript
XEUtils.isDate('2017-12-20') // false
XEUtils.isDate(1514096716800) // false
XEUtils.isDate(new Date('abc')) // Invalid Date => true
XEUtils.isDate(new Date()) // true
```

#### `isValidDate(val)`
判断是否为有效的日期对象（与 `isDate` 的区别是 `Invalid Date` 返回 `false`）。

```javascript
XEUtils.isValidDate('2017-12-20') // false
XEUtils.isValidDate(1514096716800) // false
XEUtils.isValidDate(new Date('abc')) // Invalid Date => false
XEUtils.isValidDate(new Date()) // true
```

#### `isError(val)`
判断是否为错误对象。

```javascript
XEUtils.isError(null) // false
XEUtils.isError({}) // false
XEUtils.isError(new TypeError('error')) // true
XEUtils.isError(new Error('error')) // true
```

#### `isTypeError(val)`
判断是否为 `TypeError` 对象。

```javascript
XEUtils.isTypeError(null) // false
XEUtils.isTypeError({}) // false
XEUtils.isTypeError(new Error('error')) // false
XEUtils.isTypeError(new TypeError('error')) // true
```

#### `isEmpty(val)`
判断是否为空对象（空数组、空对象、`null`、`undefined` 等）。

```javascript
XEUtils.isEmpty([11, 22]) // false
XEUtils.isEmpty({a:null}) // false
XEUtils.isEmpty(null) // true
XEUtils.isEmpty({}) // true
XEUtils.isEmpty([]) // true
```

#### `isNull(val)`
判断是否为 `null`。

```javascript
XEUtils.isNull(0) // false
XEUtils.isNull('') // false
XEUtils.isNull(null) // true
```

#### `isSymbol(val)`
判断是否为 `Symbol`。

```javascript
XEUtils.isSymbol('a') // false
XEUtils.isSymbol(Symbol('a')) // true
```

#### `isArguments(val)`
判断是否为 `arguments` 对象。

```javascript
XEUtils.isArguments([]) // false
XEUtils.isArguments(arguments) // true
```

#### `isElement(val)`
判断是否为 DOM 元素。

```javascript
XEUtils.isElement({}) // false
XEUtils.isElement(document.createElement('div')) // true
```

#### `isDocument(val)`
判断是否为 `document` 对象。

```javascript
XEUtils.isDocument({}) // false
XEUtils.isDocument(document.createElement('div')) // false
XEUtils.isDocument(document) // true
```

#### `isWindow(val)`
判断是否为 `window` 对象。

```javascript
XEUtils.isWindow({}) // false
XEUtils.isWindow(document) // false
XEUtils.isWindow(window) // true
```

#### `isFormData(val)`
判断是否为 `FormData` 对象。

```javascript
XEUtils.isFormData({}) // false
XEUtils.isFormData(new FormData()) // true
```

#### `isMap(val)`
判断是否为 `Map` 对象。

```javascript
XEUtils.isMap({}) // false
XEUtils.isMap(new Map()) // true
```

#### `isWeakMap(val)`
判断是否为 `WeakMap` 对象。

```javascript
XEUtils.isWeakMap({}) // false
XEUtils.isWeakMap(new WeakMap()) // true
```

#### `isSet(val)`
判断是否为 `Set` 对象。

```javascript
XEUtils.isSet({}) // false
XEUtils.isSet(new Set()) // true
```

#### `isWeakSet(val)`
判断是否为 `WeakSet` 对象。

```javascript
XEUtils.isWeakSet({}) // false
XEUtils.isWeakSet(new WeakSet()) // true
```

#### `isLeapYear(date)`
判断是否为闰年。

```javascript
XEUtils.isLeapYear(1606752000000)  // true
XEUtils.isLeapYear('2018-12-01') // false
XEUtils.isLeapYear('2020-12-01') // true
XEUtils.isLeapYear(new Date('2020/12/01')) // true
```

#### `isMatch(obj, source)`
判断属性中的键和值是否包含在对象中。

```javascript
XEUtils.isMatch({ aa: 11, bb: 22 }, { bb: 22 })  // true
XEUtils.isMatch({ aa: 11, bb: 22 }, { bb: 33 })  // false
```

#### `isEqual(obj1, obj2)`
深度比较两个对象之间的值是否相等。

```javascript
XEUtils.isEqual({}, []) // false
XEUtils.isEqual({0: 1}, [1]) // false
XEUtils.isEqual({name: 'test1'}, {name: 'test1'}) // true
XEUtils.isEqual({name: 'test1', list: [11, /\d/]}, {name: 'test1', list: [11, /\d/]}) // true
XEUtils.isEqual({name: 'test1', list: [11, 33, {a: /\D/}]}, {name: 'test1', list: [11, 33, {a: /\d/}]}) // false
```

#### `isEqualWith(obj1, obj2, func)`
深度比较两个对象之间的值是否相等，使用自定义比较函数。

```javascript
XEUtils.isEqualWith({0: 1}, [1]) // false
XEUtils.isEqualWith({0: 1}, [1], (v1, v2) => true) // true
XEUtils.isEqualWith([1], [1]) // true
XEUtils.isEqualWith([1], [1], (v1, v2) => false) // false
```

#### `isDateSame(date1, date2, format)`
判断两个日期是否相同。

```javascript
XEUtils.isDateSame('2018-12-01', '2018-12-01') // true
XEUtils.isDateSame(new Date(), '2018-12-01', 'yyyy') // 判断是否同一年 true
XEUtils.isDateSame(new Date(), XEUtils.toStringDate('12/30/2018', 'MM/dd/yyyy'), 'MM') // 判断是否同一月 true
XEUtils.isDateSame(new Date(), new Date(), 'dd') // 判断是否同一日 true
XEUtils.isDateSame(new Date(), new Date(), 'yyyyMMdd') // 判断是否同年同月同日 true
```

#### `getType(obj)`
获取对象类型。

```javascript
XEUtils.getType() // 'undefined'
XEUtils.getType(null) // 'null'
XEUtils.getType('') // 'string'
XEUtils.getType(/\d/) // 'regexp'
XEUtils.getType(1) // 'number'
XEUtils.getType([]) // 'array'
XEUtils.getType({}) // 'object'
XEUtils.getType(new Error()) // 'error'
XEUtils.getType(function(){}) // 'function'
```

#### `uniqueId(prefix)`
获取一个全局唯一标识。

```javascript
XEUtils.uniqueId() // 1
XEUtils.uniqueId() // 2
XEUtils.uniqueId('prefix_') // 'prefix_3'
```

#### `getSize(obj)`
返回对象的长度（字符串、数组、对象的长度）。

```javascript
XEUtils.getSize('123') // 3
XEUtils.getSize([1, 3]) // 2
XEUtils.getSize({a: 2, b: 5}) // 2
```

#### `toStringJSON(str)`
字符串转 JSON。

```javascript
XEUtils.toStringJSON('{"a":1}') // {a: 1}
XEUtils.toStringJSON('[11,22]') // [11, 22]
```

#### `toJSONString(obj)`
JSON 转字符串。

```javascript
XEUtils.toJSONString({a: 1}) // '{"a":1}'
XEUtils.toJSONString([11, 22]) // '[11,22]'
```

#### `keys(obj)`
获取对象所有属性名。

```javascript
XEUtils.keys({a: 11}) // ['a']
```

#### `values(obj)`
获取对象所有属性值。

```javascript
XEUtils.values({a: 11}) // [11]
```

#### `entries(obj)`
获取对象所有键值对。

```javascript
XEUtils.entries({a: 11}) // [['a', 11]]
XEUtils.entries([11, 22]) // [['0', 11], ['1', 22]]
```

#### `first(obj)`
获取对象第一个值。

```javascript
XEUtils.first({a: 11, b : 22}) // 11
XEUtils.first([11, 22]) // 11
```

#### `last(obj)`
获取对象最后一个值。

```javascript
XEUtils.last({a: 11, b: 22}) // 22
XEUtils.last([11, 22]) // 22
```

#### `each(obj, iterate[, context])`
通用迭代器，支持遍历任意类型。

```javascript
XEUtils.each([11, 22, 33], (item, key) => {
  // 通用迭代器，支持遍历任意类型
})
```

#### `lastEach(obj, iterate[, context])`
通用迭代器，从最后开始迭代。

```javascript
XEUtils.lastEach([11, 22, 33], (item, key) => {
  // 通用迭代器，支持遍历任意类型
})
```

#### `range(start, stop, step)`
序号列表生成函数。

```javascript
XEUtils.range(0) // []
XEUtils.range(10) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
XEUtils.range(-5, 5) // [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4]
XEUtils.range(0, 10, 2) // [0, 2, 4, 6, 8]
```

---

### Object

#### `has(obj, property)`
检查键、路径是否是该对象的属性。

```javascript
XEUtils.has({a: {b: 11, c: 22, d: [33, 44]}}, 'a.b') // true
XEUtils.has({a: {b: 11, c: 22, d: [33, 44]}}, 'a.e') // false
XEUtils.has({a: {b: 11, c: 22, d: [33, 44]}}, 'a.d[0]') // true
XEUtils.has({a: {b: 11, c: 22, d: [33, {f: 66}]}}, 'a.d[1].f') // true
XEUtils.has({a: {b: 11, c: 22, d: [33, 44]}}, ['a', 'd[1]']) // true
XEUtils.has({a: {b: 11, c: 22, d: [33, 44]}}, ['a', 'd[3]']) // false
```

#### `get(obj, property, defaultValue)`
获取对象的属性值，如果值为 `undefined`，则返回默认值。

```javascript
XEUtils.get({a: {b: 11, c: 22, d: [33, 44]}}, 'a.b') // 11
XEUtils.get({a: {b: 11, c: 22, d: [33, 44]}}, 'a.e', 'default') // 'default'
XEUtils.get({a: {b: 11, c: 22, d: [33, 44]}}, 'a.d[0]') // 33
XEUtils.get({a: {b: 11, c: 22, d: [33, {f: 66}]}}, 'a.d[1].f') // 66
XEUtils.get({a: {b: 11, c: 22, d: [33, 44]}}, ['a', 'c']) // 22
```

#### `set(obj, property, value)`
设置对象属性上的值。如果属性不存在则创建它。

```javascript
XEUtils.set({}, 'a.d[0]', 33) // {a: {d: [33]}}
XEUtils.set({a: {}}, 'a.d[0].f.h', 44) // {a: {d: [{f: {h: 44}}]}}
XEUtils.set({}, ['a', 'c'], 22) // {a: {c: 22}}
XEUtils.set({}, ['a', 'd[0]', 'f', 'h'], 44) // {a: {d: [{f: {h: 44}}]}}
```

#### `clear(obj[, defs, assigns])`
清空对象；`defs` 不传则清空所有属性，传对象则清空并继承，传值则给所有属性赋值。

```javascript
let a = [11, 22, 33, 33]
XEUtils.clear(a) // []
XEUtils.clear(a, undefined) // [undefined, undefined, undefined, undefined]
XEUtils.clear(a, null) // [null, null, null, null]
let b = {b1: 11, b2: 22}
XEUtils.clear(b) // {}
XEUtils.clear(b, undefined) // {b1: undefined, b2: undefined}
XEUtils.clear(b, null) // {b1: null, b2: null}
```

#### `assign(target, ...sources)`
将一个或多个源对象复制到目标对象中（浅拷贝）。

```javascript
const obj1 = {a: 0, b: {b1: 11}}
const obj2 = XEUtils.assign(obj1, {a: 11}, {c: 33})
// {a: 11, b: {b1: 11}, c: 33}

const obj3 = {a: 0, b: {b1: 11}}
const obj4 = XEUtils.assign(obj1, {a: 11, b: {b2: 22}})
// {a: 11, b: {b2: 22}}
```

#### `merge(target, ...sources)`
将一个或多个源对象合并到目标对象中，和 `assign` 的区别是会将对象或数组类型递归合并。

```javascript
const obj1 = [{a: 11}, {b: 22}]
const obj2 = XEUtils.merge(obj1, [{c: 33}, {d: 44}])
// [{a: 11, c: 33}, {b: 22, d: 44}]

const obj3 = {a: 0, b: {b1: 11}, c: {c1: {d: 44}}}
const obj4 = XEUtils.merge(obj1, {a: 11, b: {b2: 22}, c: {f1: 55}})
// {a: 11, b: {b1: 11, b2: 22}, c: {c1: {d: 44}, f1: 55}}
```

#### `clone(obj, deep)`
浅拷贝/深拷贝。

```javascript
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

#### `destructuring(obj, ...target)`
将一个或者多个对象值解构到目标对象。

```javascript
XEUtils.destructuring({a: null}, {a: 11, b: 22, c: 33}) // {a: 11}
XEUtils.destructuring({a: 11, d: 44}, {a: 11, b: 22, c: 33}) // {a: 11, d: 44}
XEUtils.destructuring({a: 11, c: 33, d: 44}, {a: 11, b: 22, c: null, e: 55, f: 66}) // {a: 11, c: null, d: 44}
```

#### `objectEach(obj, iterate[, context])`
对象迭代器，只能用于遍历对象，性能高于 `each`。

```javascript
XEUtils.objectEach([11, 22, 33], (item, key) => {
  // 对象迭代器，只能用于遍历对象，性能高于 each
})
```

#### `lastObjectEach(obj, iterate[, context])`
从最后开始迭代的对象迭代器。

```javascript
XEUtils.lastObjectEach([11, 22, 33], (item, key) => {
  // 对象迭代器，只能用于遍历对象，性能高于 lastEach
})
```

#### `objectMap(obj, iterate[, context])`
指定方法后的返回值组成的新对象。

```javascript
XEUtils.objectMap({a: {type: 'a'}, b: {type: 'b'}}, item => item.type) // {a: "a", b: "b"}
```

#### `pick(obj, array)`
根据 `keys` 过滤指定的属性值，或者接收一个判断函数，返回一个新的对象。

```javascript
XEUtils.pick({name: 'test11', age: 25, height: 176}, 'name', 'height') // {name: 'test11', height: 176}
XEUtils.pick({name: 'test11', age: 25, height: 176}, ['name', 'age']) // {name: 'test11', age: 25}
XEUtils.pick({name: 'test11', age: 25, height: 176}, val => XEUtils.isNumber(val)) // {age: 25, height: 176}
```

#### `omit(obj, array)`
根据 `keys` 排除指定的属性值，或者接收一个判断函数，返回一个新的对象。

```javascript
XEUtils.omit({name: 'test11', age: 25, height: 176}, 'name', 'height') // {age: 25}
XEUtils.omit({name: 'test11', age: 25, height: 176}, ['name', 'age']) // {height: 176}
XEUtils.omit({name: 'test11', age: 25, height: 176}, val => XEUtils.isNumber(val)) // {name: 'test11'}
```

---

### Function

#### `noop()`
一个空的方法，始终返回 `undefined`，可用于初始化值。

```javascript
[11, 22, 33].map(XEUtils.noop)
// [undefined, undefined, undefined]
```

#### `delay(callback, wait[, ...arguments])`
和 `setTimeout` 一样的效果，区别是支持额外参数。

```javascript
XEUtils.delay(function (name) {
  console.log(name)
}, 300, 'test11')
// 'test11'
```

#### `bind(callback, context[, ...arguments])`
创建一个绑定上下文的函数。

```javascript
let rest = XEUtils.bind(function (val) {
  return this.name + ' = ' + val
}, {name: 'test'})
rest(222) // 'test = 222'
rest(333) // 'test = 333'
```

#### `once(callback, context[, ...arguments])`
创建一个只能调用一次的函数，只会返回第一次执行后的结果。

```javascript
let rest = XEUtils.once(function (val) {
  return this.name + ' = ' + val
}, {name: 'test'})
rest(222) // 'test = 222'
rest(333) // 'test = 222'
```

#### `after(count, callback, context)`
创建一个函数，调用次数超过 `count` 次之后执行回调并将所有结果记住后返回。

```javascript
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

#### `before(count, callback, context)`
创建一个函数，调用次数不超过 `count` 次之前执行回调并将所有结果记住后返回。

```javascript
document.querySelector('.btn').addEventListener('click', XEUtils.before(4, function (rests) {
  console.log('只能点击三次')
}))
```

#### `throttle(callback, wait[, options])`
节流函数；当被调用 `wait` 毫秒后才会执行，如果在这时间内又被调用则至少每隔 `wait` 毫秒调用一次该函数。

```javascript
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

#### `debounce(callback, wait[, options])`
函数去抖；当被调用 `wait` 毫秒后才会执行，如果在这时间内又被调用则将重新计算执行时间。

```javascript
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

---

### Array

#### `arrayEach(obj, iterate[, context])`
数组迭代器，只能用于遍历数组或伪数组，性能高于 `each`。

```javascript
XEUtils.arrayEach([11, 22, 33], (item, key) => {
  // 数组迭代器，只能用于遍历(数组或伪数组)，性能高于 each
})
```

#### `lastArrayEach(obj, iterate[, context])`
数组迭代器，从最后开始迭代。

```javascript
XEUtils.lastArrayEach([11, 22, 33], (item, key) => {
  // 数组迭代器，只能用于遍历(数组或伪数组)，性能高于 lastEach
})
```

#### `slice(array, start, end)`
裁剪数组或伪数组，从 `start` 位置开始到 `end` 结束，但不包括 `end` 本身的位置。

```javascript
XEUtils.slice([11, 22, 33, 44], 1) // [22, 33, 44]
XEUtils.slice([11, 22, 33, 44], 1, 3) // [22, 33]
function method () {
  XEUtils.slice(arguments, 1, 3) // [22, 33]
}
method(11, 22, 33, 44)
```

#### `indexOf(obj, val)`
返回对象第一个索引值。

```javascript
XEUtils.indexOf([11, 22, 33, 22], 55) // -1
XEUtils.indexOf([11, 22, 33, 22], 22) // 1
```

#### `arrayIndexOf(obj, val)`
返回数组第一个索引值。

```javascript
XEUtils.arrayIndexOf([11, 22, 33, 22], 55) // -1
XEUtils.arrayIndexOf([11, 22, 33, 22], 22) // 1
```

#### `findIndexOf(obj, iterate[, context])`
返回对象第一个索引值（回调匹配）。

```javascript
XEUtils.findIndexOf([11, 22, 33, 22], item => item === 55) // -1
XEUtils.findIndexOf([11, 22, 33, 22], item => item === 22) // 1
```

#### `lastIndexOf(obj, val)`
从最后开始的索引值，返回对象第一个索引值。

```javascript
XEUtils.lastIndexOf([11, 22, 33, 22], 55) // -1
XEUtils.lastIndexOf([11, 22, 33, 22], 22) // 3
```

#### `arrayLastIndexOf(obj, val)`
从最后开始的索引值，返回数组第一个索引值。

```javascript
XEUtils.arrayLastIndexOf([11, 22, 33, 22], 55) // -1
XEUtils.arrayLastIndexOf([11, 22, 33, 22], 22) // 3
```

#### `findLastIndexOf(obj, iterate[, context])`
从最后开始的索引值，返回对象第一个索引值（回调匹配）。

```javascript
XEUtils.findLastIndexOf([11, 22, 33, 22], item => item === 55) // -1
XEUtils.findLastIndexOf([11, 22, 33, 22], item => item === 22) // 3
```

#### `includes(obj, val)`
判断对象是否包含该值，成功返回 `true` 否则 `false`。

```javascript
XEUtils.includes([11], 22) // false
XEUtils.includes([11, 22], 22) // true
```

#### `includeArrays(array1, array2)`
判断数组是否包含另一数组。

```javascript
XEUtils.includeArrays([11, 22, 33], []) // true
XEUtils.includeArrays([11, 22, 33], [11]) // true
XEUtils.includeArrays([11, 22, 33], [22, 33]) // true
XEUtils.includeArrays([11, 22, 33], [22, 44]) // false
```

#### `remove(obj, iterate)`
移除对象属性。

```javascript
let list1 = [11, 22, 33, 44]
XEUtils.remove(list1, 2) // list1 = [11, 22, 44]
let list2 = [11, 22, 33, 44]
XEUtils.remove(list2, item => item === 22) // list2 = [11, 33, 44]
```

#### `orderBy(arr, fieldConfs[, context])`
将数组进行排序。

```javascript
// 数值排序
XEUtils.orderBy([11, 55, 99, 77, 11, 55, 22])
// [11,11,22,55,55,77,99]
XEUtils.orderBy([11, 55, 99, 77, 11, 55, 22], { order: 'desc' })
// [99, 77, 55, 55, 22, 11, 11]

// 字母排序
XEUtils.orderBy(['x', 'z', 'g', 'q', 'e', 'b', 'a', 'g', 'f', 'c', 'j'])
// ["a","b","c","e","f","g","g","j","q","x","z"]

// 中文排序
XEUtils.orderBy(['小', '何', '李', '林', '有', '好', '啊', '的', '出', '库', '徐'])
// ["啊","出","的","好","何","库","李","林","小","徐","有"]

// 深层对象
XEUtils.orderBy([{ age: 27 }, { age: 26 }, { age: 28 }], 'age')
// [{"age":26},{"age":27},{"age":28}]
XEUtils.orderBy([{ age: 27 }, { age: 26 }, { age: 28 }], [['age', 'asc']])
// [{"age":26},{"age":27},{"age":28}]

// 多字段排序
XEUtils.orderBy([
  { name: 'x', age: 26 },
  { name: 'd', age: 27 },
  { name: 'z', age: 26 },
  { name: 'z', age: 24 },
  { name: 'z', age: 25 }
], [['age', 'asc'], ['name', 'desc']])
// [{"name":"z","age":24},{"name":"z","age":25},{"name":"z","age":26},{"name":"x","age":26},{"name":"d","age":27}]

// 自定义组合排序
XEUtils.orderBy([
  { name: 'x', age: 26 },
  { name: 'd', age: 27 },
  { name: 'x', age: 26 },
  { name: 'z', age: 26 }
], [[item => item.name, 'asc'], [item => item.age, 'desc']])
// [{"name":"d","age":27},{"name":"x","age":26},{"name":"x","age":26},{"name":"z","age":26}]
```

#### `shuffle(array)`
将一个数组随机打乱，返回一个新的数组。

```javascript
XEUtils.shuffle([11, 22, 33, 44, 55]) // [22, 33, 55, 11, 44]
```

#### `sample(array, number)`
从一个数组中随机返回几个元素。

```javascript
XEUtils.sample([11, 22, 33, 44, 55], 3) // [22, 33, 55]
```

#### `some(obj, iterate[, context])`
对象中的值中的每一项运行给定函数，如果函数对任一项返回 `true`，则返回 `true`，否则返回 `false`。

```javascript
XEUtils.some([{value: 11}, {value: 22}], item => item.value === 55) // false
```

#### `every(obj, iterate[, context])`
对象中的值中的每一项运行给定函数，如果该函数对每一项都返回 `true`，则返回 `true`，否则返回 `false`。

```javascript
XEUtils.every([{value: 11}, {value: 22}], item => item.value === 11) // false
```

#### `filter(obj, iterate[, context])`
根据回调过滤数据。

```javascript
XEUtils.filter([{value: 11}, {value: 22}], item => item.value > 11) // [{value: 22}]
```

#### `find(obj, iterate[, context])`
查找匹配第一条数据。

```javascript
XEUtils.find([{value: 11}, {value: 22}], item => item.value === 55) // null
```

#### `findKey(obj, iterate[, context])`
查找匹配第一条数据的键。

```javascript
XEUtils.findKey([{value: 11}, {value: 22}], item => item.value === 22) // '1'
XEUtils.findKey({aa: 11, bb: 22, cc: 33}, item => item === 22) // 'bb'
```

#### `map(obj, iterate[, context])`
指定方法后的返回值组成的新数组。

```javascript
XEUtils.map([{value: 11}, {value: 22}], item => item.value) // [11, 22]
```

#### `copyWithin(array, target, start[, end])`
浅复制数组的一部分到同一数组中的另一个位置，数组大小不变。

```javascript
XEUtils.copyWithin([11, 22, 33, 44], 0, 2) // [33, 44, 33, 44]
XEUtils.copyWithin([11, 22, 33, 44], 0, -1) // [44, 22, 33, 44]
```

#### `sum(obj, iterate[, context])`
求和函数，将数值相加。

```javascript
XEUtils.sum([22, 66, 88]) // 176
XEUtils.sum([{value: 11}, {value: 22}, {value: 66}], 'value') // 99
XEUtils.sum({val1: 21, val2: 34, val3: 47}) // 102
```

#### `mean(obj, iterate[, context])`
求平均值函数。

```javascript
XEUtils.mean({ val1: 21, val2: 34, val3: 47 }) // 34
XEUtils.mean([22, 66, 60, 60]) // 52
XEUtils.mean([{value: 34}, {value: 22}], 'value') // 28
XEUtils.mean([{value: 11}, {value: 22}, {value: 66}], item => item.value * 2) // 66
XEUtils.mean({val1: 21, val2: 34, val3: 45, val4: 55}) // 38.75
```

#### `toArray(array)`
将对象或者伪数组转为新数组。

```javascript
XEUtils.toArray([]) // []
XEUtils.toArray({}) // []
XEUtils.toArray({name: 'test1', age: 25}) // ['test1', 25]
XEUtils.toArray(arguments) // [...]
XEUtils.toArray(document.querySelectorAll('div')) // [...]
```

#### `reduce(array, iterate[, initialValue])`
接收一个函数作为累加器，数组中的每个值（从左到右）开始合并，最终为一个值。

```javascript
XEUtils.reduce([22, 66, 88], (previous, item) => previous + item) // 176
```

#### `zip(...[])`
将每个数组中相应位置的值合并在一起。

```javascript
XEUtils.zip(['name1', 'name2', 'name3'], [true, true, false], [30, 40, 20])
// [['name1', true, 30], ['name2', true, 40], ['name3', false, 20]]
```

#### `unzip(arrays)`
与 `zip` 相反。

```javascript
XEUtils.unzip([['name1', true, 30], ['name2', true, 40], ['name3', false, 20]])
// [['name1', 'name2', 'name3'], [true, true, false], [30, 40, 20]]
```

#### `zipObject(props, values)`
根据键数组、值数组对转换为对象。

```javascript
XEUtils.zipObject(['aa', 'bb', 'cc'], [11, 22, 33])
// { aa: 11, bb: 22, cc: 33 }
```

#### `uniq(array, [callback, context])`
数组去重。

```javascript
XEUtils.uniq([11, 22, 33, 33, 22, 55])
// [11, 22, 33, 55]

XEUtils.uniq([{a: 1, b: 11}, {a: 1, b: 22}, {a: 4, b: 33}, {a: 5, bb: 44}], 'a')
// [{a: 1, b: 11}, {a: 4, b: 33}, {a: 5, bb: 44}]

XEUtils.uniq([{a: 1, b: 11}, {a: 1, b: 22}, {a: 4, b: 33}, {a: 5, b: 44}], (item) => item.a)
// [{a: 1, b: 11}, {a: 4, b: 33}, {a: 5, bb: 44}]
```

#### `union(...array)`
将多个数组的值返回唯一的并集数组。

```javascript
XEUtils.union([11, 22], [33, 22], [44, 11]) // [11, 22, 33, 44]
```

#### `flatten(array, deep)`
将一个多维数组拍平。

```javascript
XEUtils.flatten([[1, 2, 3], [4, 5, 6], [7, 8]])
// [1, 2, 3, 4, 5, 6, 7, 8]
```

#### `chunk(array, size)`
将一个数组分割成大小的组。如果数组不能被平均分配，那么最后一块将是剩下的元素。

```javascript
XEUtils.chunk(['a', 'b', 'c', 'd'], 2) // [['a', 'b'], ['c', 'd']]
XEUtils.chunk(['a', 'b', 'c', 'd'], 3) // [['a', 'b', 'c'], ['d']]
```

#### `property(path)`
返回一个获取对象属性的函数。

```javascript
let getName = XEUtils.property('name')
getName({name: 'test11', age: 25, height: 176}) // 'test11'
getName({age: 25, height: 176}) // undefined
```

#### `pluck(array, key)`
获取数组对象中某属性值，返回一个数组。

```javascript
XEUtils.pluck([{a: 11, b: 22}, {a: 33, b: 44}], 'a') // [11, 33]
XEUtils.pluck([[11, 22, 33], [44, 55, 66]], 1) // [22, 55]
```

#### `invoke(list, path, ...arguments)`
在 `list` 的每个元素上执行方法，任何传递的额外参数都会在调用方法的时候传递给它。

```javascript
XEUtils.invoke([[3, 1, 6, 7], [3, 2, 1, 8]], 'sort') // [[1, 3, 6, 7], [1, 2, 3, 8]]
XEUtils.invoke(['123', '456'], 'split') // [['123'], ['456']]
XEUtils.invoke([123, 456], String.prototype.split, '') // [['1', '2', '3'], ['4', '5', '6']]
XEUtils.invoke([{a: {b: [2, 0, 1]}}, {a: {b: [2, 1]}}, {a: {b: [4, 8, 1]}}], ['a', 'b', 'sort'])
// [[0, 1, 2], [1, 2], [1, 4, 8]]
```

#### `groupBy(obj, iterate[, context])`
集合分组，默认使用键值分组，如果有 `iterate` 则使用结果进行分组。

```javascript
XEUtils.groupBy([{type: 'a'}, {type: 'b'}], 'type') // {a: [{type: 'a'}], b: [{type: 'b'}]}
XEUtils.groupBy([{type: 'a'}, {type: 'a'}, {type: 'b'}], 'type')
// {a: [{type: 'a'}, {type: 'a'}], b: [{type: 'b'}]}
```

#### `countBy(obj, iterate[, context])`
集合分组统计，返回各组中对象的数量统计。

```javascript
XEUtils.countBy([{type: 'a'}, {type: 'b'}], 'type') // {a: 1, b: 1}
XEUtils.countBy([{type: 'a'}, {type: 'a'}, {type: 'b'}], 'type') // {a: 2, b: 1}
```

#### `toArrayTree(array, options)`
一个高性能的树结构转换函数，将一个带层级的数据列表转成树结构。

**参数：**

| 属性 | 描述 | 默认值 |
|------|------|--------|
| strict | 是否严格模式，会去掉父子关联不存在数据，当子节点为空时将没有 children 字段名 | false |
| key | 主键字段名 | id |
| parentKey | 关联父主键字段名 | parentId |
| children | 自定义转换成树层级后的子节点字段名 | children |
| mapChildren | 额外增加，自定义转换成树层级后的子节点映射字段名 |  |
| sortKey | 对转换成树层级后的节点进行升序排序字段名 |  |
| reverse | 是否将 sortKey 设置为倒序，默认升序 | false |
| data | 额外增加，同时将每一行的数据对象单独存放到指定字段名中 | null |

```javascript
// 默认树结构
let list1 = [
  {id: 1, xx1: '111', xx2: '222'},
  {id: 2, parentId: 1, xx1: '222', xx2: '333'},
  {id: 3, xx1: '333', xx2: '444'},
  {id: 4, parentId: 2, xx1: '444', xx2: '555'}
]
XEUtils.toArrayTree(list1)
/*
[
  {
    "id":1,
    "xx1":"111",
    "xx2":"222",
    "children":[
      {
        "id":2,
        "parentId":1,
        "xx1":"222",
        "xx2":"333",
        "children":[
          {
            "id":4,
            "parentId":2,
            "xx1":"444",
            "xx2":"555",
            "children":[]
          }
        ]
      }
    ]
  },
  {
    "id":3,
    "xx1":"333",
    "xx2":"444",
    "children":[]
  }
]
*/

// 返回带排序的树结构
let list2 = [
  {id: 1, xx1: '111', xx2: '222', seq: 5},
  {id: 2, parentId: 1, xx1: '222', xx2: '333', seq: 3},
  {id: 3, xx1: '333', xx2: '444', seq: 6},
  {id: 4, parentId: 2, xx1: '444', xx2: '555', seq: 2},
  {id: 5, parentId: 1, xx1: '555', xx2: '666', seq: 1}
]
XEUtils.toArrayTree(list2, {sortKey: 'seq'})
/*
[
  {
    "id":1,
    "xx1":"111",
    "xx2":"222",
    "seq":5,
    "children":[
      {
        "id":5,
        "parentId":1,
        "xx1":"555",
        "xx2":"666",
        "seq":1,
        "children":[]
      },
      {
        "id":2,
        "parentId":1,
        "xx1":"222",
        "xx2":"333",
        "seq":3,
        "children":[
          {
            "id":4,
            "parentId":2,
            "xx1":"444",
            "xx2":"555",
            "seq":2,
            "children":[]
          }
        ]
      }
    ]
  },
  {
    "id":3,
    "xx1":"333",
    "xx2":"444",
    "seq":6,
    "children":[]
  }
]
*/

// 自定义数据存放属性
let list3 = [
  {id: 1, xx1: '111', xx2: '222'},
  {id: 2, parentId: 1, xx1: '222', xx2: '333'},
  {id: 3, xx1: '333', xx2: '444'},
  {id: 4, parentId: 2, xx1: '444', xx2: '555'},
  {id: 5, parentId: 22, xx1: '555', xx2: '666'}
]
XEUtils.toArrayTree(list3, {data: 'data'})
/*
[
  {
    "data":{"id":1,"xx1":"111","xx1":"222"},
    "id":1,
    "children":[
      {
        "data":{"id":2,"parentId":1,"xx1":"222","xx1":"333"},
        "id":2,
        "parentId":1,
        "children":[
          {
            "data":{"id":4,"parentId":2,"xx1":"444","xx1":"555"},
            "id":4,
            "parentId":2,
            "children":[]
          }
        ]
      }
    ]
  },
  {
    "data":{"id":3,"xx1":"333","xx1":"444"},
    "id":3,
    "children":[]
  },
  {
    "data":{"id":5,"parentId":22,"xx1":"555","xx1":"666"},
    "id":5,
    "parentId":22,
    "children":[]
  }
]
*/

// 如果设置为严格模式，（非父子关联及冗余)的数据会被忽略
let list4 = [
  {id: 1, xx1: '111', xx2: '222'},
  {id: 2, parentId: 1, xx1: '222', xx2: '333'},
  {id: 3, xx1: '333', xx2: '444'},
  {id: 4, parentId: 2, xx1: '444', xx2: '555'},
  {id: 5, parentId: 22, xx1: '555', xx2: '666'}
]
XEUtils.toArrayTree(list4, {strict: true, parentKey: 'parentId', key: 'id', children: 'children', data: 'data'})
/*
[
  {
    "data":{"id":1,"xx1":"111","xx1":"222"},
    "id":1,
    "children":[
      {
        "data":{"id":2,"parentId":1,"xx1":"222","xx1":"333"},
        "id":2,
        "parentId":1,
        "children":[
          {
            "data":{"id":4,"parentId":2,"xx1":"444","xx1":"555"},
            "id":4,
            "parentId":2,
            "children":[]
          }
        ]
      }
    ]
  },
  {
    "data":{"id":3,"xx1":"333","xx1":"444"},
    "id":3,
    "children":[]
  }
]
*/
```

#### `toTreeArray(array, options)`
将一个树结构转成数组列表。

**参数：**

| 属性 | 描述 | 默认值 |
|------|------|--------|
| children | 树层级子节点字段 | children |
| key | 自定义转换后数组的主键字段名 | id |
| parentKey | 自定义转换后数组的关联父主键字段名 | parentId |
| data | 将每一行的数据对象展开到当前行中 |  |
| clear | 引用删除，同时移除对应的 children 字段名 | false |

```javascript
let list1 = [
  {
    "id":1,
    "xx1":"111",
    "xx2":"222",
    "children":[
      {
        "id":2,
        "parentId":1,
        "xx1":"222",
        "xx2":"333",
        "children":[
          {
            "id":4,
            "parentId":2,
            "xx1":"444",
            "xx2":"555",
            "children":[]
          }
        ]
      }
    ]
  },
  {
    "id":3,
    "xx1":"333",
    "xx2":"444",
    "children":[]
  }
]
XEUtils.toTreeArray(list1)
/*
[
  {id: 1, xx1: '111', xx2: '222'},
  {id: 2, parentId: 1, xx1: '222', xx2: '333'},
  {id: 4, parentId: 2, xx1: '444', xx2: '555'}
  {id: 3, xx1: '333', xx2: '444'}
]
*/

let list2 = [
  {
    "data":{"id":1,"xx1":"111",xx2:'222'},
    "id":1,
    "children":[
      {
        "data":{"id":2,"parentId":1,"xx1":"222",xx2:'333'},
        "id":2,
        "parentId":1,
        "children":[
          {
            "data":{"id":4,"parentId":2,"xx1":"444",xx2:'555'},
            "id":4,
            "parentId":2,
            "children":[]
          }
        ]
      }
    ]
  },
  {
    "data":{"id":3,"xx1":"333",xx2:'444'},
    "id":3,
    "children":[]
  },
  {
    "data":{"id":5,"parentId":22,"xx1":"555",xx2:'666'},
    "id":5,
    "parentId":22,
    "children":[]
  }
]
XEUtils.toTreeArray(list2, {data: 'data'})
/*
[
  {id: 1, xx1: '111', xx2: '222' },
  {id: 2, parentId: 1, xx1: '222', xx2: '333'},
  {id: 4, parentId: 2, xx1: '444', xx2: '555'},
  {id: 3, xx1: '333', xx2: '444'},
  {id: 5, parentId: 22, xx1: '555', xx2: '666'}
]
*/
```

#### `findTree(obj, iterate[, options, context])`
从树结构中查找匹配第一条数据的键、值、路径。

**参数：**

| 属性 | 描述 | 默认值 |
|------|------|--------|
| children | 子节点属性 | children |

```javascript
var tree1 = [
  { id: 1 },
  {
    id: 2,
    children: [
      { id: 20 }
    ]
  },
  {
    id: 3,
    children: [
      { id: 30 }
    ]
  }
]
XEUtils.findTree(tree1, item => item.id === 20) // { item: {id: 20}, ... }

var tree2 = [
  { id: 1 },
  {
    id: 2,
    childs: [
      { id: 20 }
    ]
  },
  {
    id: 3,
    childs: [
      { id: 30 }
    ]
  }
]
XEUtils.findTree(tree2, item => item.id === 20, { children: 'childs' }) // { item: {id: 20}, ... }
```

#### `eachTree(obj, iterate[, options, context])`
从树结构中遍历数据的键、值、路径。

**参数：**

| 属性 | 描述 | 默认值 |
|------|------|--------|
| children | 子节点属性 | children |

```javascript
var tree1 = [
  { id: 1 },
  {
    id: 2,
    children: [
      { id: 20 }
    ]
  },
  {
    id: 3,
    children: [
      { id: 30 }
    ]
  }
]
XEUtils.eachTree(tree1, item => {
  // ...
})

var tree2 = [
  { id: 1 },
  {
    id: 2,
    childs: [
      { id: 20 }
    ]
  },
  {
    id: 3,
    childs: [
      { id: 30 }
    ]
  }
]
XEUtils.eachTree(tree2, item => {
  // ...
}, { children: 'childs' })
```

#### `mapTree(obj, iterate[, options, context])`
从树结构中指定方法后的返回值组成的新数组。

**参数：**

| 属性 | 描述 | 默认值 |
|------|------|--------|
| children | 子节点属性 | children |
| mapChildren | 将子节点映射到指定的属性 |  |

```javascript
var tree1 = [
  { id: 1 },
  {
    id: 2,
    children: [
      { id: 20 }
    ]
  }, {
    id: 3,
    children: [
      { id: 30 }
    ]
  }
]
XEUtils.mapTree(tree1, item => {
  return {
    id: item.id * 2
  }
})
// [
//   { id: 2 },
//   {
//     id: 4,
//     children: [
//       { id: 40 }
//     ]
//   }, {
//     id: 6,
//     children: [
//       { id: 60 }
//     ]
//   }
// ]

var tree2 = [
  { id: 1 },
  {
    id: 2,
    childs: [
      { id: 20 }
    ]
  },
  {
    id: 3,
    childs: [
      { id: 30 }
    ]
  }
]
XEUtils.mapTree(tree2, item => {
  return {
    id: item.id * 2
  }
}, {children: 'childs'})
// [
//   { id: 2 },
//   {
//     id: 4,
//     childs: [
//       { id: 40 }
//     ]
//   },
//   {
//     id: 6,
//     childs: [
//       { id: 60 }
//     ]
//   }
// ]

var tree3 = [
  { id: 1 },
  {
    id: 2,
    childs: [
      { id: 20 }
    ]
  },
  {
    id: 3,
    childs: [
      { id: 30 }
    ]
  }
]
XEUtils.mapTree(tree3, item => {
  return {
    id: item.id * 2
  }
}, { children: 'childs', mapChildren: 'list' })
// [
//   { id: 2 },
//   {
//     id: 4,
//     list: [
//       { id: 40 }
//     ]
//   },
//   {
//     id: 6,
//     list: [
//       { id: 60 }
//     ]
//   }
// ]
```

#### `searchTree(obj, iterate[, options, context])`
从树结构中根据回调查找数据。

**参数：**

| 属性 | 描述 | 默认值 |
|------|------|--------|
| isEvery | 是否匹配每一项 | false |
| children | 子节点属性 | children |
| mapChildren | 将子节点映射到指定的属性 |  |
| original | 是否源对象地址引用（如果为true，则创建新的对象） | false |

```javascript
var tree1 = [
  { id: 1 },
  {
    id: 2,
    children: [
      { id: 0 }
    ]
  },
  {
    id: 3,
    children: [
      {
        id: 30,
        children: [
          { id: 3001 }
        ]
      },
      { id: 31 }
    ]
  }
]
XEUtils.searchTree(tree1, item => item.id === 3)
// [
//   {
//     id: 3,
//     children: [
//       {
//         id: 30,
//         children: [
//           { id: 3001 }
//         ]
//       },
//       { id: 31 }
//     ]
//   }
// ]

var tree2 = [
  { id: 1 },
  {
    id: 2,
    childs: [
      { id: 0 }
    ]
  },
  {
    id: 3,
    childs: [
      {
        id: 30,
        childs: [
          { id: 3001 }
        ]
      },
      { id: 31 }
    ]
  }
]
XEUtils.searchTree(tree2, item => item.id === 30, { children: 'childs' })
// [
//   {
//     id: 3,
//     childs: [
//       {
//         id: 30,
//         childs: [
//           { id: 3001 }
//         ]
//       }
//     ]
//   }
// ]

var tree3 = [
  { id: 1 },
  {
    id: 2,
    childs: [
      { id: 0 }
    ]
  },
  {
    id: 3,
    childs: [
      {
        id: 30,
        childs: [
          { id: 3001 }
        ]
      },
      { id: 31 }
    ]
  }
]
XEUtils.searchTree(tree3, item => item.id === 30, { children: 'childs', mapChildren: 'list' })
// [
//   {
//     id: 3,
//     childs: [
//       {
//         id: 30,
//         childs: [
//           { id: 3001 }
//         ]
//       },
//       { id: 31 }
//     ]
//     list: [
//       {
//         id: 30,
//         list: [
//           { id: 3001 }
//         ]
//       }
//     ]
//   }
// ]
```

---

### Date

#### `now()`
返回当前时间戳。

```javascript
XEUtils.now() // Date.now() 获取当前时间戳 1514096716800
```

#### `timestamp(date[, format])`
将日期转为时间戳。

```javascript
XEUtils.timestamp() // XEUtils.now() = Date.now() 获取当前时间戳 1514096716800
XEUtils.timestamp(new Date()) // 1514096716800
XEUtils.timestamp('2018-12-01') // 1543593600000
XEUtils.timestamp('2017/12/20 10:10:30.459', 'yyyy/MM/dd HH:mm:ss.SSS') // 1513735830459
```

#### `toStringDate(str, format)`
任意格式字符串转为日期。

**格式占位符说明：**

| 属性 | 描述 |
|------|------|
| yyyy | 年份 |
| MM | 月份 |
| dd | 日 |
| HH | 小时 |
| mm | 分钟 |
| ss | 秒 |
| SSS | 毫秒 |
| Z | 时区 |

```javascript
XEUtils.toStringDate('12/20/2017')
// 如果解析错误则返回 new Date('Invalid Date')
XEUtils.toStringDate('2017-12-20')
// new Date(2017, 11, 20)
XEUtils.toStringDate('2017-12-20 10:10:30')
// new Date(2017, 11, 20, 10, 10, 30)
XEUtils.toStringDate('2017-12-20 10:10:30.568')
// new Date(2017, 11, 20, 10, 10, 30, 568)
XEUtils.toStringDate('2017-12-20 10:10:30.2514766')
// new Date(2017, 11, 20, 10, 10, 30, 251)
XEUtils.toStringDate('2017-12-20T10:10:30.738+0800')
// Wed Dec 20 2017 10:10:30 GMT+0800 (中国标准时间)
XEUtils.toStringDate('2017-12-20T10:10:30.738+01:00')
// Wed Dec 20 2017 17:10:30 GMT+0800 (中国标准时间)
XEUtils.toStringDate('2017-12-20T10:10:30.738Z')
// Wed Dec 20 2017 18:10:30 GMT+0800 (中国标准时间)
XEUtils.toStringDate('12/20/2017', 'MM/dd/yyyy')
// Wed Dec 20 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.toStringDate('20171220101030', 'yyyyMMddHHmmss')
// Wed Dec 20 2017 10:10:30 GMT+0800 (中国标准时间)
XEUtils.toStringDate('2017/12/20 10:10:30', 'yyyy/MM/dd HH:mm:ss')
// Wed Dec 20 2017 10:10:00 GMT+0800 (中国标准时间)
XEUtils.toStringDate('12/20/2017 10:10:30.100', 'MM/dd/yyyy HH:mm:ss.SSS')
// Wed Dec 20 2017 10:10:30 GMT+0800 (中国标准时间)
```

#### `toDateString(date[, format, options])`
日期格式化为任意格式字符串。

**格式占位符说明：**

| 占位符 | 描述 | 值的范围 |
|--------|------|----------|
| yy | 年份后两位 | |
| yyyy | 完整年份 | |
| M | 月份 | 1~12 |
| MM | 月份（补零） | 01~12 |
| d | 日 | 1~31 |
| dd | 日（补零） | 01~31 |
| h | 12小时制 | 1~12 |
| hh | 12小时制（补零） | 01~12 |
| H | 24小时制 | 0~23 |
| HH | 24小时制（补零） | 00~23 |
| m | 分钟 | 0~59 |
| mm | 分钟（补零） | 00~59 |
| s | 秒 | 0~59 |
| ss | 秒（补零） | 00~59 |
| S | 毫秒 | 0~999 |
| SSS | 毫秒（补零） | 000~999 |
| a | am/pm，小写 | am/pm |
| A | AM/PM，大写 | AM/PM |
| D | 年份的第几天 | 1~366 |
| DDD | 年份的第几天（补零） | 001~366 |
| e | 星期几（0~6） | 0~6 |
| E | 星期几（1~7） | 1~7 |
| q | 季度 | 1~4 |
| W | 年的第几周 | 1~53 |
| WW | 年的第几周（补零） | |
| Z | 时区值 | [+-]HH:mm |
| ZZ | 时区值 | [+-]HHmm |

```javascript
XEUtils.toDateString(1483250730000)
// '2017-01-01 14:05:30'
XEUtils.toDateString(new Date())
// '2017-01-01 14:05:30'
XEUtils.toDateString('2017-01-01 10:05:30', 'MM/dd/yyyy')
// '01/01/2017'
XEUtils.toDateString('2017-01-01 10:05:30', 'M/d/yyyy')
// '1/1/2017'
XEUtils.toDateString(new Date(), 'yyyyMMddHHmmssSSS')
// '20170101140530099'
XEUtils.toDateString(new Date(), 'yyyy-MM-dd HH:mm:ss.SSS')
// '2017-01-01 14:05:30.099'
XEUtils.toDateString(new Date(), 'yyyy-MM-dd hh:mm:ss.SSS GMTZ')
// '2017-01-01 02:05:30.099 GMT+08:00'
XEUtils.toDateString(new Date(), 'yyyy-MM-dd hh:mm:ss.SSS GMTZZ')
// '2017-01-01 02:05:30.099 GMT+0800'
XEUtils.toDateString(new Date(), 'yyyy-M-d h:m:s.S')
// '2017-1-1 2:5:30.99'
XEUtils.toDateString(new Date(), 'yyyy年MM月dd日 HH时mm分ss秒S毫秒,星期E 第q季度')
// '2017年01月01日 14时05分30秒99毫秒,星期0 第1季度'
XEUtils.toDateString(new Date(), 'yy年M月d日 HH时m分s秒S毫秒,星期E 第q季度')
// '17年1月1日 14时5分30秒99毫秒,星期0 第1季度'
XEUtils.toDateString(new Date(), 'yyyy年MM月dd日 hh时mm分ss秒SSS毫秒 ZZ 星期E e 第q季 今年第D天 a A')
// '2017年01月01日 02时05分30秒099毫秒 +0800 星期0 -1 第1季 今年第1天 pm PM'
XEUtils.toDateString(new Date(), '[yyyy-MM] yyyy-MM-dd')
// 'yyyy-MM 2017-01-01'
```

#### `getWhatYear(date, offsetYear[, offsetMonth])`
返回前几年或后几年的日期，可以指定年的最初时间(`first`)、年的最后时间(`last`)、年的月份(0~11)，默认当前。

```javascript
XEUtils.getWhatYear(new Date(), -1) // Mon Nov 20 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatYear(1513735830000, -1) // Tue Dec 20 2016 10:10:30 GMT+0800 (中国标准时间)
XEUtils.getWhatYear('2017-12-20', -1) // Tue Dec 20 2016 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatYear('2017-12-20', 1) // Thu Dec 20 2018 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatYear('2017-12-20', 0, 'first') // Sun Jan 01 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatYear('2017-12-20', 0, 'last') // Sun Dec 31 2017 23:59:59 GMT+0800 (中国标准时间)
```

#### `getWhatMonth(date, offsetMonth[, offsetDay])`
返回前几月或后几月的日期，可以指定月初(`first`)、月末(`last`)、天数，默认当前。

```javascript
XEUtils.getWhatMonth(new Date(), -1) // Mon Nov 20 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatMonth(1513735830000, -1) // Mon Nov 20 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatMonth('2017-12-20', -1) // Mon Nov 20 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatMonth('2017-12-20', 1) // Sat Jan 20 2018 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatMonth('2017-12-20', -1, 'first') // Wed Nov 01 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatMonth('2017-12-20', 1, 'last') // Wed Jan 31 2018 23:59:59 GMT+0800 (中国标准时间)
```

#### `getWhatWeek(date, offsetWeek[, offsetDay, startDay])`
返回前几周或后几周的日期，可以指定星期几(0~6)与周视图的起始天(0~6，默认1)，默认当前。

```javascript
XEUtils.getWhatWeek(new Date(), -1) // Sun Dec 17 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatWeek(1513735830000, -1) // Sun Dec 17 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatWeek('2017-12-20', -1) // Sun Dec 17 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatWeek('2017-12-20', 1) // Sun Dec 31 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatWeek('2017-12-20', -1, 5, 1) // Fri Dec 15 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatWeek('2017-12-20', 0, 0, 0) // Sun Dec 17 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatWeek('2017-12-20', 1, 0, 0) // Sun Dec 24 2017 00:00:00 GMT+0800 (中国标准时间)
```

#### `getWhatDay(date, offsetDay[, offsetMode])`
返回前几天或后几天的日期，可以指定当天最初时间(`first`)、当天的最后时间(`last`)。

```javascript
XEUtils.getWhatDay(new Date(), -1) // Tue Dec 19 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatDay(1513735830000, -1) // Tue Dec 19 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatDay('2017-12-20', -1) // Tue Dec 19 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatDay('2017-12-20', 1) // Tue Dec 21 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatDay('2017-12-20', 0, 'first') // Wed Dec 20 2017 00:00:00 GMT+0800 (中国标准时间)
XEUtils.getWhatDay('2017-12-20', 0, 'last') // Wed Dec 20 2017 23:59:59 GMT+0800 (中国标准时间)
```

#### `getDayOfYear(date[, offsetYear])`
返回某个年份的天数，可以指定前几个年或后几个年，默认当前。

```javascript
XEUtils.getDayOfYear(new Date()) // 365
XEUtils.getDayOfYear(1513735830000) // 365
XEUtils.getDayOfYear('2017-12-20') // 365
XEUtils.getDayOfYear('2019-12-20', 1) // 366
XEUtils.getDayOfYear('2020-12-20') // 366
```

#### `getYearDay(date)`
返回某个年份的第几天。

```javascript
XEUtils.getYearDay(new Date()) // 149
XEUtils.getYearDay('2017-01-20') // 20
XEUtils.getYearDay('2018-05-20') // 140
```

#### `getYearWeek(date)`
返回某个年份的第几周。

```javascript
XEUtils.getYearWeek(new Date()) // 22
XEUtils.getYearWeek('2017-01-20') // 3
XEUtils.getYearWeek('2018-05-20') // 20
```

#### `getMonthWeek(date)`
返回某个月份的第几周。

```javascript
XEUtils.getMonthWeek(new Date()) // 4
XEUtils.getMonthWeek('2017-01-20') // 3
XEUtils.getMonthWeek('2018-05-20') // 2
```

#### `getDayOfMonth(date[, month])`
返回某个月份的天数，可以指定前几个月或后几个月，默认当前。

```javascript
XEUtils.getDayOfMonth(new Date()) // 31
XEUtils.getDayOfMonth(1513735830000) // 31
XEUtils.getDayOfMonth('2017-12-20') // 31
XEUtils.getDayOfMonth('2017-12-20', -1) // 30
XEUtils.getDayOfMonth('2017-12-20', 1) // 31
```

#### `getDateDiff(startDate, endDate)`
返回两个日期之间差距，如果结束日期小于开始日期 `done` 为 `false`。

```javascript
XEUtils.getDateDiff('2017-11-20', '2017-12-21')
// { done: true, time: 2678400000, yyyy: 0, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, S: 0 }
XEUtils.getDateDiff('2017-12-20', '2017-12-21')
// { done: true, time: 86400000, yyyy: 0, MM: 0, dd: 1, HH: 0, mm: 0, ss: 0, S: 0 }
XEUtils.getDateDiff('2018-01-01', '2017-12-21')
// { done: false, time: 0 }
let dateDiff = XEUtils.getDateDiff('2017-12-20 10:10:30', '2017-12-21 10:15:00')
let content = `${dateDiff.mm}分${dateDiff.ss}秒`
// '4分30秒'
```

---

### Number

#### `random(min, max)`
获取一个指定范围内随机数。

```javascript
XEUtils.random() // 0 ~ 9
XEUtils.random(3, 6) // 3 ~ 6
XEUtils.random(0, 5) // 0 ~ 5
XEUtils.random(10, 100) // 10 ~ 100
```

#### `min(array[, iterate])`
获取最小值。

```javascript
XEUtils.min([22, 66, 77, 11]) // 11
XEUtils.min([{a: 11}, {a: 44}], 'a') // {a: 11}
XEUtils.min([{a: 11}, {a: 44}], item => item.a) // {a: 11}
```

#### `max(array[, iterate])`
获取最大值。

```javascript
XEUtils.max([22, 66, 77, 11]) // 77
XEUtils.max([{a: 11}, {a: 44}], 'a') // {a: 44}
XEUtils.max([{a: 11}, {a: 44}], item => item.a) // {a: 44}
```

#### `round(num, digits)`
将数值四舍五入。

```javascript
XEUtils.round(123.455, 2) // 123.46
XEUtils.round(123.452, 2) // 123.45
```

#### `ceil(num, digits)`
将数值向上舍入。

```javascript
XEUtils.ceil(123.455, 2) // 123.46
XEUtils.ceil(123.452, 2) // 123.46
```

#### `floor(num, digits)`
将数值向下舍入。

```javascript
XEUtils.floor(123.455, 2) // 123.45
XEUtils.floor(123.452, 2) // 123.45
```

#### `toFixed(num, digits)`
将数值四舍五入，并格式化为字符串。

```javascript
XEUtils.toFixed(123.455, 2) // 123.46
XEUtils.toFixed(123.452, 2) // 123.45
XEUtils.toFixed(123.452, 4) // 123.4520
```

#### `commafy(num[, options])`
数值与字符串分隔函数。如果为数值，则按照金额千位分隔；如果为字符串则按照指定位数分隔。

**参数：**

| 属性 | 描述 | 类型 | 版本 |
|------|------|------|------|
| spaceNumber | 分割位数，默认3 | number | |
| separator | 分隔符，默认 `,` | string | |
| digits | 只对 number 类型有效，小数位数 | number | v2+ |
| round | 只对 number 类型有效，四舍五入，默认true | boolean | v2.7+ |
| ceil | 只对 number 类型有效，向上舍入 | boolean | v2.7+ |
| floor | 只对 number 类型有效，向下舍入 | boolean | v2.7+ |

```javascript
// 千分位格式化
XEUtils.commafy(1000000) // '1,000,000'
// 格式化金额
XEUtils.commafy(1000000.5678, { digits: 2 }) // '1,000,000.57'
// 字符串每隔4位用空格分隔
XEUtils.commafy('6660000000000001', {spaceNumber: 4, separator: ' '}) // '6660 0000 0000 0001'
// 字符串每隔3位用逗号分割
XEUtils.commafy('abcdeabcdeabcdeabcde', { spaceNumber: 5, separator: ' ' }) // 'abcde abcde abcde abcde'
```

#### `toNumber(num)`
转数值。

```javascript
XEUtils.toNumber(123) // 123
XEUtils.toNumber('12.3') // 12.3
XEUtils.toNumber('abc') // 0
```

#### `toNumberString(num)`
数值转字符串，科学计数转字符串。

```javascript
XEUtils.toNumberString(1e-14) // '0.00000000000001'
XEUtils.toNumberString(1e+22) // '10000000000000000000000'
```

#### `toInteger(num)`
转整数。

```javascript
XEUtils.toInteger(123) // 123
XEUtils.toInteger('12.3') // 12
XEUtils.toInteger('abc') // 0
```

#### `add(num1, num2)`
加法运算。

```javascript
XEUtils.add(10, 20) // 30
XEUtils.add(3.84, 4.78) // 8.62
XEUtils.add(0.4598, 5.024666) // 5.484466
```

#### `subtract(num1, num2)`
减法运算。

```javascript
XEUtils.subtract(20, 10) // 10
XEUtils.subtract(6.66, 3.9) // 2.76
XEUtils.subtract(5.024664, 0.453) // 4.571664
```

#### `multiply(num1, num2)`
乘法运算。

```javascript
XEUtils.multiply(20, 10) // 200
XEUtils.multiply(6.66, 3.7) // 24.642
XEUtils.multiply(5.024664, 0.453) // 2.276172792
```

#### `divide(num1, num2)`
除法运算。

```javascript
XEUtils.divide(20, 10) // 2
XEUtils.divide(2.997, 0.9) // 3.33
XEUtils.divide(182.967, 25.77) // 7.1
```

---

### String

#### `toValueString(obj)`
转字符串。

```javascript
XEUtils.toValueString(0) // '0'
XEUtils.toValueString(1e-5) // '0.00001'
XEUtils.toValueString(null) // ''
XEUtils.toValueString(undefined) // ''
```

#### `trim(str)`
去除字符串左右两边的空格。

```javascript
XEUtils.trim(' abc ') // 'abc'
```

#### `trimLeft(str)`
去除字符串左边的空格。

```javascript
XEUtils.trimLeft(' abc ') // 'abc '
```

#### `trimRight(str)`
去除字符串右边的空格。

```javascript
XEUtils.trimRight(' abc ') // ' abc'
```

#### `escape(str)`
转义HTML字符串，替换 `&`、`<`、`>`、`"`、`'`、\` 字符。

```javascript
XEUtils.escape('<a>link</a>') // '&lt;a&gt;link&lt;/a&gt;'
```

#### `unescape(str)`
反转 `escape`。

```javascript
XEUtils.unescape('&lt;a&gt;link&lt;/a&gt;') // '<a>link</a>'
```

#### `camelCase(str)`
将带驼峰字符串转成字符串。

```javascript
XEUtils.camelCase('project-name') // 'projectName'
```

#### `kebabCase(str)`
将字符串转成驼峰字符串。

```javascript
XEUtils.kebabCase('projectName') // 'project-name'
```

#### `repeat(str, count)`
将字符串重复 n 次。

```javascript
XEUtils.repeat('a', 5) // 'aaaaa'
XEUtils.repeat('ab', 3) // 'ababab'
```

#### `padStart(str, targetLength, padString)`
用指定字符从前面开始补全字符串。

```javascript
XEUtils.padStart('a', 5, 'b') // 'bbbba'
```

#### `padEnd(str, targetLength[, padString])`
用指定字符从后面开始补全字符串。

```javascript
XEUtils.padEnd('a', 5, 'b') // 'abbbb'
```

#### `startsWith(str, val[, startIndex])`
判断字符串是否在源字符串的头部。

```javascript
XEUtils.startsWith('abc', 'b') // false
```

#### `endsWith(str, val[, startIndex])`
判断字符串是否在源字符串的尾部。

```javascript
XEUtils.endsWith('abc', 5, 'a') // false
```

#### `template(str, obj)`
解析动态字符串模板。

```javascript
XEUtils.template('{{ name }}', {name: 'test1'}) // test1
XEUtils.template('{{ name }} {{{age}}}', {name: 'test1', age: 26}) // test1 {26}
```

---

### Url

#### `parseUrl(url)`
解析 URL 参数。

```javascript
XEUtils.parseUrl('http://localhost:8080/demo/#/home?id=123')
// {
//   hash: '#/home?id=123',
//   hashKey: '/home',
//   hashQuery: {
//     id: '123'
//   },
//   host: 'localhost:8080',
//   hostname: 'localhost.com',
//   href: 'http://localhost:8080/demo/#/home?id=123',
//   origin: 'http://localhost:8080',
//   path: '/demo/',
//   pathname: '/demo/',
//   port: '8080',
//   protocol: 'http:',
//   search: '',
//   searchQuery: {}
// }
```

#### `serialize(query)`
序列化查询参数。

```javascript
XEUtils.serialize({id: 123, name: 'test1'}) // id=123&name=test1
```

#### `unserialize(str)`
反转序列化查询参数。

```javascript
XEUtils.unserialize('id=123&name=test1') // {id: '123', name: 'test1'}
```

---

### Web

#### `browse()`
获取浏览器信息。

```javascript
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

#### `locat()`
获取地址栏信息。

```javascript
// http://localhost:8080/demo?id=123
XEUtils.locat()
// {
//   hash: '',
//   hashKey: '',
//   hashQuery: {},
//   host: 'localhost:8080',
//   hostname: 'localhost',
//   href: 'http://localhost:8080/demo?id=123',
//   origin: 'http://localhost:8080',
//   path: '/demo?id=123',
//   pathname: '/demo',
//   port: '8080',
//   protocol: 'http:',
//   search: '?id=123',
//   searchQuery: {
//     id: '123'
//   }
// }
```

#### `getBaseURL()`
获取上下文路径。

```javascript
XEUtils.getBaseURL() // http://localhost/demo/
```

#### `cookie(name, value, options)`
Cookie 操作函数。

```javascript
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
XEUtils.cookie.has(name)
// 添加
XEUtils.cookie.set(name, value, option)
XEUtils.cookie.set(name, value, option).set(name, value, option)
// 根据name获取
XEUtils.cookie.get(name)
// 删除
XEUtils.cookie.remove(name)
XEUtils.cookie.remove(name, {path: '/'})
```

---

## License

MIT License.
