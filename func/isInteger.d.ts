/**
 * 判断是否整数
 * @param val 值
 */
export declare function isInteger(val: any): boolean;

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 判断是否整数
     * @param val 值
     */
    isInteger: typeof isInteger;
  }
}

export default isInteger
