export declare function countByIterate(item: any, index: any, obj: any): any;

/**
 * 集合分组统计,返回各组中对象的数量统计
 * @param obj 对象
 * @param iterate 回调/属性
 * @param context 上下文
 */
export declare function countBy(obj: any, iterate: typeof countByIterate, context?: any): any;

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 集合分组统计,返回各组中对象的数量统计
     * @param obj 对象
     * @param iterate 回调/属性
     * @param context 上下文
     */
    countBy: typeof countBy;
  }
}

export default countBy
