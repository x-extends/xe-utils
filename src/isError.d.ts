/**
 * 判断是否 Error 对象
 * @param val 值
 */
export declare function isError(val: any): val is Error;

declare module './ctor' {
  interface XEUtilsMethods {
    isError: typeof isError;
  }
}

export default isError
