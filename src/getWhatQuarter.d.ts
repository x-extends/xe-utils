/**
 * 返回前几季度或后几季度的日期
 * @param date 字符串/日期/时间戳
 * @param offset 季度偏移量(默认0)、前几个季度、后几个季度
 */
export declare function getWhatQuarter(date: string | Date | number, offset: number): Date;

/**
 * 返回前几季度或后几季度的日期，可以指定月初(first)、月末(last)、天数，默认当前
 * @param date 字符串/日期/时间戳
 * @param offset 季度偏移量(默认当前季度)、前几个季度、后几个季度
 * @param day 获取哪天：月初(first)、月末(last)、指定天数(数值)
 */
export declare function getWhatQuarter(date: string | Date | number, offset: number, day: number | 'first' | 'last'): Date;

declare module './ctor' {
  interface XEUtilsMethods {
    getWhatQuarter: typeof getWhatQuarter;
  }
}

export default getWhatQuarter
