/**
 * 获取对象所有属性、值
 * @param obj 对象
 */
export declare function entries(obj: any): any[];

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 获取对象所有属性、值
     * @param obj 对象
     */
    entries: typeof entries;
  }
}

export default entries
