import { XEUtilsMethods } from '../xe-utils'

/**
 * 判断是否 Symbol 对象
 * @param val 值
 */
export declare function isSymbol(val: any): boolean;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 判断是否 Symbol 对象
     * @param val 值
     */
    isSymbol: typeof isSymbol;
  }
}

export default isSymbol
