import { XEUtilsMethods } from '../xe-utils'

/**
 * 数值千分位分隔符、小数点
 * @param num 数值/字符串
 * @param options 可选参数
 */
export declare function commafy(num: string | number, options ?: object): string;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 数值千分位分隔符、小数点
     * @param num 数值/字符串
     * @param options 可选参数
     */
    commafy(num: string | number, options ?: object): string;
  }
}

export default commafy