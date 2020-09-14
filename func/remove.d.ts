/**
 * 移除对象属性
 * @param list 对象
 * @param iterate 迭代器/值
 */
export declare function remove<T>(list: T[], iterate: number | string | ((item: T, index: number, list: T[]) => boolean)): T[];

/**
 * 移除对象属性
 * @param obj 对象
 * @param iterate 迭代器/值
 */
export declare function remove(obj: any, iterate: number | string | ((item: any, key: string, obj: any) => boolean)): any;

declare module './ctor' {
  interface XEUtilsMethods {
    remove: typeof remove;
  }
}

export default remove
