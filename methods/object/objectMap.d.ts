import { XEUtilsMethods } from '../xe-utils'

/**
 * 指定方法后的返回值组成的新对象
 * @param obj 对象
 * @param iteratee 回调
 * @param context 上下文
 */
export declare function objectMap(obj: any, iteratee: Function, context ?: any): any;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 指定方法后的返回值组成的新对象
     * @param obj 对象
     * @param iteratee 回调
     * @param context 上下文
     */
    objectMap: typeof objectMap;
  }
}

export default objectMap