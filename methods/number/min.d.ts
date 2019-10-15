import { XEUtilsMethods } from '../xe-utils'

/**
 * 获取最小值
 * @param array 数组
 * @param iteratee 回调/属性
 */
export declare function min(array: Array<any>, iteratee: string | Function): number;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 获取最小值
     * @param array 数组
     * @param iteratee 回调/属性
     */
    min: typeof min;
  }
}

export default min