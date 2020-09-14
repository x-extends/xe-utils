export interface ToArrayTreeOptions {
  strict?: boolean;
  key?: string;
  parentKey?: string;
  children?: string;
  sortKey?: string;
  reverse?: string;
  data?: string;
}

/**
 * 将一个带层级的数据列表转成树结构
 * @param {Array} list 数组
 * @param {Object} options {strict: false, parentKey: 'parentId', key: 'id', children: 'children', data: 'data'}
 */
export declare function toArrayTree<T>(list: T[], options?: ToArrayTreeOptions): T[];

declare module './ctor' {
  interface XEUtilsMethods {
    toArrayTree: typeof toArrayTree;
  }
}

export default toArrayTree
