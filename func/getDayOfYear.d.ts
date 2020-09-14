/**
 * 返回某个年份的天数,可以指定前几个年或后几个年，默认当前
 * @param date 字符串/日期/时间戳
 * @param offset 年偏移量(默认0)、前几个年、后几个年
 */
export declare function getDayOfYear(date: string | Date | number, offset: number): Date;

declare module './ctor' {
  interface XEUtilsMethods {
    getDayOfYear: typeof getDayOfYear;
  }
}

export default getDayOfYear
