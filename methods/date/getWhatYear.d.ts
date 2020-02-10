import { XEUtilsMethods } from '../xe-utils'

/**
 * 返回前几年或后几年的日期,可以指定年初(first)、年末(last)、月份(0~11)，默认当前
 * @param date 字符串/日期/时间戳
 * @param year 年(默认当前年)、前几个年(数值)、后几个年(数值)
 * @param month 获取哪月(null默认当前年)、年初(first)、年末(last)、指定月份（0-11）
 */
export declare function getWhatYear(date: string | Date | number, year?: number | string, month?: number | string): Date;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 返回前几年或后几年的日期,可以指定年初(first)、年末(last)、月份(0~11)，默认当前
     * @param date 字符串/日期/时间戳
     * @param year 年(默认当前年)、前几个年(数值)、后几个年(数值)
     * @param month 获取哪月(null默认当前年)、年初(first)、年末(last)、指定月份（0-11）
     */
    getWhatYear: typeof getWhatYear;
  }
}

export default getWhatYear
