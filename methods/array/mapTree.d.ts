/**
 * 从树结构中指定方法后的返回值组成的新数组
 * @param {Object} obj 对象/数组
 * @param {Function} iterate(item, index, items, path) 回调
 * @param {Object} options {children: 'children', mapChildren: 'children}
 * @param {Object} context 上下文
 */
export declare function mapTree(array: Array<any>, iterate: Function, options?: object, context?: any): Array<any>;

export default mapTree