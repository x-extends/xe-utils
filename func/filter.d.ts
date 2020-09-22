
/**
 * 查找匹配第一条数据
 * @param array 数组
 * @param iterate 回调
 * @param context 上下文
 */
export declare function filter<T, C>(array: T[], iterate: (this: C, item: T, index: number, list: T[]) => boolean, context?: C): T[];

/**
 * 查找匹配第一条数据
 * @param obj 数组
 * @param iterate 回调
 * @param context 上下文
 */
export declare function filter<T, C>(obj: T, iterate: (this: C, item: any, key: string, list: T) => boolean, context?: C): any;

declare module './ctor' {
  interface XEUtilsMethods {
    filter: typeof filter;
  }
}

export default filter
