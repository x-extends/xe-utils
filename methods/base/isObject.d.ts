import { XEUtilsMethods } from '../xe-utils'

/**
 * 判断是否 Object 对象
 * @param val 值
 */
export declare function isObject(val: any): boolean;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 判断是否 Object 对象
     * @param val 值
     */
    isObject: typeof isObject;
  }
}

export default isObject
