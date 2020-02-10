import { XEUtilsMethods } from '../xe-utils'

/**
 * 判断 Undefined
 * @param val 值
 */
export declare function isUndefined(val: any): boolean;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 判断 Undefined
     * @param val 值
     */
    isUndefined: typeof isUndefined;
  }
}

export default isUndefined
