import { XEUtilsMethods } from '../xe-utils'

/**
 * 判断是否闰年
 * @param date 日期
 */
export declare function isLeapYear(date?: Date | number | string): boolean;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 判断是否闰年
     * @param date 日期
     */
    isLeapYear: typeof isLeapYear;
  }
}

export default isLeapYear
