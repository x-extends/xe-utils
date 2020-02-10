import { XEUtilsMethods } from '../xe-utils'

export declare function findIndexOfIterate(item: any, index: any, obj: any): any;

/**
 * 返回对象第一个索引值
 * @param obj 对象
 * @param iteratee 迭代器
 * @param context 上下文
 */
export declare function findIndexOf(obj: any, iteratee: typeof findIndexOfIterate, context?: any): any;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 返回对象第一个索引值
     * @param obj 对象
     * @param iteratee 迭代器
     * @param context 上下文
     */
    findIndexOf: typeof findIndexOf;
  }
}

export default findIndexOf
