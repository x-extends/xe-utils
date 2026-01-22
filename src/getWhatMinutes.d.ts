/**
 * 返回前几分钟或后几分钟的日期
 * @param date 字符串/日期/时间戳
 * @param offset 分钟偏移量(默认0)、前几分钟、后几分钟
 */
export declare function getWhatMinutes(date: string | Date | number, offset: number): Date;

/**
 * 返回前几分钟或后几分钟的日期
 * @param date 字符串/日期/时间戳
 * @param offset 分钟偏移量(默认0)、前几分钟、后几分钟
 * @param mode 指定秒(null默认当前秒)、0秒(first)、59秒(last)
 */
export declare function getWhatMinutes(date: string | Date | number, offset: number, mode: 'first' | 'last'): Date;

declare module './ctor' {
  interface XEUtilsMethods {
    getWhatMinutes: typeof getWhatMinutes;
  }
}

export default getWhatMinutes
