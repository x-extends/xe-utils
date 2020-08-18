import { XEUtilsMethods } from '../xe-utils'

export declare function findLastIterate(item: any, index: number, list: any): any;

/**
 * 从右至左遍历，匹配最近的一条数据
 * @param array 数组
 * @param iterate 回调
 * @param context 上下文
 */
export declare function findLast(array: any[], iterate: typeof findLastIterate, context?: any): any;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 从右至左遍历，匹配最近的一条数据
     * @param array 数组
     * @param iterate 回调
     * @param context 上下文
     */
    findLast: typeof findLast;
  }
}

export default findLast
