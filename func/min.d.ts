/**
 * 获取最小值
 * @param array 数组
 * @param iterate 回调/属性
 */
export declare function min<T, U>(list: T[], iterate: string | number | ((item: T, index: number, list: T[]) => U)): T | U;

declare module './ctor' {
  interface XEUtilsMethods {
    min: typeof min;
  }
}

export default min
