
/**
 * 通用迭代器
 * @param list 对象
 * @param iterate 回调
 * @param context 上下文
 */
export declare function each<T>(list: T[], iterate: (item: T, index: number, list: T[]) => void, context?: any): void;

/**
 * 通用迭代器
 * @param obj 对象
 * @param iterate 回调
 * @param context 上下文
 */
export declare function each<T>(obj: T, iterate: (item: any, key: string, obj: T) => void, context?: any): void;

declare module './ctor' {
  interface XEUtilsMethods {
    each: typeof each;
  }
}

export default each
