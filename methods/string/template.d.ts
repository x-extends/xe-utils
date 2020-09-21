import { XEUtilsMethods } from '../xe-utils'

/**
 * 解析动态字符串模板
 * @param str 字符串模板
 * @param obj 对象
 */
export declare function template(str: string, args: any | any[]): string;
export declare function template(str: string, args: any | any[], options: { tmplRE?: RegExp }): string;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 解析动态字符串模板
     * @param str 字符串模板
     * @param obj 对象
     */
    template: typeof template;
  }
}

export default template
