import { XEUtilsMethods } from '../xe-utils'

/**
 * 判断是否小数
 * @param val 值
 */
export declare function isFloat(val: any): boolean;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 判断是否小数
     * @param val 值
     */
    isFloat: typeof isFloat;
  }
}

export default isFloat
