import { XEUtilsMethods } from '../xe-utils'

/**
 * 判断是否String对象
 * @param val 值
 */
export declare function isString(val: any): boolean;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 判断是否String对象
     * @param val 值
     */
    isString: typeof isString;
  }
}

export default isString
