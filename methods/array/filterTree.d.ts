import { XEUtilsMethods } from '../xe-utils'

export declare function filterTreeIterate(item?: any, index?: number, items?: Array<any>, path?: Array<string>, parent?: any, nodes?: Array<any>): any;

export interface filterTreeOptions {
  children?: string;
}

/**
 * 从树结构中根据回调过滤数据
 * @param {Object} obj 对象/数组
 * @param {Function} iterate(item, index, items, path, parent) 回调
 * @param {Object} options {children: 'children'}
 * @param {Object} context 上下文
 */
export declare function filterTree(array: Array<any>, iterate: typeof filterTreeIterate, options?: filterTreeOptions, context?: any): Array<any>;

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