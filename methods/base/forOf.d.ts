import { XEUtilsMethods } from '../xe-utils'

/**
 * 迭代器,支持 return false 跳出循环 break
 * @param obj 对象
 * @param iteratee 回调 
 * @param context 上下文
 */
export declare function forOf(obj: any, iteratee: Function, context?: any): void;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 迭代器,支持 return false 跳出循环 break
     * @param obj 对象
     * @param iteratee 回调 
     * @param context 上下文
     */
    forOf: typeof forOf;
  }
}

export default forOf