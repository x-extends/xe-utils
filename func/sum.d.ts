/**
 * 求和函数，将数值相加
 * @param obj 对象/数组
 * @param iterate 回调
 * @param context 上下文
 */
export declare function sum<T>(obj: T[], iterate?: string | number | ((item: T, index: number, list: T[]) => number), context?: any): number;

declare module './ctor' {
  interface XEUtilsMethods {
    sum: typeof sum;
  }
}

export default sum
