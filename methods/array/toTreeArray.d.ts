import { XEUtilsMethods } from '../xe-utils'

export interface ToTreeArrayOptions {
  children?: string;
  data?: string;
}

/**
 * 将一个树结构转成数组列表
 * @param {Array} array 数组
 * @param {Object} options {children: 'children', data: 'data'}
 */
export declare function toTreeArray(array: any[], options?: ToTreeArrayOptions): any[];

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 将一个树结构转成数组列表
     * @param {Array} array 数组
     * @param {Object} options {children: 'children', data: 'data'}
     */
    toTreeArray: typeof toTreeArray;
  }
}

export default toTreeArray
