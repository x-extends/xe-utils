/**
 * 设置对象属性上的值。如果属性不存在则创建它
 * @param obj 对象
 * @param property 键、路径
 * @param value 值
 */
export declare function set(obj: any, property: string | string[], value: any): any;

declare module './ctor' {
  interface XEUtilsMethods {
    set: typeof set;
  }
}

export default set
