/**
 * 获取对象所有属性、值
 * @param obj 对象
 */
export declare function entries(obj: any): any[];

declare module './ctor' {
  interface XEUtilsMethods {
    entries: typeof entries;
  }
}

export default entries
