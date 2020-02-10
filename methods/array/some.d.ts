import { XEUtilsMethods } from '../xe-utils'

/**
 * 对象中的值中的每一项运行给定函数,如果函数对任一项返回 true,则返回 true,否则返回 false
 * @param array 数组
 * @param iteratee 回调
 * @param context 上下文
 */
export declare function some(array: any[], iteratee: Function, context?: any): any[];

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 对象中的值中的每一项运行给定函数,如果函数对任一项返回 true,则返回 true,否则返回 false
     * @param array 数组
     * @param iteratee 回调
     * @param context 上下文
     */
    some: typeof some;
  }
}

export default some
