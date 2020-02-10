import { XEUtilsMethods } from '../xe-utils'

export declare function reduceIterate(previous: any, item: any, index: number, list: any[]): any;

/**
 * 接收一个函数作为累加器，数组中的每个值（从左到右）开始合并，最终为一个值
 * @param array 数组
 * @param iteratee 回调
 * @param initialValue 默认值
 * @example
 */
export declare function reduce(array: any[], iteratee?: typeof reduceIterate, initialValue?: any): any;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 接收一个函数作为累加器，数组中的每个值（从左到右）开始合并，最终为一个值
     * @param array 数组
     * @param iteratee 回调
     * @param initialValue 默认值
     * @example
     */
    reduce: typeof reduce;
  }
}

export default reduce
