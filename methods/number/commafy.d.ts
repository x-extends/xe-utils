import { XEUtilsMethods } from '../xe-utils'

export interface CommafyOptions {
  /**
   * 分割位数,默认3
   */
  spaceNumber: number;
  /**
   * 分隔符,默认','
   */
  separator: string;
  /**
   * 小数位数,默认null
   */
  digits: number;
}

/**
 * 数值千分位分隔符、小数点
 * @param num 数值/字符串
 * @param options 可选参数
 */
export declare function commafy(num: string | number, options?: CommafyOptions): string;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 数值千分位分隔符、小数点
     * @param num 数值/字符串
     * @param options 可选参数
     */
    commafy: typeof commafy;
  }
}

export default commafy
