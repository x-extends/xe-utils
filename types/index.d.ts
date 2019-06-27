export interface XECookie {
  /**
   * 根据 name 判断 Cookie 是否存在
   * @param name 键
   */
  isKey(name: string): boolean;

  /**
   * 添加 Cookie
   * @param name 键
   * @param value 值
   * @param options 可选参数
   */
  setItem(name: string, value: any, options?: object): this;

  /**
   * 根据 name 获取 Cookie
   * @param name 键
   */
  getItem(name: string): string;

  /**
   * 根据 name 删除 Cookie
   * @param name 键
   * @param options 可选参数
   */
  removeItem(name: string, options?: object): number;

  /**
   * 获取 Cookie 所有键
   */
  keys(): Array<object>;

  /**
   * 获取所有 Cookie
   */
  getJSON(): object;
}

export interface XEUtilsMethods {
  version: string;
  use(plugin: (XEAjax: any) => void): void;

  /**
   * 设置全局参数
   * @param options 全局参数
   * @example 
    ```javascript
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
   */
  setup(options: object): void;

  /**
   * 将您自己的实用函数扩展到 XEUtils
   * @param methods 扩展函数集
   */
  mixin(methods: object): void;

  /**
   * 判断是否非数值
   * @param val 值
   */
  isNaN(val: any): boolean;

  /**
   * 判断是否为有限数值
   * @param val 值
   */
  isFinite(val: any): boolean;

  /**
   * 判断 Undefined
   * @param val 值
   */
  isUndefined(val: any): boolean;

  /**
   * 判断是否数组
   * @param val 值
   */
  isArray(val: any): boolean;

  /**
   * 判断是否小数
   * @param val 值
   */
  isFloat(val: any): boolean;

  /**
   * 判断是否整数
   * @param val 值
   */
  isInteger(val: any): boolean;

  /**
   * 判断是否方法
   * @param val 值
   */
  isFunction(val: any): boolean;

  /**
   * 判断是否 Boolean 对象
   * @param val 值
   */
  isBoolean(val: any): boolean;

  /**
   * 判断是否String对象
   * @param val 值
   */
  isString(val: any): boolean;

  /**
   * 判断是否 Number 对象
   * @param val 值
   */
  isNumber(val: any): boolean;

  /**
   * 判断是否 RegExp 对象
   * @param val 值
   */
  isRegExp(val: any): boolean;

  /**
   * 判断是否 Object 对象
   * @param val 值
   */
  isObject(val: any): boolean;

  /**
   * 判断是否是一个对象
   * @param val 值
   */
  isPlainObject(val: any): boolean;

  /**
   * 判断是否 Date 对象
   * @param val 值
   */
  isDate(val: any): boolean;

  /**
   * 判断是否 Error 对象
   * @param val 值
   */
  isError(val: any): boolean;

  /**
   * 判断是否 TypeError 对象
   * @param val 值
   */
  isTypeError(val: any): boolean;

  /**
   * 判断是否为空,包括空对象、空数值、空字符串
   * @param val 值
   */
  isEmpty(val: any): boolean;

  /**
   * 判断是否为 Null
   * @param val 值
   */
  isNull(val: any): boolean;

  /**
   * 判断是否 Symbol 对象
   * @param val 值
   */
  isSymbol(val: any): boolean;

  /**
   * 判断是否 Arguments 对象
   * @param val 值
   */
  isArguments(val: any): boolean;

  /**
   * 判断是否 Element 对象
   * @param val 值
   */
  isElement(val: any): boolean;

  /**
   * 判断是否 Document 对象
   * @param val 值
   */
  isDocument(val: any): boolean;

  /**
   * 判断是否 Window 对象
   * @param val 值
   */
  isWindow(val: any): boolean;

  /**
   * 判断是否 FormData 对象
   * @param val 值
   */
  isFormData(val: any): boolean;

  /**
   * 判断是否 Map 对象
   * @param val 值
   */
  isMap(val: any): boolean;

  /**
   * 判断是否 WeakMap 对象
   * @param val 值
   */
  isWeakMap(val: any): boolean;

  /**
   * 判断是否 Set 对象
   * @param val 值
   */
  isSet(val: any): boolean;

  /**
   * 判断是否 WeakSet 对象
   * @param val 值
   */
  isWeakSet(val: any): boolean;

  /**
   * 判断是否闰年
   * @param date 日期
   */
  isLeapYear(date?: Date | number | string): boolean;

  /**
   * 判断属性中的键和值是否包含在对象中
   * @param obj 对象
   * @param source 值
   */
  isMatch(obj: object | Array<any>, source: object): boolean;

  /**
   * 深度比较两个对象之间的值是否相等
   * @param obj1 值1
   * @param obj2 值2
   */
  isEqual(obj1: any, obj2: any): boolean;

  /**
   * 深度比较两个对象之间的值是否相等，使用自定义比较函数
   * @param obj1 值1
   * @param obj2 值2
   * @param func 自定义函数
   */
  isEqualWith(obj1: any, obj2: any, func?: Function): boolean;

  /**
   * 判断两个日期是否相同
   * @param date1 日期
   * @param date2 日期
   * @param format 格式化
   */
  isDateSame(date1: Date | number | string, date2: Date | number | string, format?: string): boolean;

  /**
   * 获取对象类型
   * @param obj 对象
   */
  getType(obj: any): string;

  /**
   * 获取一个全局唯一标识
   * @param prefix 自定义前缀
   */
  uniqueId(prefix?: string): string;

  /**
   * 返回对象的长度
   * @param obj 对象
   */
  getSize(obj: any): number;

  /**
   * slice ( array, start, end ) 裁剪 Arguments 或数组 array，从 start 位置开始到 end 结束，但不包括 end 本身的位置
   * @param array 对象
   * @param start 迭代器/属性
   * @param end 上下文
   */
  slice(array: Array<any>, start?: number, end?: number): Array<any>;

