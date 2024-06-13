/**
 * 获取最大值
 * @param list 数组
 * @param iterate 回调/属性
 */
export declare function max<T>(list: T[], iterate: string | number | ((item: T, index: number, list: T[]) => number | string)): T | null | undefined;

declare module './ctor' {
  interface XEUtilsMethods {
    max: typeof max;
  }
}

export default max
