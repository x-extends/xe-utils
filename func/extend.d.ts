/**
 * 该方法已废弃，被 assign 替换
 * @param target 目标对象
 * @param sources 多个对象
 * @deprecated
*/
export declare function extend(target: any, ...sources: any[]): any;

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 该方法已废弃，被 assign 替换
     * @param target 目标对象
     * @param sources 多个对象
     * @deprecated
    */
    extend: typeof extend;
  }
}

export default extend
