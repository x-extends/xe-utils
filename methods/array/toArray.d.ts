import { XEUtilsMethods } from '../xe-utils'

/**
 * 将对象或者伪数组转为新数组
 * @param array 对象/数组
 */
export declare function toArray(obj: any): any[];

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 将对象或者伪数组转为新数组
     * @param array 对象/数组
     */
    toArray: typeof toArray;
  }
}

export default toArray
