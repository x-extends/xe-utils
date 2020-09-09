import { XEUtilsMethods } from '../xe-utils'

/**
 * 对数字进行四舍五入
 * @param num 数值/字符串
 * @param digits 小数保留位数
 */
export declare function round(num: string | number, digits?: number): number;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 对数字进行四舍五入
     * @param num 数值/字符串
     * @param digits 小数保留位数
     */
    round: typeof round;
  }
}

export default round
