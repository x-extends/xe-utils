export declare function findLastIndexOfIterate(item: any, index: any, obj: any): any;

/**
 * 从最后开始的索引值,返回对象第一个索引值
 * @param obj 对象
 * @param iterate 迭代器
 * @param context 上下文
 */
export declare function findLastIndexOf(obj: any, iterate: typeof findLastIndexOfIterate, context?: any): any;

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 从最后开始的索引值,返回对象第一个索引值
     * @param obj 对象
     * @param iterate 迭代器
     * @param context 上下文
     */
    findLastIndexOf: typeof findLastIndexOf;
  }
}

export default findLastIndexOf
