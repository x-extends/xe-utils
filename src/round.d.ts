/**
 * 对数字进行四舍五入
 * @param num 数值/字符串
 * @param digits 小数保留位数
 */
export declare function round(num: number, digits?: number): number;
export declare function round(num: any, digits?: number): number;

declare module './ctor' {
  interface XEUtilsMethods {
    round: typeof round;
  }
}

export default round
