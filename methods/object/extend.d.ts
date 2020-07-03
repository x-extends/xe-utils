import { XEUtilsMethods } from '../xe-utils'

/**
 * 该方法已废弃，被 assign 替换
 * @param target 目标对象
 * @param sources 多个对象
*/
export declare function extend(target: any, ...sources: any[]): any;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 该方法已废弃，被 assign 替换
     * @param target 目标对象
     * @param sources 多个对象
    */
    extend: typeof extend;
  }
}

export default extend
