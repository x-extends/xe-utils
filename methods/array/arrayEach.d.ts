import { XEUtilsMethods } from '../xe-utils'

export declare function arrayEachIterate(item: any, index: number, list: any): any;

/**
 * 数组迭代器
 * @param obj 对象
 * @param iteratee 回调
 * @param context 上下文
 */
export declare function arrayEach(obj: any, iteratee: typeof arrayEachIterate, context?: any): void;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 数组迭代器
     * @param obj 对象
     * @param iteratee 回调
     * @param context 上下文
     */
    arrayEach: typeof arrayEach;
  }
}

export default arrayEach
