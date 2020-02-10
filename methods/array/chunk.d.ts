import { XEUtilsMethods } from '../xe-utils'

/**
 * 将一个数组分割成大小的组。如果数组不能被平均分配，那么最后一块将是剩下的元素
 * @param array 数组
 * @param size 每组大小
 */
export declare function chunk(array: any[], size: number): any[];

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 将一个数组分割成大小的组。如果数组不能被平均分配，那么最后一块将是剩下的元素
     * @param array 数组
     * @param size 每组大小
     */
    chunk: typeof chunk;
  }
}

export default chunk
