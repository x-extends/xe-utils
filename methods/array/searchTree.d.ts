import { XEUtilsMethods } from '../xe-utils'

export declare function searchTreeIterate(item: any, index: number, items: any[], path: string[], parent: any, nodes: any[]): any;

export interface SearchTreeOptions {
  children?: string;
  mapChildren?: string;
  original?: boolean;
}

/**
 * 从树结构中根据回调查找数据
 * @param {Object} obj 对象/数组
 * @param {Function} iterate(item, index, items, path, parent, nodes) 回调
 * @param {Object} options {children: 'children'}
 * @param {Object} context 上下文
 */
export declare function searchTree(array: any[], iterate: typeof searchTreeIterate, options?: SearchTreeOptions, context?: any): any[];

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 从树结构中根据回调查找数据
     * @param {Object} obj 对象/数组
     * @param {Function} iterate(item, index, items, path, parent, nodes) 回调
     * @param {Object} options {children: 'children'}
     * @param {Object} context 上下文
     */
    searchTree: typeof searchTree;
  }
}

export default searchTree
