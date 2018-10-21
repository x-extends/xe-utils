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
   * 允许用您自己的实用函数扩展到 XEUtils
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
  isLeapYear(date: ?Date | number | string): boolean;

  /**
   * 判断两个日期是否相同
   * @param date1 日期
   * @param date2 日期
   * @param format 格式化
   */
  isDateSame(date1: Date | number | string, date2: Date | number | string, format: ?string): boolean;

  /**
   * 获取对象类型
   * @param obj 对象
   */
  getType(obj: any): string;

  /**
   * 获取一个全局唯一标识
   * @param prefix 自定义前缀
   */
  uniqueId(prefix: ?string): string;

  /**
   * 返回对象的长度
   * @param obj 对象
   */
  getSize(obj: any): number;

  /**
   * 返回对象第一个索引值
   * @param obj 对象
   * @param val 值
   */
  indexOf(obj: object | Array, val: any): number;

  /**
   * 返回对象第一个索引值
   * @param obj 对象
   * @param iteratee 迭代器/属性
   * @param context 上下文
   */
  findIndexOf(obj: object | Array, iteratee: any, context: ?any): number;

  /**
   * 从最后开始的索引值,返回对象第一个索引值
   * @param obj 对象
   * @param val 值
   */
  lastIndexOf(obj: object | Array, val: any): number;

  /**
   * 从最后开始的索引值,返回对象第一个索引值
   * @param obj 对象
   * @param iteratee 迭代器/属性
   * @param context 上下文
   */
  findLastIndexOf(obj: object | Array, iteratee: any, context: ?any): number;

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
  includeArrays(array1: Array, array2: Array): boolean;

  /**
   * 创建一个绑定上下文的函数
   * @param callback 回调
   * @param context 上下文
   * @param params 额外的参数
   */
  bind(callback: Function, context: any, ...params?: any[]): Function;

  /**
   * 创建一个只能调用一次的函数,只会返回第一次执行后的结果
   * @param callback 回调
   * @param context 上下文
   * @param params 额外的参数
   */
  once(callback: Function, context: any, ...params?: any[]): Function;

  /**
   * 创建一个策略函数，当被重复调用函数的时候，至少每隔多少秒毫秒调用一次该函数
   * @param callback 回调
   * @param wait 毫秒
   * @param options 可选参数
   */
  throttle(callback: Function, wait: number, options: ?object): Function;

  /**
   * 创建一个防反跳策略函数，在函数最后一次调用多少毫秒之后才会再次执行，如果在期间内重复
   * @param callback 回调
   * @param wait 毫秒
   * @param options 可选参数
   */
  debounce(callback: Function, wait: number, options: ?object): Function;

  /**
   * 清空对象; defs如果不传（清空所有属性）、如果传对象（清空并继承)、如果传值(给所有赋值)
   * @param obj 对象
   * @param defs 默认值
   * @param assigns 值
   */
  clear(obj: object | Array, defs: ?object, assigns: ?object): object;

  /**
   * 移除对象属性
   * @param obj 对象
   * @param iteratee 迭代器/值
   */
  remove(obj: object | Array, iteratee: ?any): object;

  /**
   * 浅拷贝一个或者多个对象到目标对象中，如果第一值是true，则使用深拷贝
   * @param deep 是否深拷贝
   * @param target 目标
   */
  assign(deep: object | boolean, ...target?: object[]): object;

  /**
   * 浅拷贝一个或者多个对象到目标对象中，如果第一值是true，则使用深拷贝
   * @param deep 是否深拷贝
   * @param target 目标
   */
  extend(deep: object | boolean, ...target?: object[]): object;

  /**
   * 将一个或者多个对象值解构到目标对象
   * @param obj 对象
   * @param target 目标
   */
  destructuring(obj: object, ...target?: object[]): object;

  /**
   * 字符串转 JSON
   * @param str 字符串
   */
  stringToJson(str: string): any;

  /**
   * JSON 转字符串
   * @param obj 对象
   */
  sonToString(obj: any): string;

  /**
   * 获取对象所有属性
   * @param obj 对象
   */
  keys(obj: any): Array;

  /**
   * 获取对象所有值
   * @param obj 对象
   */
  values(obj: any): Array;

  /**
   * 获取对象所有属性、值
   * @param obj 对象
   */
  entries(obj: any): Array;

  /**
   * 获取对象第一个值
   * @param obj 对象
   */
  first(obj: object | Array): any;

  /**
   * 获取对象最后一个值
   * @param obj 对象
   */
  last(obj: object | Array): any;

  /**
   * 迭代器,支持 return false 跳出循环
   * @param obj 对象
   * @param iteratee 回调 
   * @param context 上下文
   */
  forOf(obj: any, iteratee: Function, context: ?any): void;

  /**
   * 通用迭代器
   * @param obj 对象
   * @param iteratee 回调 
   * @param context 上下文
   */
  each(obj: any, iteratee: Function, context: ?any): void;

  /**
   * 数组迭代器
   * @param obj 对象
   * @param iteratee 回调 
   * @param context 上下文
   */
  arrayEach(obj: any, iteratee: Function, context: ?any): void;

  /**
   * 对象迭代器
   * @param obj 对象
   * @param iteratee 回调 
   * @param context 上下文
   */
  objectEach(obj: any, iteratee: Function, context: ?any): void;

  /**
   * 迭代器,从最后开始迭代,支持 return false 跳出循环
   * @param obj 对象
   * @param iteratee 回调 
   * @param context 上下文
   */
  forOfLast(obj: any, iteratee: Function, context: ?any): void;

  /**
   * 通用迭代器,从最后开始迭代
   * @param obj 对象
   * @param iteratee 回调 
   * @param context 上下文
   */
  lastEach(obj: any, iteratee: Function, context: ?any): void;

  /**
   * 数组迭代器,从最后开始迭代
   * @param obj 对象
   * @param iteratee 回调 
   * @param context 上下文
   */
  arrayLastEach(obj: any, iteratee: Function, context: ?any): void;

  /**
   * 对象迭代器,从最后开始迭代
   * @param obj 对象
   * @param iteratee 回调 
   * @param context 上下文
   */
  objectLastEach(obj: any, iteratee: Function, context: ?any): void;

  /**
   * 集合分组,默认使用键值分组,如果有 iteratee 则使用结果进行分组
   * @param obj 对象
   * @param iteratee 回调/属性
   * @param context 上下文
   */
  groupBy(obj: any, iteratee: Function, context: ?any): object;

  /**
   * 集合分组统计,返回各组中对象的数量统计
   * @param obj 对象
   * @param iteratee 回调/属性
   * @param context 上下文
   */
  countBy(obj: any, iteratee: Function, context: ?any): object;

  /**
   * 序号列表生成函数
   * @param start 起始值
   * @param stop 结束值
   * @param step 自增值
   */
  range(start: number, stop: number, step: ?number): Array;

  /**
   * 指定方法后的返回值组成的新对象
   * @param obj 对象
   * @param iteratee 回调
   * @param context 上下文
   */
  objectMap(obj: any, iteratee: Function, context: ?any): object;

  /**
   * 浅拷贝/深拷贝
   * @param obj 对象
   * @param deep 是否深拷贝
   */
  clone(obj: object | Array, deep: boolean): object | Array;

  /**
   * 数组去重
   * @param array 数组
   */
  uniq(array: Array): Array;

  /**
   * 将多个数的值返回唯一的并集数组
   * @param array 数组
   */
  union(...array: any[]): Array;

  /**
   * 数组按属性值升序
   * @param array 数组
   * @param iteratee 回调/属性
   * @param context 上下文
   */
  sort(array: Array, iteratee: Function, context: ?any): Array;

  /**
   * 数组按属性值升序
   * @param array 数组
   * @param iteratee 回调/属性
   * @param context 上下文
   */
  sortBy(array: Array, iteratee: Function, context: ?any): Array;

  /**
   * 将一个数组随机打乱，返回一个新的数组
   * @param array 数组
   */
  shuffle(array: Array): Array;

  /**
   * 从一个数组中随机返回几个元素
   * @param array 数组
   * @param number 返回个数
   */
  sample(array: Array, number: number): Array;

  /**
   * 对象中的值中的每一项运行给定函数,如果函数对任一项返回 true,则返回 true,否则返回 false
   * @param array 数组
   * @param iteratee 回调
   * @param context 上下文
   */
  some(array: Array, iteratee: Function, context: ?any): Array;

  /**
   * 对象中的值中的每一项运行给定函数,如果该函数对每一项都返回 true,则返回 true,否则返回 false
   * @param array 数组
   * @param iteratee 回调
   * @param context 上下文
   */
  every(array: Array, iteratee: Function, context: ?any): Array;

  /**
   * 查找匹配第一条数据
   * @param array 数组
   * @param iteratee 回调
   * @param context 上下文
   */
  filter(array: Array, iteratee: Function, context: ?any): any;

  /**
   * 查找匹配第一条数据的键
   * @param array 数组
   * @param iteratee 回调
   * @param context 上下文
   */
  findKey(array: Array, iteratee: Function, context: ?any): string | number;

  /**
   * 指定方法后的返回值组成的新数组
   * @param array 数组
   * @param iteratee 回调
   * @param context 上下文
   */
  map(array: Array, iteratee: Function, context: ?any): Array;

  /**
   * 复制数组的一部分到同一数组中的另一个位置,数组大小不变
   * @param array 数组
   * @param target 从该位置开始替换数据
   * @param start 从该位置开始读取数据，默认为 0 。如果为负值，表示倒数
   * @param end 到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数
   */
  copyWithin(array: Array, target: number, start: ?Number, end: ?number): Array;

  /**
   * 求和函数，将数值相加
   * @param obj 对象/数组
   * @param iteratee 回调
   * @param context 上下文
   */
  sum(obj: object | Array, iteratee: ?Function, context: ?any): number;

  /**
   * 求平均值函数
   * @param array 对象/数组
   * @param iteratee 回调
   * @param context 上下文
   */
  mean(obj: object | Array, iteratee: ?Function, context: ?any): number;

  /**
   * 根据数组或可迭代对象中创建一个新的数组
   * @param array 对象/数组
   * @param iteratee 回调
   * @param context 上下文
   */
  toArray(obj: object | Array, iteratee: ?Function, context: ?any): Array;

  /**
   * 接收一个函数作为累加器，数组中的每个值（从左到右）开始合并，最终为一个值
   * @param array 数组
   * @param iteratee 回调
   * @param initialValue 默认值
   */
  reduce(array: Array, iteratee: ?Function, initialValue: ?any): any;

  /**
   * 将每个数组中相应位置的值合并在一起
   * @param arrays 多个数组
   */
  zip(...arrays: Array[]): Array;

  /**
   * 与 zip 相反
   * @param arrays 数组
   */
  unzip(arrays: Array): Array;

  /**
   * 将一个数组分割成大小的组。如果数组不能被平均分配，那么最后一块将是剩下的元素
   * @param array 数组
   * @param size 每组大小
   */
  chunk(array: Array, size: number): Array;

  /**
   * 获取数组对象中某属性值，返回一个数组
   * @param array 数组
   * @param key 键
   */
  pluck(array: Array, key: string): Array

  /**
   * 一个高性能的树结构转换函数，将一个带层级的数据列表转成树结构
   * @param array 数组
   * @param options 可选参数
   */
  arrayToTree(array: Array, options: ?object): Array;

  /**
   * 将一个树结构转成数组列表
   * @param array 数组
   * @param options 可选参数
   */
  treeToArray(array: Array, options: ?object): Array;

  /**
   * 返回当前时间戳
   */
  timestamp(): number;

  /**
   * 任意格式字符串转为日期
   * @param str 字符串/日期/时间戳
   * @param format 解析格式 yyyy MM dd HH mm ss SSS
   */
  stringToDate(str: string | Date | number, format: ?string): Date;

  /**
   * 日期格式化为任意格式字符串
   * @param date 字符串/日期/时间戳
   * @param format 格式化 默认：yyyy-MM-dd HH:mm:ss.SSS
   * @param options 可选参数
   */
  dateToString(date: string | Date | number, format: ?string, options: ?object): string;

  /**
   * 返回前几年或后几年的日期,可以指定年初(first)、年末(last)、月份(0~11)，默认当前
   * @param date 字符串/日期/时间戳
   * @param year 年(默认当前年)、前几个年(数值)、后几个年(数值)
   * @param month 获取哪月(null默认当前年)、年初(first)、年末(last)、指定月份（0-11）
   */
  getWhatYear(date: string | Date | number, year: ?number | string, month: ?number | string): Date;

  /**
   * 返回前几月或后几月的日期,可以指定月初(first)、月末(last)、天数，默认当前
   * @param date 字符串/日期/时间戳
   * @param month 月(默认当前月)、前几个月、后几个月
   * @param day 获取哪天(null默认当前天)、月初(first)、月末(last)、指定天数(数值)
   */
  getWhatMonth(date: string | Date | number, month: ?number | string, day: ?number | string): Date;

  /**
   * 返回前几周或后几周的日期,可以指定星期几(0~6)，默认当前
   * @param date 字符串/日期/时间戳
   * @param month 周(默认当前周)、前几周、后几周
   * @param day 星期天(默认0)、星期一(1)、星期二(2)、星期三(3)、星期四(4)、星期五(5)、星期六(6)
   */
  getWhatWeek(date: string | Date | number, week: ?number | string, day: ?number | string): Date;

  /**
   * 返回前几天或后几天的日期
   * @param date 字符串/日期/时间戳
   * @param day 天(默认当天)、前几天、后几天
   * @param mode 获取时分秒(null默认当前时分秒)、日初(first)、日末(last)
   */
  getWhatDay(date: string | Date | number, day: ?number, mode: ?number | string): Date;

  /**
   * 返回某个年份的天数,可以指定前几个年或后几个年，默认当前
   * @param date 字符串/日期/时间戳
   * @param year 年(默认当年)、前几个年、后几个年
   */
  getDayOfYear(date: string | Date | number, year: ?number): Date;

  /**
   * 返回某个年份的第几天
   * @param date 字符串/日期/时间戳
   */
  getYearDay(date: string | Date | number): number;

  /**
   * 返回某个年份的第几周
   * @param date 字符串/日期/时间戳
   */
  getYearWeek(date: string | Date | number): number;

  /**
   * 返回某个月份的第几周
   * @param date 字符串/日期/时间戳
   */
  getMonthWeek(date: string | Date | number): number;

  /**
   * 返回某个月份的天数,可以指定前几个月或后几个月，默认当前
   * @param date 字符串/日期/时间戳
   * @param month 月(默认当月)、前几个月、后几个月
   */
  getDayOfMonth(date: string | Date | number, month: number): number;

  /**
   * 返回两个日期之间差距,如果结束日期小于开始日期 done 为 fasle
   * @param startDate 开始日期
   * @param endDate 结束日期或当期日期
   * @param rules 自定义计算规则
   */
  getDateDiff(startDate: string | Date | number, endDate: string | Date | number, rules: ?object): object;

  /**
   * 获取一个指定范围内随机数
   * @param min 最小值
   * @param max 最大值
   */
  random(min: number, max: number): number;

  /**
   * 获取最小值
   * @param array 数组
   * @param iteratee 回调/属性
   */
  min(array: Array, iteratee: string | Function): number;

  /**
   * 获取最大值
   * @param array 数组
   * @param iteratee 回调/属性
   */
  min(array: Array, iteratee: string | Function): number;

  /**
   * 数值千分位分隔符、小数点
   * @param num 数值/字符串
   * @param options 可选参数
   */
  commafy(num: string | number, options: ?object): string;

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
    ```
   */
  cookie(name: ?string | Array | object, value: ?any, options: ?object): object;
}

/**
 * javascript 函数库、工具类
 */
declare var XEUtils: XEUtilsMethods;

export default XEUtils;