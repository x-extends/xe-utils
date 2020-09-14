/**
 * 返回对象第一个索引值
 * @param list 数组
 * @param iterate 迭代器
 * @param context 上下文
 */
export declare function findIndexOf<T>(list: T[], iterate: (item: T, index: any, obj: T[]) => boolean, context?: any): number;

/**
 * 返回对象第一个索引值
 * @param obj 对象
 * @param iterate 迭代器
 * @param context 上下文
 */
export declare function findIndexOf<T>(obj: T, iterate: (item: any, key: string, obj: T) => boolean, context?: any): number;

declare module './ctor' {
  interface XEUtilsMethods {
    findIndexOf: typeof findIndexOf;
  }
}

export default findIndexOf
