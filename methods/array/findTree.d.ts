import { XEUtilsMethods } from '../xe-utils'

export declare function findTreeIterate(item?: any, index?: number, items?: Array<any>, path?: Array<string>, parent?: any, nodes?: Array<any>): any;

interface TerrResult { 
  index?: number;
  item?: any;
  path?: Array<string>;
  items?: Array<any>;
  parent?: any;
  nodes?: Array<any>;
}

interface findTreeOptions {
  children?: string;
}

/**
 * 从树结构中查找匹配第一条数据的键、值、路径
 * @param {Object} obj 对象/数组
 * @param {Function} iterate(item, index, items, path, parent, nodes) 回调
 * @param {Object} options {children: 'children'}
 * @param {Object} context 上下文
 */
export declare function findTree(array: Array<any>, iterate: typeof findTreeIterate, options?: findTreeOptions, context?: any): any;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 从树结构中查找匹配第一条数据的键、值、路径
     * @param {Object} obj 对象/数组
     * @param {Function} iterate(item, index, items, path, parent, nodes) 回调
     * @param {Object} options {children: 'children'}
     * @param {Object} context 上下文
     */
    findTree(array: Array<any>, iterate: typeof findTreeIterate, options?: findTreeOptions, context?: any): TerrResult;
  }
}

export default findTree