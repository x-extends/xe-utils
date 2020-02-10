import { XEUtilsMethods } from '../xe-utils'

/**
 * 从最后开始的索引值,返回对象第一个索引值
 * @param obj 对象
 * @param val 值
 */
export declare function lastIndexOf(obj: any, val: any): any;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 从最后开始的索引值,返回对象第一个索引值
     * @param obj 对象
     * @param val 值
     */
    lastIndexOf: typeof lastIndexOf;
  }
}

export default lastIndexOf
