import { XEUtilsMethods } from '../xe-utils'

/**
 * 将一个或多个源对象合并到目标对象中
 * @param target 目标对象
 * @param sources 多个对象
*/
export declare function merge(target: { [key: string]: any } | any[], ...sources: any[]): any;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 将一个或多个源对象合并到目标对象中
     * @param target 目标对象
     * @param sources 多个对象
    */
   merge: typeof merge;
  }
}

export default merge
