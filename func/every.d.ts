
/**
 * 对象中的值中的每一项运行给定函数,如果该函数对每一项都返回 true,则返回 true,否则返回 false
 * @param list 数组
 * @param iterate 回调
 * @param context 上下文
 */
export declare function every<T, C>(list: T[], iterate: (this: C, item: T, index: number, list: T[]) => boolean, context?: C): boolean;

/**
 * 对象中的值中的每一项运行给定函数,如果该函数对每一项都返回 true,则返回 true,否则返回 false
 * @param list 数组
 * @param iterate 回调
 * @param context 上下文
 */
export declare function every<T, C>(list: T, iterate: (this: C, item: any, key: string, list: T) => boolean, context?: C): boolean;

declare module './ctor' {
  interface XEUtilsMethods {
    every: typeof every;
  }
}

export default every
