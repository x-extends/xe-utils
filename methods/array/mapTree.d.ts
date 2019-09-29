import { XEUtilsMethods } from '../xe-utils'

function mapTreeIterate(item: any, index: number, items: Array<any>, path: Array<string>, parent: any, nodes: Array<any>){}

interface mapTreeOptions {
  children?: string = 'children';
  mapChildren?: string;
}

/**
 * 从树结构中指定方法后的返回值组成的新数组
 * @param {Object} obj 对象/数组
 * @param {Function} iterate(item, index, items, path, parent, nodes) 回调
 * @param {Object} options {children: 'children', mapChildren: 'children}
 * @param {Object} context 上下文
 */
export declare function mapTree(array: Array<any>, iterate: typeof mapTreeOptions, options?: object, context?: any): Array<any>;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 从树结构中指定方法后的返回值组成的新数组
     * @param {Object} obj 对象/数组
     * @param {Function} iterate(item, index, items, path, parent, nodes) 回调
     * @param {Object} options {children: 'children', mapChildren: 'children}
     * @param {Object} context 上下文
     */
    mapTree(array: Array<any>, iterate: typeof mapTreeOptions, options?: object, context?: any): Array<any>;
  }
}

export default mapTree