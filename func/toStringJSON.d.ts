/**
 * 字符串转 JSON
 * @param str 字符串
 */
export declare function toStringJSON(str: string | null): any;
export declare function toStringJSON(str: any): any;

declare module './ctor' {
  interface XEUtilsMethods {
    toStringJSON: typeof toStringJSON;
  }
}

export default toStringJSON
