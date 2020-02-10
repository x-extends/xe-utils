import { XEUtilsMethods } from '../xe-utils'

/**
 * 返回前几月或后几月的日期,可以指定月初(first)、月末(last)、天数，默认当前
 * @param date 字符串/日期/时间戳
 * @param month 月(默认当前月)、前几个月、后几个月
 * @param day 获取哪天(null默认当前天)、月初(first)、月末(last)、指定天数(数值)
 */
export declare function getWhatMonth(date: string | Date | number, month?: number | string, day?: number | string): Date;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 返回前几月或后几月的日期,可以指定月初(first)、月末(last)、天数，默认当前
     * @param date 字符串/日期/时间戳
     * @param month 月(默认当前月)、前几个月、后几个月
     * @param day 获取哪天(null默认当前天)、月初(first)、月末(last)、指定天数(数值)
     */
    getWhatMonth: typeof getWhatMonth;
  }
}

export default getWhatMonth
