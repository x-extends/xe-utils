/**
 * 判断是否 Set 对象
 * @param val 值
 */
export declare function isSet(val: any): boolean;

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 判断是否 Set 对象
     * @param val 值
     */
    isSet: typeof isSet;
  }
}

export default isSet
