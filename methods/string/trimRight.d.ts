import { XEUtilsMethods } from '../xe-utils'

/**
 * 去除字符串右边的空格
 * @param str 字符串
 */
export declare function trimRight(str: string): string;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 去除字符串右边的空格
     * @param str 字符串
     */
    trimRight: typeof trimRight;
  }
}

export default trimRight
