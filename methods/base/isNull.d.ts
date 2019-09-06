import { XEUtilsMethods } from '../xe-utils'

/**
 * 判断是否为 Null
 * @param val 值
 */
export declare function isNull(val: any): boolean;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 判断是否为 Null
     * @param val 值
     */
    isNull(val: any): boolean;
  }
}

export default isNull