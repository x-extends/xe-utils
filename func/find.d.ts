/**
 * 从左至右遍历，匹配最近的一条数据
 * @param array 数组
 * @param iterate 回调
 * @param context 上下文
 */
export declare function find<T>(list: T[], iterate: (item: T, index: number, list: T[]) => boolean, context?: any): T;

/**
 * 从左至右遍历，匹配最近的一条数据
 * @param obj 对象
 * @param iterate 回调
 * @param context 上下文
 */
export declare function find<T>(obj: T, iterate: (item: any, key: string, obj: T) => boolean, context?: any): any;

declare module './ctor' {
  interface XEUtilsMethods {
    find: typeof find;
  }
}

export default find
