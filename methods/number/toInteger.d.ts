import { XEUtilsMethods } from '../xe-utils'

/**
 * 转整数
 * @param num 数值/字符串
 */
export declare function toInteger(num: any): number;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 转整数
     * @param num 数值/字符串
     */
    toInteger: typeof toInteger;
  }
}

export default toInteger
