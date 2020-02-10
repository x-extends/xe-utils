import { XEUtilsMethods } from '../xe-utils'

export declare function filterIterate(item: any, index: number, list: any): any;

/**
 * 查找匹配第一条数据
 * @param array 数组
 * @param iteratee 回调
 * @param context 上下文
 */
export declare function filter(array: any[], iteratee: typeof filterIterate, context?: any): any[];

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 查找匹配第一条数据
     * @param array 数组
     * @param iteratee 回调
     * @param context 上下文
     */
    filter: typeof filter;
  }
}

export default filter
