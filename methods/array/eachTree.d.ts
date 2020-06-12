import { XEUtilsMethods } from '../xe-utils'

export declare function eachTreeIterate(item: any, index: number, items: any[], path: Array<string>, parent: any, nodes: any[]): any;

export interface EachTreeOptions {
  children?: string;
}

/**
 * 从树结构中遍历数据的键、值、路径
 * @param {Object} obj 对象/数组
 * @param {Function} iterate(item, index, items, path, parent, nodes) 回调
 * @param {Object} options {children: 'children'}
 * @param {Object} context 上下文
 */
export declare function eachTree(array: any[], iterate: typeof eachTreeIterate, options?: EachTreeOptions, context?: any): void;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 从树结构中遍历数据的键、值、路径
     * @param {Object} obj 对象/数组
     * @param {Function} iterate(item, index, items, path, parent, nodes) 回调
     * @param {Object} options {children: 'children'}
     * @param {Object} context 上下文
     */
    eachTree: typeof eachTree;
  }
}

export default eachTree
