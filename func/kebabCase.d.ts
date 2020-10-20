/**
 * 将带驼峰字符串转成字符串,例如： projectName 转为 project-name
 * @param str 字符串
 */
export declare function kebabCase(str: string): string;
export declare function kebabCase(str: any): string;

declare module './ctor' {
  interface XEUtilsMethods {
    kebabCase: typeof kebabCase;
  }
}

export default kebabCase
