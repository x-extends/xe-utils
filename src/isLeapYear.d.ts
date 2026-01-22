/**
 * 判断是否闰年
 * @param date 日期
 */
export declare function isLeapYear(date: Date | number | string): boolean;
export declare function isLeapYear(date: any): boolean;

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 判断是否闰年
     * @param date 日期
     */
    isLeapYear: typeof isLeapYear;
  }
}

export default isLeapYear
