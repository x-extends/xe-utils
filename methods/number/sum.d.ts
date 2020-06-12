import { XEUtilsMethods } from '../xe-utils'

export declare function sumIterate(item: any, index: number, list: any[]): any;

/**
 * 求和函数，将数值相加
 * @param obj 对象/数组
 * @param iteratee 回调
 * @param context 上下文
 */
export declare function sum(obj: any, iteratee?: typeof sumIterate | string | number, context?: any): number;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 求和函数，将数值相加
     * @param obj 对象/数组
     * @param iteratee 回调
     * @param context 上下文
     */
    sum: typeof sum;
  }
}

export default sum
