import { XEUtilsMethods } from '../xe-utils'

/**
 * 将数值四舍五入并格式化为固定小数位的字符串
 * @param num 数值/字符串
 * @param digits 小数保留位数
 */
export declare function toFixed(num: string | number, digits?: number): string;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 对数字进行四舍五入
     * @param num 数值/字符串
     * @param digits 小数保留位数
     */
    toFixed: typeof toFixed;
  }
}

export default toFixed
