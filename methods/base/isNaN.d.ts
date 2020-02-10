import { XEUtilsMethods } from '../xe-utils'

/**
 * 判断是否非数值
 * @param val 值
 */
export declare function isNaN(val: any): boolean;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 判断是否非数值
     * @param val 值
     */
    isNaN: typeof isNaN;
  }
}

export default isNaN
