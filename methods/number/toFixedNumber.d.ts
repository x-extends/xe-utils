import { XEUtilsMethods } from '../xe-utils'

/**
 * 和 Number.toFixed 类似，区别就是不会对小数进行四舍五入，结果返回数值
 * @param num 数值/字符串
 * @param digits 小数保留位数
 */
export declare function toFixedNumber(num: string | number, digits: number): number;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 和 Number.toFixed 类似，区别就是不会对小数进行四舍五入，结果返回数值
     * @param num 数值/字符串
     * @param digits 小数保留位数
     */
    toFixedNumber: typeof toFixedNumber;
  }
}

export default toFixedNumber
