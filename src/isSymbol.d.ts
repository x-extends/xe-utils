/**
 * 判断是否 Symbol 对象
 * @param val 值
 */
export declare function isSymbol(val: any): val is symbol;

declare module './ctor' {
  interface XEUtilsMethods {
    isSymbol: typeof isSymbol;
  }
}

export default isSymbol
