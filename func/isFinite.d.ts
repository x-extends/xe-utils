/**
 * 判断是否为有限数值
 * @param val 值
 */
export declare function isFinite(val: any): val is Number;

declare module './ctor' {
  interface XEUtilsMethods {
    isFinite: typeof isFinite;
  }
}

export default isFinite
