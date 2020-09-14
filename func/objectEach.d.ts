
/**
 * 对象迭代器
 * @param obj 对象
 * @param iterate 回调
 * @param context 上下文
 */
export declare function objectEach<T>(obj: T, iterate: (item: any, key: string, obj: T) => void, context ?: any): void;

declare module './ctor' {
  interface XEUtilsMethods {
    objectEach: typeof objectEach;
  }
}

export default objectEach
