import { XEUtilsMethods } from '../xe-utils'

/**
 * 查找匹配第一条数据的键
 * @param array 数组
 * @param iteratee 回调
 * @param context 上下文
 */
export declare function findKey(array: Array<any>, iteratee: Function, context?: any): string | number;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 查找匹配第一条数据的键
     * @param array 数组
     * @param iteratee 回调
     * @param context 上下文
     */
    findKey(array: Array<any>, iteratee: Function, context?: any): string | number;
  }
}

export default findKey