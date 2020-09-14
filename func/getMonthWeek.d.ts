/**
 * 返回某个月份的第几周
 * @param date 字符串/日期/时间戳
 */
export declare function getMonthWeek(date: string | Date | number): number;

declare module './ctor' {
  interface XEUtilsMethods {
    getMonthWeek: typeof getMonthWeek;
  }
}

export default getMonthWeek
