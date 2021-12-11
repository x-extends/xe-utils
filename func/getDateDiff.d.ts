export interface DateDiffResult {
  /**
   * 是否计算完成（如果结束日期小于开始日期 done 为 fasle）
   */
  done: boolean;
  /**
   * 相差多少毫秒
   */
  time: Number;
  /**
   * 年
   */
  yyyy: number;
  /**
   * 月
   */
  MM: number;
  /**
   * 日
   */
  dd: number;
  /**
   * 时
   */
  HH: number;
  /**
   * 分
   */
  mm: number;
  /**
   * 秒
   */
  ss: number;
  /**
   * 毫秒
   */
  S: number;
}

/**
 * 例如：[['yyyy', 31536000000], ['MM', 2592000000], ['dd', 86400000], ['HH', 3600000], ['mm', 60000], ['ss', 1000], ['S', 0]]
 */
export type GetDateDiffRules = any[][]

/**
 * 返回两个日期之间差距,如果结束日期小于开始日期 done 为 fasle
 * @param startDate 开始日期
 * @param endDate 结束日期或当期日期
 */
export declare function getDateDiff(startDate: string | Date | number, endDate: string | Date | number): DateDiffResult;

/**
 * 返回两个日期之间差距,如果结束日期小于开始日期 done 为 fasle
 * @param startDate 开始日期
 * @param endDate 结束日期或当期日期
 * @param rules 自定义计算规则
 */
export declare function getDateDiff(startDate: string | Date | number, endDate: string | Date | number, rules?: GetDateDiffRules): DateDiffResult;

declare module './ctor' {
  interface XEUtilsMethods {
    getDateDiff: typeof getDateDiff;
  }
}

export default getDateDiff
