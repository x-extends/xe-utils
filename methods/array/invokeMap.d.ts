import { XEUtilsMethods } from '../xe-utils'

/**
 * 获取数组对象中某属性值，返回一个数组
 * @param array 数组
 * @param key 键
 * @example
 */
export declare function invokeMap(list: any[], path: string[] | string | Function): any[];

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 获取数组对象中某属性值，返回一个数组
     * @param array 数组
     * @param key 键
     * @example
     */
    invokeMap: typeof invokeMap;
  }
}

export default invokeMap
