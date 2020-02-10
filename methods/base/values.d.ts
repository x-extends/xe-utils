import { XEUtilsMethods } from '../xe-utils'

/**
 * 获取对象所有值
 * @param obj 对象
 */
export declare function values(obj: any): Array<any>;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 获取对象所有值
     * @param obj 对象
     */
    values: typeof values;
  }
}

export default values
