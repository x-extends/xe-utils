import { XEUtilsMethods } from '../xe-utils'

/**
 * 日期格式化为任意格式字符串
 * @param date 字符串/日期/时间戳
 * @param format 格式化 默认：yyyy-MM-dd HH:mm:ss.SSS
 * @param options 可选参数
 */
export declare function toDateString(date: string | Date | number, format?: string, options?: object): string;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 日期格式化为任意格式字符串
     * @param date 字符串/日期/时间戳
     * @param format 格式化 默认：yyyy-MM-dd HH:mm:ss.SSS
     * @param options 可选参数
     */
    toDateString(date: string | Date | number, format?: string, options?: object): string;
  }
}

export default toDateString