  /**
   * 返回对象第一个索引值
   * @param obj 对象
   * @param val 值
   */
  indexOf(obj: object | Array<any>, val: any): number;

  /**
   * 返回数组第一个索引值
   * @param obj 数组
   * @param val 值
   */
  arrayIndexOf(obj: object | Array<any>, val: any): number;

  /**
   * 返回对象第一个索引值
   * @param obj 对象
   * @param iteratee 迭代器/属性
   * @param context 上下文
   */
  findIndexOf(obj: object | Array<any>, iteratee: any, context?: any): number;

  /**
   * 从最后开始的索引值,返回对象第一个索引值
   * @param obj 对象
   * @param val 值
   */
  lastIndexOf(obj: object | Array<any>, val: any): number;

  /**
   * 从最后开始的索引值,返回数组第一个索引值
   * @param obj 数组
   * @param val 值
   */
  arrayLastIndexOf(obj: object | Array<any>, val: any): number;

  /**
   * 从最后开始的索引值,返回对象第一个索引值
   * @param obj 对象
   * @param iteratee 迭代器/属性
   * @param context 上下文
   */
  findLastIndexOf(obj: object | Array<any>, iteratee: any, context?: any): number;

  /**
   * 判断对象是否包含该值,成功返回 true 否则 false
   * @param obj 对象
   * @param val 值
   */
  includes(obj: any, val: any): boolean;

  /**
   * 判断数组是否包含另一数组
   * @param array1 数组
   * @param array2 数组
   */
  includeArrays(array1: Array<any>, array2: Array<any>): boolean;

  /**
   * 该方法和 setTimeout 一样的效果，区别就是支持上下文和额外参数
   * @param callback 回调
   * @param wait 延迟毫秒
   * @param params 额外的参数
   */
  delay(callback: Function, wait: number, ...params: any[]): number;

  /**
   * 创建一个绑定上下文的函数
   * @param callback 回调
   * @param context 上下文
   * @param params 额外的参数
   */
  bind(callback: Function, context: any, ...params: any[]): Function;

  /**
   * 创建一个只能调用一次的函数,只会返回第一次执行后的结果
   * @param callback 回调
   * @param context 上下文
   * @param params 额外的参数
   */
  once(callback: Function, context: any, ...params: any[]): Function;

  /**
   * 创建一个函数, 调用次数超过 count 次之后执行回调并将所有结果记住后返回
   * @param count 次数
   * @param callback 回调
   * @param context 上下文
   */
  after(count: number, callback: Function, context: any): Function;

  /**
   * 创建一个函数, 调用次数不超过 count 次之前执行回调并将所有结果记住后返回
   * @param count 次数
   * @param callback 回调
   * @param context 上下文
   */
  before(count: number, callback: Function, context: any): Function;

  /**
   * 创建一个策略函数，当被重复调用函数的时候，至少每隔多少秒毫秒调用一次该函数
   * @param callback 回调
   * @param wait 毫秒
   * @param options 可选参数
   * @example
    ```javascript
    function scrollEvent (evnt) {
      console.log('至少每隔wait秒毫秒之内只会调用一次')
    }

    document.body.addEventListener('scroll', XEUtils.throttle(scrollEvent, 100)) // 在计时结束之前执行
    document.body.addEventListener('scroll', XEUtils.throttle(scrollEvent, 100, {leading: true, trailing: false})) // 在计时结束之前执行
    document.body.addEventListener('scroll', XEUtils.throttle(scrollEvent, 100, {leading: false, trailing: true})) // 在计时结束之后执行

    var func = XEUtils.throttle(function (msg) {
      console.log(msg)
    }, 300)
    func('执行一次')
    func.cancel()
    func('取消后中断计时，再次调用会马上执行')
    ```
   */
  throttle(callback: Function, wait: number, options?: object): Function;

  /**
   * 创建一个防反跳策略函数，在函数最后一次调用多少毫秒之后才会再次执行，如果在期间内重复
   * @param callback 回调
   * @param wait 毫秒
   * @param options 可选参数
   * @example
    ```javascript
    function resizeEvent (evnt) {
      console.log('如果wait毫秒内重复调用则会重新计时，在函数最后一次调用wait毫秒之后才会执行回调')
    }

    document.addEventListener('resize', XEUtils.debounce(resizeEvent, 100)) // // 在计时结束之后执行
    document.addEventListener('resize', XEUtils.debounce(resizeEvent, 100, true)) // 在计时结束之前执行
    document.addEventListener('resize', XEUtils.debounce(resizeEvent, 100, {leading: true, trailing: false})) // 在计时结束之前执行
    document.addEventListener('resize', XEUtils.debounce(resizeEvent, 100, {leading: false, trailing: true})) // 在计时结束之后执行

    var func = XEUtils.debounce(function (msg) {
      console.log(msg)
    }, 300)
    func('计时结束之前执行一次')
    func.cancel()
    func('取消后中重新计时，在计时结束之前执行')
    ```
   */
  debounce(callback: Function, wait: number, options?: object): Function;

  /**
   * 清空对象; defs如果不传（清空所有属性）、如果传对象（清空并继承)、如果传值(给所有赋值)
   * @param obj 对象
   * @param defs 默认值
   * @param assigns 值
   */
  clear(obj: object | Array<any>, defs?: object, assigns?: object): object;

  /**
   * 移除对象属性
   * @param obj 对象
   * @param iteratee 迭代器/值
   * @example
    ```javascript
    var list = [11, 22, 33, 44]
    XEUtils.remove(list, item => item === 22) // list = [11, 33, 44]
    var obj = {a1: 11, a2: 22, a3: 33}
    XEUtils.remove(obj, item => item === 22) // obj = {a1: 11, a3: 33}
    ```
   */
  remove(obj: object | Array<any>, iteratee?: any): object;

