/**
 * 获取对象最后一个值
 * @param list 数组
 */
export declare function last<T>(list: T[] | ArrayLike<T>): T;

/**
 * 获取对象最后一个值
 * @param obj 对象
 */
export declare function last(obj: any): any;

declare module './ctor' {
  interface XEUtilsMethods {
    last: typeof last;
  }
}

export default last
