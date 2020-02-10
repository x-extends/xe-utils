import { XEUtilsMethods } from '../xe-utils'

export declare function eachIterate(item: any, index: any, obj: any): any;

/**
 * 通用迭代器
 * @param obj 对象
 * @param iteratee 回调
 * @param context 上下文
 */
export declare function each(obj: any, iteratee: typeof eachIterate, context?: any): void;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 通用迭代器
     * @param obj 对象
     * @param iteratee 回调
     * @param context 上下文
     */
    each: typeof each;
  }
}

export default each
