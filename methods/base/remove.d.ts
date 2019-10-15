import { XEUtilsMethods } from '../xe-utils'

/**
 * 移除对象属性
 * @param obj 对象
 * @param iteratee 迭代器/值
 */
export declare function remove(obj: any, iteratee: any): any;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 移除对象属性
     * @param obj 对象
     * @param iteratee 迭代器/值
     */
    remove: typeof remove;
  }
}

export default remove