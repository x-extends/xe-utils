/**
 * 判断是否 Symbol 对象
 * @param val 值
 */
export declare function isSymbol(val: any): boolean;

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 判断是否 Symbol 对象
     * @param val 值
     */
    isSymbol: typeof isSymbol;
  }
}

export default isSymbol
