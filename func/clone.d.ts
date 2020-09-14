/**
 * 浅拷贝/深拷贝
 * @param obj 对象
 */
export declare function clone<T>(obj: T): T;

/**
 * 浅拷贝/深拷贝
 * @param obj 对象
 * @param deep 是否深拷贝
 */
export declare function clone<T>(obj: T, deep: boolean): T;

declare module './ctor' {
  interface XEUtilsMethods {
    clone: typeof clone;
  }
}

export default clone
