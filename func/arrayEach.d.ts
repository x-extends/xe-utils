/**
 * 数组迭代器
 * @param list 对象
 * @param iterate 回调
 * @param context 上下文
 */
export declare function arrayEach<T, C>(list: T[], iterate: (this: C, item: T, index: number, list: T[]) => void, context?: C): void;
export declare function arrayEach<T, C>(obj: T, iterate: (this: C, item: any, index: number, obj: T) => void, context?: C): void;

declare module './ctor' {
  interface XEUtilsMethods {
    arrayEach: typeof arrayEach;
  }
}

export default arrayEach
