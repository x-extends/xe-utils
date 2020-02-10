import { XEUtilsMethods } from '../xe-utils'

/**
 * 判断是否 WeakSet 对象
 * @param val 值
 */
export declare function isWeakSet(val: any): boolean;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 判断是否 WeakSet 对象
     * @param val 值
     */
    isWeakSet: typeof isWeakSet;
  }
}

export default isWeakSet
