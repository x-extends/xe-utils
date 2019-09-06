import { XEUtilsMethods } from '../xe-utils'

/**
 * 通用迭代器
 * @param obj 对象
 * @param iteratee 回调 
 * @param context 上下文
 */
export declare function each(obj: any, iteratee: Function, context?: any): void;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 通用迭代器
     * @param obj 对象
     * @param iteratee 回调 
     * @param context 上下文
     */
    each(obj: any, iteratee: Function, context?: any): void;
  }
}

export default each
  