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
export declare function throttle<C>(callback: (this: C, ...args: any[]) => any, wait: number, options?: ThrottleOptions): (this: C, ...args: any[]) => any;

declare module './ctor' {
  interface XEUtilsMethods {
    throttle: typeof throttle;
  }
}

export default throttle
