import { XEUtilsMethods } from '../xe-utils'

/**
 * 从最后开始的索引值,返回对象第一个索引值
 * @param obj 对象
 * @param val 值
 */
export declare function lastIndexOf(obj: object | Array<any>, val: any): number;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 从最后开始的索引值,返回对象第一个索引值
     * @param obj 对象
     * @param val 值
     */
    lastIndexOf(obj: object | Array<any>, val: any): number;
  }
}

export default lastIndexOf