/**
 * 判断是否小数
 * @param val 值
 */
export declare function isFloat(val: any): val is number;

declare module './ctor' {
  interface XEUtilsMethods {
    isFloat: typeof isFloat;
  }
}

export default isFloat