  /**
   * 浅拷贝一个或者多个对象到目标对象中
   * @param destination 目标对象
   * @param sources 多个对象
   * @example
    ```javascript
    let obj2 = {a: null}
    let obj3 = {bb: {b: 11}}
    let obj4 = XEUtils.assign(obj2, {a: 11}) // {a: 11, c: null, bb: {b: 11}}
    obj3.bb = 22 // obj4 = {a: 11, c: null, bb: {b: 22}}
    ```
   */
  assign(destination: object, ...sources: object[]): object;

  /**
   * 浅拷贝或深拷贝一个或者多个对象到目标对象中，如果第一值是true，则使用深拷贝
   * @param destination 目标对象
   * @param sources 多个对象
   * @example
    ```javascript
    // 浅拷贝
    let obj2 = {a: null}
    let obj3 = {bb: {b: 11}}
    let obj4 = XEUtils.extend(obj2, {a: 11}) // {a: 11, c: null, bb: {b: 11}}
    obj3.bb = 22 // obj4 = {a: 11, c: null, bb: {b: 22}}

    // 深拷贝
    let obj2 = {a: null}
    let obj3 = {bb: {b: 11}}
    let obj4 = XEUtils.extend(true, obj3, {a: 11}) // {a: 11, c: null, bb: {b: 11}}
    obj3.bb = 22 // obj4 = {a: 11, c: null, bb: {b: 11}}
    ```
   */
  extend(destination: object | boolean, ...sources: object[]): object;

  /**
   * 将一个或者多个对象值解构到目标对象
   * @param obj 对象
   * @param target 目标
   * @example
    ```javascript
    XEUtils.destructuring({a: null}, {a: 11, b: 22, c: 33}) // {a: 11}
    XEUtils.destructuring({a: 11, d: 44}, {a: 11, b: 22, c: 33}) // {a: 11, d: 44}
    ```
   */
  destructuring(obj: object, ...target: object[]): object;

  /**
   * 转字符串
   * @param obj 值
   */
  toString(obj: any): any;

  /**
   * 字符串转 JSON
   * @param str 字符串
   */
  toStringJSON(str: string): any;

  /**
   * JSON 转字符串
   * @param obj 对象
   */
  toJSONString(obj: any): string;

  /**
   * 获取对象所有属性
   * @param obj 对象
   */
  keys(obj: any): Array<any>;

  /**
   * 获取对象所有值
   * @param obj 对象
   */
  values(obj: any): Array<any>;

  /**
   * 获取对象所有属性、值
   * @param obj 对象
   */
  entries(obj: any): Array<any>;
  
  /**
   * 根据 keys 过滤指定的属性值，返回一个新的对象
   * @param obj 对象
   * @param array 数组或字符串或方法
   * @example 
    ```javascript
    XEUtils.pick({name: 'test11', age: 25, height: 176}, 'name', 'height') // {name: 'test11', height: 176}
    XEUtils.pick({name: 'test11', age: 25, height: 176}, ['name', 'age']) // {name: 'test11', age: 25}
    XEUtils.pick({name: 'test11', age: 25, height: 176}, val => XEUtils.isNumber(val)) // {age: 25, height: 176}
    ```
   */
  pick(obj: any, array: Array<string>): object;
  
  /**
   * 根据 keys 排除指定的属性值，返回一个新的对象
   * @param obj 对象
   * @param array 数组或字符串或方法
   * @example 
    ```javascript
    XEUtils.omit({name: 'test11', age: 25, height: 176}, 'name', 'height') // {age: 25}
    XEUtils.omit({name: 'test11', age: 25, height: 176}, ['name', 'age']) // {height: 176}
    XEUtils.omit({name: 'test11', age: 25, height: 176}, val => XEUtils.isNumber(val)) // {name: 'test11'}
    ```
   */
  omit(obj: any, array: Array<string>): object;

  /**
   * 获取对象第一个值
   * @param obj 对象
   */
  first(obj: object | Array<any>): any;

  /**
   * 获取对象最后一个值
   * @param obj 对象
   */
  last(obj: object | Array<any>): any;

  /**
   * 通用迭代器
   * @param obj 对象
   * @param iteratee 回调 
   * @param context 上下文
   * @example 
    ```javascript
    XEUtils.each({a: 11, b: 22}, (item, key) => {
      console.log(item)
    })
    ```
   */
  each(obj: any, iteratee: Function, context?: any): void;

  /**
   * 数组迭代器
   * @param obj 对象
   * @param iteratee 回调 
   * @param context 上下文
   * @example 
    ```javascript
    XEUtils.arrayEach([11, 22, 33], (item, index) => {
      console.log(item)
    })
    ```
   */
  arrayEach(obj: any, iteratee: Function, context?: any): void;

  /**
   * 对象迭代器
   * @param obj 对象
   * @param iteratee 回调 
   * @param context 上下文
   * @example 
    ```javascript
    XEUtils.objectEach({a: 11, b: 22}, (item, key) => {
      console.log(item)
    })
    ```
   */
  objectEach(obj: any, iteratee: Function, context?: any): void;

  /**
   * 迭代器,从最后开始迭代,支持 return false 跳出循环 break
   * @param obj 对象
   * @param iteratee 回调 
   * @param context 上下文
   * @example 
    ```javascript
    XEUtils.lastForOf([11, 22, 33], (item, index) => {
      if (index < 1) {
        // break 结束循环
        return false
      }
    })
    ```
   */
  lastForOf(obj: any, iteratee: Function, context?: any): void;

