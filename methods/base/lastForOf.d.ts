import { XEUtilsMethods } from '../xe-utils'

export declare function lastForOfIterate(item: any, index: any, obj: any): any;

/**
 * 迭代器,从最后开始迭代,支持 return false 跳出循环 break
 * @param obj 对象
 * @param iteratee 回调
 * @param context 上下文
 */
export declare function lastForOf(obj: any, iteratee: typeof lastForOfIterate, context?: any): void;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 迭代器,从最后开始迭代,支持 return false 跳出循环 break
     * @param obj 对象
     * @param iteratee 回调
     * @param context 上下文
     */
    lastForOf: typeof lastForOf;
  }
}

export default lastForOf
