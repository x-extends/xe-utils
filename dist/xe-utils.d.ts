/**
 * JavaScript 函数库、工具类
 */
declare namespace XEUtils {

  /* eslint-disable @typescript-eslint/no-explicit-any */
  export interface SetupDefaults {
    treeOptions?: {
      strict?: boolean;
      parentKey?: string;
      key?: string;
      children?: string;
      data?: string;
      [key: string]: any;
    };
    formatDate?: string;
    formatString?: string;
    dateDiffRules?: any[][];
    [key: string]: any;
  }

  /**
   * 版本信息
   */
  export const v: string
  /**
   * 设置全局参数
   * @param options 全局参数
   */
  export function setup(options: setupDefaults): setupDefaults;

  /**
   * 将您自己的实用函数扩展到 XEUtils
   * @param methods 函数集
   */
  export function mixin(...methods: Array<{name: any}>): void;

  /**
   * 浅拷贝一个或者多个对象到目标对象中
   * @param target 目标对象
   * @param sources 多个对象
  */
  export function assign(target: any, ...sources: any[]): any;

  /**
   * 浅拷贝一个或者多个对象到目标对象中
   * @param target 目标对象
   * @param sources 多个对象
  */
  export function extend(target: any, ...sources: any[]): any;

  export function objectMapIterate(item: any, key: string, obj: any): any;

  /**
   * 指定方法后的返回值组成的新对象
   * @param obj 对象
   * @param iteratee 回调
   * @param context 上下文
   */
  export function objectMap(obj: any, iteratee: typeof objectMapIterate, context?: any): any;

  export function objectEachIterate(item: any, key: string, obj: any): any;

  /**
   * 对象迭代器
   * @param obj 对象
   * @param iteratee 回调
   * @param context 上下文
   */
  export function objectEach(obj: any, iteratee: typeof objectEachIterate, context?: any): void;

  export function lastObjectEachIterate(item: any, key: string, obj: any): any;

  /**
   * 对象迭代器,从最后开始迭代
   * @param obj 对象
   * @param iteratee 回调
   * @param context 上下文
   */
  export function lastObjectEach(obj: any, iteratee: typeof lastObjectEachIterate, context?: any): void;

  /**
   * 数组去重
   * @param array 数组
   */
  export function uniq(array: any[]): any[];

  /**
   * 将多个数的值返回唯一的并集数组
   * @param array 数组
   */
  export function union(...array: any[]): any[];

  /**
   * 数组按属性值升序
   * @param array 数组
   * @param iteratee 回调/属性
   * @param context 上下文
   */
  export function sortBy(array: any[], iteratee: any[] | Function | string, context?: any): any[];

  /**
   * 将一个数组随机打乱，返回一个新的数组
   * @param array 数组
    */
  export function shuffle(array: any[]): any[];

  /**
   * 从一个数组中随机返回几个元素
   * @param array 数组
   * @param number 返回个数
   * @example
   */
  export function sample(array: any[], number?: number): any[];

  /**
   * 对象中的值中的每一项运行给定函数,如果函数对任一项返回 true,则返回 true,否则返回 false
   * @param array 数组
   * @param iteratee 回调
   * @param context 上下文
   */
  export function some(array: any[], iteratee: Function, context?: any): any[];

  export function everyIterate(item: any, index: number, list: any): any;

  /**
   * 对象中的值中的每一项运行给定函数,如果该函数对每一项都返回 true,则返回 true,否则返回 false
   * @param array 数组
   * @param iteratee 回调
   * @param context 上下文
   */
  export function every(array: any[], iteratee: typeof everyIterate, context?: any): any[];

  /**
   * slice ( array, start, end ) 裁剪 Arguments 或数组 array，从 start 位置开始到 end 结束，但不包括 end 本身的位置
   * @param array 对象
   * @param start 迭代器/属性
   * @param end 上下文
   */
  export function slice(array: any[], start?: number, end?: number): any[];

  export function filterIterate(item: any, index: number, list: any): any;

  /**
   * 查找匹配第一条数据
   * @param array 数组
   * @param iteratee 回调
   * @param context 上下文
   */
  export function filter(array: any[], iteratee: typeof filterIterate, context?: any): any[];

  export function findIterate(item: any, index: number, list: any): any;

  /**
   * 查找匹配第一条数据
   * @param array 数组
   * @param iteratee 回调
   * @param context 上下文
   */
  export function find(array: any[], iteratee: typeof findIterate, context?: any): any;

  export function findKeyIterate(item: any, index: number, list: any): any;

  /**
   * 查找匹配第一条数据的键
   * @param array 数组
   * @param iteratee 回调
   * @param context 上下文
   */
  export function findKey(array: any[], iteratee: typeof findKeyIterate, context?: any): any;

  /**
   * 判断对象是否包含该值,成功返回 true 否则 false
   * @param obj 对象
   * @param val 值
   */
  export function includes(obj: any, val: any): boolean;

