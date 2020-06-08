/**
 * 判断是否小数
 * @param val 值
 */
export declare function isFloat(val: any): boolean;

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 判断是否小数
     * @param val 值
     */
    isFloat: typeof isFloat;
  }
}

export default isFloat