  /**
   * 通用迭代器,从最后开始迭代
   * @param obj 对象
   * @param iteratee 回调 
   * @param context 上下文
   * @example 
    ```javascript
    XEUtils.lastEach({a: 11, b: 22}, (item, key) => {
      console.log(item)
    })
    ```
   */
  lastEach(obj: any, iteratee: Function, context?: any): void;

  /**
   * 数组迭代器,从最后开始迭代
   * @param obj 对象
   * @param iteratee 回调 
   * @param context 上下文
   * @example 
    ```javascript
    XEUtils.lastArrayEach([11, 22, 33], (item, index) => {
      console.log(item)
    })
    ```
   */
  lastArrayEach(obj: any, iteratee: Function, context?: any): void;

  /**
   * 对象迭代器,从最后开始迭代
   * @param obj 对象
   * @param iteratee 回调 
   * @param context 上下文
   * @example 
    ```javascript
    XEUtils.lastObjectEach({a: 11, b: 22}, (item, key) => {
      console.log(item)
    })
    ```
   */
  lastObjectEach(obj: any, iteratee: Function, context?: any): void;

  /**
   * 检查键、路径是否是该对象的属性
   * @param obj 对象
   * @param property 键、路径
   * @example 
    ```javascript
    XEUtils.get({a: {b: 11, c: 22, d: [33, 44]}}, 'a.b') // true
    XEUtils.get({a: {b: 11, c: 22, d: [33, 44]}}, 'a.e') // false
    XEUtils.get({a: {b: 11, c: 22, d: [33, 44]}}, 'a.d[0]') // true
    XEUtils.get({a: {b: 11, c: 22, d: [33, {f: 66}]}}, 'a.d[1].f') // true
    XEUtils.get({a: {b: 11, c: 22, d: [33, 44]}}, ['a', 'd[1]']) // true
    XEUtils.get({a: {b: 11, c: 22, d: [33, 44]}}, ['a', 'd[3]']) // false
    ```
   */
  has(obj: any, property: string | Array<string>): boolean;

  /**
   * 获取对象的属性的值，如果值为 undefined，则返回默认值
   * @param obj 对象
   * @param property 键、路径
   * @param defaultValue 默认值
   * @example 
    ```javascript
    XEUtils.get({a: {b: 11, c: 22, d: [33, 44]}}, 'a.b') // 11
    XEUtils.get({a: {b: 11, c: 22, d: [33, 44]}}, 'a.e', 'default') // 'default'
    XEUtils.get({a: {b: 11, c: 22, d: [33, {f: 66}]}}, 'a.d[1].f') // 66
    XEUtils.get({a: {b: 11, c: 22, d: [33, 44]}}, ['a', 'c']) // 22
    ```
   */
  get(obj: any, property: string | Array<string>, defaultValue: any): any;

  /**
   * 设置对象属性上的值。如果属性不存在则创建它
   * @param obj 对象
   * @param property 键、路径
   * @param value 值
   * @example 
    ```javascript
    XEUtils.set({}, 'a.d[0]', 33) // {a: {d: [33]}}
    XEUtils.set({a: {}}, 'a.d[0].f.h', 44) // {a: {d: [{f: {h: 44}}]}}
    XEUtils.set({}, ['a', 'c'], 22) // {a: {c: 22}}
    XEUtils.set({}, ['a', 'd[0]', 'f', 'h'], 44) // {a: {d: [{f: {h: 44}}]}}
    ```
   */
  set(obj: any, property: string | Array<string>, value: any): void;

  /**
   * 集合分组,默认使用键值分组,如果有 iteratee 则使用结果进行分组
   * @param obj 对象
   * @param iteratee 回调/属性
   * @param context 上下文
   * @example 
    ```javascript
    XEUtils.groupBy([{type: 'a'}, {type: 'a'}, {type: 'b'}], 'type')
    // {a: [{type: 'a'}, {type: 'a'}], b: [{type: 'b'}]}
    ```
   */
  groupBy(obj: any, iteratee: Function, context?: any): object;

  /**
   * 集合分组统计,返回各组中对象的数量统计
   * @param obj 对象
   * @param iteratee 回调/属性
   * @param context 上下文
   * @example 
    ```javascript
    XEUtils.countBy([{type: 'a'}, {type: 'a'}, {type: 'b'}], 'type')
    // {a: 2, b: 1}
    ```
   */
  countBy(obj: any, iteratee: Function, context?: any): object;

  /**
   * 序号列表生成函数
   * @param start 起始值
   * @param stop 结束值
   * @param step 自增值
   * @example 
    ```javascript
    XEUtils.range(5) // [0, 1, 2, 3, 4]
    XEUtils.range(-5, 5) // [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4]
    XEUtils.range(0, 10, 2) // [0, 2, 4, 6, 8]
    ```
   */
  range(start: number, stop: number, step?: number): Array<any>;

  /**
   * 指定方法后的返回值组成的新对象
   * @param obj 对象
   * @param iteratee 回调
   * @param context 上下文
   */
  objectMap(obj: any, iteratee: Function, context?: any): object;

  /**
   * 浅拷贝/深拷贝
   * @param obj 对象
   * @param deep 是否深拷贝
   * @example 
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
   */
  clone(obj: object | Array<any>, deep: boolean): object | Array<any>;

  /**
   * 数组去重
   * @param array 数组
   */
  uniq(array: Array<any>): Array<any>;

  /**
   * 将多个数的值返回唯一的并集数组
   * @param array 数组
   */
  union(...array: any[]): Array<any>;

