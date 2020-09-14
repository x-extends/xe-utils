/**
 * 集合分组,默认使用键值分组,如果有 iterate 则使用结果进行分组
 * @param list 对象
 * @param iterate 回调/对象属性
 * @param context 上下文
 */
export declare function groupBy<T>(list: T[], iterate: string | number | ((item: T, index: number, obj: T) => string | number), context?: any): { [key: string]: T[] };

/**
 * 集合分组,默认使用键值分组,如果有 iterate 则使用结果进行分组
 * @param obj 对象
 * @param iterate 回调/对象属性
 * @param context 上下文
 */
export declare function groupBy<T>(obj: T, iterate: string | number | ((item: any, key: string, obj: T) => string | number), context?: any): { [key: string]: any[] };

declare module './ctor' {
  interface XEUtilsMethods {
    groupBy: typeof groupBy;
  }
}

export default groupBy