  /**
   * 返回数组第一个索引值
   * @param obj 数组
   * @param val 值
   */
  export function arrayIndexOf(obj: any, val: any): number;

  /**
   * 从最后开始的索引值,返回数组第一个索引值
   * @param obj 数组
   * @param val 值
   */
  export function arrayLastIndexOf(obj: any, val: any): number;

  export function mapIterate(item: any, index: number, list: any[]): any;

  /**
   * 指定方法后的返回值组成的新数组
   * @param array 数组
   * @param iteratee 回调
   * @param context 上下文
   */
  export function map(array: any[], iteratee: typeof mapIterate, context?: any): any[];

  export function reduceIterate(previous: any, item: any, index: number, list: any[]): any;

  /**
   * 接收一个函数作为累加器，数组中的每个值（从左到右）开始合并，最终为一个值
   * @param array 数组
   * @param iteratee 回调
   * @param initialValue 默认值
   * @example
   */
  export function reduce(array: any[], iteratee?: typeof reduceIterate, initialValue?: any): any;

  /**
   * 复制数组的一部分到同一数组中的另一个位置,数组大小不变
   * @param array 数组
   * @param target 从该位置开始替换数据
   * @param start 从该位置开始读取数据，默认为 0 。如果为负值，表示倒数
   * @param end 到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数
   */
  export function copyWithin(array: Array<any>, target: number, start?: number, end?: number): Array<any>;

  /**
   * 将一个数组分割成大小的组。如果数组不能被平均分配，那么最后一块将是剩下的元素
   * @param array 数组
   * @param size 每组大小
   */
  export function chunk(array: any[], size: number): any[];

  /**
   * 将每个数组中相应位置的值合并在一起
   * @param arrays 多个数组
   */
  export function zip(...arrays: any[]): any[];

  /**
   * 与 zip 相反
   * @param arrays 数组
   */
  export function unzip(arrays: any[]): any[];

  /**
   * 将每个数组中相应位置的值合并在一起
   * @param props 键数组
   * @param values 值数组
   * @example
   */
  export function zipObject(props: any[], values: any[]): any;

  /**
   * 将一个多维数组铺平
   * @param array 数组
   * @param deep 是否深层
   */
  export function flatten(array: any[], deep?: boolean): any[];

  /**
   * 将对象或者伪数组转为新数组
   * @param array 对象/数组
   */
  export function toArray(obj: any): any[];

  /**
   * 判断数组是否包含另一数组
   * @param array1 数组
   * @param array2 数组
   */
  export function includeArrays(array1: any[], array2: any[]): boolean;

  /**
   * 获取数组对象中某属性值，返回一个数组
   * @param array 数组
   * @param key 键
   * @example
   */
  export function pluck(array: any[], key: string): any[];

  /**
   * 获取数组对象中某属性值，返回一个数组
   * @param array 数组
   * @param key 键
   * @example
   */
  export function invoke(list: any[], path: string[] | string | Function): any[];

  /**
   * 获取数组对象中某属性值，返回一个数组
   * @param array 数组
   * @param key 键
   * @example
   */
  export function invokeMap(list: any[], path: string[] | string | Function): any[];

  export function arrayEachIterate(item: any, index: number, list: any): any;

  /**
   * 数组迭代器
   * @param obj 对象
   * @param iteratee 回调
   * @param context 上下文
   */
  export function arrayEach(obj: any, iteratee: typeof arrayEachIterate, context?: any): void;

  export function lastArrayEachIterate(item: any, index: number, list: any[]): any;

  /**
   * 数组迭代器,从最后开始迭代
   * @param obj 对象
   * @param iteratee 回调
   * @param context 上下文
   */
  export function lastArrayEach(obj: any[], iteratee: typeof lastArrayEachIterate, context?: any): void;

  export interface ToArrayTreeOptions {
    strict?: boolean;
    key?: string;
    parentKey?: string;
    children?: string;
    sortKey?: string;
    reverse?: string;
    data?: string;
  }

  /**
   * 将一个带层级的数据列表转成树结构
   * @param {Array} array 数组
   * @param {Object} options {strict: false, parentKey: 'parentId', key: 'id', children: 'children', data: 'data'}
   */
  export function toArrayTree(array: any[], options?: ToArrayTreeOptions): any[];

  export interface ToTreeArrayOptions {
    children?: string;
    data?: string;
  }

  /**
   * 将一个树结构转成数组列表
   * @param {Array} array 数组
   * @param {Object} options { children: 'children', data: 'data' }
   */
  export function toTreeArray(array: any[], options?: ToTreeArrayOptions): any[];

  export function findTreeIterate(item: any, index: number, items: any[], path: string[], parent: any, nodes: any[]): any;

  interface TerrResult {
    index: number;
    item: any;
    path: Array<string>;
    items: any[];
    parent: any;
    nodes: any[];
  }

  interface FindTreeOptions {
    children?: string;
  }

