interface OrderBySortConfs<T, C> {
  field?: string | ((this: C, item: T, index: number, list: T[]) => any) | null;
  order?: 'order' | 'desc' | null;
}

export type OrderByFieldConfs = null | string | OrderBySortConfs<T, C> | (string | OrderBySortConfs<T, C>)[] | ((this: C, item: T, index: number, list: T[]) => any);

/**
 * 将数组进行排序
 * @param array 数组
 * @param fieldConfs 排序规则
 * @param context 上下文
 */
export declare function orderBy<T, C>(array: T[], fieldConfs: string | OrderBySortConfs<T, C>, context?: C): T[];
export declare function orderBy<T, C>(array: T[], multifield: (string | OrderBySortConfs<T, C>)[], context?: C): T[];
export declare function orderBy<T, C>(array: T[], iterate: ((this: C, item: T, index: number, list: T[]) => any), context?: C): T[];

declare module './ctor' {
  interface XEUtilsMethods {
    orderBy: typeof orderBy;
  }
}

export default orderBy
