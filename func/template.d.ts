/**
 * 解析动态字符串模板
 * @param str 字符串模板
 * @param obj 对象
 */
export declare function template(str: string, obj: any): string;

declare module './ctor' {
  interface XEUtilsMethods {
    template: typeof template;
  }
}

export default template
