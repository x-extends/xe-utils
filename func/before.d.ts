/**
 * 创建一个函数, 调用次数不超过 count 次之前执行回调并将所有结果记住后返回
 * @param count 次数
 * @param callback 回调
 * @param context 上下文
 */
export declare function before<C>(count: number, callback: (this: C, rests: any[], ...args: any[]) => any, context?: C): (this: any, ...args: any[]) => any;

declare module './ctor' {
  interface XEUtilsMethods {
    before: typeof before;
  }
}

export default before
