import { XEUtilsMethods } from '../xe-utils'

/**
 * 浅拷贝/深拷贝
 * @param obj 对象
 * @param deep 是否深拷贝
 */
export declare function clone(obj: object | Array<any>, deep?: boolean): object | Array<any>;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 浅拷贝/深拷贝
     * @param obj 对象
     * @param deep 是否深拷贝
     */
    clone(obj: object | Array<any>, deep?: boolean): object | Array<any>;
  }
}

export default clone