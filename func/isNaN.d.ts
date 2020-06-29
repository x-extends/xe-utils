/**
 * 判断是否非数值
 * @param val 值
 */
export declare function isNaN(val: any): boolean;

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 判断是否非数值
     * @param val 值
     */
    isNaN: typeof isNaN;
  }
}

export default isNaN
