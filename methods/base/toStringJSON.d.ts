import { XEUtilsMethods } from '../xe-utils'

/**
 * 字符串转 JSON
 * @param str 字符串
 */
export declare function toStringJSON(str: string): any;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 字符串转 JSON
     * @param str 字符串
     */
    toStringJSON: typeof toStringJSON;
  }
}

export default toStringJSON
