import { OrderByFieldConfs } from './orderBy'

export interface ToArrayTreeOptions<T> {
  strict?: boolean;
  key?: string;
  parentKey?: string;
  /**
   * 支持指定根节点的值。
   * 优先级最高
   */
  rootValues?: (string | number)[]
  /**
   * 支持指定根节点的值。
   * 默认情况下，如果 strict=false，则 parentKey 值不存节点内的算根节点，如果 strict=true，则 parentKey 值等于 null 的算根节点。
   */
  rootParentValue?: string | number | null
  children?: string;
  mapChildren?: string;
  sortKey?: OrderByFieldConfs<T, any>;
  data?: string;
  /**
   * 已废弃，被 sortKey: { field: 'name', order: 'desc' } 替换
   * @deprecated
   */
  reverse?: boolean;
}

/**
 * 将一个带层级的数据列表转成树结构
 * @param {Array} list 数组
 * @param {Object} options {strict: false, parentKey: 'parentId', key: 'id', children: 'children', mapChildren: '', data: 'data'}
 */
export declare function toArrayTree<T>(list: T[], options?: ToArrayTreeOptions<T>): T[];
export declare function toArrayTree(list: any, options?: ToArrayTreeOptions<any>): any[];

declare module './ctor' {
  interface XEUtilsMethods {
    toArrayTree: typeof toArrayTree;
  }
}

export default toArrayTree
