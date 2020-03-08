import { XEUtilsMethods } from '../xe-utils'

/**
 * 平铺一层数组
 * @param array 数组
 * @param deep 是否平铺多级
 */
export declare function flatten(array: any[], deep?: boolean): any[];

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 平铺一层数组
     * @param array 数组
     * @param deep 是否平铺多级
     */
    flatten: typeof flatten;
  }
}

export default flatten
