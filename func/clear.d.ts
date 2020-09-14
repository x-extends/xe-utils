/**
 * 清空对象; defs如果不传（清空所有属性）、如果传对象（清空并继承)、如果传值(给所有赋值)
 * @param obj 对象
 */
export declare function clear<T>(obj: T): T;

/**
 * 清空对象; defs如果不传（清空所有属性）、如果传对象（清空并继承)、如果传值(给所有赋值)
 * @param obj 对象
 * @param defs 默认值
 */
export declare function clear<T>(obj: T, defs: any): T;

/**
 * 清空对象; defs如果不传（清空所有属性）、如果传对象（清空并继承)、如果传值(给所有赋值)
 * @param obj 对象
 * @param defs 默认值
 * @param assigns 值
 */
export declare function clear<T, U>(obj: T, defs: any, assigns: U): T & U;

declare module './ctor' {
  interface XEUtilsMethods {
    clear: typeof clear;
  }
}

export default clear