  /**
   * 从树结构中查找匹配第一条数据的键、值、路径
   * @param {Object} obj 对象/数组
   * @param {Function} iterate(item, index, items, path, parent, nodes) 回调
   * @param {Object} options {children: 'children'}
   * @param {Object} context 上下文
   */
  export function findTree(array: any[], iterate: typeof findTreeIterate, options?: FindTreeOptions, context?: any): TerrResult;

  export function eachTreeIterate(item: any, index: number, items: any[], path: Array<string>, parent: any, nodes: any[]): any;

  export interface EachTreeOptions {
    children?: string;
  }

  /**
   * 从树结构中遍历数据的键、值、路径
   * @param {Object} obj 对象/数组
   * @param {Function} iterate(item, index, items, path, parent, nodes) 回调
   * @param {Object} options {children: 'children'}
   * @param {Object} context 上下文
   */
  export function eachTree(array: any[], iterate: typeof eachTreeIterate, options?: EachTreeOptions, context?: any): void;

  export function mapTreeIterate(item: any, index: number, items: any[], path: string[], parent: any, nodes: any[]): any;

  interface MapTreeOptions {
    children?: string;
    mapChildren?: string;
  }

  /**
   * 从树结构中指定方法后的返回值组成的新数组
   * @param {Object} obj 对象/数组
   * @param {Function} iterate(item, index, items, path, parent, nodes) 回调
   * @param {Object} options {children: 'children', mapChildren: 'children}
   * @param {Object} context 上下文
   */
  export function mapTree(array: any[], iterate: typeof mapTreeIterate, options?: MapTreeOptions, context?: any): any[];

  export function filterTreeIterate(item: any, index: number, items: any[], path: Array<string>, parent: any, nodes: any[]): any;

  export interface FilterTreeOptions {
    children?: string;
  }

  /**
   * 从树结构中根据回调过滤数据
   * @param {Object} obj 对象/数组
   * @param {Function} iterate(item, index, items, path, parent) 回调
   * @param {Object} options {children: 'children'}
   * @param {Object} context 上下文
   */
  export function filterTree(array: any[], iterate: typeof filterTreeIterate, options?: FilterTreeOptions, context?: any): any[];

  export function searchTreeIterate(item: any, index: number, items: any[], path: string[], parent: any, nodes: any[]): any;

  export interface SearchTreeOptions {
    children?: string;
    mapChildren?: string;
    original?: boolean;
  }

  /**
   * 从树结构中根据回调查找数据
   * @param {Object} obj 对象/数组
   * @param {Function} iterate(item, index, items, path, parent, nodes) 回调
   * @param {Object} options {children: 'children'}
   * @param {Object} context 上下文
   */
  export function searchTree(array: any[], iterate: typeof searchTreeIterate, options?: SearchTreeOptions, context?: any): any[];

  /**
   * 判断对象自身属性中是否具有指定的属性
   * @param obj 对象
   * @param key 键值
   */
  export function hasOwnProp(obj: any, key: string | number): boolean;

  /**
   * 判断是否 undefined 和 null
   * @param obj 对象
   */
  export function eqNull(obj: any): boolean;

  /**
   * 判断是否非数值
   * @param val 值
   */
  export function isNaN(val: any): boolean;

  /**
   * 判断是否为有限数值
   * @param val 值
   */
  export function isFinite(val: any): boolean;

  /**
   * 判断 Undefined
   * @param val 值
   */
  export function isUndefined(val: any): boolean;

  /**
   * 判断是否数组
   * @param val 值
   */
  export function isArray(val: any): boolean;

  /**
   * 判断是否小数
   * @param val 值
   */
  export function isFloat(val: any): boolean;

  /**
   * 判断是否整数
   * @param val 值
   */
  export function isInteger(val: any): boolean;

  /**
   * 判断是否方法
   * @param val 值
   */
  export function isFunction(val: any): boolean;

  /**
   * 判断是否 Boolean 对象
   * @param val 值
   */
  export function isBoolean(val: any): boolean;

  /**
   * 判断是否String对象
   * @param val 值
   */
  export function isString(val: any): boolean;

  /**
   * 判断是否 Number 对象
   * @param val 值
   */
  export function isNumber(val: any): boolean;

  /**
   * 判断是否 RegExp 对象
   * @param val 值
   */
  export function isRegExp(val: any): boolean;

  /**
   * 判断是否 Object 对象
   * @param val 值
   */
  export function isObject(val: any): boolean;

  /**
   * 判断是否是一个对象
   * @param val 值
   */
  export function isPlainObject(val: any): boolean;

  /**
   * 判断是否 Date 对象
   * @param val 值
   */
  export function isDate(val: any): boolean;

  /**
   * 判断是否 Error 对象
   * @param val 值
   */
  export function isError(val: any): boolean;

  /**
   * 判断是否 TypeError 对象
   * @param val 值
   */
  export function isTypeError(val: any): boolean;

