import { XEUtilsMethods } from '../xe-utils'

/**
 * 判断字符串是否在源字符串的头部
 * @param str 字符串
 * @param val 值
 * @param startIndex 开始索引
 */
export declare function endsWith(str: string, val: string, startIndex?: number): string;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 判断字符串是否在源字符串的头部
     * @param str 字符串
     * @param val 值
     * @param startIndex 开始索引
     */
    endsWith: typeof endsWith;
  }
}

export default endsWith
