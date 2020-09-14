/**
 * 查找匹配第一条数据的键
 * @param list 数组
 * @param iterate 回调
 * @param context 上下文
 */
export declare function findKey<T>(list: T[], iterate: (item: T, index: number, list: T[])=> boolean, context?: any): number;

/**
 * 查找匹配第一条数据的键
 * @param obj 对象
 * @param iterate 回调
 * @param context 上下文
 */
export declare function findKey<T>(obj: T, iterate: (item: any, key: string, obj: T)=> boolean, context?: any): any;

declare module './ctor' {
  interface XEUtilsMethods {
    findKey: typeof findKey;
  }
}

export default findKey
