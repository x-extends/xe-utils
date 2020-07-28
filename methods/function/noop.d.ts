import { XEUtilsMethods } from '../xe-utils'

/**
 * 一个空的方法，始终返回 undefined，可用于初始化值
 */
export declare function noop(...args: any[]): void;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 一个空的方法，始终返回 undefined，可用于初始化值
     */
    noop: typeof noop;
  }
}

export default noop