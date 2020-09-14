/**
 * 从最后开始的索引值,返回对象第一个索引值
 * @param list 数组
 * @param iterate 迭代器
 * @param context 上下文
 */
export declare function findLastIndexOf<T>(list: T, iterate: (item: T, index: number, list: T[]) => boolean, context?: any): T;

/**
 * 从最后开始的索引值,返回对象第一个索引值
 * @param obj 对象
 * @param iterate 迭代器
 * @param context 上下文
 */
export declare function findLastIndexOf(obj: any, iterate: (item: any, key: string, obj: any) => boolean, context?: any): any;

declare module './ctor' {
  interface XEUtilsMethods {
    findLastIndexOf: typeof findLastIndexOf;
  }
}

export default findLastIndexOf
