/**
 * 从左至右遍历，匹配最近的一条数据
 * @param array 数组
 * @param iterate 回调
 * @param context 上下文
 */
export declare function find<T, C>(list: T[], iterate: (this: C, item: T, index: number, list: T[]) => boolean, context?: C): T;

/**
 * 从左至右遍历，匹配最近的一条数据
 * @param obj 对象
 * @param iterate 回调
 * @param context 上下文
 */
export declare function find<T, C>(obj: T, iterate: (this: C, item: any, key: string, obj: T) => boolean, context?: C): any;

declare module './ctor' {
  interface XEUtilsMethods {
    find: typeof find;
  }
}

export default find
