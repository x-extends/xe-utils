import { XEUtilsMethods } from '../xe-utils'

/**
 * 获取对象所有属性、值
 * @param obj 对象
 */
export declare function entries(obj: any): Array<any>;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 获取对象所有属性、值
     * @param obj 对象
     */
    entries(obj: any): Array<any>;
  }
}

export default entries