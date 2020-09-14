/**
 * 求平均值函数
 * @param array 对象/数组
 * @param iterate 回调
 * @param context 上下文
 */
export declare function mean<T>(obj: T[], iterate?: string | number | ((item: T, index: number, list: T[]) => any), context?: any): number;

declare module './ctor' {
  interface XEUtilsMethods {
    mean: typeof mean;
  }
}

export default mean