  /**
   * 判断是否为空对象
   * @param val 值
   */
  export function isEmpty(val: any): boolean;

  /**
   * 判断是否为 Null
   * @param val 值
   */
  export function isNull(val: any): boolean;

  /**
   * 判断是否 Symbol 对象
   * @param val 值
   */
  export function isSymbol(val: any): boolean;

  /**
   * 判断是否 Arguments 对象
   * @param val 值
   */
  export function isArguments(val: any): boolean;

  /**
   * 判断是否 Element 对象
   * @param val 值
   */
  export function isElement(val: any): boolean;

  /**
   * 判断是否 Document 对象
   * @param val 值
   */
  export function isDocument(val: any): boolean;

  /**
   * 判断是否 Window 对象
   * @param val 值
   */
  export function isWindow(val: any): boolean;

  /**
   * 判断是否 FormData 对象
   * @param val 值
   */
  export function isFormData(val: any): boolean;

  /**
   * 判断是否 Map 对象
   * @param val 值
   */
  export function isMap(val: any): boolean;

  /**
   * 判断是否 WeakMap 对象
   * @param val 值
   */
  export function isWeakMap(val: any): boolean;

  /**
   * 判断是否 Set 对象
   * @param val 值
   */
  export function isSet(val: any): boolean;

  /**
   * 判断是否 WeakSet 对象
   * @param val 值
   */
  export function isWeakSet(val: any): boolean;

  /**
   * 判断是否闰年
   * @param date 日期
   */
  export function isLeapYear(date?: Date | number | string): boolean;

  /**
   * 判断属性中的键和值是否包含在对象中
   * @param obj 对象
   * @param source 值
   */
  export function isMatch(obj: any, source: any): boolean;

  /**
   * 深度比较两个对象之间的值是否相等
   * @param obj1 值1
   * @param obj2 值2
   */
  export function isEqual(obj1: any, obj2: any): boolean;

  export function isEqualWithFunc(val1: any, val2: any, key: any, obj1: any, obj2: any): any;

  /**
   * 深度比较两个对象之间的值是否相等，使用自定义比较函数
   * @param obj1 值1
   * @param obj2 值2
   * @param func 自定义函数
   */
  export function isEqualWith(obj1: any, obj2: any, func?: typeof isEqualWithFunc): boolean;

  /**
   * 获取对象类型
   * @param obj 对象
   */
  export function getType(obj: any): string;

  /**
   * 获取一个全局唯一标识
   * @param prefix 自定义前缀
   */
  export function uniqueId(prefix?: string): string;

  /**
   * 返回对象的长度
   * @param obj 对象
   */
  export function getSize(obj: any): number;

  /**
   * 返回对象第一个索引值
   * @param obj 对象
   * @param val 值
   */
  export function indexOf(obj: any, val: any): any;

  /**
   * 从最后开始的索引值,返回对象第一个索引值
   * @param obj 对象
   * @param val 值
   */
  export function lastIndexOf(obj: any, val: any): any;

  export function findIndexOfIterate(item: any, index: any, obj: any): any;

  /**
   * 返回对象第一个索引值
   * @param obj 对象
   * @param iteratee 迭代器
   * @param context 上下文
   */
  export function findIndexOf(obj: any, iteratee: typeof findIndexOfIterate, context?: any): any;

  export function findLastIndexOfIterate(item: any, index: any, obj: any): any;

  /**
   * 从最后开始的索引值,返回对象第一个索引值
   * @param obj 对象
   * @param iteratee 迭代器
   * @param context 上下文
   */
  export function findLastIndexOf(obj: any, iteratee: typeof findLastIndexOfIterate, context?: any): any;

  /**
   * 字符串转 JSON
   * @param str 字符串
   */
  export function toStringJSON(str: string): any;

  /**
   * JSON 转字符串
   * @param obj 对象
   */
  export function toJSONString(obj: any): string;

  /**
   * 获取对象所有属性
   * @param obj 对象
   */
  export function keys(obj: any): Array<any>;

  /**
   * 获取对象所有值
   * @param obj 对象
   */
  export function values(obj: any): Array<any>;

  /**
   * 获取对象所有属性、值
   * @param obj 对象
   */
  export function entries(obj: any): any[];

  /**
   * 根据 keys 过滤指定的属性值，返回一个新的对象
   * @param obj 对象
   * @param array 数组或字符串或方法
   */
  export function pick(obj: any, array: string[]): any;

  /**
   * 根据 keys 排除指定的属性值，返回一个新的对象
   * @param obj 对象
   * @param array 数组或字符串或方法
   */
  export function omit(obj: any, array: string[]): any;

  /**
   * 获取对象第一个值
   * @param obj 对象
   */
  export function first(obj: any): any;

  /**
   * 获取对象最后一个值
   * @param obj 对象
   */
  export function last(obj: any): any;

  export function eachIterate(item: any, index: any, obj: any): any;

