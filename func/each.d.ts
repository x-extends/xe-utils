export declare function eachIterate(item: any, index: any, obj: any): any;

/**
 * 通用迭代器
 * @param obj 对象
 * @param iterate 回调
 * @param context 上下文
 */
export declare function each(obj: any, iterate: typeof eachIterate, context?: any): void;

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 通用迭代器
     * @param obj 对象
     * @param iterate 回调
     * @param context 上下文
     */
    each: typeof each;
  }
}

export default each
