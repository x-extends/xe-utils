/**
 * 在list的每个元素上执行方法,任何传递的额外参数都会在调用方法的时候传递给它
 * @param list 数组
 * @param path
 * @example
 */
export declare function invoke(list: any[], path: string[] | string | ((this: any, ...args: any[]) => any)): any[];

declare module './ctor' {
  interface XEUtilsMethods {
    invoke: typeof invoke;
  }
}

export default invoke
