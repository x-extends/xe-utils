/**
 * 将字符串转成驼峰字符串
 * @param str 字符串
 */
export declare function kebabCase(str: string): string;

declare module './ctor' {
  interface XEUtilsMethods {
    kebabCase: typeof kebabCase;
  }
}

export default kebabCase
