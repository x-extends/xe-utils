/**
 * 移除对象属性
 * @param list 对象
 * @param iterate 迭代器/值
 */
export declare function remove<T, C>(list: T[], iterate: number | string | ((this: C, item: T, index: number, list: T[]) => boolean), context?: C): T[];

/**
 * 移除对象属性
 * @param obj 对象
 * @param iterate 迭代器/值
 */
export declare function remove<C>(obj: any, iterate: number | string | ((this: C, item: any, key: string, obj: any) => boolean), context?: C): any;

declare module './ctor' {
  interface XEUtilsMethods {
    remove: typeof remove;
  }
}

export default remove
