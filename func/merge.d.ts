/**
 * 将一个或多个源对象合并到目标对象中
 * @param target 目标对象
 * @param source1 要从中复制属性的源对象1
*/
export declare function merge<T, U>(target: T, source1: U): T & U;
/**
 * 将一个或多个源对象合并到目标对象中
 * @param target 目标对象
 * @param source1 要从中复制属性的源对象1
 * @param source2 要从中复制属性的源对象2
*/
export declare function merge<T, U, V>(target: T, source1: U, source2: V): T & U & V;

/**
 * 将一个或多个源对象合并到目标对象中
 * @param target 目标对象
 * @param source1 要从中复制属性的源对象1
 * @param source2 要从中复制属性的源对象2
 * @param source3 要从中复制属性的源对象3
*/
export declare function merge<T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;

/**
 * 将一个或多个源对象合并到目标对象中
 * @param target 目标对象
 * @param sources 要从中复制属性的多个源对象
*/
export declare function merge(target: any, ...sources: any[]): any;

declare module './ctor' {
  interface XEUtilsMethods {
   merge: typeof merge;
  }
}

export default merge
