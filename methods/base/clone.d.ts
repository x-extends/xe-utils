import { XEUtilsMethods } from '../xe-utils'

/**
 * 浅拷贝/深拷贝
 * @param obj 对象
 * @param deep 是否深拷贝
 */
export declare function clone(obj: any, deep?: boolean): any;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 浅拷贝/深拷贝
     * @param obj 对象
     * @param deep 是否深拷贝
     */
    clone: typeof clone;
  }
}

export default clone
