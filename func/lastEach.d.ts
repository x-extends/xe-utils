export declare function lastEachIterate(item: any, index: any, obj: any): any;

/**
 * 通用迭代器,从最后开始迭代
 * @param obj 对象
 * @param iterate 回调
 * @param context 上下文
 */
export declare function lastEach(obj: any, iterate: typeof lastEachIterate, context?: any): void;

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 通用迭代器,从最后开始迭代
     * @param obj 对象
     * @param iterate 回调
     * @param context 上下文
     */
    lastEach: typeof lastEach;
  }
}

export default lastEach
