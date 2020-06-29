/**
 * 判断是否 Object 对象
 * @param val 值
 */
export declare function isObject(val: any): boolean;

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 判断是否 Object 对象
     * @param val 值
     */
    isObject: typeof isObject;
  }
}

export default isObject
