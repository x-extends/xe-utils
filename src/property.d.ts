/**
 * 返回一个获取对象属性的函数
 * @param path 键值
 */
export declare function property(path: string | null): Function;

declare module './ctor' {
  interface XEUtilsMethods {
    property: typeof property;
  }
}

export default property
