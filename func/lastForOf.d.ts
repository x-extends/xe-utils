/**
 * 已废弃
 */
export declare function lastForOf(obj: any, iterate: (item: any, index: any, obj: any) => boolean, context?: any): void;

declare module './ctor' {
  interface XEUtilsMethods {
    lastForOf: typeof lastForOf;
  }
}

export default lastForOf
