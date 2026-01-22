/**
 * 返回某个年份的第几天
 * @param date 字符串/日期/时间戳
 */
export declare function getYearDay(date: string | Date | number): number;

declare module './ctor' {
  interface XEUtilsMethods {
    getYearDay: typeof getYearDay;
  }
}

export default getYearDay
