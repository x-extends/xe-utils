/**
 * 判断是否 Object 对象
 * @param val 值
 */
export declare function isObject(val: any): val is object;

declare module './ctor' {
  interface XEUtilsMethods {
    isObject: typeof isObject;
  }
}

export default isObject
