import { XEUtilsMethods } from '../xe-utils'

/**
 * 查找匹配第一条数据
 * @param array 数组
 * @param iteratee 回调
 * @param context 上下文
 */
export declare function filter(array: Array<any>, iteratee: Function, context?: any): Array<any>;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 查找匹配第一条数据
     * @param array 数组
     * @param iteratee 回调
     * @param context 上下文
     */
    filter(array: Array<any>, iteratee: Function, context?: any): Array<any>;
  }
}

export default filter