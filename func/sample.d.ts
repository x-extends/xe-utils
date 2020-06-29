/**
 * 从一个数组中随机返回几个元素
 * @param array 数组
 * @param number 返回个数
 * @example
 */
export declare function sample(array: any[], number?: number): any[];

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 从一个数组中随机返回几个元素
     * @param array 数组
     * @param number 返回个数
     * @example
     */
    sample: typeof sample;
  }
}

export default sample
