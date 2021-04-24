/**
 * 返回前几周或后几周的日期
 * @param date 字符串/日期/时间戳
 * @param offset 周偏移量(默认当前周)、前几周、后几周
 */
export declare function getWhatWeek(date: string | Date | number, offset: number): Date;

/**
 * 返回前几周或后几周的日期,可以指定星期几(0~6)，默认当前
 * @param date 字符串/日期/时间戳
 * @param offset 周偏移量(默认当前周)、前几周、后几周
 * @param day 星期天(0)、星期一(1)、星期二(2)、星期三(3)、星期四(4)、星期五(5)、星期六(6)
 */
export declare function getWhatWeek(date: string | Date | number, offset: number, day: number): Date;

declare module './ctor' {
  interface XEUtilsMethods {
    getWhatWeek: typeof getWhatWeek;
  }
}

export default getWhatWeek
