/**
 * 乘法运算
 * @param num1 数值1
 * @param num2 数值2
 */
export declare function multiply(num1: number, num2: number): number;

declare module './ctor' {
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
