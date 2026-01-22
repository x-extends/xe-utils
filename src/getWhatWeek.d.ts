export type FirstDayOfWeek = 0 | 1 | 2 | 3 | 4 |5 | 6

/**
 * 返回前几周或后几周的日期
 * @param date 字符串/日期/时间戳
 * @param offsetWeek 周偏移量(默认当前周)、前几周、后几周
 */
export declare function getWhatWeek(date: string | Date | number, offsetWeek?: FirstDayOfWeek): Date;

/**
 * 返回前几周或后几周的日期,可以指定星期几(0~6)，默认当前
 * @param date 字符串/日期/时间戳
 * @param offsetWeek 获取周偏移量（默认0当前周、前几周、后几周）
 * @param offsetDay 获取星期几（星期天0、星期一1、星期二2、星期三3、星期四4、星期五5、星期六6）
 * @param firstDay 周视图的起始天，默认星期一
 */
export declare function getWhatWeek(date: string | Date | number, offsetWeek?: number, offsetDay?: FirstDayOfWeek, firstDay?: FirstDayOfWeek): Date;

declare module './ctor' {
  interface XEUtilsMethods {
    getWhatWeek: typeof getWhatWeek;
  }
}

export default getWhatWeek