  /**
   * 通用迭代器
   * @param obj 对象
   * @param iteratee 回调
   * @param context 上下文
   */
  export function each(obj: any, iteratee: typeof eachIterate, context?: any): void;

  export function forOfIterate(item: any, index: any, obj: any): any;

  /**
   * 迭代器,支持 return false 跳出循环 break
   * @param obj 对象
   * @param iteratee 回调
   * @param context 上下文
   */
  export function forOf(obj: any, iteratee: typeof forOfIterate, context?: any): void;

  export function lastForOfIterate(item: any, index: any, obj: any): any;

  /**
   * 迭代器,从最后开始迭代,支持 return false 跳出循环 break
   * @param obj 对象
   * @param iteratee 回调
   * @param context 上下文
   */
  export function lastForOf(obj: any, iteratee: typeof lastForOfIterate, context?: any): void;

  export function lastEachIterate(item: any, index: any, obj: any): any;

  /**
   * 通用迭代器,从最后开始迭代
   * @param obj 对象
   * @param iteratee 回调
   * @param context 上下文
   */
  export function lastEach(obj: any, iteratee: typeof lastEachIterate, context?: any): void;

  /**
   * 检查键、路径是否是该对象的属性
   * @param obj 对象
   * @param property 键、路径
   */
  export function has(obj: any, property: string | string[]): boolean;

  /**
   * 获取对象的属性的值，如果值为 undefined，则返回默认值
   * @param obj 对象
   * @param property 键、路径
   * @param defaultValue 默认值
   */
  export function get(obj: any, property: string | string[], defaultValue?: any): any;

  /**
   * 设置对象属性上的值。如果属性不存在则创建它
   * @param obj 对象
   * @param property 键、路径
   * @param value 值
   */
  export function set(obj: any, property: string | string[], value: any): void;

  export function groupByIterate(item: any, index: any, obj: any): any;

  /**
   * 集合分组,默认使用键值分组,如果有 iteratee 则使用结果进行分组
   * @param obj 对象
   * @param iteratee 回调/对象属性
   * @param context 上下文
   */
  export function groupBy(obj: any, iteratee: string | number | typeof groupByIterate, context?: any): any;

  export function countByIterate(item: any, index: any, obj: any): any;

  /**
   * 集合分组统计,返回各组中对象的数量统计
   * @param obj 对象
   * @param iteratee 回调/属性
   * @param context 上下文
   */
  export function countBy(obj: any, iteratee: typeof countByIterate, context?: any): any;

  /**
   * 浅拷贝/深拷贝
   * @param obj 对象
   * @param deep 是否深拷贝
   */
  export function clone(obj: any, deep?: boolean): any;

  /**
   * 清空对象; defs如果不传（清空所有属性）、如果传对象（清空并继承)、如果传值(给所有赋值)
   * @param obj 对象
   * @param defs 默认值
   * @param assigns 值
   */
  export function clear(obj: any, defs?: any, assigns?: any): any;

  export function removeIterate(item: any, index: any, obj: any): any;

  /**
   * 移除对象属性
   * @param obj 对象
   * @param iteratee 迭代器/值
   */
  export function remove(obj: any, iteratee: number | string | typeof removeIterate): any;

  /**
   * 序号列表生成函数
   * @param start 起始值
   * @param stop 结束值
   * @param step 自增值
   */
  export function range(start: number, stop: number, step?: number): Array<any>;

  /**
   * 将一个或者多个对象值解构到目标对象
   * @param obj 对象
   * @param target 目标
   */
  export function destructuring(obj: any, ...target: any[]): any;

  /**
   * 获取一个指定范围内随机数
   * @param min 最小值
   * @param max 最大值
   */
  export function random(min: number, max: number): number;

  export function minIterate(item: any, index: number, obj: any): any;

  /**
   * 获取最小值
   * @param array 数组
   * @param iteratee 回调/属性
   */
  export function min(array: Array<any>, iteratee: string | number | typeof minIterate): number;

  export function maxIterate(item: any, index: number, obj: any): any;

  /**
   * 获取最大值
   * @param array 数组
   * @param iteratee 回调/属性
   */
  export function max(array: Array<any>, iteratee: string | number | typeof maxIterate): number;

  export interface CommafyOptions {
    /**
     * 分割位数,默认3
     */
    spaceNumber: number;
    /**
     * 分隔符,默认','
     */
    separator: string;
    /**
     * 小数位数,默认null
     */
    digits: number;
  }

  /**
   * 数值千分位分隔符、小数点
   * @param num 数值/字符串
   * @param options 可选参数
   */
  export function commafy(num: string | number, options?: CommafyOptions): string;

  /**
   * 和 Number.toFixed 类似，区别就是不会对小数进行四舍五入，结果返回字符串
   * @param num 数值/字符串
   * @param digits 小数保留位数
   */
  export function toFixedString(num: string | number, digits: number): string;

