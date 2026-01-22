/**
 * 判断是否 Set 对象
 * @param val 值
 */
export declare function isSet(val: any): val is Set<any>;

declare module './ctor' {
  interface XEUtilsMethods {
    isSet: typeof isSet;
  }
}

export default isSet
