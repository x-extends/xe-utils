/**
 * 转数值
 * @param num 数值/字符串
 */
export declare function toNumber(num: number | string | null): number;
export declare function toNumber(num: any): number;

declare module './ctor' {
  interface XEUtilsMethods {
    toNumber: typeof toNumber;
  }
}

export default toNumber