  /**
   * 和 Number.toFixed 类似，区别就是不会对小数进行四舍五入，结果返回数值
   * @param num 数值/字符串
   * @param digits 小数保留位数
   */
  export function toFixedNumber(num: string | number, digits: number): number;

  /**
   * 转数值
   * @param num 数值/字符串
   */
  export function toNumber(num: string | number): number;

  /**
   * 转整数
   * @param num 数值/字符串
   */
  export function toInteger(num: string | number): number;

  /**
   * 加法运算
   * @param num1 数值1
   * @param num2 数值2
   */
  export function add(num1: number, num2: number): number;

  /**
   * 减法运算
   * @param num1 数值1
   * @param num2 数值2
   */
  export function subtract(num1: number, num2: number): number;

  /**
   * 乘法运算
   * @param num1 数值1
   * @param num2 数值2
   */
  export function multiply(num1: number, num2: number): number;

  /**
   * 除法运算
   * @param num1 数值1
   * @param num2 数值2
   */
  export function divide(num1: number, num2: number): number;

  export function sumIterate(item: any, index: number, list: any[]): any;

  /**
   * 求和函数，将数值相加
   * @param obj 对象/数组
   * @param iteratee 回调
   * @param context 上下文
   */
  export function sum(obj: any, iteratee?: typeof sumIterate | string | number, context?: any): number;

  export function meanIterate(item: any, index: number, list: any[]): any;

  /**
   * 求平均值函数
   * @param array 对象/数组
   * @param iteratee 回调
   * @param context 上下文
   */
  export function mean(obj: any, iteratee?: typeof meanIterate | string | number, context?: any): number;

  /**
   * 返回当前时间戳
   */
  export function now(): number;

  /**
   * 将日期转为时间戳
   * @param date 字符串/日期/时间戳
   * @param format 解析格式 yyyy MM dd HH mm ss SSS
   */
  export function timestamp(date: string | Date | number, format?: string): number;

  /**
   * 判断两个日期是否相同
   * @param date1 日期
   * @param date2 日期
   * @param format 格式化
   */
  export function isDateSame(date1: Date | number | string, date2: Date | number | string, format?: string): boolean;

  /**
   * 任意格式字符串转为日期
   * @param str 字符串/日期/时间戳
   * @param format 解析格式 yyyy MM dd HH mm ss SSS
   */
  export function toStringDate(str: string | Date | number, format?: string): Date;

  export interface ToDateStringOptions {
    /**
     * 自定义格式化模板
     * {
     *   formats: {
     *     q: ['日', '一', '二', '三', '四', '五', '六'],
     *     E: function (value, match, date) { return '三' }
     *   }
     * }
     */
    formats?: any;
  }

  /**
   * 日期格式化为任意格式字符串，转义符号 []
   * @param date 字符串/日期/时间戳
   * @param format 格式化 默认：yyyy-MM-dd HH:mm:ss.SSS
   * @param options 可选参数
   */
  export function toDateString(date: string | Date | number, format?: string, options?: ToDateStringOptions): string;

  /**
   * 返回前几年或后几年的日期,可以指定年初(first)、年末(last)、月份(0~11)，默认当前
   * @param date 字符串/日期/时间戳
   * @param year 年(默认当前年)、前几个年(数值)、后几个年(数值)
   * @param month 获取哪月(null默认当前年)、年初(first)、年末(last)、指定月份（0-11）
   */
  export function getWhatYear(date: string | Date | number, year?: number | string, month?: number | string): Date;

  /**
   * 返回前几月或后几月的日期,可以指定月初(first)、月末(last)、天数，默认当前
   * @param date 字符串/日期/时间戳
   * @param month 月(默认当前月)、前几个月、后几个月
   * @param day 获取哪天(null默认当前天)、月初(first)、月末(last)、指定天数(数值)
   */
  export function getWhatMonth(date: string | Date | number, month?: number | string, day?: number | string): Date;

  /**
   * 返回前几周或后几周的日期,可以指定星期几(0~6)，默认当前
   * @param date 字符串/日期/时间戳
   * @param month 周(默认当前周)、前几周、后几周
   * @param day 星期天(默认0)、星期一(1)、星期二(2)、星期三(3)、星期四(4)、星期五(5)、星期六(6)
   */
  export function getWhatWeek(date: string | Date | number, week?: number | string, day?: number | string): Date;

  /**
   * 返回前几天或后几天的日期
   * @param date 字符串/日期/时间戳
   * @param day 天(默认当天)、前几天、后几天
   * @param mode 获取时分秒(null默认当前时分秒)、日初(first)、日末(last)
   */
  export function getWhatDay(date: string | Date | number, day?: number, mode?: number | string): Date;

  /**
   * 返回某个年份的第几天
   * @param date 字符串/日期/时间戳
   */
  export function getYearDay(date: string | Date | number): number;

