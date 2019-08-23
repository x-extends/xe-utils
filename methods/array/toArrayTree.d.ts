/**
 * 将一个带层级的数据列表转成树结构
 * @param {Array} array 数组
 * @param {Object} options {strict: false, parentKey: 'parentId', key: 'id', children: 'children', data: 'data'}
 */
export declare function toArrayTree(array: Array<any>, options?: object): Array<any>;

export default toArrayTree