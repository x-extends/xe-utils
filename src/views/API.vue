<template>
  <div class="page-container">
    <div class="aside">
      <div class="header">
        <h1 class="title">
          <a href="https://github.com/xuliangzhan/xe-utils">xe-utils</a>
        </h1>
        <div class="search-wrapper">
          <input class="search-input" v-model="filterName" type="search" placeholder="API 搜索">
        </div>
      </div>
      <ul>
        <li class="menu-item" v-for="group in apiList" :key="group.id">
          <a class="menu-link" @click="group.expand = !group.expand">{{ group.label }}</a>
          <ul class="child-menu" v-show="group.expand">
            <li class="menu-item" v-for="item in group.children" :key="item.id" :class="{active: selected === item}">
              <a class="menu-link" @click="menuLinkEvent(item)" v-html="item.name"></a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="body">
      <div v-for="group in apiList" :key="group.id">
        <div class="api-item" v-for="item in group.children" :key="item.id">
          <p class="title" :id="item.name" v-html="`${item.name } (${ item.args }) ${ item.title}`"></p>
          <p class="desc" v-html="item.desc"></p>
          <table class="param-table" border="0" v-if="item.params && item.params.length">
            <tr v-for="(rows, pIndex) in item.params" :key="pIndex">
              <td v-for="(val, vIndex) in rows" :key="vIndex">{{ val }}</td>
            </tr>
          </table>
          <pre>
            <code class="javascript" v-for="(code,cIndex) in item.codes" :key="cIndex">{{ code }}</code>
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import hljs from 'highlight.js'

