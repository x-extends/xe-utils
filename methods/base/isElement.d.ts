import { XEUtilsMethods } from '../xe-utils'

/**
 * 判断是否 Element 对象
 * @param val 值
 */
export declare function isElement(val: any): boolean;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 判断是否 Element 对象
     * @param val 值
     */
    isElement(val: any): boolean;
  }
}

export default isElement