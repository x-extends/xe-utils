/**
 * 加法运算
 * @param num1 数值1
 * @param num2 数值2
 */
export declare function add(num1: number, num2: number): number;

declare module './ctor' {
  interface XEUtilsMethods {
    add: typeof add;
  }
}

export default add
