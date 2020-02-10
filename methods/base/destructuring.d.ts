import { XEUtilsMethods } from '../xe-utils'

/**
 * 将一个或者多个对象值解构到目标对象
 * @param obj 对象
 * @param target 目标
 */
export declare function destructuring(obj: any, ...target: any[]): any;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 将一个或者多个对象值解构到目标对象
     * @param obj 对象
     * @param target 目标
     */
    destructuring: typeof destructuring;
  }
}

export default destructuring
