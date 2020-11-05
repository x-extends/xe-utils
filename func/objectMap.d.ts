
/**
 * 指定方法后的返回值组成的新对象
 * @param obj 对象
 * @param iterate 回调
 * @param context 上下文
 */
export declare function objectMap<T, U>(obj: T, iterate: (item: any, key: string, obj: T) => U, context ?: any): U;
export declare function objectMap<U>(obj: any, iterate: (item: any, key: string, obj: any) => U, context ?: any): U;

declare module './ctor' {
  interface XEUtilsMethods {
    objectMap: typeof objectMap;
  }
}

export default objectMap
