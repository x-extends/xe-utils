/**
 * 返回前几年或后几年的日期
 * @param date 字符串/日期/时间戳
 * @param year 年(默认当前年)、前几个年(数值)、后几个年(数值)
 */
export declare function getWhatYear(date: string | Date | number, offset: number): Date;

/**
 * 返回前几年或后几年的日期，可以指定年初(first)、年末(last)、月份(0~11)，默认当前
 * @param date 字符串/日期/时间戳
 * @param year 年(默认当前年)、前几个年(数值)、后几个年(数值)
 * @param month 获取哪月：年初(first)、年末(last)、指定月份（0-11）
 */
export declare function getWhatYear(date: string | Date | number, offset: number, month: number | 'first' | 'last'): Date;

declare module './ctor' {
  interface XEUtilsMethods {
    getWhatYear: typeof getWhatYear;
  }
}

export default getWhatYear
