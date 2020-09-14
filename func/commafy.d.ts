export interface CommafyOptions {
  /**
   * 分割位数，默认3
   */
  spaceNumber?: number;
  /**
   * 分隔符，默认','
   */
  separator?: string;
  /**
   * 只对 number 类型有效，小数位数,默认null
   */
  digits?: number;
  /**
   * 只对 number 类型有效，四舍五入，默认true
   */
  round?: boolean;
  /**
   * 只对 number 类型有效，向上舍入
   */
  ceil?: boolean;
  /**
   * 只对 number 类型有效，向下舍入
   */
  floor?: boolean;
}

/**
 * 数值千分位分隔符、小数点
 * @param num 数值/字符串
 * @param options 可选参数
 */
export declare function commafy(num: string | number, options?: CommafyOptions): string;

declare module './ctor' {
  interface XEUtilsMethods {
    commafy: typeof commafy;
  }
}

export default commafy
