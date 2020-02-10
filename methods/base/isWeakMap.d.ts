import { XEUtilsMethods } from '../xe-utils'

/**
 * 判断是否 WeakMap 对象
 * @param val 值
 */
export declare function isWeakMap(val: any): boolean;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 判断是否 WeakMap 对象
     * @param val 值
     */
    isWeakMap: typeof isWeakMap;
  }
}

export default isWeakMap
