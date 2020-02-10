import { XEUtilsMethods } from '../xe-utils'

/**
 * 创建一个绑定上下文的函数
 * @param callback 回调
 * @param context 上下文
 * @param params 额外的参数
 */
export declare function bind(callback: Function, context?: any, ...params: any[]): Function;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 创建一个绑定上下文的函数
     * @param callback 回调
     * @param context 上下文
     * @param params 额外的参数
     */
    bind: typeof bind;
  }
}

export default bind
