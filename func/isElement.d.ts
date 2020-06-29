/**
 * 判断是否 Element 对象
 * @param val 值
 */
export declare function isElement(val: any): boolean;

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 判断是否 Element 对象
     * @param val 值
     */
    isElement: typeof isElement;
  }
}

export default isElement
