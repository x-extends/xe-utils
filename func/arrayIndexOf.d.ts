/**
 * 返回数组第一个索引值
 * @param list 数组
 * @param val 值
 */
export declare function arrayIndexOf<T>(list: ArrayLike<T>, val: any): number;
export declare function arrayIndexOf(list: any[], val: any): number;

declare module './ctor' {
  interface XEUtilsMethods {
    arrayIndexOf: typeof arrayIndexOf;
  }
}

export default arrayIndexOf
