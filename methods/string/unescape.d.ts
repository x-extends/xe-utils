import { XEUtilsMethods } from '../xe-utils'

/**
 * 反转 escape
 * @param str 字符串
 */
export declare function unescape(str: string): string;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 反转 escape
     * @param str 字符串
     */
    unescape(str: string): string;
  }
}

export default unescape
