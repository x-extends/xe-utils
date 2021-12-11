import { FirstDayOfWeek } from "./getWhatWeek"

export type ToDateStringFormats = {
  /**
   * 用于格式化季度  
   * 例如：[null, '第一季度', '第二季度', '第三季度', '第四季度']
   */
  q?: string[] | {
    1: string
    2: string
    3: string
    4: string
  } | ((value: string | number, match: string, date: Date) => string);
  /**
   * 用于格式化周
   * 例如：['日', '一', '二', '三', '四', '五', '六']
   */
  E?: string[] | {
    0: string
    1: string
    2: string
    3: string
    4: string
    5: string
    6: string
  } | ((value: string | number, match: string, date: Date) => string);
}

export interface ToDateStringOptions {
  /**
   * 默认周视图的起始天
   */
  firstDay?: FirstDayOfWeek;
  /**
   * 自定义格式化模板
   */
  formats?: ToDateStringFormats
}

/**
 * 日期格式化为任意格式字符串，转义符号 []
 * @param date 字符串/日期/时间戳
 */
export declare function toDateString(date: string | Date | number): string;
export declare function toDateString(date: any): string;

/**
 * 日期格式化为任意格式字符串，转义符号 []
 * @param date 字符串/日期/时间戳
 * @param format 格式化 默认：yyyy-MM-dd HH:mm:ss.SSS
 */
export declare function toDateString(date: string | Date | number, format: string | null): string;
export declare function toDateString(date: any, format: string | null): string;

/**
 * 日期格式化为任意格式字符串，转义符号 []
 * @param date 字符串/日期/时间戳
 * @param format 格式化 默认：yyyy-MM-dd HH:mm:ss.SSS
 * @param options 可选参数
 */
export declare function toDateString(date: string | Date | number, format: string | null, options: ToDateStringOptions): string;
export declare function toDateString(date: any, format: string | null, options: ToDateStringOptions): string;

declare module './ctor' {
  interface XEUtilsMethods {
    toDateString: typeof toDateString;
  }
}

export default toDateString
