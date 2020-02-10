import { XEUtilsMethods } from '../xe-utils'

/**
 * 数组按属性值升序
 * @param array 数组
 * @param iteratee 回调/属性
 * @param context 上下文
 */
export declare function sortBy(array: any[], iteratee: any[] | Function | string, context?: any): any[];

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 数组按属性值升序
     * @param array 数组
     * @param iteratee 回调/属性
     * @param context 上下文
     */
    sortBy: typeof sortBy;
  }
}

export default sortBy
