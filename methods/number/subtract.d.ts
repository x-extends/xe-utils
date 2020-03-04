import { XEUtilsMethods } from '../xe-utils'

/**
 * 减法运算
 * @param num1 数值1
 * @param num2 数值2
 */
export declare function subtract(num1: number, num2: number): number;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 减法运算
     * @param num1 数值1
     * @param num2 数值2
     */
    subtract: typeof subtract;
  }
}

export default subtract
