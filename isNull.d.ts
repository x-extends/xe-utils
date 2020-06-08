/**
 * 判断是否为 Null
 * @param val 值
 */
export declare function isNull(val: any): boolean;

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 判断是否为 Null
     * @param val 值
     */
    isNull: typeof isNull;
  }
}

export default isNull
