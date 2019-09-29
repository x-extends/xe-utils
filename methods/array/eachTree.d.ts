import { XEUtilsMethods } from '../xe-utils'

function eachTreeIterate(item: any, index: number, items: Array<any>, path: Array<string>, parent: any, nodes: Array<any>){}

interface eachTreeOptions {
  children?: string = 'children';
}

/**
 * 从树结构中遍历数据的键、值、路径
 * @param {Object} obj 对象/数组
 * @param {Function} iterate(item, index, items, path, parent, nodes) 回调
 * @param {Object} options {children: 'children'}
 * @param {Object} context 上下文
 */
export declare function eachTree(array: Array<any>, iterate: typeof eachTreeIterate, options?: eachTreeOptions, context?: any): void;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 从树结构中遍历数据的键、值、路径
     * @param {Object} obj 对象/数组
     * @param {Function} iterate(item, index, items, path, parent, nodes) 回调
     * @param {Object} options {children: 'children'}
     * @param {Object} context 上下文
     */
    eachTree(array: Array<any>, iterate: typeof eachTreeIterate, options?: eachTreeOptions, context?: any): void;
  }
}

export default eachTree