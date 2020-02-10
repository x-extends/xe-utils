import { XEUtilsMethods } from '../xe-utils'

/**
 * 转整数
 * @param num 数值/字符串
 */
export declare function toInteger(num: string | number): number;

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
