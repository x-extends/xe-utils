/**
 * 返回当前时间戳
 */
export declare function now(): number;

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 返回当前时间戳
     */
    now: typeof now;
  }
}

export default now
