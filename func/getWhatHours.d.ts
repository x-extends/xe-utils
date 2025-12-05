/**
 * 返回前几小时或后几小时的日期
 * @param date 字符串/日期/时间戳
 * @param offset 小时偏移量(默认0)、前几小时、后几小时
 */
export declare function getWhatHours(date: string | Date | number, offset: number): Date;

/**
 * 返回前几小时或后几小时的日期
 * @param date 字符串/日期/时间戳
 * @param offset 小时偏移量(默认0)、前几小时、后几小时
 * @param mode 指定分钟(null默认当前分)、0分(first)、59分(last)
 */
export declare function getWhatHours(date: string | Date | number, offset: number, mode: 'first' | 'last'): Date;

declare module './ctor' {
  interface XEUtilsMethods {
    getWhatHours: typeof getWhatHours;
  }
}

export default getWhatHours
