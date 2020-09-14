/**
 * 根据 keys 过滤指定的属性值，返回一个新的对象
 * @param obj 对象
 * @param array 数组或字符串或方法
 */
export declare function pick(obj: any, array: string[]): any;

declare module './ctor' {
  interface XEUtilsMethods {
    pick: typeof pick;
  }
}

export default pick
