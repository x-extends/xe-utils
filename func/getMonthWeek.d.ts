import { FirstDayOfWeek } from './getWhatWeek'

/**
 * 返回某个月份的第几周
 * @param date 字符串/日期/时间戳
 * @param firstDay 周视图的起始天，默认星期一
 */
export declare function getMonthWeek(date: string | Date | number, firstDay?: FirstDayOfWeek): number;

declare module './ctor' {
  interface XEUtilsMethods {
    getMonthWeek: typeof getMonthWeek;
  }
}

export default getMonthWeek