  /**
   * 数组按属性值升序
   * @param array 数组
   * @param iteratee 回调/属性
   * @param context 上下文
   * @example 
    ```javascript
    XEUtils.sortBy([{ age: 27 }, { age: 26 }, { age: 28 }], 'age')
    // [{ age: 26 }, { age: 27 }, { age: 28 }]
    // 自定义排序：[{a: 4}, {a: 5}, {a: 9}]
    XEUtils.sortBy([
      { name: 'x', age: 26 },
      { name: 'd', age: 27 },
      { name: 'z', age: 26 },
      { name: 'z', age: 26 }
    ], ['age', 'name'])
    // [{ name: 'x', age: 26 },
    // { name: 'z', age: 26 },
    // { name: 'z', age: 26 },
    // { name: 'd', age: 27 }]
    ```
   */
  sortBy(array: Array<any>, iteratee: Array<any> | Function | string, context?: any): Array<any>;

  /**
   * 将一个数组随机打乱，返回一个新的数组
   * @param array 数组
   * @example 
    ```javascript
    XEUtils.shuffle([11, 22, 33, 44, 55]) // [22, 33, 55, 11, 44]
    ```
   */
  shuffle(array: Array<any>): Array<any>;

  /**
   * 从一个数组中随机返回几个元素
   * @param array 数组
   * @param number 返回个数
   * @example 
    ```javascript
    XEUtils.sample([11, 22, 33, 44, 55], 3) // [22, 33, 55]
    ```
   */
  sample(array: Array<any>, number: number): Array<any>;

  /**
   * 对象中的值中的每一项运行给定函数,如果函数对任一项返回 true,则返回 true,否则返回 false
   * @param array 数组
   * @param iteratee 回调
   * @param context 上下文
   */
  some(array: Array<any>, iteratee: Function, context?: any): Array<any>;

  /**
   * 对象中的值中的每一项运行给定函数,如果该函数对每一项都返回 true,则返回 true,否则返回 false
   * @param array 数组
   * @param iteratee 回调
   * @param context 上下文
   */
  every(array: Array<any>, iteratee: Function, context?: any): Array<any>;

  /**
   * 查找匹配第一条数据
   * @param array 数组
   * @param iteratee 回调
   * @param context 上下文
   */
  filter(array: Array<any>, iteratee: Function, context?: any): Array<any>;

  /**
   * 查找匹配第一条数据
   * @param array 数组
   * @param iteratee 回调
   * @param context 上下文
   */
  find(array: Array<any>, iteratee: Function, context?: any): any;

  /**
   * 查找匹配第一条数据的键
   * @param array 数组
   * @param iteratee 回调
   * @param context 上下文
   */
  findKey(array: Array<any>, iteratee: Function, context?: any): string | number;

  /**
   * 指定方法后的返回值组成的新数组
   * @param array 数组
   * @param iteratee 回调
   * @param context 上下文
   */
  map(array: Array<any>, iteratee: Function, context?: any): Array<any>;

  /**
   * 复制数组的一部分到同一数组中的另一个位置,数组大小不变
   * @param array 数组
   * @param target 从该位置开始替换数据
   * @param start 从该位置开始读取数据，默认为 0 。如果为负值，表示倒数
   * @param end 到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数
   */
  copyWithin(array: Array<any>, target: number, start?: Number, end?: number): Array<any>;

  /**
   * 求和函数，将数值相加
   * @param obj 对象/数组
   * @param iteratee 回调
   * @param context 上下文
   * @example 
    ```javascript
    XEUtils.sum([22, 66, 88]) // 176
    XEUtils.sum([{value: 11}, {value: 22}, {value: 66}], 'value') // 99
    ```
   */
  sum(obj: object | Array<any>, iteratee?: Function, context?: any): number;

  /**
   * 求平均值函数
   * @param array 对象/数组
   * @param iteratee 回调
   * @param context 上下文
   * @example 
    ```javascript
    XEUtils.mean([22, 66, 60, 60]) // 52
    XEUtils.mean([{value: 34}, {value: 22}], 'value') // 28
    ```
   */
  mean(obj: object | Array<any>, iteratee?: Function, context?: any): number;

  /**
   * 将对象或者伪数组转为新数组
   * @param array 对象/数组
   */
  toArray(obj: object | Array<any>): Array<any>;

  /**
   * 接收一个函数作为累加器，数组中的每个值（从左到右）开始合并，最终为一个值
   * @param array 数组
   * @param iteratee 回调
   * @param initialValue 默认值
   * @example 
    ```javascript
    XEUtils.reduce([22, 66, 88], (previous, item) => previous + item) // 176
    ```
   */
  reduce(array: Array<any>, iteratee?: Function, initialValue?: any): any;

  /**
   * 将每个数组中相应位置的值合并在一起
   * @param arrays 多个数组
   * @example 
    ```javascript
    XEUtils.zip(['name1', 'name2', 'name3'], [true, true, false], [30, 40, 20])
    // [['name1', true, 30], ['name2', true, 40], ['name3', false, 20]]
    ```
   */
  zip(...arrays: Array<any>): Array<any>;

  /**
   * 与 zip 相反
   * @param arrays 数组
   * @example 
    ```javascript
    XEUtils.unzip([['name1', true, 30], ['name2', true, 40], ['name3', false, 20]])
    // [['name1', 'name2', 'name3'], [true, true, false], [30, 40, 20]]
    ```
   */
  unzip(arrays: Array<any>): Array<any>;

    /**
   * 将每个数组中相应位置的值合并在一起
   * @param props 键数组
   * @param values 值数组
   * @example 
   */
  zipObject(props: Array<any>, values: Array<any>): object;

  /**
   * 将一个数组分割成大小的组。如果数组不能被平均分配，那么最后一块将是剩下的元素
   * @param array 数组
   * @param size 每组大小
   * @example 
    ```javascript
    XEUtils.chunk(['a', 'b', 'c', 'd'], 2) // [['a', 'b'], ['c', 'd']]
    XEUtils.chunk(['a', 'b', 'c', 'd'], 3) // [['a', 'b', 'c'], ['d']]
    ```
   */
  chunk(array: Array<any>, size: number): Array<any>;

