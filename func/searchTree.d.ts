
export interface SearchTreeOptions {
  children?: string;
  mapChildren?: string;
  original?: boolean;
  data?: string;
}

/**
 * 从树结构中根据回调查找数据
 * @param {Object} list 对象/数组
 * @param {Function} iterate(item, index, items, path, parent, nodes) 回调
 * @param {Object} options {children: 'children'}
 * @param {Object} context 上下文
 */
export declare function searchTree<T>(list: T[], iterate: (item: T, index: number, items: T[], path: string[], parent: T, nodes: T[]) => boolean, options?: SearchTreeOptions, context?: any): T[];
export declare function searchTree(list: any[], iterate: (item: any, index: number, items: any[], path: string[], parent: any, nodes: any[]) => boolean, options?: SearchTreeOptions, context?: any): any[];
export declare function searchTree(list: any, iterate: (item: any, index: number, items: any, path: string, parent: any, nodes: any) => boolean, options?: SearchTreeOptions, context?: any): any[];

declare module './ctor' {
  interface XEUtilsMethods {
    searchTree: typeof searchTree;
  }
}

export default searchTree
