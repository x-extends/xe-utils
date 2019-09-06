import { XEUtilsMethods } from '../xe-utils'

/**
 * 判断是否 Error 对象
 * @param val 值
 */
export declare function isError(val: any): boolean;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 判断是否 Error 对象
     * @param val 值
     */
    isError(val: any): boolean;
  }
}

export default isError