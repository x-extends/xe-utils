/**
 * 将字符串重复 n 次
 * @param str 字符串
 * @param count 次数
 */
export declare function repeat(str: string, count: number): string;
export declare function repeat(str: any, count: number): string;

declare module './ctor' {
  interface XEUtilsMethods {
    repeat: typeof repeat;
  }
}

export default repeat
