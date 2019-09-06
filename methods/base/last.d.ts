import { XEUtilsMethods } from '../xe-utils'

/**
 * 获取对象最后一个值
 * @param obj 对象
 */
export declare function last(obj: object | Array<any>): any;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 获取对象最后一个值
     * @param obj 对象
     */
    last(obj: object | Array<any>): any;
  }
}

export default last