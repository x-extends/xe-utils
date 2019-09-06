import { XEUtilsMethods } from '../xe-utils'

/**
 * 获取对象第一个值
 * @param obj 对象
 */
export declare function first(obj: object | Array<any>): any;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 获取对象第一个值
     * @param obj 对象
     */
    first(obj: object | Array<any>): any;
  }
}

export default first