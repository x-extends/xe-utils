import { XEUtilsMethods } from '../xe-utils'

/**
 * 指定方法后的返回值组成的新数组
 * @param array 数组
 * @param iteratee 回调
 * @param context 上下文
 */
export declare function map(array: any[], iteratee: Function, context?: any): any[];

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 指定方法后的返回值组成的新数组
     * @param array 数组
     * @param iteratee 回调
     * @param context 上下文
     */
    map: typeof map;
  }
}

export default map