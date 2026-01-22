/**
 * JSON 转字符串
 * @param obj 对象
 */
export declare function toJSONString(obj: any): string;

declare module './ctor' {
  interface XEUtilsMethods {
    toJSONString: typeof toJSONString;
  }
}

export default toJSONString
