import { XEUtilsMethods } from '../xe-utils'

/**
 * 数组去重
 * @param array 数组
 */
export declare function uniq(array: Array<any>): Array<any>;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 数组去重
     * @param array 数组
     */
    uniq(array: Array<any>): Array<any>;
  }
}

export default uniq