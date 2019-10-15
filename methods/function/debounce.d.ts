import { XEUtilsMethods } from '../xe-utils'

export interface DebounceOptions {
  /**
   * 是否在之前执行
   */
  leading?: boolean;
  /**
   * 是否在之后执行
   */
  trailing?: boolean;
}

/**
 * 创建一个防反跳策略函数，在函数最后一次调用多少毫秒之后才会再次执行，如果在期间内重复
 * @param callback 回调
 * @param wait 毫秒
 * @param options 可选参数
 */
export declare function debounce(callback: Function, wait: number, options: DebounceOptions): Function;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 创建一个防反跳策略函数，在函数最后一次调用多少毫秒之后才会再次执行，如果在期间内重复
     * @param callback 回调
     * @param wait 毫秒
     * @param options 可选参数
     */
    debounce: typeof debounce;
  }
}

export default debounce