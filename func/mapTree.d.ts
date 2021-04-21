export interface MapTreeOptions {
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
export declare function mapTree<T, U, C>(array: T[], iterate: (this: C, item: T, index: number, items: T[], path: string[], parent: T, nodes: T[]) => U, options?: MapTreeOptions, context?: C): U[];
export declare function mapTree<U, C>(array: any[], iterate: (this: C, item: any, index: number, items: any[], path: string[], parent: any, nodes: any[]) => U, options?: MapTreeOptions, context?: C): U[];
export declare function mapTree<U, C>(array: any, iterate: (this: C, item: any, index: number, items: any, path: string[], parent: any, nodes: any) => U, options?: MapTreeOptions, context?: C): U[];

declare module './ctor' {
  interface XEUtilsMethods {
    mapTree: typeof mapTree;
  }
}

export default mapTree
