import { FirstDayOfWeek } from './getWhatWeek'

/**
 * 返回某个年份的第几周
 * @param date 字符串/日期/时间戳
 * @param firstDay 从年初的星期几为起始开始周开始算，默认星期一
 */
export declare function getYearWeek(date: string | Date | number, firstDay?: FirstDayOfWeek): number;

declare module './ctor' {
  interface XEUtilsMethods {
    getYearWeek: typeof getYearWeek;
  }
}

export default getYearWeek
