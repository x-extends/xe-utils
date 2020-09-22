/**
 * 创建一个绑定上下文的函数
 * @param callback 回调
 * @param context 上下文
 * @param params 额外的参数
 */
export declare function bind<C>(callback: (this: C, ...args: any[]) => any, context?: C, ...params: any[]): (this: any, ...args: any[]) => any;

declare module './ctor' {
  interface XEUtilsMethods {
    bind: typeof bind;
  }
}

export default bind
