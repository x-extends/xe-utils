/**
 * 获取对象第一个值
 * @param list 数组
 */
export declare function first<T>(list: T[] | ArrayLike<T>): T;
export declare function first(obj: any): any;

declare module './ctor' {
  interface XEUtilsMethods {
    first: typeof first;
  }
}

export default first
