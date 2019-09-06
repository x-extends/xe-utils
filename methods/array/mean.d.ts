import { XEUtilsMethods } from '../xe-utils'

/**
 * 求平均值函数
 * @param array 对象/数组
 * @param iteratee 回调
 * @param context 上下文
 */
export declare function mean(obj: object | Array<any>, iteratee?: Function, context?: any): number;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 求平均值函数
     * @param array 对象/数组
     * @param iteratee 回调
     * @param context 上下文
     */
    mean(obj: object | Array<any>, iteratee?: Function, context?: any): number;
  }
}

export default mean