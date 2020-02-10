import { XEUtilsMethods } from '../xe-utils'

/**
 * 返回前几天或后几天的日期
 * @param date 字符串/日期/时间戳
 * @param day 天(默认当天)、前几天、后几天
 * @param mode 获取时分秒(null默认当前时分秒)、日初(first)、日末(last)
 */
export declare function getWhatDay(date: string | Date | number, day?: number, mode?: number | string): Date;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 返回前几天或后几天的日期
     * @param date 字符串/日期/时间戳
     * @param day 天(默认当天)、前几天、后几天
     * @param mode 获取时分秒(null默认当前时分秒)、日初(first)、日末(last)
     */
    getWhatDay: typeof getWhatDay;
  }
}

export default getWhatDay