  /**
   * 返回一个获取对象属性的函数
   * @param path 键值
   * @example 
    ```javascript
    let getName = XEUtils.property('name')
    getName({name: 'test11', age: 25, height: 176}) // 'test11'
    getName({age: 25, height: 176}) // undefined
    ```
   */
  property(path: string): Function;

  /**
   * 获取数组对象中某属性值，返回一个数组
   * @param array 数组
   * @param key 键
   * @example 
    ```javascript
    XEUtils.pluck([{a: 11, b: 22}, {a: 33, b: 44}], 'a') // [11, 33]
    XEUtils.pluck([[11, 22, 33], [44, 55, 66]], 1) // [22, 55]
    ```
   */
  pluck(array: Array<any>, key: string): Array<any>

  /**
   * 获取数组对象中某属性值，返回一个数组
   * @param array 数组
   * @param key 键
   * @example 
    ```javascript
    XEUtils.pluck([{a: 11, b: 22}, {a: 33, b: 44}], 'a') // [11, 33]
    XEUtils.pluck([[11, 22, 33], [44, 55, 66]], 1) // [22, 55]
    ```
   */
  invoke(list: Array<any>, path: Array<string> | string | Function): Array<any>

  /**
   * 将一个带层级的数据列表转成树结构
   * @param {Array} array 数组
   * @param {Object} options {strict: false, parentKey: 'parentId', key: 'id', children: 'children', data: 'data'}
   */
  toArrayTree(array: Array<any>, options?: object): Array<any>;

  /**
   * 将一个树结构转成数组列表
   * @param {Array} array 数组
   * @param {Object} options {children: 'children', data: 'data'}
   */
  toTreeArray(array: Array<any>, options?: object): Array<any>;

  /**
   * 从树结构中查找匹配第一条数据的键、值、路径
   * @param {Object} obj 对象/数组
   * @param {Function} iterate(item, index, items, path, parent) 回调
   * @param {Object} options {children: 'children'}
   * @param {Object} context 上下文
   */
  findTree(array: Array<any>, iterate: Function, options?: object, context?: any): any;

  /**
   * 从树结构中遍历数据的键、值、路径
   * @param {Object} obj 对象/数组
   * @param {Function} iterate(item, index, items, path, parent) 回调
   * @param {Object} options {children: 'children'}
   * @param {Object} context 上下文
   */
  eachTree(array: Array<any>, iterate: Function, options?: object, context?: any): void;

  /**
   * 从树结构中指定方法后的返回值组成的新数组
   * @param {Object} obj 对象/数组
   * @param {Function} iterate(item, index, items, path) 回调
   * @param {Object} options {children: 'children', mapChildren: 'children}
   * @param {Object} context 上下文
   */
  mapTree(array: Array<any>, iterate: Function, options?: object, context?: any): Array<any>;

  /**
   * 从树结构中根据回调过滤数据
   * @param {Object} obj 对象/数组
   * @param {Function} iterate(item, index, items, path, parent) 回调
   * @param {Object} options {children: 'children'}
   * @param {Object} context 上下文
   */
  filterTree(array: Array<any>, iterate: Function, options?: object, context?: any): Array<any>;

  /**
   * 从树结构中根据回调查找数据
   * @param {Object} obj 对象/数组
   * @param {Function} iterate(item, index, items, path, parent) 回调
   * @param {Object} options {children: 'children'}
   * @param {Object} context 上下文
   */
  searchTree(array: Array<any>, iterate: Function, options?: object, context?: any): Array<any>;

  /**
   * 返回当前时间戳
   */
  now(): number;

  /**
   * 将日期转为时间戳
   * @param date 字符串/日期/时间戳
   * @param format 解析格式 yyyy MM dd HH mm ss SSS
   */
  timestamp(date: string | Date | number, format?: string): number;

  /**
   * 任意格式字符串转为日期
   * @param str 字符串/日期/时间戳
   * @param format 解析格式 yyyy MM dd HH mm ss SSS
   * @example 
    ```javascript
    XEUtils.toStringDate(1540130494594)
    XEUtils.toStringDate(new Date())
    XEUtils.toStringDate('2017-12-20 10:10:30')
    XEUtils.toStringDate('12/20/2017', 'MM/dd/yyyy')
    XEUtils.toStringDate('2017/12/20 10:10:30', 'yyyy/MM/dd HH:mm')
    XEUtils.toStringDate('12/20/2017 10:10:30.100', 'MM/dd/yyyy HH:mm:ss.SSS')
    XEUtils.toStringDate('20171220201030', 'yyyyMMddHHmmss')
    ```
   */
  toStringDate(str: string | Date | number, format?: string): Date;

  /**
   * 日期格式化为任意格式字符串
   * @param date 字符串/日期/时间戳
   * @param format 格式化 默认：yyyy-MM-dd HH:mm:ss.SSS
   * @param options 可选参数
   * @example 
    ```javascript
    XEUtils.toDateString(1513735830000)
    XEUtils.toDateString(new Date())
    XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
    XEUtils.toDateString(new Date(), 'yyyy-M-d H:m:s.S')
    XEUtils.toDateString(new Date(), 'yyyy-MM-dd HH:mm:ss.SSS')
    XEUtils.toDateString('2017-01-01 10:05:30', 'MM/dd/yyyy')
    XEUtils.toDateString('2017-11-20 10:05:30', 'yyyy-M-d h:m:s.S')
    ```
   */
  toDateString(date: string | Date | number, format?: string, options?: object): string;

