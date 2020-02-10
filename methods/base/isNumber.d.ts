import { XEUtilsMethods } from '../xe-utils'

/**
 * 判断是否 Number 对象
 * @param val 值
 */
export declare function isNumber(val: any): boolean;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 判断是否 Number 对象
     * @param val 值
     */
    isNumber: typeof isNumber;
  }
}

export default isNumber
