/**
 * 数组迭代器
 * @param list 对象
 * @param iterate 回调
 * @param context 上下文
 */
export declare function arrayEach<T>(list: T[], iterate: (item: T, index: number, list: T[]) => void, context?: any): void;

declare module './ctor' {
  interface XEUtilsMethods {
    arrayEach: typeof arrayEach;
  }
}

export default arrayEach
