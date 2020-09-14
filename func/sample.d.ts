/**
 * 从一个数组中随机返回几个元素
 * @param array 数组
 * @example
 */
export declare function sample<T>(array: T[]): T;

/**
 * 从一个数组中随机返回几个元素
 * @param array 数组
 * @param number 返回个数
 * @example
 */
export declare function sample<T>(array: T[], number: number): T[];

declare module './ctor' {
  interface XEUtilsMethods {
    sample: typeof sample;
  }
}

export default sample
