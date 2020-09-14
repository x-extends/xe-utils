/**
 * 返回前几天或后几天的日期
 * @param date 字符串/日期/时间戳
 * @param offset 天偏移量(默认0)、前几天、后几天
 */
export declare function getWhatDay(date: string | Date | number, offset: number): Date;

/**
 * 返回前几天或后几天的日期
 * @param date 字符串/日期/时间戳
 * @param offset 天偏移量(默认0)、前几天、后几天
 * @param mode 获取时间：日初(first)、日末(last)
 */
export declare function getWhatDay(date: string | Date | number, offset: number, mode: 'first' | 'last'): Date;

declare module './ctor' {
  interface XEUtilsMethods {
    getWhatDay: typeof getWhatDay;
  }
}

export default getWhatDay