  /**
   * 返回某个年份的第几周
   * @param date 字符串/日期/时间戳
   */
  export function getYearWeek(date: string | Date | number): number;

  /**
   * 返回某个月份的第几周
   * @param date 字符串/日期/时间戳
   */
  export function getMonthWeek(date: string | Date | number): number;

  /**
   * 返回某个年份的天数,可以指定前几个年或后几个年，默认当前
   * @param date 字符串/日期/时间戳
   * @param year 年(默认当年)、前几个年、后几个年
   */
  export function getDayOfYear(date: string | Date | number, year?: number): Date;

  /**
   * 返回某个月份的天数,可以指定前几个月或后几个月，默认当前
   * @param date 字符串/日期/时间戳
   * @param month 月(默认当月)、前几个月、后几个月
   */
  export function getDayOfMonth(date: string | Date | number, month: number): number;

  export interface DateDiffResult {
    /**
     * 是否计算完成（如果结束日期小于开始日期 done 为 fasle）
     */
    done: boolean;
    /**
     * 相差多少毫秒
     */
    time: number;
    /**
     * 年
     */
    yyyy: number;
    /**
     * 月
     */
    MM: number;
    /**
     * 日
     */
    dd: number;
    /**
     * 时
     */
    HH: number;
    /**
     * 分
     */
    mm: number;
    /**
     * 秒
     */
    ss: number;
    /**
     * 毫秒
     */
    S: number;
  }

  /**
   * 返回两个日期之间差距,如果结束日期小于开始日期 done 为 fasle
   * @param startDate 开始日期
   * @param endDate 结束日期或当期日期
   * @param rules 自定义计算规则
   */
  export function getDateDiff(startDate: string | Date | number, endDate: string | Date | number, rules?: any[][]): DateDiffResult;

  /**
   * 去除字符串左右两边的空格
   * @param str 字符串
   */
  export function trim(str: string): string;

  /**
   * 去除字符串左边的空格
   * @param str 字符串
   */
  export function trimLeft(str: string): string;

  /**
   * 去除字符串右边的空格
   * @param str 字符串
   */
  export function trimRight(str: string): string;

  /**
   * 转义HTML字符串，替换&, <, >, ", ', \`字符
   * @param str 字符串
   */
  export function escape(str: string): string;

  /**
   * 反转 escape
   * @param str 字符串
   */
  export function unescape(str: string): string;

  /**
   * 将带驼峰字符串转成字符串
   * @param str 字符串
   */
  export function camelCase(str: string): string;

  /**
   * 将字符串转成驼峰字符串
   * @param str 字符串
   */
  export function kebabCase(str: string): string;

  /**
   * 将字符串重复 n 次
   * @param str 字符串
   * @param count 次数
   */
  export function repeat(str: string, count: number): string;

  /**
   * 用指定字符从前面开始补全字符串
   * @param str 字符串
   * @param targetLength 结果长度
   * @param padString 补全字符
   */
  export function padStart(str: string, targetLength: number, padString?: string): string;

  /**
   * 用指定字符从后面开始补全字符串
   * @param str 字符串
   * @param targetLength 结果长度
   * @param padString 补全字符
   */
  export function padEnd(str: string, targetLength: number, padString?: string): string;

  /**
   * 判断字符串是否在源字符串的头部
   * @param str 字符串
   * @param val 值
   * @param startIndex 开始索引
   */
  export function startsWith(str: string, val: string, startIndex?: number): string;

  /**
   * 判断字符串是否在源字符串的头部
   * @param str 字符串
   * @param val 值
   * @param startIndex 开始索引
   */
  export function endsWith(str: string, val: string, startIndex?: number): string;

  /**
   * 解析动态字符串模板
   * @param str 字符串模板
   * @param obj 对象
   */
  export function template(str: string, obj: any): string;

  /**
   * 转字符串
   * @param obj 值
   */
  export function toString(obj: any): string;

  /**
   * 返回一个获取对象属性的函数
   * @param path 键值
   */
  export function property(path: string): Function;

  /**
   * 创建一个绑定上下文的函数
   * @param callback 回调
   * @param context 上下文
   * @param params 额外的参数
   */
  export function bind(callback: Function, context?: any, ...params: any[]): Function;

  /**
   * 创建一个只能调用一次的函数,只会返回第一次执行后的结果
   * @param callback 回调
   * @param context 上下文
   * @param params 额外的参数
   */
  export function once(callback: Function, context?: any, ...params: any[]): Function;

  /**
   * 创建一个函数, 调用次数超过 count 次之后执行回调并将所有结果记住后返回
   * @param count 次数
   * @param callback 回调
   * @param context 上下文
   */
  export function after(count: number, callback: Function, context?: any): Function;

  /**
   * 创建一个函数, 调用次数不超过 count 次之前执行回调并将所有结果记住后返回
   * @param count 次数
   * @param callback 回调
   * @param context 上下文
   */
  export function before(count: number, callback: Function, context?: any): Function;

