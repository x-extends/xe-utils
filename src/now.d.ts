/**
 * 返回当前时间戳
 */
export declare function now(): number;

declare module './ctor' {
  interface XEUtilsMethods {
    now: typeof now;
  }
}

export default now
