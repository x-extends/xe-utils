import { XEUtilsMethods } from '../xe-utils'

/**
 * 将一个多维数组铺平
 * @param array 数组
 * @param deep 是否深层
 */
export declare function flatten(array: any[], deep?: boolean): any[];

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 将一个多维数组铺平
     * @param array 数组
     * @param deep 是否深层
     */
    flatten: typeof flatten;
  }
}

export default flatten
