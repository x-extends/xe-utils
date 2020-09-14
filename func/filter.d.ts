
/**
 * 查找匹配第一条数据
 * @param array 数组
 * @param iterate 回调
 * @param context 上下文
 */
export declare function filter<T>(array: T[], iterate: (item: T, index: number, list: T[]) => boolean, context?: any): T[];

/**
 * 查找匹配第一条数据
 * @param obj 数组
 * @param iterate 回调
 * @param context 上下文
 */
export declare function filter<T>(obj: T, iterate: (item: any, key: string, list: T) => boolean, context?: any): any;

declare module './ctor' {
  interface XEUtilsMethods {
    filter: typeof filter;
  }
}

export default filter
