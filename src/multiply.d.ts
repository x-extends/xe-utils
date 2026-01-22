/**
 * 乘法运算
 * @param num1 数值1
 * @param num2 数值2
 */
export declare function multiply(num1: number, num2: number): number;
export declare function multiply(num1: any, num2: any): number;

declare module './ctor' {
  interface XEUtilsMethods {
    multiply: typeof multiply;
  }
}

export default multiply
