/**
 * 将数值四舍五入并格式化为固定小数位的字符串
 * @param num 数值/字符串
 * @param digits 小数保留位数
 */
export declare function toFixed(num: number | string | null, digits?: number): string;
export declare function toFixed(num: any, digits?: number): string;

declare module './ctor' {
  interface XEUtilsMethods {
    toFixed: typeof toFixed;
  }
}

export default toFixed
