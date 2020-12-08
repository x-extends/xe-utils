interface OrderBySortConfs<T, C> {
  field?: string | ((this: C, item: T, index: number, list: T[]) => any) | null;
  order?: 'order' | 'desc' | null;
}

export type OrderByFieldConfs<T, C> = null | string | any[][] | OrderBySortConfs<T, C> | (string | OrderBySortConfs<T, C>)[] | ((this: C, item: T, index: number, list: T[]) => any);

/**
 * 将数组进行排序
 * @param array 数组
 * @param fieldConfs 排序规则
 * @param context 上下文
 */
export declare function orderBy<T, C>(array: T[], fieldConfs: OrderByFieldConfs<T, C>, context?: C): T[];

declare module './ctor' {
  interface XEUtilsMethods {
    orderBy: typeof orderBy;
  }
}

export default orderBy
