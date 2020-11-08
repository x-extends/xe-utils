/**
 * 获取数组对象中某属性值，返回一个数组
 * @param array 数组
 * @param key 键
 * @example
 */
export declare function pluck(array: any[], key: string | number): any[];

declare module './ctor' {
  interface XEUtilsMethods {
    pluck: typeof pluck;
  }
}

export default pluck
