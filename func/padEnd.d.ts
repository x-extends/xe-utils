/**
 * 用指定字符从后面开始补全字符串
 * @param str 字符串
 * @param targetLength 结果长度
 * @param padString 补全字符
 */
export declare function padEnd(str: string, targetLength: number, padString?: string): string;

declare module './ctor' {
  interface XEUtilsMethods {
    padEnd: typeof padEnd;
  }
}

export default padEnd
