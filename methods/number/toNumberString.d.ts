import { XEUtilsMethods } from '../xe-utils'

/**
 * 数值转字符串，科学计数转字符串
 * @param num 数值
 */
export declare function toNumberString(num: number): number;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 数值转字符串，科学计数转字符串
     * @param num 数值
     */
    toNumberString: typeof toNumberString;
  }
}

export default toNumberString
