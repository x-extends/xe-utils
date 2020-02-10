import { XEUtilsMethods } from '../xe-utils'

export declare function findIterate(item: any, index: number, list: any): any;

/**
 * 查找匹配第一条数据
 * @param array 数组
 * @param iteratee 回调
 * @param context 上下文
 */
export declare function find(array: any[], iteratee: typeof findIterate, context?: any): any;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 查找匹配第一条数据
     * @param array 数组
     * @param iteratee 回调
     * @param context 上下文
     */
    find: typeof find;
  }
}

export default find
