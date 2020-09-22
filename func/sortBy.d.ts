/**
 * 数组按属性值升序
 * @param array 数组
 * @param iterate 回调/属性
 * @param context 上下文
 */
export declare function sortBy<T, C>(array: T[], iterate: any[] | string | ((this: C, item: T, index: number, list: T[]) => boolean), context?: C): T[];

declare module './ctor' {
  interface XEUtilsMethods {
    sortBy: typeof sortBy;
  }
}

export default sortBy
