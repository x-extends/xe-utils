import { XEUtilsMethods } from '../xe-utils'

export declare function lastObjectEachIterate(item: any, key: string, obj: any): any;

/**
 * 对象迭代器,从最后开始迭代
 * @param obj 对象
 * @param iteratee 回调
 * @param context 上下文
 */
export declare function lastObjectEach(obj: any, iteratee: typeof lastObjectEachIterate, context ?: any): void;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 对象迭代器,从最后开始迭代
     * @param obj 对象
     * @param iteratee 回调
     * @param context 上下文
     */
    lastObjectEach: typeof lastObjectEach;
  }
}

export default lastObjectEach
