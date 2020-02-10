import { XEUtilsMethods } from '../xe-utils'

/**
 * 返回对象第一个索引值
 * @param obj 对象
 * @param val 值
 */
export declare function indexOf(obj: any, val: any): any;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 返回对象第一个索引值
     * @param obj 对象
     * @param val 值
     */
    indexOf: typeof indexOf;
  }
}

export default indexOf
