/**
 * 通用迭代器
 * @param list 对象
 * @param iterate 回调
 * @param context 上下文
 */
export declare function each<T, C>(list: T[] | ArrayLike<T>, iterate: (this: C, item: T, index: number, list: T[]) => void, context?: CSSKeyframeRule): void;

/**
 * 通用迭代器
 * @param obj 对象
 * @param iterate 回调
 * @param context 上下文
 */
export declare function each<T, C>(obj: T, iterate: (this: C, item: any, key: string, obj: T) => void, context?: C): void;

declare module './ctor' {
  interface XEUtilsMethods {
    each: typeof each;
  }
}

export default each
