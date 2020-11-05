/**
 * 数组迭代器,从最后开始迭代
 * @param list 对象
 * @param iterate 回调
 * @param context 上下文
 */
export declare function lastArrayEach<T, C>(list: T[], iterate: (this: C, item: T, index: number, list: T[]) => void, context?: C): void;
export declare function lastArrayEach<T, C>(list: T, iterate: (this: C, item: any, index: number, list: T) => void, context?: C): void;
export declare function lastArrayEach<C>(list: any[], iterate: (this: C, item: any, index: number, list: any[]) => void, context?: C): void;
export declare function lastArrayEach<C>(list: any, iterate: (this: C, item: any, index: number, list: any) => void, context?: C): void;

declare module './ctor' {
  interface XEUtilsMethods {
    lastArrayEach: typeof lastArrayEach;
  }
}

export default lastArrayEach
