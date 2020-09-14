
/**
 * 获取最大值
 * @param list 数组
 * @param iterate 回调/属性
 */
export declare function max<T, U>(list: T[], iterate: string | number | ((item: T, index: number, list: T[]) => U)): T | U;

declare module './ctor' {
  interface XEUtilsMethods {
    max: typeof max;
  }
}

export default max
