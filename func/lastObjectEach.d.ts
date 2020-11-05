/**
 * 对象迭代器,从最后开始迭代
 * @param obj 对象
 * @param iterate 回调
 * @param context 上下文
 */
export declare function lastObjectEach<T, C>(obj: T, iterate: (this: C, item: any, key: string, obj: T) => void, context?: C): void;
export declare function lastObjectEach<C>(obj: any, iterate: (this: C, item: any, key: string, obj: any) => void, context?: C): void;

declare module './ctor' {
  interface XEUtilsMethods {
    lastObjectEach: typeof lastObjectEach;
  }
}

export default lastObjectEach
