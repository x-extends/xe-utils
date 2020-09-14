/**
 * 将数值向下舍入
 * @param num 数值/字符串
 * @param digits 小数保留位数
 */
export declare function floor(num: string | number, digits?: number): number;

declare module './ctor' {
  interface XEUtilsMethods {
    floor: typeof floor;
  }
}

export default floor
