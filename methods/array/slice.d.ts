import { XEUtilsMethods } from '../xe-utils'

/**
 * slice ( array, start, end ) 裁剪 Arguments 或数组 array，从 start 位置开始到 end 结束，但不包括 end 本身的位置
 * @param array 对象
 * @param start 迭代器/属性
 * @param end 上下文
 */
export declare function slice(array: any[], start?: number, end?: number): any[];

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * slice ( array, start, end ) 裁剪 Arguments 或数组 array，从 start 位置开始到 end 结束，但不包括 end 本身的位置
     * @param array 对象
     * @param start 迭代器/属性
     * @param end 上下文
     */
    slice: typeof slice;
  }
}

export default slice
