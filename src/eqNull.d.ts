/**
 * 判断是否 undefined 和 null
 * @param obj 对象
 */
export declare function eqNull(obj: any): obj is null | undefined;

declare module './ctor' {
  interface XEUtilsMethods {
    eqNull: typeof eqNull;
  }
}

export default eqNull
