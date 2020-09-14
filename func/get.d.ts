/**
 * 获取对象的属性的值，如果值为 undefined，则返回默认值
 * @param obj 对象
 * @param property 键、路径
 * @param defaultValue 默认值
 */
export declare function get(obj: any, property: string | string[], defaultValue?: any): any;

declare module './ctor' {
  interface XEUtilsMethods {
    get: typeof get;
  }
}

export default get
