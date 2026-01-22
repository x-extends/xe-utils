/**
 * 将对象或者伪数组转为新数组
 * @param list 对象/数组
 */
export declare function toArray<T>(list: T[]): T[];
export declare function toArray(list: any): any[];

declare module './ctor' {
  interface XEUtilsMethods {
    toArray: typeof toArray;
  }
}

export default toArray
