import { XEUtilsMethods } from '../xe-utils'

export interface ThrottleOptions {
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
 * 节流函数；当被调用 n 毫秒后才会执行，如果在这时间内又被调用则至少每隔 n 秒毫秒调用一次该函数
 * @param callback 回调
 * @param wait 毫秒
 * @param options 可选参数
 */
export declare function throttle(callback: Function, wait: number, options?: ThrottleOptions): Function;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 节流函数；当被调用 n 毫秒后才会执行，如果在这时间内又被调用则至少每隔 n 秒毫秒调用一次该函数
     * @param callback 回调
     * @param wait 毫秒
     * @param options 可选参数
     */
    throttle: typeof throttle;
  }
}

export default throttle
