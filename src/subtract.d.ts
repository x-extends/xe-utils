/**
 * 减法运算
 * @param num1 数值1
 * @param num2 数值2
 */
export declare function subtract(num1: number | null | undefined, num2: number | null | undefined): number;
export declare function subtract(num1: any, num2: any): number;

declare module './ctor' {
  interface XEUtilsMethods {
    subtract: typeof subtract;
  }
}

export default subtract