  export interface ThrottleOptions {
    /**
     * 是否在之前执行
     */
    leading?: boolean;
    /**
     * 是否在之后执行
     */
    trailing?: boolean;
  }

  /**
   * 节流函数；当被调用 n 毫秒后才会执行，如果在这时间内又被调用则至少每隔 n 秒毫秒调用一次该函数
   * @param callback 回调
   * @param wait 毫秒
   * @param options 可选参数
   */
  export function throttle(callback: Function, wait: number, options?: ThrottleOptions): Function;

  export interface DebounceOptions {
    /**
     * 是否在之前执行
     */
    leading?: boolean;
    /**
     * 是否在之后执行
     */
    trailing?: boolean;
  }

  /**
   * 函数去抖；当被调用 n 毫秒后才会执行，如果在这时间内又被调用则将重新计算执行时间
   * @param callback 回调
   * @param wait 毫秒
   * @param options 可选参数
   */
  export function debounce(callback: Function, wait: number, options: DebounceOptions): Function;

  /**
   * 该方法和 setTimeout 一样的效果，区别就是支持上下文和额外参数
   * @param callback 回调
   * @param wait 延迟毫秒
   * @param params 额外的参数
   */
  export function delay(callback: Function, wait: number, ...params: any[]): number;

  export interface XEUrl {
    /**
     * 获取完整的地址
     */
    href: string;
    /**
     * 获取 #Hash 的完整字符串
     */
    hash: string;
    /**
     * 获取主机信息
     */
    host: string;
    /**
     * 主机主机名
     */
    hostname: string;
    /**
     * 获取地址的协议类型
     */
    protocol: string;
    /**
     * 获取端口信息
     */
    port: string;
    /**
     * 查询字符串
     */
    search: string;
    /**
     * 获取路径字符串
     */
    pathname: string;
    /**
     * 获取 #hash 键值
     */
    origin: string;
    /**
     * 获取 #hash 键值，不包括参数
     */
    hashKey: string;
    /**
     * 获取 #hash 对象参数
     */
    hashQuery: any;
    /**
     * 获取查询对象参数
     */
    searchQuery: any;
  }

  /**
   * 解析 URL 参数
   * @param ulr 字符串
   */
  export function parseUrl(ulr: string): XEUrl;

  /**
   * 序列化查询参数
   * @param query 查询参数
   */
  export function serialize(query: any): string;

  /**
   * 反序列化查询参数
   * @param str 字符串
   */
  export function unserialize(str: string): any;

  /**
   * 获取上下文路径
   */
  export function getBaseURL(): string;

  /**
   * 获取地址栏信息
   */
  export function locat(): XEUrl;

  export interface XEBrowse {
    /**
     * 判断是否 NodeJs 环境
     */
    isNode: boolean;
    /**
     * 判断是否有 document 元素
     */
    isDoc: boolean;
    /**
     * 判断是否 Edge 浏览器
     */
    edge: boolean;
    /**
     * 判断是否 Firefox 浏览器
     */
    firefox: boolean;
    /**
     * 判断是否 IE 浏览器
     */
    msie: boolean;
    /**
     * 判断是否 Safari 浏览器
     */
    safari: boolean;
    /**
     * 判断是否移动端
     */
    isMobile: boolean;
    /**
     * 判断是否 PC 端
     */
    isPC: boolean;
    /**
     * 判断浏览器是否支持 LocalStorage
     */
    isLocalStorage: boolean;
    /**
     * 判断浏览器是否支持 SessionStorage
     */
    isSessionStorage: boolean;
    /**
     * 判断浏览器是否 -webkit 内核
     */
    '-webkit': boolean;
    /**
     * 判断浏览器是否 -moz 内核
     */
    '-moz': boolean;
    /**
     * 判断浏览器是否 -ms 内核
     */
    '-ms': boolean;
    /**
     * 判断浏览器是否 -o 内核
     */
    '-o': boolean;
  }

  /**
   * 获取浏览器信息
   */
  export function browse(): XEBrowse;

  export interface CookieOptions {
    /**
     * 键
     */
    name?: string;
    /**
     * 值
     */
    value?: string;
    /**
     * 路径
     */
    path?: string;
    /**
     * 作用域
     */
    domain?: string;
    /**
     * 设置为安全的,只能用https协议
     */
    secure?: string;
    /**
     * 过期时间,可以指定日期或者字符串，默认天
     */
    expires?: string;
  }

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
    setItem(name: string, value: any, options?: CookieOptions): this;

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
    removeItem(name: string, options?: CookieOptions): number;

    /**
     * 获取 Cookie 所有键
     */
    keys(): any[];

    /**
     * 获取所有 Cookie
     */
    getJSON(): any;
  }

  /**
   * Cookie 操作函数
   * @param name 键/数组/对象
   * @param value 值
   * @param options 可选参数
   */
  export function cookie(name?: string, value?: any, options?: CookieOptions): XECookie;
}
