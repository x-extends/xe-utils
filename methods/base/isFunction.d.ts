import { XEUtilsMethods } from '../xe-utils'

/**
 * 判断是否方法
 * @param val 值
 */
export declare function isFunction(val: any): boolean;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 判断是否方法
     * @param val 值
     */
    isFunction: typeof isFunction;
  }
}

export default isFunction
