/**
 * 判断是否 WeakSet 对象
 * @param val 值
 */
export declare function isWeakSet(val: any): val is WeakSet<any>;

declare module './ctor' {
  interface XEUtilsMethods {
    isWeakSet: typeof isWeakSet;
  }
}

export default isWeakSet
