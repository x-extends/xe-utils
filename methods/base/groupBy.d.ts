import { XEUtilsMethods } from '../xe-utils'

/**
 * 集合分组,默认使用键值分组,如果有 iteratee 则使用结果进行分组
 * @param obj 对象
 * @param iteratee 回调/属性
 * @param context 上下文
 */
export declare function groupBy(obj: any, iteratee: Function, context?: any): any;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 集合分组,默认使用键值分组,如果有 iteratee 则使用结果进行分组
     * @param obj 对象
     * @param iteratee 回调/属性
     * @param context 上下文
     */
    groupBy: typeof groupBy;
  }
}

export default groupBy