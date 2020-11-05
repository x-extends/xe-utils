/**
 * 通用迭代器,从最后开始迭代
 * @param list 对象
 * @param iterate 回调
 * @param context 上下文
 */
export declare function lastEach<T, C>(list: T[], iterate: (this: C, item: T, index: number, list: T) => void, context?: C): void;
export declare function lastEach<T, C>(obj: T, iterate: (this: C, item: any, key: string, obj: T) => void, context?: C): void;
export declare function lastEach<C>(obj: any[], iterate: (this: C, item: any, key: string, obj: any[]) => void, context?: C): void;
export declare function lastEach<C>(obj: any, iterate: (this: C, item: any, key: string, obj: any) => void, context?: C): void;

declare module './ctor' {
  interface XEUtilsMethods {
    lastEach: typeof lastEach;
  }
}

export default lastEach
