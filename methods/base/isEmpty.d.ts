import { XEUtilsMethods } from '../xe-utils'

/**
 * 判断是否为空对象
 * @param val 值
 */
export declare function isEmpty(val: any): boolean;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 判断是否为空对象
     * @param val 值
     */
    isEmpty: typeof isEmpty;
  }
}

export default isEmpty
