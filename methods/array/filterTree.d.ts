import { XEUtilsMethods } from '../xe-utils'

export declare function filterTreeIterate(item: any, index: number, items: any[], path: Array<string>, parent: any, nodes: any[]): any;

export interface FilterTreeOptions {
  children?: string;
}

/**
 * 从树结构中根据回调过滤数据
 * @param {Object} obj 对象/数组
 * @param {Function} iterate(item, index, items, path, parent) 回调
 * @param {Object} options {children: 'children'}
 * @param {Object} context 上下文
 */
export declare function filterTree(array: any[], iterate: typeof filterTreeIterate, options?: FilterTreeOptions, context?: any): any[];

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 从树结构中根据回调过滤数据
     * @param {Object} obj 对象/数组
     * @param {Function} iterate(item, index, items, path, parent) 回调
     * @param {Object} options {children: 'children'}
     * @param {Object} context 上下文
     */
    filterTree: typeof filterTree;
  }
}

export default filterTree
