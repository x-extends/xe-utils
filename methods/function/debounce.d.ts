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
 * 函数去抖；当被调用 n 毫秒后才会执行，如果在这时间内又被调用则将重新计算执行时间
 * @param callback 回调
 * @param wait 毫秒
 * @param options 可选参数
 */
export declare function debounce(callback: Function, wait: number, options: DebounceOptions): Function;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 函数去抖；当被调用 n 毫秒后才会执行，如果在这时间内又被调用则将重新计算执行时间
     * @param callback 回调
     * @param wait 毫秒
     * @param options 可选参数
     */
    debounce: typeof debounce;
  }
}

export default debounce
