import { XEUtilsMethods } from '../xe-utils'

/**
 * JSON 转字符串
 * @param obj 对象
 */
export declare function toJSONString(obj: any): string;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * JSON 转字符串
     * @param obj 对象
     */
    toJSONString: typeof toJSONString;
  }
}

export default toJSONString
