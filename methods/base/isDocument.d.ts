import { XEUtilsMethods } from '../xe-utils'

/**
 * 判断是否 Document 对象
 * @param val 值
 */
export declare function isDocument(val: any): boolean;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 判断是否 Document 对象
     * @param val 值
     */
    isDocument(val: any): boolean;
  }
}

export default isDocument