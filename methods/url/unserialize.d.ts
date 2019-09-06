import { XEUtilsMethods } from '../xe-utils'

/**
 * 判断字符串是否在源字符串的头部
 * @param str 反序列化的字符串
 */
export declare function unserialize(str: string): object;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 判断字符串是否在源字符串的头部
     * @param str 反序列化的字符串
     */
    unserialize(str: string): object;
  }
}

export default unserialize