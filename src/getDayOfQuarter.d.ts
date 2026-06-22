/**
 * 返回某个季度的天数,可以指定前几个季度或后几个季度，默认当前
 * @param date 字符串/日期/时间戳
 * @param offsetNum 季度偏移量(默认0)、前几个季度、后几个季度
 */
export declare function getDayOfQuarter(date: string | Date | number | null | undefined, offsetNum: number): number;

declare module './ctor' {
  interface XEUtilsMethods {
    getDayOfQuarter: typeof getDayOfQuarter;
  }
}

export default getDayOfQuarter
