import { XEUtilsMethods } from '../xe-utils'

/**
 * 判断数组是否包含另一数组
 * @param array1 数组
 * @param array2 数组
 */
export declare function includeArrays(array1: Array<any>, array2: Array<any>): boolean;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 判断数组是否包含另一数组
     * @param array1 数组
     * @param array2 数组
     */
    includeArrays(array1: Array<any>, array2: Array<any>): boolean;
  }
}

export default includeArrays