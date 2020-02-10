import { XEUtilsMethods } from '../xe-utils'

/**
 * 创建一个只能调用一次的函数,只会返回第一次执行后的结果
 * @param callback 回调
 * @param context 上下文
 * @param params 额外的参数
 */
export declare function once(callback: Function, context?: any, ...params: any[]): Function;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 创建一个只能调用一次的函数,只会返回第一次执行后的结果
     * @param callback 回调
     * @param context 上下文
     * @param params 额外的参数
     */
    once: typeof once;
  }
}

export default once
