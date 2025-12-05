/**
 * 返回前几秒或后几秒的日期
 * @param date 字符串/日期/时间戳
 * @param offset 秒偏移量(默认0)、前几秒、后几秒
 */
export declare function getWhatSeconds(date: string | Date | number, offset: number): Date;

/**
 * 返回前几秒或后几秒的日期
 * @param date 字符串/日期/时间戳
 * @param offset 秒偏移量(默认0)、前几秒、后几秒
 * @param mode 指定毫秒(null默认当前毫秒)、0毫秒(first)、59毫秒(last)
 */
export declare function getWhatSeconds(date: string | Date | number, offset: number, mode: 'first' | 'last'): Date;

declare module './ctor' {
  interface XEUtilsMethods {
    getWhatSeconds: typeof getWhatSeconds;
  }
}

export default getWhatSeconds
