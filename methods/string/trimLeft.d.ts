import { XEUtilsMethods } from '../xe-utils'

/**
 * 去除字符串左边的空格
 * @param str 字符串
 */
export declare function trimLeft(str: string): string;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 去除字符串左边的空格
     * @param str 字符串
     */
    trimLeft: typeof trimLeft;
  }
}

export default trimLeft
