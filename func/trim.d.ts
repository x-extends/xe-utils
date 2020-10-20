/**
 * 去除字符串左右两边的空格
 * @param str 字符串
 */
export declare function trim(str: string): string;
export declare function trim(str: any): string;

declare module './ctor' {
  interface XEUtilsMethods {
    trim: typeof trim;
  }
}

export default trim
