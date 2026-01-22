/**
 * 将一个多维数组铺平
 * @param list 数组
 * @param deep 是否深层
 */
export declare function flatten<T>(list: T[][], deep?: boolean): T[];

/**
 * 将一个多维数组铺平
 * @param list 数组
 * @param deep 是否深层
 */
export declare function flatten(list: any[], deep?: boolean): any[];

declare module './ctor' {
  interface XEUtilsMethods {
    flatten: typeof flatten;
  }
}

export default flatten
