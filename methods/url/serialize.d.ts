import { XEUtilsMethods } from '../xe-utils'

/**
 * 判断字符串是否在源字符串的头部
 * @param query 序列化的对象
 */
export declare function serialize(query: object): string;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 判断字符串是否在源字符串的头部
     * @param query 序列化的对象
     */
    serialize(query: object): string;
  }
}

export default serialize