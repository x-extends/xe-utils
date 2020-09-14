/**
 * 判断 Undefined
 * @param val 值
 */
export declare function isUndefined(val: any): val is undefined;

declare module './ctor' {
  interface XEUtilsMethods {
    isUndefined: typeof isUndefined;
  }
}

export default isUndefined
