import { XEUtilsMethods } from '../xe-utils'

export declare function maxIterate(item: any, index: number, obj: any): any;

/**
 * 获取最大值
 * @param array 数组
 * @param iteratee 回调/属性
 */
export declare function max(array: Array<any>, iteratee: string | number | typeof maxIterate): number;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 获取最大值
     * @param array 数组
     * @param iteratee 回调/属性
     */
    max: typeof max;
  }
}

export default max
