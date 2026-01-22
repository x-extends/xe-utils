/**
 * 根据 keys 排除指定的属性值，返回一个新的对象
 * @param obj 对象
 * @param array 数组或字符串或方法
 */
export declare function omit(obj: any, array: string[]): any;

declare module './ctor' {
  interface XEUtilsMethods {
    omit: typeof omit;
  }
}

export default omit
