/**
 * 获取对象最后一个值
 * @param obj 对象
 */
export declare function last(obj: any): any;

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 获取对象最后一个值
     * @param obj 对象
     */
    last: typeof last;
  }
}

export default last
