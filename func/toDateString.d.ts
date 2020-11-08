export interface ToDateStringOptions {
  /**
   * 自定义格式化模板
   * {
   *   formats: {
   *     q: ['日', '一', '二', '三', '四', '五', '六'],
   *     E: function (value, match, date) { return '三' }
   *   }
   * }
   */
  formats?: any
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
