import { XEUtilsMethods } from '../xe-utils'

export declare function isEqualWithFunc(val1: any, val2: any, key: any, obj1: any, obj2: any): any;

/**
 * 深度比较两个对象之间的值是否相等，使用自定义比较函数
 * @param obj1 值1
 * @param obj2 值2
 * @param func 自定义函数
 */
export declare function isEqualWith(obj1: any, obj2: any, func?: typeof isEqualWithFunc): boolean;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 深度比较两个对象之间的值是否相等，使用自定义比较函数
     * @param obj1 值1
     * @param obj2 值2
     * @param func 自定义函数
     */
    isEqualWith: typeof isEqualWith;
  }
}

export default isEqualWith