export default {
  data () {
    return {
      selected: null,
      filterName: '',
      list: [
        {
          label: 'Object',
          value: 'object',
          expand: true,
          children: [
            {
              name: 'isNaN',
              args: 'val',
              title: '判断是否非数值，如果 value 是一个 NaN，那么返回 true，否则返回 false',
              desc: '',
              params: [],
              codes: [
                `
                isNaN(undefined) // true
                XEUtils.isNaN(undefined) // false
                XEUtils.isNaN(NaN) // true
                `
              ]
            },
            {
              name: 'isFinite',
              args: 'val',
              title: '判断是否为有限数值',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.isFinite(NaN) // false
                XEUtils.isFinite(0) // true
                XEUtils.isFinite(2e64) // true
                `
              ]
            },
            {
              name: 'isUndefined',
              args: 'val',
              title: '判断 Undefined',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.isUndefined(0) // false
                XEUtils.isUndefined() // true
                `
              ]
            },
            {
              name: 'isArray',
              args: 'val',
              title: '判断是否数组',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.isArray(null) // false
                XEUtils.isArray({}) // false
                XEUtils.isArray([1,2,3]) // true
                `
              ]
            },
            {
              name: 'isFloat',
              args: 'val',
              title: '判断是否小数',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.isFloat(null) // false
                XEUtils.isFloat(0) // false
                XEUtils.isFloat(3) // false
                XEUtils.isFloat(3.3) // true
                `
              ]
            },
            {
              name: 'isInteger',
              args: 'val',
              title: '判断是否整数',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.isInteger(null) // false
                XEUtils.isInteger(3.3) // false
                XEUtils.isInteger(3) // true
                XEUtils.isInteger(0) // true
                `
              ]
            },
            {
              name: 'isFunction',
              args: 'val',
              title: '判断是否方法',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.isFunction({}) // false
                XEUtils.isFunction(function(){}) // true
                `
              ]
            },
            {
              name: 'isBoolean',
              args: 'val',
              title: '判断是否 Boolean 对象',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.isBoolean('false') // false
                XEUtils.isBoolean(true) // true
                `
              ]
            },
            {
              name: 'isString',
              args: 'val',
              title: '判断是否 String 对象',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.isString(1) // false
                XEUtils.isString(true) // false
                XEUtils.isString('') // true
                XEUtils.isString('abc') // true
                `
              ]
            },
            {
              name: 'isNumber',
              args: 'val',
              title: '判断是否 Number 对象',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.isNumber(null) // false
                XEUtils.isNumber('1') // false
                XEUtils.isNumber(1) // true
                `
              ]
            },
            {
              name: 'isRegExp',
              args: 'val',
              title: '判断是否 RegExp 对象',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.isRegExp(null) // false
                XEUtils.isRegExp('a') // false
                XEUtils.isRegExp(new RegExp('a')) // true
                XEUtils.isRegExp(/\\d/) // true
                `
              ]
            },
            {
              name: 'isObject',
              args: 'val',
              title: '判断是否 Object 对象',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.isObject(null) // true
                XEUtils.isObject([]) // true
                XEUtils.isObject({}) // true
                XEUtils.isObject(123) // false
                `
              ]
            },
            {
              name: 'isPlainObject',
              args: 'val',
              title: '判断是否是一个对象',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.isPlainObject(null) // false
                XEUtils.isPlainObject([]) // false
                XEUtils.isPlainObject(123) // false
                XEUtils.isPlainObject({}) // true
                `
              ]
            },
            {
              name: 'isDate',
              args: 'val',
              title: '判断是否 Date 对象',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.isDate('2017-12-20') // false
                XEUtils.isDate({}) // false
                XEUtils.isDate(1514096716800) // false
                XEUtils.isDate(new Date()) // true
                `
              ]
            },
            {
              name: 'isError',
              args: 'val',
              title: '判断是否 Error 对象',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.isError(null) // false
                XEUtils.isError({}) // false
                XEUtils.isError(new TypeError('error')) // true
                XEUtils.isError(new Error('error')) // true
                `
              ]
            },
            {
              name: 'isTypeError',
              args: 'val',
              title: '判断是否 TypeError 对象',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.isTypeError(null) // false
                XEUtils.isTypeError({}) // false
                XEUtils.isTypeError(new Error('error')) // false
                XEUtils.isTypeError(new TypeError('error')) // true
                `
              ]
            },
            {
              name: 'isEmpty',
              args: 'val',
              title: '判断是否为空对象',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.isEmpty([11, 22]) // false
                XEUtils.isEmpty({a:null}) // false
                XEUtils.isEmpty(null) // true
                XEUtils.isEmpty({}) // true
                XEUtils.isEmpty([]) // true
                `
              ]
            },
            {
              name: 'isNull',
              args: 'val',
              title: '判断是否为 Null',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.isNull(0) // false
                XEUtils.isNull('') // false
                XEUtils.isNull(null) // true
                `
              ]
            },
            {
              name: 'isSymbol',
              args: 'val',
              title: '判断是否 Symbol 对象',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.isSymbol('a') // false
                XEUtils.isSymbol(Symbol('a')) // true
                `
              ]
            },
            {
              name: 'isArguments',
              args: 'val',
              title: '判断是否 Arguments 对象',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.isArguments([]) // false
                XEUtils.isArguments(arguments) // true
                `
              ]
            },
            {
              name: 'isElement',
              args: 'val',
              title: '判断是否 Element 对象',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.isElement({}) // false
                XEUtils.isElement(document.createElement('div')) // true
                `
              ]
            },
            {
              name: 'isDocument',
              args: 'val',
              title: '判断是否 Document 对象',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.isDocument({}) // false
                XEUtils.isDocument(document.createElement('div')) // false
                XEUtils.isDocument(document) // true
                `
              ]
            },
            {
              name: 'isWindow',
              args: 'val',
              title: '判断是否 Window 对象',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.isWindow({}) // false
                XEUtils.isWindow(document) // false
                XEUtils.isWindow(window) // true
                `
              ]
            },
            {
              name: 'isFormData',
              args: 'val',
              title: '判断是否 FormData 对象',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.isFormData({}) // false
                XEUtils.isFormData(new FormData()) // true
                `
              ]
            },
            {
              name: 'isMap',
              args: 'val',
              title: '判断是否 Map 对象',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.isMap({}) // false
                XEUtils.isMap(new Map()) // true
                `
              ]
            },
            {
              name: 'isWeakMap',
              args: 'val',
              title: '判断是否 WeakMap 对象',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.isWeakMap({}) // false
                XEUtils.isWeakMap(new WeakMap()) // true
                `
              ]
            },
            {
              name: 'isSet',
              args: 'val',
              title: '判断是否 Set 对象',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.isSet({}) // false
                XEUtils.isSet(new Set()) // true
                `
              ]
            },
            {
              name: 'isWeakSet',
              args: 'val',
              title: '判断是否 WeakSet 对象',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.isWeakSet({}) // false
                XEUtils.isWeakSet(new WeakSet()) // true
                `
              ]
            },
            {
              name: 'isLeapYear',
              args: 'date',
              title: '判断是否闰年',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.isLeapYear(1606752000000)  // true
                XEUtils.isLeapYear('2018-12-01') // false
                XEUtils.isLeapYear('2020-12-01') // true
                XEUtils.isLeapYear(new Date('2020/12/01')) // true
                `
              ]
            },
            {
              name: 'isMatch',
              args: 'obj, source',
              title: '判断属性中的键和值是否包含在对象中',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.isMatch({ aa: 11, bb: 22 }, { bb: 22 })  // true
                XEUtils.isMatch({ aa: 11, bb: 22 }, { bb: 33 })  // false
                `
              ]
            },
            {
              name: 'isEqual',
              args: 'obj1, obj2',
              title: '深度比较两个对象之间的值是否相等',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.isEqual({}, []) // false
                XEUtils.isEqual({0: 1}, [1]) // false
                XEUtils.isEqual({name: 'test1'}, {name: 'test1'}) // true
                XEUtils.isEqual({name: 'test1', list: [11, /\\d/]}, {name: 'test1', list: [11,  /\\d/]}) // true
                XEUtils.isEqual({name: 'test1', list: [11, 33, {a: /\\D/}]}, {name: 'test1', list: [11, 33, {a: /\\d/}]}) // false
                `
              ]
            },
            {
              name: 'isEqualWith',
              args: 'obj1, obj2, func',
              title: '深度比较两个对象之间的值是否相等，使用自定义比较函数',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.isEqualWith({0: 1}, [1]) // false
                XEUtils.isEqualWith({0: 1}, [1], (v1, v2) => true) // true
                XEUtils.isEqualWith([1], [1]) // true
                XEUtils.isEqualWith([1], [1], (v1, v2) => false) // false
                `
              ]
            },
            {
              name: 'isDateSame',
              args: 'date1, date2, format',
              title: '判断两个日期是否相同',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.isDateSame('2018-12-01', '2018-12-01') // true
                XEUtils.isDateSame(new Date(), '2018-12-01', 'yyyy') // 判断是否同一年 true
                XEUtils.isDateSame(new Date(), XEUtils.toStringDate('12/30/2018', 'MM/dd/yyyy'), 'MM') // 判断是否同一月 true
                XEUtils.isDateSame(new Date(), new Date(), 'dd') // 判断是否同一日 true
                XEUtils.isDateSame(new Date(), new Date(), 'yyyyMMdd') // 判断是否同年同月同日 true
                `
              ]
            },
            {
              name: 'getType',
              args: 'obj',
              title: '获取对象类型',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.getType() // 'undefined'
                XEUtils.getType(null) // 'null'
                XEUtils.getType('') // 'string'
                XEUtils.getType(/\\d/) // 'regexp'
                XEUtils.getType(1) // 'number'
                XEUtils.getType([]) // 'array'
                XEUtils.getType({}) // 'object'
                XEUtils.getType(new Error()) // 'error'
                XEUtils.getType(function(){}) // 'function'
                `
              ]
            },
            {
              name: 'uniqueId',
              args: 'prefix',
              title: '获取一个全局唯一标识',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.uniqueId() // 1
                XEUtils.uniqueId() // 2
                XEUtils.uniqueId('prefix_') // 'prefix_3'
                `
              ]
            },
            {
              name: 'getSize',
              args: 'obj',
              title: '返回对象的长度',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.getSize('123') // 3
                XEUtils.getSize([1, 3]) // 2
                XEUtils.getSize({a: 2, b: 5}) // 2
                `
              ]
            },
            {
              name: 'clear',
              args: 'obj[, defs, assigns]',
              title: '清空对象; defs如果不传（清空所有属性）、如果传对象（清空并继承)、如果传值(给所有赋值)',
              desc: '',
              params: [],
              codes: [
                `
                let a = [11, 22, 33, 33]
                XEUtils.clear(a) // []
                XEUtils.clear(a, undefined) // [undefined, undefined, undefined, undefined]
                XEUtils.clear(a, null) // [null, null, null, null]
                let b = {b1: 11, b2: 22}
                XEUtils.clear(b) // {}
                XEUtils.clear(b, undefined) // {b1: undefined, b2: undefined}
                XEUtils.clear(b, null) // {b1: null, b2: null}
                `
              ]
            },
            {
              name: 'assign',
              args: 'destination, ...sources',
              title: '浅拷贝一个或者多个对象到目标对象中，如果第一值是true，则使用深拷贝',
              desc: '',
              params: [],
              codes: [
                `
                // 浅拷贝
                let obj2 = {a: null}
                let obj3 = {bb: {b: 11}}
                let obj4 = XEUtils.assign(obj2, {a: 11}) // {a: 11, c: null, bb: {b: 11}}
                obj3.bb = 22 // obj4 = {a: 11, c: null, bb: {b: 22}}

                // 深拷贝
                let obj3 = {bb: {b: 11}}
                let obj4 = XEUtils.assign(true, obj3, {a: 11}) // {c: null, bb: {b: 11}}
                `
              ]
            },
            {
              name: 'destructuring',
              args: 'obj, ...target',
              title: '将一个或者多个对象值解构到目标对象',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.destructuring({a: null}, {a: 11, b: 22, c: 33}) // {a: 11}
                XEUtils.destructuring({a: 11, d: 44}, {a: 11, b: 22, c: 33}) // {a: 11, d: 44}
                XEUtils.destructuring({a: 11, c: 33, d: 44}, {a: 11, b: 22, c: null, e: 55, f: 66}) // {a: 11, c: null, d: 44}
                `
              ]
            },
            {
              name: 'toStringJSON',
              args: 'str',
              title: '字符串转 JSON',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.toStringJSON('{"a":1}') // {a: 1}
                XEUtils.toStringJSON('[11,22]') // [11, 22]
                `
              ]
            },
            {
              name: 'toJSONString',
              args: 'obj',
              title: 'JSON 转字符串',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.toJSONString({a: 1}) // '{"a":1}'
                XEUtils.toJSONString([11, 22]) // '[11,22]'
                `
              ]
            },
            {
              name: 'keys',
              args: 'obj',
              title: '获取对象所有属性',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.keys({a: 11}) // ['a']
                `
              ]
            },
            {
              name: 'values',
              args: 'obj',
              title: '获取对象所有值',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.values({a: 11}) // [11]
                `
              ]
            },
            {
              name: 'entries',
              args: 'obj',
              title: '获取对象所有属性、值',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.entries({a: 11}) // [['a', 11]]
                XEUtils.entries([11, 22]) // [['0', 11], ['1', 22]]
                `
              ]
            },
            {
              name: 'pick',
              args: 'obj, array',
              title: '根据 keys 过滤指定的属性值 或者 接收一个判断函数，返回一个新的对象',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.pick({name: 'test11', age: 25, height: 176}, 'name', 'height') // {name: 'test11', height: 176}
                XEUtils.pick({name: 'test11', age: 25, height: 176}, ['name', 'age']) // {name: 'test11', age: 25}
                XEUtils.pick({name: 'test11', age: 25, height: 176}, val => XEUtils.isNumber(val)) // {age: 25, height: 176}
                `
              ]
            },
            {
              name: 'omit',
              args: 'obj, array',
              title: '根据 keys 排除指定的属性值 或者 接收一个判断函数，返回一个新的对象',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.omit({name: 'test11', age: 25, height: 176}, 'name', 'height') // {age: 25}
                XEUtils.omit({name: 'test11', age: 25, height: 176}, ['name', 'age']) // {height: 176}
                XEUtils.omit({name: 'test11', age: 25, height: 176}, val => XEUtils.isNumber(val)) // {name: 'test11'}
                `
              ]
            },
            {
              name: 'first',
              args: 'obj',
              title: '获取对象第一个值',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.first({a: 11, b : 22}) // 11
                XEUtils.first([11, 22]) // 11
                `
              ]
            },
            {
              name: 'last',
              args: 'obj',
              title: '获取对象最后一个值',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.last({a: 11, b: 22}) // 22
                XEUtils.last([11, 22]) // 22
                `
              ]
            },
            {
              name: 'each',
              args: 'obj, iteratee [, context]',
              title: '通用迭代器',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.each([11, 22, 33], (item, key) => {
                  // 通用迭代器，支持遍历任意类型
                })
                `
              ]
            },
            {
              name: 'objectEach',
              args: 'obj, iteratee [, context]',
              title: '对象迭代器',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.objectEach([11, 22, 33], (item, key) => {
                  // 对象迭代器，只能用于遍历对象，性能高于 each
                })
                `
              ]
            },
            {
              name: 'lastEach',
              args: 'obj, iteratee [, context]',
              title: '通用迭代器，从最后开始迭代',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.lastEach([11, 22, 33], (item, key) => {
                  // 通用迭代器，支持遍历任意类型
                })
                `
              ]
            },
            {
              name: 'lastObjectEach',
              args: 'obj, iteratee [, context]',
              title: '通用迭代器，从最后开始迭代',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.lastObjectEach([11, 22, 33], (item, key) => {
                  // 对象迭代器，只能用于遍历对象，性能高于 lastEach
                })
                `
              ]
            },
            {
              name: 'has',
              args: 'obj, property',
              title: '检查键、路径是否是该对象的属性',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.has({a: {b: 11, c: 22, d: [33, 44]}}, 'a.b') // true
                XEUtils.has({a: {b: 11, c: 22, d: [33, 44]}}, 'a.e') // false
                XEUtils.has({a: {b: 11, c: 22, d: [33, 44]}}, 'a.d[0]') // true
                XEUtils.has({a: {b: 11, c: 22, d: [33, {f: 66}]}}, 'a.d[1].f') // true
                XEUtils.has({a: {b: 11, c: 22, d: [33, 44]}}, ['a', 'd[1]']) // true
                XEUtils.has({a: {b: 11, c: 22, d: [33, 44]}}, ['a', 'd[3]']) // false
                `
              ]
            },
            {
              name: 'get',
              args: 'obj, property, defaultValue',
              title: '获取对象的属性的值，如果值为 undefined，则返回默认值',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.get({a: {b: 11, c: 22, d: [33, 44]}}, 'a.b') // 11
                XEUtils.get({a: {b: 11, c: 22, d: [33, 44]}}, 'a.e', 'default') // 'default'
                XEUtils.get({a: {b: 11, c: 22, d: [33, 44]}}, 'a.d[0]') // 33
                XEUtils.get({a: {b: 11, c: 22, d: [33, {f: 66}]}}, 'a.d[1].f') // 66
                XEUtils.get({a: {b: 11, c: 22, d: [33, 44]}}, ['a', 'c']) // 22
                `
              ]
            },
            {
              name: 'set',
              args: 'obj, property, value',
              title: '设置对象属性上的值。如果属性不存在则创建它',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.set({}, 'a.d[0]', 33) // {a: {d: [33]}}
                XEUtils.set({a: {}}, 'a.d[0].f.h', 44) // {a: {d: [{f: {h: 44}}]}}
                XEUtils.set({}, ['a', 'c'], 22) // {a: {c: 22}}
                XEUtils.set({}, ['a', 'd[0]', 'f', 'h'], 44) // {a: {d: [{f: {h: 44}}]}}
                `
              ]
            },
            {
              name: 'groupBy',
              args: 'obj, iteratee [, context]',
              title: '集合分组,默认使用键值分组,如果有 iteratee 则使用结果进行分组',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.groupBy([{type: 'a'}, {type: 'b'}], 'type') // {a: [{type: 'a'}], b: [{type: 'b'}]}
                XEUtils.groupBy([{type: 'a'}, {type: 'a'}, {type: 'b'}], 'type')
                // {a: [{type: 'a'}, {type: 'a'}], b: [{type: 'b'}]}
                `
              ]
            },
            {
              name: 'countBy',
              args: 'obj, iteratee [, context]',
              title: '集合分组统计,返回各组中对象的数量统计',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.countBy([{type: 'a'}, {type: 'b'}], 'type') // {a: 1, b: 1}
                XEUtils.countBy([{type: 'a'}, {type: 'a'}, {type: 'b'}], 'type') // {a: 2, b: 1}
                `
              ]
            },
            {
              name: 'range',
              args: 'start, stop, step',
              title: '序号列表生成函数',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.range(0) // []
                XEUtils.range(10) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
                XEUtils.range(-5, 5) // [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4]
                XEUtils.range(0, 10, 2) // [0, 2, 4, 6, 8]
                `
              ]
            },
            {
              name: 'objectMap',
              args: 'obj, iteratee [, context]',
              title: '指定方法后的返回值组成的新对象',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.objectMap({a: {type: 'a'}, b: {type: 'b'}}, item => item.type) // {a: "a", b: "b"}
                `
              ]
            },
            {
              name: 'clone',
              args: 'obj, deep',
              title: '浅拷贝/深拷贝',
              desc: '',
              params: [],
              codes: [
                `
                let v1 = {a: 11, b: {b1: 22}}
                let v2 = XEUtils.clone(v1)
                if (v1.b === v2.b) {
                  // true
                }
                let v3 = XEUtils.clone(v1, true)
                if (v1.b === v3.b) {
                  // false
                }
                `
              ]
            },
            {
              name: 'uniq',
              args: 'array',
              title: ' 数组去重',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.uniq([11, 22, 33, 33, 22, 55]) // [11, 22, 33, 55]
                `
              ]
            },
            {
              name: 'union',
              args: '...array',
              title: '将多个数的值返回唯一的并集数组',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.union([11, 22], [33, 22], [44, 11]) // [11, 22, 33, 44]
                `
              ]
            }
          ]
        },
        {
          label: 'Function',
          value: 'function',
          expand: true,
          children: [
            {
              name: 'delay',
              args: 'callback, wait[, ...arguments]',
              title: '该方法和 setTimeout 一样的效果，区别就是支持额外参数',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.delay(function (name) {
                  console.log(name)
                }, 300, 'test11')
                // 'test11'
                `
              ]
            },
            {
              name: 'bind',
              args: 'callback, context[, ...arguments]',
              title: '创建一个绑定上下文的函数',
              desc: '',
              params: [],
              codes: [
                `
                let rest = XEUtils.bind(function (val) {
                  return this.name + ' = ' + val
                }, {name: 'test'})
                rest(222) // 'test = 222'
                rest(333) // 'test = 333'
                `
              ]
            },
            {
              name: 'once',
              args: 'callback, context[, ...arguments]',
              title: '创建一个只能调用一次的函数,只会返回第一次执行后的结果',
              desc: '',
              params: [],
              codes: [
                `
                let rest = XEUtils.once(function (val) {
                  return this.name + ' = ' + val
                }, {name: 'test'})
                rest(222) // 'test = 222'
                rest(333) // 'test = 222'
                `
              ]
            },
            {
              name: 'after',
              args: 'count, callback, context',
              title: '创建一个函数, 调用次数超过 count 次之后执行回调并将所有结果记住后返回',
              desc: '',
              params: [],
              codes: [
                `
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
                `
              ]
            },
            {
              name: 'before',
              args: 'count, callback, context',
              title: '创建一个函数, 调用次数不超过 count 次之前执行回调并将所有结果记住后返回',
              desc: '',
              params: [],
              codes: [
                `
                document.querySelector('.btn').addEventListener('click', XEUtils.before(4, function (rests) {
                  console.log('只能点击三次')
                }))
                `
              ]
            },
            {
              name: 'throttle',
              args: 'callback, wait[, options]',
              title: '创建一个策略函数，当被重复调用函数的时候，至少每隔多少秒毫秒调用一次该函数',
              desc: '',
              params: [],
              codes: [
                `
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
                `
              ]
            },
            {
              name: 'debounce',
              args: 'callback, wait[, options]',
              title: '创建一个防反跳策略函数，在函数最后一次调用多少毫秒之后才会再次执行，如果在期间内重复调用会重新计算延迟',
              desc: '',
              params: [],
              codes: [
                `
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
                `
              ]
            }
          ]
        },
        {
          label: 'Array',
          value: 'array',
          expand: true,
          children: [
            {
              name: 'arrayEach',
              args: 'obj, iteratee [, context]',
              title: '数组迭代器',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.arrayEach([11, 22, 33], (item, key) => {
                  // 数组迭代器，只能用于遍历(数组或伪数组)，性能高于 each
                })
                `
              ]
            },
            {
              name: 'lastArrayEach',
              args: 'obj, iteratee [, context]',
              title: ' 数组迭代器，从最后开始迭代',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.lastArrayEach([11, 22, 33], (item, key) => {
                  // 数组迭代器，只能用于遍历(数组或伪数组)，性能高于 lastEach
                })
                `
              ]
            },
            {
              name: 'slice',
              args: 'array, start, end',
              title: '裁剪（数组或伪数组），从 start 位置开始到 end 结束，但不包括 end 本身的位置',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.slice([11, 22, 33, 44], 1) // [22, 33, 44]
                XEUtils.slice([11, 22, 33, 44], 1, 3) // [22, 33]
                function method () {
                  XEUtils.slice(arguments, 1, 3) // [22, 33]
                }
                method(11, 22, 33, 44)
                `
              ]
            },
            {
              name: 'indexOf',
              args: 'obj, val',
              title: '返回对象第一个索引值',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.indexOf([11, 22, 33, 22], 55) // -1
                XEUtils.indexOf([11, 22, 33, 22], 22) // 1
                `
              ]
            },
            {
              name: 'arrayIndexOf',
              args: 'obj, val',
              title: '返回数组第一个索引值，比 indexOf 快',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.arrayIndexOf([11, 22, 33, 22], 55) // -1
                XEUtils.arrayIndexOf([11, 22, 33, 22], 22) // 1
                `
              ]
            },
            {
              name: 'findIndexOf',
              args: 'obj, iteratee [, context]',
              title: '返回对象第一个索引值',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.findIndexOf([11, 22, 33, 22], item => item === 55) // -1
                XEUtils.findIndexOf([11, 22, 33, 22], item => item === 22) // 1
                `
              ]
            },
            {
              name: 'lastIndexOf',
              args: 'obj, val',
              title: '从最后开始的索引值,返回对象第一个索引值',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.lastIndexOf([11, 22, 33, 22], 55) // -1
                XEUtils.lastIndexOf([11, 22, 33, 22], 22) // 3
                `
              ]
            },
            {
              name: 'arrayLastIndexOf',
              args: 'obj, val',
              title: '从最后开始的索引值,返回数组第一个索引值，比 indexOf 快',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.arrayLastIndexOf([11, 22, 33, 22], 55) // -1
                XEUtils.arrayLastIndexOf([11, 22, 33, 22], 22) // 3
                `
              ]
            },
            {
              name: 'findLastIndexOf',
              args: 'obj, iteratee [, context]',
              title: '从最后开始的索引值,返回对象第一个索引值',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.findLastIndexOf([11, 22, 33, 22], item => item === 55) // -1
                XEUtils.findLastIndexOf([11, 22, 33, 22], item => item === 22) // 3
                `
              ]
            },
            {
              name: 'includes',
              args: 'obj, val',
              title: '判断对象是否包含该值,成功返回 true 否则 false',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.includes([11], 22) // false
                XEUtils.includes([11, 22], 22) // true
                `
              ]
            },
            {
              name: 'includeArrays',
              args: 'array1, array2',
              title: '判断数组是否包含另一数组',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.includeArrays([11, 22, 33], []) // true
                XEUtils.includeArrays([11, 22, 33], [11]) // true
                XEUtils.includeArrays([11, 22, 33], [22, 33]) // true
                XEUtils.includeArrays([11, 22, 33], [22, 44]) // false
                `
              ]
            },
            {
              name: 'remove',
              args: 'obj, iteratee',
              title: '移除对象属性',
              desc: '',
              params: [],
              codes: [
                `
                let list1 = [11, 22, 33, 44]
                XEUtils.remove(list1, 2) // list1 = [11, 22, 44]
                let list2 = [11, 22, 33, 44]
                XEUtils.remove(list2, item => item === 22) // list2 = [11, 33, 44]
                `
              ]
            },
            {
              name: 'sortBy',
              args: 'arr, iteratee [, context]',
              title: '数组按属性值升序',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.sortBy([11, 55, 99, 77, 11, 55, 22])
                // [11, 11, 22, 55, 55, 77, 99]
                XEUtils.sortBy([{ age: 27 }, { age: 26 }, { age: 28 }], 'age')
                // [{ age: 26 }, { age: 27 }, { age: 28 }]
                // 多字段排序
                XEUtils.sortBy([
                  { name: 'x', age: 26 },
                  { name: 'd', age: 27 },
                  { name: 'z', age: 26 },
                  { name: 'z', age: 24 },
                  { name: 'z', age: 25 }
                ], ['age', 'name'])
                /*
                [{ name: 'z', age: 24 },
                { name: 'z', age: 25 },
                { name: 'x', age: 26 },
                { name: 'z', age: 26 },
                { name: 'd', age: 27 }]
                */
                // 自定义组合排序
                XEUtils.sortBy([
                  { name: 'x', age: 26 },
                  { name: 'd', age: 27 },
                  { name: 'x', age: 26 },
                  { name: 'z', age: 26 }
                ], [item => item.name, item => item.age])
                /*
                [{ name: 'd', age: 27 },
                { name: 'x', age: 26 },
                { name: 'x', age: 26 },
                { name: 'z', age: 26 }]
                */
                `
              ]
            },
            {
              name: 'shuffle',
              args: 'array',
              title: '将一个数组随机打乱，返回一个新的数组',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.shuffle([11, 22, 33, 44, 55]) // [22, 33, 55, 11, 44]
                `
              ]
            },
            {
              name: 'sample',
              args: 'array, number',
              title: '从一个数组中随机返回几个元素',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.sample([11, 22, 33, 44, 55], 3) // [22, 33, 55]
                `
              ]
            },
            {
              name: 'some',
              args: 'obj, iteratee [, context]',
              title: '对象中的值中的每一项运行给定函数,如果函数对任一项返回 true,则返回 true,否则返回 false',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.some([{value: 11}, {value: 22}], item => item.value === 55) // false
                `
              ]
            },
            {
              name: 'every',
              args: 'obj, iteratee [, context]',
              title: ' 对象中的值中的每一项运行给定函数,如果该函数对每一项都返回 true,则返回 true,否则返回 false',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.every([{value: 11}, {value: 22}], item => item.value === 11) // false
                `
              ]
            },
            {
              name: 'filter',
              args: 'obj, iteratee [, context]',
              title: '根据回调过滤数据',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.filter([{value: 11}, {value: 22}], item => item.value > 11) // [{value: 22}]
                `
              ]
            },
            {
              name: 'find',
              args: 'obj, iteratee [, context]',
              title: '查找匹配第一条数据',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.find([{value: 11}, {value: 22}], item => item.value === 55) // null
                `
              ]
            },
            {
              name: 'findKey',
              args: 'obj, iteratee [, context]',
              title: '查找匹配第一条数据的键',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.findKey([{value: 11}, {value: 22}], item => item.value === 22) // '1'
                XEUtils.findKey({aa: 11, bb: 22, cc: 33}, item => item === 22) // 'bb'
                `
              ]
            },
            {
              name: 'map',
              args: 'obj, iteratee [, context]',
              title: '指定方法后的返回值组成的新数组',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.map([{value: 11}, {value: 22}], item => item.value) // [11, 22]
                `
              ]
            },
            {
              name: 'copyWithin',
              args: 'array, target, start [, end]',
              title: '浅复制数组的一部分到同一数组中的另一个位置,数组大小不变',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.copyWithin([11, 22, 33, 44], 0, 2) // [33, 44, 33, 44]
                XEUtils.copyWithin([11, 22, 33, 44], 0, -1) // [44, 22, 33, 44]
                `
              ]
            },
            {
              name: 'sum',
              args: 'obj, iteratee [, context]',
              title: '求和函数，将数值相加',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.sum([22, 66, 88]) // 176
                XEUtils.sum([{value: 11}, {value: 22}, {value: 66}], 'value') // 99
                XEUtils.sum({val1: 21, val2: 34, val3: 47}) // 102
                `
              ]
            },
            {
              name: 'mean',
              args: 'obj, iteratee [, context]',
              title: ' 求平均值函数',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.mean({ val1: 21, val2: 34, val3: 47 }) // 34
                XEUtils.mean([22, 66, 60, 60]) // 52
                XEUtils.mean([{value: 34}, {value: 22}], 'value') // 28
                XEUtils.mean([{value: 11}, {value: 22}, {value: 66}], item => item.value * 2) // 66
                XEUtils.mean({val1: 21, val2: 34, val3: 45, val4: 55}) // 38.75
                `
              ]
            },
            {
              name: 'toArray',
              args: 'array',
              title: '将对象或者伪数组转为新数组',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.toArray([]) // []
                XEUtils.toArray({}) // []
                XEUtils.toArray({name: 'test1', age: 25}) // ['test1', 25]
                XEUtils.toArray(arguments) // [...]
                XEUtils.toArray(document.querySelectorAll('div')) // [...]
                `
              ]
            },
            {
              name: 'reduce',
              args: 'array, iteratee [, initialValue]',
              title: '接收一个函数作为累加器，数组中的每个值（从左到右）开始合并，最终为一个值',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.reduce([22, 66, 88], (previous, item) => previous + item) // 176
                `
              ]
            },
            {
              name: 'zip',
              args: '...[]',
              title: '将每个数组中相应位置的值合并在一起',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.zip(['name1', 'name2', 'name3'], [true, true, false], [30, 40, 20])
                // [['name1', true, 30], ['name2', true, 40], ['name3', false, 20]]
                `
              ]
            },
            {
              name: 'unzip',
              args: 'arrays',
              title: '与 zip 相反',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.unzip([['name1', true, 30], ['name2', true, 40], ['name3', false, 20]])
                // [['name1', 'name2', 'name3'], [true, true, false], [30, 40, 20]]
                `
              ]
            },
            {
              name: 'zipObject',
              args: 'props, values',
              title: '根据键数组、值数组对转换为对象',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.zipObject(['aa', 'bb', 'cc'], [11, 22, 33])
                // { aa: 11, bb: 22, cc: 33 }
                `
              ]
            },
            {
              name: 'chunk',
              args: 'array, size',
              title: '将一个数组分割成大小的组。如果数组不能被平均分配，那么最后一块将是剩下的元素',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.chunk(['a', 'b', 'c', 'd'], 2) // [['a', 'b'], ['c', 'd']]
                XEUtils.chunk(['a', 'b', 'c', 'd'], 3) // [['a', 'b', 'c'], ['d']]
                `
              ]
            },
            {
              name: 'property',
              args: 'path',
              title: '返回一个获取对象属性的函数',
              desc: '',
              params: [],
              codes: [
                `
                let getName = XEUtils.property('name')
                getName({name: 'test11', age: 25, height: 176}) // 'test11'
                getName({age: 25, height: 176}) // undefined
                `
              ]
            },
            {
              name: 'pluck',
              args: 'array, key',
              title: '获取数组对象中某属性值，返回一个数组',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.pluck([{a: 11, b: 22}, {a: 33, b: 44}], 'a') // [11, 33]
                XEUtils.pluck([[11, 22, 33], [44, 55, 66]], 1) // [22, 55]
                `
              ]
            },
            {
              name: 'invoke',
              args: 'list, path, ...arguments',
              title: '在list的每个元素上执行方法,任何传递的额外参数都会在调用方法的时候传递给它',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.invoke([[3, 1, 6, 7], [3, 2, 1, 8]], 'sort') // [[1, 3, 6, 7], [1, 2, 3, 8]]
                XEUtils.invoke(['123', '456'], 'split') // [['123'], ['456']]
                XEUtils.invoke([123, 456], String.prototype.split, '') // [['1', '2', '3'], ['4', '5', '6']]
                XEUtils.invoke([{a: {b: [2, 0, 1]}}, {a: {b: [2, 1]}}, {a: {b: [4, 8, 1]}}], ['a', 'b', 'sort'])
                // [[0, 1, 2], [1, 2], [1, 4, 8]]
                `
              ]
            },
            {
              name: 'toArrayTree',
              args: 'array, options',
              title: '一个高性能的树结构转换函数，将一个带层级的数据列表转成树结构',
              desc: '',
              params: [
                ['属性', '描述', '默认值'],
                ['strict', '是否严格模式，启用后会忽略错误数据', 'false'],
                ['key', '节点键值', 'id'],
                ['parentKey', '子节点属性', 'parentId'],
                ['children', '数据存放属性', 'children'],
                ['sortKey', '对树节点进行排序属性', ''],
                ['reverse', 'sortKey不为空是有效，默认升序', 'false'],
                ['data', '数据存放属性', 'null']
              ],
              codes: [
                `
                // 默认树结构
                let list1 = [
                  {id: 1, name: '111'},
                  {id: 2, parentId: 1, name: '222'},
                  {id: 3, name: '333'},
                  {id: 4, parentId: 2, name: '444'}
                ]
                XEUtils.toArrayTree(list1)
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
                let list2 = [
                  {id: 1, name: '111', seq: 5},
                  {id: 2, parentId: 1, name: '222', seq: 3},
                  {id: 3, name: '333', seq: 6},
                  {id: 4, parentId: 2, name: '444', seq: 2},
                  {id: 5, parentId: 1, name: '555', seq: 1}
                ]
                XEUtils.toArrayTree(list2, {sortKey: 'seq'})
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
                let list3 = [
                  {id: 1, name: '111'},
                  {id: 2, parentId: 1, name: '222'},
                  {id: 3, name: '333'},
                  {id: 4, parentId: 2, name: '444'},
                  {id: 5, parentId: 22, name: '555'}
                ]
                XEUtils.toArrayTree(list3, {data: 'data'})
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
                let list4 = [
                  {id: 1, name: '111'},
                  {id: 2, parentId: 1, name: '222'},
                  {id: 3, name: '333'},
                  {id: 4, parentId: 2, name: '444'},
                  {id: 5, parentId: 22, name: '555'}
                ]
                XEUtils.toArrayTree(list4, {strict: true, parentKey: 'parentId', key: 'id', children: 'children', data: 'data'})
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
                `
              ]
            },
            {
              name: 'toTreeArray',
              args: 'array, options',
              title: '将一个树结构转成数组列表',
              desc: '',
              params: [
                ['属性', '描述', '默认值'],
                ['children', '子节点属性', 'children'],
                ['data', '数据存放属性', '']
              ],
              codes: [
                `
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
                XEUtils.toTreeArray(list1)
                /*
                [
                  {id: 1, name: '111'},
                  {id: 2, parentId: 1, name: '222'},
                  {id: 4, parentId: 2, name: '444'}
                  {id: 3, name: '333'}
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
                XEUtils.toTreeArray(list2, {data: 'data'})
                /*
                [
                  {id: 1, name: '111'},
                  {id: 2, parentId: 1, name: '222'},
                  {id: 4, parentId: 2, name: '444'},
                  {id: 3, name: '333'},
                  {id: 5, parentId: 22, name: '555'}
                ]
                */
                `
              ]
            },
            {
              name: 'findTree',
              args: 'obj, iterate[, options, context]',
              title: '从树结构中查找匹配第一条数据的键、值、路径',
              desc: '',
              params: [
                ['属性', '描述', '默认值'],
                ['children', '子节点属性', 'children']
              ],
              codes: [
                `
                XEUtils.findTree([{id: 1}, {id: 2, children: [{id: 20}]}, {id: 3, children: [{id: 30}]}], item => item.id === 20) // {item: {id: 20}, ...}
                XEUtils.findTree([{id: 1}, {id: 2, childs: [{id: 20}]}, {id: 3, childs: [{id: 30}]}], item => item.id === 20, {children: 'childs'}) // {item: {id: 20}, ...}
                `
              ]
            },
            {
              name: 'eachTree',
              args: 'obj, iterate[, options, context]',
              title: '从树结构中遍历数据的键、值、路径',
              desc: '',
              params: [
                ['属性', '描述', '默认值'],
                ['children', '子节点属性', 'children']
              ],
              codes: [
                `
                XEUtils.eachTree([{id: 1}, {id: 2, children: [{id: 20}]}, {id: 3, children: [{id: 30}]}], item => {
                  console.log(item.id)
                })
                XEUtils.eachTree([{id: 1}, {id: 2, childs: [{id: 20}]}, {id: 3, childs: [{id: 30}]}], item => {
                  console.log(item.id)
                }, {children: 'childs'})
                `
              ]
            },
            {
              name: 'mapTree',
              args: 'obj, iterate[, options, context]',
              title: '从树结构中指定方法后的返回值组成的新数组',
              desc: '',
              params: [
                ['属性', '描述', '默认值'],
                ['children', '子节点属性', 'children'],
                ['mapChildren', '将子节点映射到指定的属性', '']
              ],
              codes: [
                `
                XEUtils.mapTree([{id: 1}, {id: 2, children: [{id: 20}]}, {id: 3, children: [{id: 30}]}], item => {
                  return { id: item.id * 2 }
                }) // [{id: 2}, {id: 4, children: [{id: 40}]}, {id: 6}]
                XEUtils.mapTree([{id: 1}, {id: 2, childs: [{id: 20}]}, {id: 3, childs: [{id: 30}]}], item => {
                  return { id: item.id * 2 }
                }, {children: 'childs'}) // [{id: 2}, {id: 4, children: [{id: 40}]}, {id: 6}]
                XEUtils.mapTree([{id: 1}, {id: 2, childs: [{id: 20}]}, {id: 3, childs: [{id: 30}]}], item => {
                  return { id: item.id * 2 }
                }, {children: 'childs', mapChildren: 'childs2'}) // [{id: 2}, {id: 4, childs2: [{id: 40}]}, {id: 6}]
                `
              ]
            },
            {
              name: 'filterTree',
              args: 'obj, iterate[, options, context]',
              title: '从树结构中根据回调过滤数据',
              desc: '',
              params: [
                ['属性', '描述', '默认值'],
                ['children', '子节点属性', 'children']
              ],
              codes: [
                `
                XEUtils.filterTree([{id: 1}, {id: 2, children: [{id: 20}]}, {id: 3, children: [{id: 30}]}], item => item.id === 1) 
                // {id: 1}
                XEUtils.filterTree([{id: 1}, {id: 2, childs: [{id: 20}]}, {id: 3, childs: [{id: 30}]}], item => item.id >= 3, {children: 'childs'}) 
                // [{id: 20}, {id: 3, childs: [{id: 30}]}, {id: 30}]
                `
              ]
            },
            {
              name: 'searchTree',
              args: 'obj, iterate[, options, context]',
              title: '从树结构中根据回调查找数据',
              desc: '',
              params: [
                ['属性', '描述', '默认值'],
                ['children', '子节点属性', 'children'],
                ['mapChildren', '将子节点映射到指定的属性', ''],
                ['original', '是否保持源数据的引用', 'false']
              ],
              codes: [
                `
                XEUtils.searchTree([{ id: 1 }, { id: 2, children: [{ id: 0 }] }, { id: 3, children: [{ id: 30 }] }], item => item.id > 1)
                // [{ id: 2, children: [{ id: 0, children: [] }] }, { id: 3, children: [{ id: 30, children: [] }] }]
                XEUtils.searchTree([{ id: 1 }, { id: 2, childs: [{ id: 0 }] }, { id: 3, childs: [{ id: 30 }] }], item => item.id >= 2, { children: 'childs' })
                // [{ id: 2, childs: [{ id: 0, childs: [] }] }, { id: 3, childs: [{ id: 30, childs: [] }] }]
                `
              ]
            }
          ]
        },
        {
          label: 'Date',
          value: 'date',
          expand: true,
          children: [
            {
              name: 'now',
              args: '',
              title: '返回当前时间戳',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.now() // Date.now() 获取当前时间戳 1514096716800
                `
              ]
            },
            {
              name: 'timestamp',
              args: 'date[, format]',
              title: '将日期转为时间戳',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.timestamp() // XEUtils.now() = Date.now() 获取当前时间戳 1514096716800
                XEUtils.timestamp(new Date()) // 1514096716800
                XEUtils.timestamp('2018-12-01') // 1543593600000
                XEUtils.timestamp('2017/12/20 10:10:30.459', 'yyyy/MM/dd HH:mm:ss.SSS') // 1513735830459
                `
              ]
            },
            {
              name: 'toStringDate',
              args: 'str, format',
              title: '任意格式字符串转为日期',
              desc: '',
              params: [
                ['属性', '描述'],
                ['yyyy', '年份'],
                ['MM', '月份'],
                ['dd', '日'],
                ['HH', '小时'],
                ['mm', '分钟'],
                ['ss', '秒'],
                ['SSS', '毫秒'],
                ['Z', '时区']
              ],
              codes: [
                `
                XEUtils.toStringDate('12/20/2017')
                // 如果解析错误则返回 'Invalid Date'
                XEUtils.toStringDate('2017-12-20')
                // Wed Dec 20 2017 00:00:00 GMT+0800 (中国标准时间)
                XEUtils.toStringDate('2017-12-20 10:10:30')
                // Wed Dec 20 2017 10:10:30 GMT+0800 (中国标准时间)
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
                XEUtils.toStringDate('Year:2018 Month:01 Day:26', 'Year:yyyy Month:MM Day:dd')
                // Fri Jan 26 2018 00:00:00 GMT+0800 (中国标准时间)
                `
              ]
            },
            {
              name: 'toDateString',
              args: 'date [, format, options]',
              title: '日期格式化为任意格式字符串',
              desc: '',
              params: [
                ['属性', '描述', '备注', '值的范围'],
                ['yy', '年份', '自动截取后两位', ''],
                ['yyyy', '年份', '', ''],
                ['M', '月份', '', '1~12'],
                ['MM', '月份', '自动补0', '01~12'],
                ['d', '日', '', '1~31'],
                ['dd', '日', '自动补0', '01~31'],
                ['h', '12小时制', '', '1~12'],
                ['hh', '12小时制', '自动补0', ' 01~12'],
                ['H', '24小时制', '', '0~23'],
                ['HH', '24小时制', '自动补0', '00~23'],
                ['m', '分钟', '', ''],
                ['mm', '分钟', '自动补0', '00~59'],
                ['s', '秒', '', ''],
                ['ss', '秒', '自动补0', '00~59'],
                ['S', '毫秒', '', ''],
                ['SSS', '毫秒', '自动补0', ''],
                ['a', 'am/pm，小写', '', 'am/pm'],
                ['A', 'AM/PM，大写', '', 'AM/PM'],
                ['D', '年份的第几天', '', '1~366'],
                ['DDD', '年份的第几天', '自动补0', '001~366'],
                ['e', '星期几', '', '0~6'],
                ['E', '星期几', '', '1~7'],
                ['q', '季度', '', '1~4'],
                ['W', '年的第几周', '', '1~53'],
                ['WW', '年的第几周', '自动补0', ''],
                ['Z', '时区值', '', '[+-]HH:mm'],
                ['ZZ', '时区值', '', '[+-]HHmm']
              ],
              codes: [
                `
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
                XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
                // '2017-01-01'
                XEUtils.toDateString(new Date(), 'yy-M-d')
                // '17-1-1'
                XEUtils.toDateString(new Date(), 'yyyy-MM-dd HH:mm:ss.SSS')
                // '2017-01-01 14:05:30.099'
                XEUtils.toDateString(new Date(), 'yyyy-MM-dd hh:mm:ss.SSS GMTZ')
                // '2017-01-01 02:05:30.099 GMT+08:00'
                XEUtils.toDateString(new Date(), 'yyyy-MM-dd hh:mm:ss.SSS GMTZZ')
                // '2017-01-01 02:05:30.099 GMT+0800'
                XEUtils.toDateString('2017-01-01 10:05:30', 'yyyy-M-d h:m:s.S')
                // '2017-1-1 2:5:30.99'
                XEUtils.toDateString(new Date(), 'yyyy-M-d H:m:s.S')
                // '2017-1-1 14:5:30.99'
                XEUtils.toDateString(new Date(), 'yyyy-M-d h:m:s.S')
                // '2017-1-1 2:5:30.99'
                XEUtils.toDateString(new Date(), 'yyyy年MM月dd日 HH时mm分ss秒S毫秒,星期E 第q季度')
                // '2017年01月01日 14时05分30秒99毫秒,星期0 第1季度'
                XEUtils.toDateString(new Date(), 'yy年M月d日 HH时m分s秒S毫秒,星期E 第q季度')
                // '17年1月1日 14时5分30秒99毫秒,星期0 第1季度'
                XEUtils.toDateString(new Date(), 'yyyy年MM月dd日 hh时mm分ss秒SSS毫秒 ZZ 星期E e 第q季 今年第D天 a A')
                // '2017年01月01日 02时05分30秒099毫秒 +0800 星期0 -1 第1季 今年第1天 pm PM'
                `
              ]
            },
            {
              name: 'getWhatYear',
              args: 'date, year [, month]',
              title: '返回前几年或后几年的日期,可以指定年的最初时间(first)、年的最后时间(last)、年的月份(0~11)，默认当前',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.getWhatYear(new Date(), -1) // Mon Nov 20 2017 00:00:00 GMT+0800 (中国标准时间)
                XEUtils.getWhatYear(1513735830000, -1) // Tue Dec 20 2016 10:10:30 GMT+0800 (中国标准时间)
                XEUtils.getWhatYear('2017-12-20', -1) // Tue Dec 20 2016 00:00:00 GMT+0800 (中国标准时间)
                XEUtils.getWhatYear('2017-12-20', 1) // Thu Dec 20 2018 00:00:00 GMT+0800 (中国标准时间)
                XEUtils.getWhatYear('2017-12-20', 0, 'first') // Sun Jan 01 2017 00:00:00 GMT+0800 (中国标准时间)
                XEUtils.getWhatYear('2017-12-20', 0, 'last') // Sun Dec 31 2017 23:59:59 GMT+0800 (中国标准时间)
                `
              ]
            },
            {
              name: 'getWhatMonth',
              args: 'date, month [, day]',
              title: '返回前几月或后几月的日期,可以指定月初(first)、月末(last)、天数，默认当前',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.getWhatMonth(new Date(), -1) // Mon Nov 20 2017 00:00:00 GMT+0800 (中国标准时间)
                XEUtils.getWhatMonth(1513735830000, -1) // Mon Nov 20 2017 00:00:00 GMT+0800 (中国标准时间)
                XEUtils.getWhatMonth('2017-12-20', -1) // Mon Nov 20 2017 00:00:00 GMT+0800 (中国标准时间)
                XEUtils.getWhatMonth('2017-12-20', 1) // Sat Jan 20 2018 00:00:00 GMT+0800 (中国标准时间)
                XEUtils.getWhatMonth('2017-12-20', -1, 'first') // Wed Nov 01 2017 00:00:00 GMT+0800 (中国标准时间)
                XEUtils.getWhatMonth('2017-12-20', 1, 'last') // Wed Jan 31 2018 23:59:59 GMT+0800 (中国标准时间)
                `
              ]
            },
            {
              name: 'getWhatWeek',
              args: 'date, week [, day]',
              title: '返回前几周或后几周的日期,可以指定星期几(0~6)，默认当前',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.getWhatWeek(new Date(), -1) // Sun Dec 17 2017 00:00:00 GMT+0800 (中国标准时间)
                XEUtils.getWhatWeek(1513735830000, -1) // Sun Dec 17 2017 00:00:00 GMT+0800 (中国标准时间)
                XEUtils.getWhatWeek('2017-12-20', -1) // Sun Dec 17 2017 00:00:00 GMT+0800 (中国标准时间)
                XEUtils.getWhatWeek('2017-12-20', 1) // Sun Dec 31 2017 00:00:00 GMT+0800 (中国标准时间)
                XEUtils.getWhatWeek('2017-12-20', -1, 5) // Fri Dec 15 2017 00:00:00 GMT+0800 (中国标准时间)
                XEUtils.getWhatWeek('2017-12-20', 1, 0) // Sun Dec 31 2017 00:00:00 GMT+0800 (中国标准时间)
                `
              ]
            },
            {
              name: 'getWhatDay',
              args: 'date, day [, mode]',
              title: '返回前几天或后几天的日期,可以指定当天最初时间(first)、当天的最后时间(last)',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.getWhatDay(new Date(), -1) // Tue Dec 19 2017 00:00:00 GMT+0800 (中国标准时间)
                XEUtils.getWhatDay(1513735830000, -1) // Tue Dec 19 2017 00:00:00 GMT+0800 (中国标准时间)
                XEUtils.getWhatDay('2017-12-20', -1) // Tue Dec 19 2017 00:00:00 GMT+0800 (中国标准时间)
                XEUtils.getWhatDay('2017-12-20', 1) // Tue Dec 21 2017 00:00:00 GMT+0800 (中国标准时间)
                XEUtils.getWhatDay('2017-12-20', 0, 'first') // Wed Dec 20 2017 00:00:00 GMT+0800 (中国标准时间)
                XEUtils.getWhatDay('2017-12-20', 0, 'last') // Wed Dec 20 2017 23:59:59 GMT+0800 (中国标准时间)
                `
              ]
            },
            {
              name: 'getDayOfYear',
              args: 'date [, year]',
              title: '返回某个年份的天数,可以指定前几个年或后几个年，默认当前',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.getDayOfYear(new Date()) // 365
                XEUtils.getDayOfYear(1513735830000) // 365
                XEUtils.getDayOfYear('2017-12-20') // 365
                XEUtils.getDayOfYear('2019-12-20', 1) // 366
                XEUtils.getDayOfYear('2020-12-20') // 366
                `
              ]
            },
            {
              name: 'getYearDay',
              args: 'date',
              title: '返回某个年份的第几天',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.getYearDay(new Date()) // 149
                XEUtils.getYearDay('2017-01-20') // 20
                XEUtils.getYearDay('2018-05-20') // 140
                `
              ]
            },
            {
              name: 'getYearWeek',
              args: 'date',
              title: '返回某个年份的第几周',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.getYearWeek(new Date()) // 22
                XEUtils.getYearWeek('2017-01-20') // 3
                XEUtils.getYearWeek('2018-05-20') // 20
                `
              ]
            },
            {
              name: 'getMonthWeek',
              args: 'date',
              title: '返回某个月份的第几周',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.getMonthWeek(new Date()) // 4
                XEUtils.getMonthWeek('2017-01-20') // 3
                XEUtils.getMonthWeek('2018-05-20') // 2
                `
              ]
            },
            {
              name: 'getDayOfMonth',
              args: 'date [, month]',
              title: '返回某个月份的天数,可以指定前几个月或后几个月，默认当前',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.getDayOfMonth(new Date()) // 31
                XEUtils.getDayOfMonth(1513735830000) // 31
                XEUtils.getDayOfMonth('2017-12-20') // 31
                XEUtils.getDayOfMonth('2017-12-20', -1) // 30
                XEUtils.getDayOfMonth('2017-12-20', 1) // 31
                `
              ]
            },
            {
              name: 'getDateDiff',
              args: 'startDate, endDate [, rules]',
              title: '返回两个日期之间差距,如果结束日期小于开始日期 done 为 fasle',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.getDateDiff('2017-11-20', '2017-12-21')
                // { done: true, time: 2678400000, yyyy: 0, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, S: 0 }
                XEUtils.getDateDiff('2017-12-20', '2017-12-21')
                // { done: true, time: 86400000, yyyy: 0, MM: 0, dd: 1, HH: 0, mm: 0, ss: 0, S: 0 }
                XEUtils.getDateDiff('2018-01-01', '2017-12-21')
                // { done: false, time: 0 }
                let dateDiff = XEUtils.getDateDiff('2017-12-20 10:10:30', '2017-12-21 10:15:00')
                let content = \`\${dateDiff.mm}分\${dateDiff.ss}秒\`
                // '4分30秒'
                `
              ]
            }
          ]
        },
        {
          label: 'Number',
          value: 'number',
          expand: true,
          children: [
            {
              name: 'random',
              args: 'min, max',
              title: '获取一个指定范围内随机数',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.random() // 0 ~ 9
                XEUtils.random(3, 6) // 3 ~ 6
                XEUtils.random(0, 5) // 0 ~ 5
                XEUtils.random(10, 100) // 10 ~ 100
                `
              ]
            },
            {
              name: 'min',
              args: 'array [, iteratee]',
              title: '获取最小值',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.min([22, 66, 77, 11]) // 11
                XEUtils.min([{a: 11}, {a: 44}], 'a') // {a: 11}
                XEUtils.min([{a: 11}, {a: 44}], item => item.a) // {a: 11}
                `
              ]
            },
            {
              name: 'max',
              args: 'array [, iteratee]',
              title: '获取最大值',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.max([22, 66, 77, 11]) // 77
                XEUtils.max([{a: 11}, {a: 44}], 'a') // {a: 44}
                XEUtils.max([{a: 11}, {a: 44}], item => item.a) // {a: 44}
                `
              ]
            },
            {
              name: 'commafy',
              args: 'num [, options]',
              title: '数值千分位分隔符、小数点',
              desc: '',
              params: [],
              codes: [
                `
                // 千分位格式化 1,000,000
                XEUtils.commafy(1000000)
                // 格式化金额 1,000,000.00
                XEUtils.commafy('1000000', {fixed: 2})
                // 格式化银行卡 6660 0000 0000 0001
                XEUtils.commafy(6660000000000001, {spaceNumber: 4, separator: ' '})
                // 字符串每隔3位分割 111,111,111,111,111,111,111,111,111,111,111
                XEUtils.commafy('111111111111111111111111111111111')
                `
              ]
            },
            {
              name: 'toNumber',
              args: 'num',
              title: '转数值',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.toNumber(123) // 123
                XEUtils.toNumber('12.3') // 12.3
                XEUtils.toNumber('abc') // 0
                `
              ]
            },
            {
              name: 'toInteger',
              args: 'num',
              title: '转整数',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.toInteger(123) // 123
                XEUtils.toInteger('12.3') // 12
                XEUtils.toInteger('abc') // 0
                `
              ]
            },
            {
              name: 'toFixedNumber',
              args: 'num, digits',
              title: '和 Number.toFixed 类似，区别就是不会对小数进行四舍五入，结果返回数值',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.toFixedNumber(123) // 123
                XEUtils.toFixedNumber(1e-8, 3) // 0
                XEUtils.toFixedNumber('12.399') // 12
                XEUtils.toFixedNumber('12.399', 5) // 12.399
                XEUtils.toFixedNumber(234567.105967, 4) // 234567.1059
                XEUtils.toFixedNumber('-1234.6988', 2) // -1234.69
                `
              ]
            },
            {
              name: 'toFixedString',
              args: 'num, digits',
              title: '和 Number.toFixed 类似，区别就是不会对小数进行四舍五入，结果返回字符串',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.toFixedString(123) // '123'
                XEUtils.toFixedString(1e-8, 3) // '0'
                XEUtils.toFixedString(1e-8, 10) // '0.0000000100'
                XEUtils.toFixedString('12.399') // '12'
                XEUtils.toFixedString('12.399', 5) // '12.39900'
                XEUtils.toFixedString(234567.105967, 4) // '234567.1059'
                XEUtils.toFixedString('-1234.6988', 2) // '-1234.69'
                `
              ]
            }
          ]
        },
        {
          label: 'String',
          value: 'string',
          expand: true,
          children: [
            {
              name: 'toString',
              args: 'obj',
              title: '转字符串',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.toString(0) // '0'
                XEUtils.toString(1e-5) // '0.00001'
                XEUtils.toString(null) // ''
                XEUtils.toString(undefined) // ''
                `
              ]
            },
            {
              name: 'trim',
              args: 'str',
              title: '去除字符串左右两边的空格',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.trim(' abc ') // 'abc'
                `
              ]
            },
            {
              name: 'trimLeft',
              args: 'str',
              title: '去除字符串左边的空格',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.trimLeft(' abc ') // 'abc '
                `
              ]
            },
            {
              name: 'trimRight',
              args: 'str',
              title: '去除字符串右边的空格',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.trimRight(' abc ') // ' abc'
                `
              ]
            },
            {
              name: 'escape',
              args: 'str',
              title: '转义HTML字符串，替换&, <, >, ", \', `字符',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.escape('<a>link</a>') // '&lt;a&gt;link&lt;/a&gt;'
                `
              ]
            },
            {
              name: 'unescape',
              args: 'str',
              title: '反转 escape',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.unescape('&lt;a&gt;link&lt;/a&gt;') // '<a>link</a>'
                `
              ]
            },
            {
              name: 'camelCase',
              args: 'str',
              title: '将带驼峰字符串转成字符串',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.camelCase('project-name') // 'projectName'
                `
              ]
            },
            {
              name: 'kebabCase',
              args: 'str',
              title: '将字符串转成驼峰字符串',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.kebabCase('projectName') // 'project-name'
                `
              ]
            },
            {
              name: 'repeat',
              args: 'str, count',
              title: '将字符串重复 n 次',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.repeat('a', 5) // 'aaaaa'
                XEUtils.repeat('ab', 3) // 'ababab'
                `
              ]
            },
            {
              name: 'padStart',
              args: 'str, targetLength, padString',
              title: '用指定字符从前面开始补全字符串',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.padStart('a', 5, 'b') // 'bbbba'
                `
              ]
            },
            {
              name: 'padEnd',
              args: 'str, targetLength [, padString]',
              title: '用指定字符从后面开始补全字符串',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.padEnd('a', 5, 'b') // 'abbbb'
                `
              ]
            },
            {
              name: 'startsWith',
              args: 'str, val [, startIndex]',
              title: '判断字符串是否在源字符串的头部',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.startsWith('abc', 'b') // false
                `
              ]
            },
            {
              name: 'endsWith',
              args: 'str, val [, startIndex]',
              title: '判断字符串是否在源字符串的尾部',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.endsWith('abc', 5, 'a') // false
                `
              ]
            },
            {
              name: 'template',
              args: 'str, obj',
              title: '解析动态字符串模板',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.template('{{ name }}', {name: 'test1'}) // test1
                XEUtils.template('{{ name }} {{{age}}}', {name: 'test1', age: 26}) // test1 {26}
                `
              ]
            }
          ]
        },
        {
          label: 'Url',
          value: 'url',
          expand: true,
          children: [
            {
              name: 'parseUrl',
              args: 'url',
              title: '解析 URL 参数',
              desc: '',
              params: [],
              codes: [
                `
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
                `
              ]
            },
            {
              name: 'serialize',
              args: 'query',
              title: '序列化查询参数',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.serialize({id: 123, name: 'test1'}) // id=123&name=test1
                `
              ]
            },
            {
              name: 'unserialize',
              args: 'str',
              title: '反转序列化查询参数',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.unserialize('id=123&name=test1') // {id: '123', name: 'test1'}
                `
              ]
            }
          ]
        },
        {
          label: 'Browse',
          value: 'browse',
          expand: true,
          children: [
            {
              name: 'browse',
              args: '',
              title: '获取浏览器信息',
              desc: '',
              params: [],
              codes: [
                `
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
                `
              ]
            },
            {
              name: 'locat',
              args: '',
              title: '获取地址栏信息',
              desc: '',
              params: [],
              codes: [
                `
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
                `
              ]
            },
            {
              name: 'getBaseURL',
              args: '',
              title: '获取上下文路径',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.getBaseURL() // http://localhost/demo/
                `
              ]
            },
            {
              name: 'cookie',
              args: 'name, value, options',
              title: 'Cookie 操作函数',
              desc: '',
              params: [],
              codes: [
                `
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
                `
              ]
            }
          ]
        },
        {
          label: 'Setting',
          value: 'setup',
          expand: true,
          children: [
            {
              name: 'setup',
              args: 'options',
              title: '全局参数设置',
              desc: '',
              params: [],
              codes: [
                `
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
                `
              ]
            },
            {
              name: 'mixin',
              args: 'func',
              title: '扩展函数，将您自己的实用函数扩展到 XEUtils',
              desc: '',
              params: [],
              codes: [
                `
                XEUtils.mixin({
                  toDateDiffText (date) {
                    let currDate = 1544407800000 // '2018-12-10 10:10:00'
                    let dateDiff = XEUtils.getDateDiff(date, currDate)
                    if (dateDiff.done) {
                      if (dateDiff.time < 31536000000) {
                        if (dateDiff.time < 2592000000) {
                          if (dateDiff.time < 86400000) {
                            if (dateDiff.time < 360000) {
                              if (dateDiff.time < 60000) {
                                if (dateDiff.time < 10000) {
                                  return \`刚刚\`
                                }
                                return \`\${dateDiff.ss}秒之前\`
                              }
                              return \`\${dateDiff.mm}分钟之前\`
                            }
                            return \`\${dateDiff.HH}小时之前\`
                          }
                          return \`\${dateDiff.dd}天之前\`
                        }
                        return \`\${dateDiff.MM}个月之前\`
                      }
                      return \`\${dateDiff.yyyy}年之前\`
                    }
                    return '错误类型'
                  }
                })

                XEUtils.toDateDiffText('2018-12-10 10:09:59') // 刚刚
                XEUtils.toDateDiffText('2018-12-10 10:09:30') // 30秒之前
                XEUtils.toDateDiffText('2018-12-10 10:09:30') // 2分钟之前
                XEUtils.toDateDiffText('2018-12-10 02:10:00') // 8小时之前
                XEUtils.toDateDiffText('2018-12-09 04:09:30') // 1天之前
                XEUtils.toDateDiffText('2018-04-09 04:09:30') // 8个月之前
                XEUtils.toDateDiffText('2016-06-09 04:09:30') // 2年之前
                `
              ]
            }
          ]
        }
      ]
    }
  },
  computed: {
    apiList () {
      if (this.filterName) {
        let filterName = this.filterName.toLowerCase()
        let filterRE = new RegExp(filterName, 'gi')
        let list = window.XEUtils.searchTree(this.list, item => (item.name || '').toLowerCase().indexOf(filterName) > -1 || (item.title || '').toLowerCase().indexOf(filterName) > -1, { children: 'children' })
        window.XEUtils.eachTree(list, item => {
          item.name = (item.name || '').replace(filterRE, match => `<span class="keyword-lighten">${match}</span>`)
          item.title = (item.title || '').replace(filterRE, match => `<span class="keyword-lighten">${match}</span>`)
        }, { children: 'children' })
        return list
      }
      return this.list
    }
  },
  watch: {
    apiList () {
      this.$nextTick(() => {
        if (this.apiList.length) {
          this.selected = this.apiList[0].children[0]
          Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
            hljs.highlightBlock(block)
          })
        }
      })
    }
  },
  created () {
    let id = 1
    window.XEUtils.eachTree(this.apiList, item => {
      item.id = id++
    })
    this.selected = this.apiList[0].children[0]
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  },
  methods: {
    menuLinkEvent (item) {
      let elem = document.getElementById(item.name)
      this.selected = item
      if (elem && elem.scrollIntoView) {
        elem.scrollIntoView()
      } else if (elem && elem.scrollIntoViewIfNeeded) {
        elem.scrollIntoViewIfNeeded()
      }
    }
  }
}
</script>
