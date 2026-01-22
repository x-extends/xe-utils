/**
 * 将一个或者多个对象值解构到目标对象
 * @param obj 对象
 * @param target 目标
 */
export declare function destructuring<T>(obj: T, ...target: any[]): T;

declare module './ctor' {
  interface XEUtilsMethods {
    destructuring: typeof destructuring;
  }
}

export default destructuring
