export declare function findIterate(item: any, index: number, list: any): any;

/**
 * 从左至右遍历，匹配最近的一条数据
 * @param array 数组
 * @param iterate 回调
 * @param context 上下文
 */
export declare function find(array: any[], iterate: typeof findIterate, context?: any): any;

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 从左至右遍历，匹配最近的一条数据
     * @param array 数组
     * @param iterate 回调
     * @param context 上下文
     */
    find: typeof find;
  }
}

export default find
