/**
 * 字符串格式化占位符
 * @param { string } str 
 * @param { object | any[] } obj 
 */
export declare function toFormatString(str: string, list: any[]): string;
export declare function toFormatString(str: string, obj: any): string;

declare module './ctor' {
  interface XEUtilsMethods {
    toFormatString: typeof toFormatString;
  }
}

export default toFormatString
