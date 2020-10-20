/**
 * 获取对象所有值
 * @param obj 对象
 */
export declare function values<T>(list: T[]): T[];
export declare function values(obj: any): any[];

declare module './ctor' {
  interface XEUtilsMethods {
    values: typeof values;
  }
}

export default values
