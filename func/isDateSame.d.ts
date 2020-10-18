/**
 * 判断两个日期是否相同
 * @param date1 日期
 * @param date2 日期
 * @param format 对比格式
 */
export declare function isDateSame(date1: any, date2: any, format?: string): boolean;

declare module './ctor' {
  interface XEUtilsMethods {
    isDateSame: typeof isDateSame;
  }
}

export default isDateSame
