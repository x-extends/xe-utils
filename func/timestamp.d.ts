/**
 * 将日期转为时间戳
 * @param date 字符串/日期/时间戳
 * @param format 解析格式 yyyy MM dd HH mm ss SSS
 */
export declare function timestamp(date: string | Date | number, format?: string | null): number;
export declare function timestamp(date: any, format?: string | null): number;

declare module './ctor' {
  interface XEUtilsMethods {
    timestamp: typeof timestamp;
  }
}

export default timestamp
