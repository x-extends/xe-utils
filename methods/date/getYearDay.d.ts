import { XEUtilsMethods } from '../xe-utils'

/**
 * 返回某个年份的第几天
 * @param date 字符串/日期/时间戳
 */
export declare function getYearDay(date: string | Date | number): number;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 返回某个年份的第几天
     * @param date 字符串/日期/时间戳
     */
    getYearDay: typeof getYearDay;
  }
}

export default getYearDay
