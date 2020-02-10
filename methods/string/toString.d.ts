import { XEUtilsMethods } from '../xe-utils'

/**
 * 转字符串
 * @param obj 值
 */
export declare function toString(obj: any): string;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 转字符串
     * @param obj 值
     */
    toString: typeof toString;
  }
}

export default toString
