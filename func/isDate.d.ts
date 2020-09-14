/**
 * 判断是否 Date 对象
 * @param val 值
 */
export declare function isDate(val: any): val is Date;

declare module './ctor' {
  interface XEUtilsMethods {
    isDate: typeof isDate;
  }
}

export default isDate
