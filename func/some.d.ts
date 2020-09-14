/**
 * 对象中的值中的每一项运行给定函数,如果函数对任一项返回 true,则返回 true,否则返回 false
 * @param list 数组
 * @param iterate 回调
 * @param context 上下文
 */
export declare function some<T>(list: T[], iterate: (item: T, index: number, list: T[]) => boolean, context?: any): boolean;

declare module './ctor' {
  interface XEUtilsMethods {
    some: typeof some;
  }
}

export default some
