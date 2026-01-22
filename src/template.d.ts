/**
 * 解析动态字符串模板
 * @param str 字符串模板
 * @param args 对象
 */
export declare function template(str: string, args: any | any[]): string;
export declare function template(str: any, args: any | any[]): string;
export declare function template(str: string, args: any | any[], options: { tmplRE?: RegExp }): string;
export declare function template(str: any, args: any | any[], options: { tmplRE?: RegExp }): string;

declare module './ctor' {
  interface XEUtilsMethods {
    template: typeof template;
  }
}

export default template
