/**
 * 数组去重
 * @param list 数组
 * @param iterate 回调/对象属性
 * @param context 上下文
 */
export declare function uniq<T>(list: T[], iterate: string | number | ((this: C, item: T, index: number, obj: T[]) => string | number), context?: C): T[];
export declare function uniq<T>(list: T, iterate: string | number | ((this: C, item: any, index: number, obj: T) => string | number), context?: C): T;

declare module './ctor' {
  interface XEUtilsMethods {
    uniq: typeof uniq;
  }
}

export default uniq
