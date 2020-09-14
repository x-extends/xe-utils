/**
 * 数组去重
 * @param list 数组
 */
export declare function uniq<T>(list: T[]): T[];

declare module './ctor' {
  interface XEUtilsMethods {
    uniq: typeof uniq;
  }
}

export default uniq
