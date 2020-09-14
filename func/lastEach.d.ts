/**
 * 通用迭代器,从最后开始迭代
 * @param list 对象
 * @param iterate 回调
 * @param context 上下文
 */
export declare function lastEach<T>(list: T[], iterate: (item: T, index: any, list: T) => void, context?: any): void;

/**
 * 通用迭代器,从最后开始迭代
 * @param obj 对象
 * @param iterate 回调
 * @param context 上下文
 */
export declare function lastEach(obj: any, iterate: (item: any, key: string, obj: any) => void, context?: any): void;

declare module './ctor' {
  interface XEUtilsMethods {
    lastEach: typeof lastEach;
  }
}

export default lastEach
