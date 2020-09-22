
export interface FilterTreeOptions {
  children?: string;
}

/**
 * 从树结构中根据回调过滤数据
 * @param {Object} list 数组
 * @param {Function} iterate(item, index, items, path, parent) 回调
 * @param {Object} options {children: 'children'}
 * @param {Object} context 上下文
 */
export declare function filterTree<T, C>(list: T[], iterate: (this: C, item: T, index: number, items: T[], path: string[], parent: T, nodes: T[]) => boolean, options?: FilterTreeOptions, context?: C): T[];

declare module './ctor' {
  interface XEUtilsMethods {
    filterTree: typeof filterTree;
  }
}

export default filterTree
