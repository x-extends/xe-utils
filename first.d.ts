/**
 * 获取对象第一个值
 * @param obj 对象
 */
export declare function first(obj: any): any;

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 获取对象第一个值
     * @param obj 对象
     */
    first: typeof first;
  }
}

export default first
