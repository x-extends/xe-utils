/**
 * 从最后开始的索引值,返回对象第一个索引值
 * @param obj 对象
 * @param val 值
 */
export declare function lastIndexOf(obj: any[], val: any): number;
export declare function lastIndexOf(obj: any, val: any): number;

declare module './ctor' {
  interface XEUtilsMethods {
    lastIndexOf: typeof lastIndexOf;
  }
}

export default lastIndexOf
