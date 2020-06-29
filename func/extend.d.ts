/**
 * 浅拷贝一个或者多个对象到目标对象中
 * @param target 目标对象
 * @param sources 多个对象
*/
export declare function extend(target: any, ...sources: any[]): any;

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 浅拷贝一个或者多个对象到目标对象中
     * @param target 目标对象
     * @param sources 多个对象
    */
    extend: typeof extend;
  }
}

export default extend
