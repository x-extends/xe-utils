export interface EachTreeOptions {
  children?: string;
}

/**
 * 从树结构中遍历数据的键、值、路径
 * @param {Object} list 数组
 * @param {Function} iterate(item, index, items, path, parent, nodes) 回调
 * @param {Object} options {children: 'children'}
 * @param {Object} context 上下文
 */
export declare function eachTree<T, C>(list: T[], iterate: (this: C, item: T, index: number, items: T[], path: string[], parent: T, nodes: T[]) => void, options?: EachTreeOptions, context?: C): void;
export declare function eachTree<C>(list: any[], iterate: (this: C, item: any, index: number, items: any[], path: string[], parent: any, nodes: any[]) => void, options?: EachTreeOptions, context?: C): void;
export declare function eachTree<C>(list: any, iterate: (this: C, item: any, index: number, items: any, path: string[], parent: any, nodes: any) => void, options?: EachTreeOptions, context?: C): void;

declare module './ctor' {
  interface XEUtilsMethods {
    eachTree: typeof eachTree;
  }
}

export default eachTree
