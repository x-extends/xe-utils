import { XEUtilsMethods } from '../xe-utils'

/**
 * 判断是否有效的Date对象
 * @param val 值
 */
export declare function isValidDate(val: any): boolean;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 判断是否有效的Date对象
     * @param val 值
     */
    isValidDate: typeof isValidDate;
  }
}

export default isValidDate
