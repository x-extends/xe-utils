/**
 * 转字符串
 * @param obj 值
 */
export declare function toString(obj: any): string;

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 转字符串
     * @param obj 值
     */
    toString: typeof toString;
  }
}

export default toString
