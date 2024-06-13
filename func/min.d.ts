/**
 * 获取最小值
 * @param array 数组
 * @param iterate 回调/属性
 */
export declare function min<T>(list: T[], iterate?: string | number | ((item: T, index: number, list: T[]) => number | string)): T | null | undefined;

declare module './ctor' {
  interface XEUtilsMethods {
    min: typeof min;
  }
}

export default min
