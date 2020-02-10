import { XEUtilsMethods } from '../xe-utils'

/**
 * 判断是否数组
 * @param val 值
 */
export declare function isArray(val: any): boolean;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 判断是否数组
     * @param val 值
     */
    isArray: typeof isArray;
  }
}

export default isArray
