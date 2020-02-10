import { XEUtilsMethods } from '../xe-utils'

/**
 * 判断是否为有限数值
 * @param val 值
 */
export declare function isFinite(val: any): boolean;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 判断是否为有限数值
     * @param val 值
     */
    isFinite: typeof isFinite;
  }
}

export default isFinite
