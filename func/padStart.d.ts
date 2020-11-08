/**
 * 用指定字符从前面开始补全字符串
 * @param str 字符串
 * @param targetLength 结果长度
 * @param padString 补全字符
 */
export declare function padStart(str: string, targetLength: number, padString?: string): string;
export declare function padStart(str: any, targetLength: number, padString?: any): string;

declare module './ctor' {
  interface XEUtilsMethods {
    padStart: typeof padStart;
  }
}

export default padStart
