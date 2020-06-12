import { XEUtilsMethods } from '../xe-utils'

export declare function groupByIterate(item: any, index: any, obj: any): any;

/**
 * 集合分组,默认使用键值分组,如果有 iteratee 则使用结果进行分组
 * @param obj 对象
 * @param iteratee 回调/对象属性
 * @param context 上下文
 */
export declare function groupBy(obj: any, iteratee: string | number | typeof groupByIterate, context?: any): any;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 集合分组,默认使用键值分组,如果有 iteratee 则使用结果进行分组
     * @param obj 对象
     * @param iteratee 回调/对象属性
     * @param context 上下文
     */
    groupBy: typeof groupBy;
  }
}

export default groupBy
