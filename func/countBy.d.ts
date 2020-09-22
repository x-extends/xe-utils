/**
 * 集合分组统计,返回各组中对象的数量统计
 * @param list 对象
 * @param iterate 回调/属性
 * @param context 上下文
 */
export declare function countBy<T, C>(list: T[], iterate: (this: C, item: T, index: number, list: T[]) => string | number, context?: C): { [key: string]: number };

/**
 * 集合分组统计,返回各组中对象的数量统计
 * @param obj 对象
 * @param iterate 回调/属性
 * @param context 上下文
 */
export declare function countBy<T, C>(obj: T, iterate: (this: C, item: any, key: string, obj: T) => string | number, context?: C): { [key: string]: number };

declare module './ctor' {
  interface XEUtilsMethods {
    countBy: typeof countBy;
  }
}

export default countBy
