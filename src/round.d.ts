/**
 * 对数字进行四舍五入
 * @param num 数值/字符串
 * @param decimalPlaces 小数保留位数
 * @param awayZero 是否远离零四舍五入
 */
export declare function round(num: any, decimalPlaces?: number, awayZero?: boolean): number;

declare module './ctor' {
  interface XEUtilsMethods {
    round: typeof round;
  }
}

export default round
