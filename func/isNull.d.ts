/**
 * 判断是否为 Null
 * @param val 值
 */
export declare function isNull(val: any): val is null;

declare module './ctor' {
  interface XEUtilsMethods {
    isNull: typeof isNull;
  }
}

export default isNull
