/**
 * 获取对象所有属性
 * @param obj 对象
 */
export declare function keys(obj: any): Array<any>;

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 获取对象所有属性
     * @param obj 对象
     */
    keys: typeof keys;
  }
}

export default keys
