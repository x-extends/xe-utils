import { XEUtilsMethods } from '../xe-utils'

/**
 * 将每个数组中相应位置的值合并在一起
 * @param props 键数组
 * @param values 值数组
 * @example
 */
export declare function zipObject(props: any[], values: any[]): any;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 将每个数组中相应位置的值合并在一起
     * @param props 键数组
     * @param values 值数组
     * @example
     */
    zipObject: typeof zipObject;
  }
}

export default zipObject
