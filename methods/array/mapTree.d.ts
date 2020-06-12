import { XEUtilsMethods } from '../xe-utils'

export declare function mapTreeIterate(item: any, index: number, items: any[], path: string[], parent: any, nodes: any[]): any;

interface MapTreeOptions {
  children?: string;
  mapChildren?: string;
}

/**
 * 从树结构中指定方法后的返回值组成的新数组
 * @param {Object} obj 对象/数组
 * @param {Function} iterate(item, index, items, path, parent, nodes) 回调
 * @param {Object} options {children: 'children', mapChildren: 'children}
 * @param {Object} context 上下文
 */
export declare function mapTree(array: any[], iterate: typeof mapTreeIterate, options?: MapTreeOptions, context?: any): any[];

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 从树结构中指定方法后的返回值组成的新数组
     * @param {Object} obj 对象/数组
     * @param {Function} iterate(item, index, items, path, parent, nodes) 回调
     * @param {Object} options {children: 'children', mapChildren: 'children}
     * @param {Object} context 上下文
     */
    mapTree: typeof mapTree;
  }
}

export default mapTree