/**
 * 判断是否 Number 对象
 * @param val 值
 */
export declare function isNumber(val: any): boolean;

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 判断是否 Number 对象
     * @param val 值
     */
    isNumber: typeof isNumber;
  }
}

export default isNumber
