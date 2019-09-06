import { XEUtilsMethods } from '../xe-utils'

/**
 * 判断是否 Boolean 对象
 * @param val 值
 */
export declare function isBoolean(val: any): boolean;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 判断是否 Boolean 对象
     * @param val 值
     */
    isBoolean(val: any): boolean;
  }
}

export default isBoolean