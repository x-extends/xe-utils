import { XEUtilsMethods } from '../xe-utils'

/**
 * 深度比较两个对象之间的值是否相等
 * @param obj1 值1
 * @param obj2 值2
 */
export declare function isEqual(obj1: any, obj2: any): boolean;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 深度比较两个对象之间的值是否相等
     * @param obj1 值1
     * @param obj2 值2
     */
    isEqual: typeof isEqual;
  }
}

export default isEqual
