/**
 * 判断 Undefined
 * @param val 值
 */
export declare function isUndefined(val: any): boolean;

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 判断 Undefined
     * @param val 值
     */
    isUndefined: typeof isUndefined;
  }
}

export default isUndefined
