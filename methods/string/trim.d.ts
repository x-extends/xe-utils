import { XEUtilsMethods } from '../xe-utils'

/**
 * 去除字符串左右两边的空格
 * @param str 字符串
 */
export declare function trim(str: string): string;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 去除字符串左右两边的空格
     * @param str 字符串
     */
    trim: typeof trim;
  }
}

export default trim
