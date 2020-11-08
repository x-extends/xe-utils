/**
 * 判断字符串是否在源字符串的头部
 * @param str 字符串
 * @param val 值
 * @param startIndex 开始索引
 */
export declare function startsWith(str: number | string | null, val: string, startIndex?: number): string;

declare module './ctor' {
  interface XEUtilsMethods {
    startsWith: typeof startsWith;
  }
}

export default startsWith
