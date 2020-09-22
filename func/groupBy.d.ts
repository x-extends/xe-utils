/**
 * 集合分组,默认使用键值分组,如果有 iterate 则使用结果进行分组
 * @param list 对象
 * @param iterate 回调/对象属性
 * @param context 上下文
 */
export declare function groupBy<T, C>(list: T[], iterate: string | number | ((this: C, item: T, index: number, obj: T) => string | number), context?: C): { [key: string]: T[] };

/**
 * 集合分组,默认使用键值分组,如果有 iterate 则使用结果进行分组
 * @param obj 对象
 * @param iterate 回调/对象属性
 * @param context 上下文
 */
export declare function groupBy<T, C>(obj: T, iterate: string | number | ((this: C, item: any, key: string, obj: T) => string | number), context?: C): { [key: string]: any[] };

declare module './ctor' {
  interface XEUtilsMethods {
    groupBy: typeof groupBy;
  }
}

export default groupBy
