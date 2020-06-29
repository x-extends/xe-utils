/**
 * 将带驼峰字符串转成字符串
 * @param str 字符串
 */
export declare function camelCase(str: string): string;

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 将带驼峰字符串转成字符串
     * @param str 字符串
     */
    camelCase: typeof camelCase;
  }
}

export default camelCase