  /**
   * 返回前几年或后几年的日期,可以指定年初(first)、年末(last)、月份(0~11)，默认当前
   * @param date 字符串/日期/时间戳
   * @param year 年(默认当前年)、前几个年(数值)、后几个年(数值)
   * @param month 获取哪月(null默认当前年)、年初(first)、年末(last)、指定月份（0-11）
   * @example 
    ```javascript
    XEUtils.getWhatYear(new Date(), -3)
    XEUtils.getWhatYear(1513735830000, -1)
    XEUtils.getWhatYear('2017-12-20', 2)
    XEUtils.getWhatYear('2017-12-20', 0, 'first')
    XEUtils.getWhatYear('2017-12-20', -2, 'last')
    ```
   */
  getWhatYear(date: string | Date | number, year?: number | string, month?: number | string): Date;

  /**
   * 返回前几月或后几月的日期,可以指定月初(first)、月末(last)、天数，默认当前
   * @param date 字符串/日期/时间戳
   * @param month 月(默认当前月)、前几个月、后几个月
   * @param day 获取哪天(null默认当前天)、月初(first)、月末(last)、指定天数(数值)
   * @example 
    ```javascript
    XEUtils.getWhatMonth(new Date(), 0)
    XEUtils.getWhatMonth(1513735830000, -1)
    XEUtils.getWhatMonth('2017-12-20', -3)
    XEUtils.getWhatMonth('2017-12-20', -2, 'first')
    XEUtils.getWhatMonth('2017-12-20', 1, 'last')
    ```
   */
  getWhatMonth(date: string | Date | number, month?: number | string, day?: number | string): Date;

  /**
   * 返回前几周或后几周的日期,可以指定星期几(0~6)，默认当前
   * @param date 字符串/日期/时间戳
   * @param month 周(默认当前周)、前几周、后几周
   * @param day 星期天(默认0)、星期一(1)、星期二(2)、星期三(3)、星期四(4)、星期五(5)、星期六(6)
   * @example 
    ```javascript
    XEUtils.getWhatWeek(new Date(), -2)
    XEUtils.getWhatWeek(1513735830000, -1)
    XEUtils.getWhatWeek('2017-12-20', 2)
    XEUtils.getWhatWeek('2017-12-20', -1, 5)
    XEUtils.getWhatWeek('2017-12-20', 0, 0)
    ```
   */
  getWhatWeek(date: string | Date | number, week?: number | string, day?: number | string): Date;

  /**
   * 返回前几天或后几天的日期
   * @param date 字符串/日期/时间戳
   * @param day 天(默认当天)、前几天、后几天
   * @param mode 获取时分秒(null默认当前时分秒)、日初(first)、日末(last)
   * @example 
    ```javascript
    XEUtils.getWhatDay(new Date(), -1)
    XEUtils.getWhatDay(1513735830000, -1)
    XEUtils.getWhatDay('2017-12-20', 1)
    XEUtils.getWhatDay('2017-12-20', 0, 'first')
    XEUtils.getWhatDay('2017-12-20', -2, 'last')
    ```
   */
  getWhatDay(date: string | Date | number, day?: number, mode?: number | string): Date;

  /**
   * 返回某个年份的天数,可以指定前几个年或后几个年，默认当前
   * @param date 字符串/日期/时间戳
   * @param year 年(默认当年)、前几个年、后几个年
   * @example 
    ```javascript
    XEUtils.getDayOfYear(new Date()) // 365
    XEUtils.getDayOfYear(1513735830000) // 365
    XEUtils.getDayOfYear('2017-12-20') // 365
    XEUtils.getDayOfYear('2019-12-20', 1) // 366
    XEUtils.getDayOfYear('2020-12-20') // 366
    ```
   */
  getDayOfYear(date: string | Date | number, year?: number): Date;

  /**
   * 返回某个年份的第几天
   * @param date 字符串/日期/时间戳
   * @example 
    ```javascript
    XEUtils.getYearDay(new Date()) // 149
    XEUtils.getYearDay('2017-01-20') // 20
    XEUtils.getYearDay('2018-05-20') // 140
    ```
   */
  getYearDay(date: string | Date | number): number;

  /**
   * 返回某个年份的第几周
   * @param date 字符串/日期/时间戳
   * @example 
    ```javascript
    XEUtils.getYearWeek(new Date()) // 22
    XEUtils.getYearWeek('2017-01-20') // 3
    XEUtils.getYearWeek('2018-05-20') // 20
    ```
   */
  getYearWeek(date: string | Date | number): number;

  /**
   * 返回某个月份的第几周
   * @param date 字符串/日期/时间戳
   * @example 
    ```javascript
    XEUtils.getMonthWeek(new Date()) // 4
    XEUtils.getMonthWeek('2017-01-20') // 3
    XEUtils.getMonthWeek('2018-05-20') // 2
    ```
   */
  getMonthWeek(date: string | Date | number): number;

  /**
   * 返回某个月份的天数,可以指定前几个月或后几个月，默认当前
   * @param date 字符串/日期/时间戳
   * @param month 月(默认当月)、前几个月、后几个月
   * @example 
    ```javascript
    XEUtils.getDayOfMonth(new Date()) // 31
    XEUtils.getDayOfMonth(1513735830000) // 31
    XEUtils.getDayOfMonth('2017-12-20') // 31
    XEUtils.getDayOfMonth('2017-12-20', -1) // 30
    XEUtils.getDayOfMonth('2017-12-20', 1) // 31
        ```
   */
  getDayOfMonth(date: string | Date | number, month: number): number;

