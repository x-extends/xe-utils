import { OrderByFieldConfs } from './orderBy'

export interface ToArrayTreeOptions<T> {
  strict?: boolean;
  key?: string;
  parentKey?: string;
  children?: string;
  sortKey?: OrderByFieldConfs<T, any>;
  data?: string;
  /**
   * 已废弃，被 sortKey: { ...,order: 'desc' } 替换
   * @deprecated
   */
  reverse?: boolean;
}

/**
 * 将一个带层级的数据列表转成树结构
 * @param {Array} list 数组
 * @param {Object} options {strict: false, parentKey: 'parentId', key: 'id', children: 'children', data: 'data'}
 */
export declare function toArrayTree<T>(list: T[], options?: ToArrayTreeOptions<T>): T[];
export declare function toArrayTree(list: any, options?: ToArrayTreeOptions<any>): any[];

declare module './ctor' {
  interface XEUtilsMethods {
    toArrayTree: typeof toArrayTree;
  }
}

export default toArrayTree
