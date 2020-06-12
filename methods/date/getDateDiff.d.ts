import { XEUtilsMethods } from '../xe-utils'

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
 * 返回两个日期之间差距,如果结束日期小于开始日期 done 为 fasle
 * @param startDate 开始日期
 * @param endDate 结束日期或当期日期
 * @param rules 自定义计算规则
 */
export declare function getDateDiff(startDate: string | Date | number, endDate: string | Date | number, rules?: any[][]): DateDiffResult;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 返回两个日期之间差距,如果结束日期小于开始日期 done 为 fasle
     * @param startDate 开始日期
     * @param endDate 结束日期或当期日期
     * @param rules 自定义计算规则
     */
    getDateDiff: typeof getDateDiff;
  }
}

export default getDateDiff
