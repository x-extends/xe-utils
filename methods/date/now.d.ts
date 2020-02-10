import { XEUtilsMethods } from '../xe-utils'

/**
 * 返回当前时间戳
 */
export declare function now(): number;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 返回当前时间戳
     */
    now: typeof now;
  }
}

export default now
