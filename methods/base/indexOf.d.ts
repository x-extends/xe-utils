import { XEUtilsMethods } from '../xe-utils'

/**
 * 返回对象第一个索引值
 * @param obj 对象
 * @param val 值
 */
export declare function indexOf(obj: object | Array<any>, val: any): number;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 返回对象第一个索引值
     * @param obj 对象
     * @param val 值
     */
    indexOf(obj: object | Array<any>, val: any): number;
  }
}

export default indexOf