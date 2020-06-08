/**
 * 判断是否 Map 对象
 * @param val 值
 */
export declare function isMap(val: any): boolean;

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 判断是否 Map 对象
     * @param val 值
     */
    isMap: typeof isMap;
  }
}

export default isMap
