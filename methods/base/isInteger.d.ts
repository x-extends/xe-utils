import { XEUtilsMethods } from '../xe-utils'

/**
 * 判断是否整数
 * @param val 值
 */
export declare function isInteger(val: any): boolean;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 判断是否整数
     * @param val 值
     */
    isInteger: typeof isInteger;
  }
}

export default isInteger
