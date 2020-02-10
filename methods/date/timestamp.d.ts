import { XEUtilsMethods } from '../xe-utils'

/**
 * 将日期转为时间戳
 * @param date 字符串/日期/时间戳
 * @param format 解析格式 yyyy MM dd HH mm ss SSS
 */
export declare function timestamp(date: string | Date | number, format?: string): number;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 将日期转为时间戳
     * @param date 字符串/日期/时间戳
     * @param format 解析格式 yyyy MM dd HH mm ss SSS
     */
    timestamp: typeof timestamp;
  }
}

export default timestamp
