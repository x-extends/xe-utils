/**
 * 从树结构中遍历数据的键、值、路径
 * @param {Object} obj 对象/数组
 * @param {Function} iterate(item, index, items, path, parent) 回调
 * @param {Object} options {children: 'children'}
 * @param {Object} context 上下文
 */
export declare function eachTree(array: Array<any>, iterate: Function, options?: object, context?: any): void;

export default eachTree