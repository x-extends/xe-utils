/**
 * 去除字符串右边的空格
 * @param str 字符串
 */
export declare function trimRight(str: string): string;
export declare function trimRight(str: any): string;

declare module './ctor' {
  interface XEUtilsMethods {
    trimRight: typeof trimRight;
  }
}

export default trimRight
