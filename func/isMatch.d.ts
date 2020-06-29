/**
 * 判断属性中的键和值是否包含在对象中
 * @param obj 对象
 * @param source 值
 */
export declare function isMatch(obj: any, source: any): boolean;

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 判断属性中的键和值是否包含在对象中
     * @param obj 对象
     * @param source 值
     */
    isMatch: typeof isMatch;
  }
}

export default isMatch
