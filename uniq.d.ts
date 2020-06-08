/**
 * 数组去重
 * @param array 数组
 */
export declare function uniq(array: any[]): any[];

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 数组去重
     * @param array 数组
     */
    uniq: typeof uniq;
  }
}

export default uniq
