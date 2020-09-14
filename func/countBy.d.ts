/**
 * 集合分组统计,返回各组中对象的数量统计
 * @param list 对象
 * @param iterate 回调/属性
 * @param context 上下文
 */
export declare function countBy<T>(list: T[], iterate: (item: T, index: number, list: T) => string | number, context?: any): { [key: string]: number };

/**
 * 集合分组统计,返回各组中对象的数量统计
 * @param obj 对象
 * @param iterate 回调/属性
 * @param context 上下文
 */
export declare function countBy<T>(obj: T, iterate: (item: any, key: string, obj: T) => string | number, context?: any): { [key: string]: number };

declare module './ctor' {
  interface XEUtilsMethods {
    countBy: typeof countBy;
  }
}

export default countBy
