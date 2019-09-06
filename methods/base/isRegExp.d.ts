import { XEUtilsMethods } from '../xe-utils'

/**
 * 判断是否 RegExp 对象
 * @param val 值
 */
export declare function isRegExp(val: any): boolean;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 判断是否 RegExp 对象
     * @param val 值
     */
    isRegExp(val: any): boolean;
  }
}

export default isRegExp