  /**
   * 返回两个日期之间差距,如果结束日期小于开始日期 done 为 fasle
   * @param startDate 开始日期
   * @param endDate 结束日期或当期日期
   * @param rules 自定义计算规则
   * @example 
    ```javascript
    XEUtils.getDateDiff('2017-11-20', '2017-12-21') // {MM: 1, dd: 1}
    XEUtils.getDateDiff('2017-12-20', '2017-12-21') // {dd: 1}
    XEUtils.getDateDiff('2017-12-20', '2017-12-21') // {dd: 1, ss: 30}
    XEUtils.getDateDiff('2018-01-01', '2017-12-21') // {done: false}
    let dateDiff = XEUtils.getDateDiff('2017-12-20 10:10:30', '2017-12-21 10:15:00')
    let content = `${dateDiff.mm}分${dateDiff.ss}秒` // '4分30秒'
    ```
   */
  getDateDiff(startDate: string | Date | number, endDate: string | Date | number, rules?: object): object;

  /**
   * 获取一个指定范围内随机数
   * @param min 最小值
   * @param max 最大值
   * @example 
    ```javascript
    XEUtils.random() // 0 ~ 9
    XEUtils.random(3, 6) // 3 ~ 6
    ```
   */
  random(min: number, max: number): number;

  /**
   * 获取最小值
   * @param array 数组
   * @param iteratee 回调/属性
   */
  min(array: Array<any>, iteratee: string | Function): number;

  /**
   * 获取最大值
   * @param array 数组
   * @param iteratee 回调/属性
   */
  min(array: Array<any>, iteratee: string | Function): number;

  /**
   * 数值千分位分隔符、小数点
   * @param num 数值/字符串
   * @param options 可选参数
   * @example 
    ```javascript
    // 千分位格式化 1,000,000
    XEUtils.commafy(1000000)
    // 格式化金额 1,000,000.00
    XEUtils.commafy('1000000', {fixed: 2})
    // 格式化银行卡 6660 0000 0000 0001
    XEUtils.commafy(6660000000000001, {spaceNumber: 4, separator: ' '})
    // 字符串每隔3位分割 111,111,111,111,111,111,111,111,111,111,111
    XEUtils.commafy('111111111111111111111111111111111')
    ```
   */
  commafy(num: string | number, options?: object): string;

  /**
   * 转数值
   * @param num 数值/字符串
   */
  toNumber(num: string | number): number;

  /**
   * 转整数
   * @param num 数值/字符串
   */
  toInteger(num: string | number): number;

  /**
   * 和 Number.toFixed 类似，区别就是不会对小数进行四舍五入，结果返回数值
   * @param num 数值/字符串
   * @param digits 小数保留位数
   */
  toFixedNumber(num: string | number, digits: number): number;

  /**
   * 和 Number.toFixed 类似，区别就是不会对小数进行四舍五入，结果返回字符串
   * @param num 数值/字符串
   * @param digits 小数保留位数
   */
  toFixedString(num: string | number, digits: number): string;

  /**
   * 去除字符串左右两边的空格
   * @param str 字符串
   */
  trim(str: string): string;

  /**
   * 去除字符串左边的空格
   * @param str 字符串
   */
  trimLeft(str: string): string;

  /**
   * 去除字符串右边的空格
   * @param str 字符串
   */
  trimRight(str: string): string;

  /**
   * 转义HTML字符串，替换&, <, >, ", ', `字符
   * @param str 字符串
   */
  escape(str: string): string;

  /**
   * 反转 escape
   * @param str 字符串
   */
  unescape(str: string): string;

  /**
   * 将带驼峰字符串转成字符串
   * @param str 字符串
   */
  camelCase(str: string): string;

  /**
   * 将字符串转成驼峰字符串
   * @param str 字符串
   */
  kebabCase(str: string): string;

  /**
   * 将字符串重复 n 次
   * @param str 字符串
   * @param count 重复次数
   */
  stringRepeat(str: string, count: number): string;

  /**
   * 用指定字符从前面开始补全字符串
   * @param str 字符串
   * @param targetLength 结果长度
   * @param padString 补全字符
   */
  padStart(str: string, targetLength: number, padString: string): string;

  /**
   * 用指定字符从后面开始补全字符串
   * @param str 字符串
   * @param targetLength 结果长度
   * @param padString 补全字符
   */
  padEnd(str: string, targetLength: number, padString: string): string;

  /**
   * 判断字符串是否在源字符串的头部
   * @param str 字符串
   * @param val 值
   * @param startIndex 开始索引
   */
  startsWith(str: string, val: string, startIndex: number): string;

  /**
   * 判断字符串是否在源字符串的头部
   * @param str 字符串
   * @param val 值
   * @param startIndex 开始索引
   */
  endsWith(str: string, val: string, startIndex: number): string;

  /**
   * 解析动态字符串模板
   * @param str 字符串模板
   * @param obj 对象
   */
  template(str: string, obj: object): string;

  /**
   * 判断字符串是否在源字符串的头部
   * @param query 序列化的对象
   */
  serialize(query: object): string;

  /**
   * 判断字符串是否在源字符串的头部
   * @param str 反序列化的字符串
   */
  unserialize(str: string): object;

  /**
   * 获取浏览器信息
   * @example 
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
   */
  browse(): object;

  /**
   * 获取地址栏信息
   */
  locat(): object;

  /**
   * 解析 URL 参数
   * @param ulr 字符串
   */
  parseUrl(ulr: string): object;

  /**
   * 获取上下文路径
   */
  getBaseURL(): string;

  /**
   * Cookie 操作函数
   * @param name 键/数组/对象
   * @param value 值
   * @param options 可选参数 
    ```html
    name: 键
    value: 值
    path: 路径
    domain: 作用域
    secure: 设置为安全的,只能用https协议
    expires: 过期时间,可以指定日期或者字符串，默认天
    ```
   * @example 
    ```javascript
    // 获取所有
    XEUtils.cookie()
    // 根据name获取
    XEUtils.cookie('name')
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
   */
  cookie: XECookie;
}

/**
 * A JavaScript tools library.
 */
declare var XEUtils: XEUtilsMethods;

export default XEUtils;