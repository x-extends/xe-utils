import { XEUtilsMethods } from '../xe-utils'

/**
 * 从树结构中查找匹配第一条数据的键、值、路径
 * @param {Object} obj 对象/数组
 * @param {Function} iterate(item, index, items, path, parent) 回调
 * @param {Object} options {children: 'children'}
 * @param {Object} context 上下文
 */
export declare function findTree(array: Array<any>, iterate: Function, options?: object, context?: any): any;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 从树结构中查找匹配第一条数据的键、值、路径
     * @param {Object} obj 对象/数组
     * @param {Function} iterate(item, index, items, path, parent) 回调
     * @param {Object} options {children: 'children'}
     * @param {Object} context 上下文
     */
    findTree(array: Array<any>, iterate: Function, options?: object, context?: any): any;
  }
}

export default findTree