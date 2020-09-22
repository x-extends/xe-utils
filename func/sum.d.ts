/**
 * 求和函数，将数值相加
 * @param obj 对象/数组
 * @param iterate 回调
 * @param context 上下文
 */
export declare function sum<T, C>(obj: T[], iterate?: string | number | ((this: C, item: T, index: number, list: T[]) => number), context?: C): number;

declare module './ctor' {
  interface XEUtilsMethods {
    sum: typeof sum;
  }
}

export default sum
