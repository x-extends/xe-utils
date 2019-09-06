import { XEUtilsMethods } from '../xe-utils'

/**
 * 返回对象第一个索引值
 * @param obj 对象
 * @param iteratee 迭代器/属性
 * @param context 上下文
 */
export declare function findIndexOf(obj: object | Array<any>, iteratee: any, context?: any): number;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 返回对象第一个索引值
     * @param obj 对象
     * @param iteratee 迭代器/属性
     * @param context 上下文
     */
    findIndexOf(obj: object | Array<any>, iteratee: any, context?: any): number;
  }
}

export default findIndexOf