/**
 * 返回对象的长度
 * @param obj 对象
 */
export declare function getSize(obj: any): number;

declare module './ctor' {
  interface XEUtilsMethods {
    getSize: typeof getSize;
  }
}

export default getSize
