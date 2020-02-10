import { XEUtilsMethods } from '../xe-utils'

export declare function findLastIndexOfIterate(item: any, index: any, obj: any): any;

/**
 * 从最后开始的索引值,返回对象第一个索引值
 * @param obj 对象
 * @param iteratee 迭代器
 * @param context 上下文
 */
export declare function findLastIndexOf(obj: any, iteratee: typeof findLastIndexOfIterate, context?: any): any;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 从最后开始的索引值,返回对象第一个索引值
     * @param obj 对象
     * @param iteratee 迭代器
     * @param context 上下文
     */
    findLastIndexOf: typeof findLastIndexOf;
  }
}

export default findLastIndexOf
