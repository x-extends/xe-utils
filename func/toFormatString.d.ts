/**
 * 字符串格式化占位符
 * @param { string } str 
 * @param { object | any[] } obj 
 */
export declare function toFormatString(str: string | null, list: any[]): string;
export declare function toFormatString(str: any, obj: any): string;

declare module './ctor' {
  interface XEUtilsMethods {
    toFormatString: typeof toFormatString;
  }
}

export default toFormatString
