import { XEUtilsMethods } from '../xe-utils'

/**
 * 判断是否 undefined 和 null
 * @param obj 对象
 */
export declare function eqNull(obj: any): boolean;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 判断是否 undefined 和 null
     * @param obj 对象
     */
    eqNull: typeof eqNull;
  }
}

export default eqNull
