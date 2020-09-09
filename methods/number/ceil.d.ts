import { XEUtilsMethods } from '../xe-utils'

/**
 * 将数值向上舍入
 * @param num 数值/字符串
 * @param digits 小数保留位数
 */
export declare function ceil(num: string | number, digits?: number): number;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 将数值向上舍入
     * @param num 数值/字符串
     * @param digits 小数保留位数
     */
    ceil: typeof ceil;
  }
}

export default ceil
