/**
 * 返回某个月份的天数,可以指定前几个月或后几个月，默认当前
 * @param date 字符串/日期/时间戳
 * @param offset 月偏移量(默认0)、前几个月、后几个月
 */
export declare function getDayOfMonth(date: string | Date | number, offset: number): number;

declare module './ctor' {
  interface XEUtilsMethods {
    getDayOfMonth: typeof getDayOfMonth;
  }
}

export default getDayOfMonth
