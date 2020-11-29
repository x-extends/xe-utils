import { XEUtilsMethods } from '../xe-utils'

/**
 * 字符串格式化占位符
 * @param { string } str 
 * @param { object | any[] } obj 
 */
export declare function toFormatString(str: string, list: any[]): string;
export declare function toFormatString(str: string, obj: any): string;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 字符串格式化占位符
     * @param { string } str 
     * @param { object | any[] } obj 
     */
    toFormatString: typeof toFormatString;
  }
}

export default toFormatString
