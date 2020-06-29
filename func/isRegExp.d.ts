/**
 * 判断是否 RegExp 对象
 * @param val 值
 */
export declare function isRegExp(val: any): boolean;

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 判断是否 RegExp 对象
     * @param val 值
     */
    isRegExp: typeof isRegExp;
  }
}

export default isRegExp
