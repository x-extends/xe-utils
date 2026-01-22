/**
 * 判断是否 Arguments 对象
 * @param val 值
 */
export declare function isArguments(val: any): val is IArguments;

declare module './ctor' {
  interface XEUtilsMethods {
    isArguments: typeof isArguments;
  }
}

export default isArguments
