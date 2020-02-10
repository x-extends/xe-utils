import { XEUtilsMethods } from '../xe-utils'

/**
 * 创建一个函数, 调用次数不超过 count 次之前执行回调并将所有结果记住后返回
 * @param count 次数
 * @param callback 回调
 * @param context 上下文
 */
export declare function before(count: number, callback: Function, context?: any): Function;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 创建一个函数, 调用次数不超过 count 次之前执行回调并将所有结果记住后返回
     * @param count 次数
     * @param callback 回调
     * @param context 上下文
     */
    before: typeof before;
  }
}

export default before
