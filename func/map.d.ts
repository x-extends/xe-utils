export declare function mapIterate(item: any, index: number, list: any[]): any;

/**
 * 指定方法后的返回值组成的新数组
 * @param array 数组
 * @param iterate 回调
 * @param context 上下文
 */
export declare function map(array: any[], iterate: typeof mapIterate, context?: any): any[];

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 指定方法后的返回值组成的新数组
     * @param array 数组
     * @param iterate 回调
     * @param context 上下文
     */
    map: typeof map;
  }
}

export default map
