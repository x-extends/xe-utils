/**
 * 判断是否整数
 * @param val 值
 */
export declare function isInteger(val: any): val is Number;

declare module './ctor' {
  interface XEUtilsMethods {
    isInteger: typeof isInteger;
  }
}

export default isInteger
