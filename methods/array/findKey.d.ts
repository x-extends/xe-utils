import { XEUtilsMethods } from '../xe-utils'

export declare function findKeyIterate(item: any, index: number, list: any): any;

/**
 * 查找匹配第一条数据的键
 * @param array 数组
 * @param iteratee 回调
 * @param context 上下文
 */
export declare function findKey(array: any[], iteratee: typeof findKeyIterate, context?: any): any;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 查找匹配第一条数据的键
     * @param array 数组
     * @param iteratee 回调
     * @param context 上下文
     */
    findKey: typeof findKey;
  }
}

export default findKey
