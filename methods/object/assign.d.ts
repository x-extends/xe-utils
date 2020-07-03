import { XEUtilsMethods } from '../xe-utils'

/**
 * 将一个或多个源对象复制到目标对象中
 * @param target 目标对象
 * @param sources 多个对象
*/
export declare function assign(target: any, ...sources: any[]): any;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 将一个或多个源对象复制到目标对象中
     * @param target 目标对象
     * @param sources 多个对象
    */
    assign: typeof assign;
  }
}

export default assign
