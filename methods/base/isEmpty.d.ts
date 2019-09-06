import { XEUtilsMethods } from '../xe-utils'

/**
 * 判断是否为空,包括空对象、空数值、空字符串
 * @param val 值
 */
export declare function isEmpty(val: any): boolean;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 判断是否为空,包括空对象、空数值、空字符串
     * @param val 值
     */
    isEmpty(val: any): boolean;
  }
}

export default isEmpty