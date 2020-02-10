import { XEUtilsMethods } from '../xe-utils'

/**
 * 判断字符串是否在源字符串的头部
 * @param str 反序列化的字符串
 */
export declare function unserialize(str: string): any;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 判断字符串是否在源字符串的头部
     * @param str 反序列化的字符串
     */
    unserialize: typeof unserialize;
  }
}

export default unserialize
