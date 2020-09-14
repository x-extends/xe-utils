
/**
 * 接收一个函数作为累加器，数组中的每个值（从左到右）开始合并，最终为一个值
 * @param array 数组
 * @param iterate 回调
 * @param initialValue 默认值
 * @example
 */
export declare function reduce<T, U>(array: T[], iterate?: (previous: U, item: T, index: number, list: T[]) => U, initialValue?: U): U;

declare module './ctor' {
  interface XEUtilsMethods {
    reduce: typeof reduce;
  }
}

export default reduce
