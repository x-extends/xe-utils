import { XEUtilsMethods } from '../xe-utils'

/**
 * 判断是否 FormData 对象
 * @param val 值
 */
export declare function isFormData(val: any): boolean;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 判断是否 FormData 对象
     * @param val 值
     */
    isFormData(val: any): boolean;
  }
}

export default isFormData