import { XEUtilsMethods } from '../xe-utils'

/**
 * 浅拷贝一个或者多个对象到目标对象中
 * @param destination 目标对象
 * @param sources 多个对象
*/
export declare function assign(destination: object, ...sources: object[]): object;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 浅拷贝一个或者多个对象到目标对象中
     * @param destination 目标对象
     * @param sources 多个对象
    */
    assign(destination: object, ...sources: object[]): object;
  }
}

export default assign