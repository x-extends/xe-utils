/**
 * 判断是否 Boolean 对象
 * @param val 值
 */
export declare function isBoolean(val: any): val is boolean;

declare module './ctor' {
  interface XEUtilsMethods {
    isBoolean: typeof isBoolean;
  }
}

export default isBoolean
