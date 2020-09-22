/**
 * 创建一个只能调用一次的函数,只会返回第一次执行后的结果
 * @param callback 回调
 * @param context 上下文
 * @param params 额外的参数
 */
export declare function once<S, C>(callback: (this: S, ...args: any[]) => any, context?: C, ...params: any[]): (this: S | C, ...args: any[]) => any;

declare module './ctor' {
  interface XEUtilsMethods {
    once: typeof once;
  }
}

export default once
