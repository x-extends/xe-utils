/**
 * 数组迭代器,从最后开始迭代
 * @param obj 对象
 * @param iterate 回调
 * @param context 上下文
 */
export declare function lastArrayEach<T, C>(obj: T[], iterate: (this: C, item: T, index: number, list: T[]) => void, context?: C): void;

declare module './ctor' {
  interface XEUtilsMethods {
    lastArrayEach: typeof lastArrayEach;
  }
}

export default lastArrayEach
