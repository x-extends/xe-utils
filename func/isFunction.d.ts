/**
 * 判断是否方法
 * @param val 值
 */
export declare function isFunction(val: any): val is Function;

declare module './ctor' {
  interface XEUtilsMethods {
    isFunction: typeof isFunction;
  }
}

export default isFunction
