import { XEUtilsMethods } from '../xe-utils'

/**
 * 将一个树结构转成数组列表
 * @param {Array} array 数组
 * @param {Object} options {children: 'children', data: 'data'}
 */
export declare function toTreeArray(array: Array<any>, options?: object): Array<any>;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 将一个树结构转成数组列表
     * @param {Array} array 数组
     * @param {Object} options {children: 'children', data: 'data'}
     */
    toTreeArray(array: Array<any>, options?: object): Array<any>;
  }
}

export default toTreeArray