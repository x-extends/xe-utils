/**
 * 将数值四舍五入并格式化为固定小数位的字符串
 * @param num 数值/字符串
 * @param digits 小数保留位数
 * @param awayZero 是否远离零四舍五入
 */
export declare function toFixed(num: any, digits?: number, awayZero?: boolean): string;

declare module './ctor' {
  interface XEUtilsMethods {
    toFixed: typeof toFixed;
  }
}

export default toFixed
