/**
 * 已废弃，被 some, every 替换
 */
export declare function forOf(obj: any, iterate: (item: any, index: any, obj: any) => boolean, context?: any): void;

declare module './ctor' {
  interface XEUtilsMethods {
    forOf: typeof forOf;
  }
}

export default forOf
