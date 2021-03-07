/**
 * 从最后开始的索引值,返回数组第一个索引值
 * @param list 数组
 * @param val 值
 */
export declare function arrayLastIndexOf<T>(list: ArrayLike<T>, val: any): number;
export declare function arrayLastIndexOf(list: any[], val: any): number;

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 从最后开始的索引值,返回数组第一个索引值
     * @param list 数组
     * @param val 值
     */
    arrayLastIndexOf: typeof arrayLastIndexOf;
  }
}

export default arrayLastIndexOf
