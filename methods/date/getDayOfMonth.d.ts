import { XEUtilsMethods } from '../xe-utils'

/**
 * 返回某个月份的天数,可以指定前几个月或后几个月，默认当前
 * @param date 字符串/日期/时间戳
 * @param month 月(默认当月)、前几个月、后几个月
 */
export declare function getDayOfMonth(date: string | Date | number, month: number): number;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 返回某个月份的天数,可以指定前几个月或后几个月，默认当前
     * @param date 字符串/日期/时间戳
     * @param month 月(默认当月)、前几个月、后几个月
     */
    getDayOfMonth: typeof getDayOfMonth;
  }
}

export default getDayOfMonth
