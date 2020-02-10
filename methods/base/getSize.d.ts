import { XEUtilsMethods } from '../xe-utils'

/**
 * 返回对象的长度
 * @param obj 对象
 */
export declare function getSize(obj: any): number;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 返回对象的长度
     * @param obj 对象
     */
    getSize: typeof getSize;
  }
}

export default getSize
