import { XEUtilsMethods } from '../xe-utils'

export declare function findTreeIterate(item: any, index: number, items: any[], path: string[], parent: any, nodes: any[]): any;

interface TerrResult {
  index: number;
  item: any;
  path: Array<string>;
  items: any[];
  parent: any;
  nodes: any[];
}

interface FindTreeOptions {
  children?: string;
}

/**
 * 从树结构中查找匹配第一条数据的键、值、路径
 * @param {Object} obj 对象/数组
 * @param {Function} iterate(item, index, items, path, parent, nodes) 回调
 * @param {Object} options {children: 'children'}
 * @param {Object} context 上下文
 */
export declare function findTree(array: any[], iterate: typeof findTreeIterate, options?: FindTreeOptions, context?: any): TerrResult;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 从树结构中查找匹配第一条数据的键、值、路径
     * @param {Object} obj 对象/数组
     * @param {Function} iterate(item, index, items, path, parent, nodes) 回调
     * @param {Object} options {children: 'children'}
     * @param {Object} context 上下文
     */
    findTree: typeof findTree;
  }
}

export default findTree
