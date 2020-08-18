export declare function meanIterate(item: any, index: number, list: any[]): any;

/**
 * 求平均值函数
 * @param array 对象/数组
 * @param iterate 回调
 * @param context 上下文
 */
export declare function mean(obj: any, iterate?: typeof meanIterate | string | number, context?: any): number;

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 求平均值函数
     * @param array 对象/数组
     * @param iterate 回调
     * @param context 上下文
     */
    mean: typeof mean;
  }
}

export default mean
