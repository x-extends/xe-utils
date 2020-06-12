import { XEUtilsMethods } from '../xe-utils'

/**
 * 反序列化查询参数
 * @param str 字符串
 */
export declare function unserialize(str: string): any;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 反序列化查询参数
     * @param str 字符串
     */
    unserialize: typeof unserialize;
  }
}

export default unserialize
