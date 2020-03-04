import { XEUtilsMethods } from '../xe-utils'

/**
 * 乘法运算
 * @param num1 数值1
 * @param num2 数值2
 */
export declare function multiply(num1: number, num2: number): number;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 乘法运算
     * @param num1 数值1
     * @param num2 数值2
     */
    multiply: typeof multiply;
  }
}

export default multiply
