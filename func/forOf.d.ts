/**
 * 已废弃，被 some, every 替换
 * @deprecated
 */
export declare function forOf<C>(obj: any, iterate: (this: C, item: any, index: any, obj: any) => boolean, context?: C): void;

declare module './ctor' {
  interface XEUtilsMethods {
    forOf: typeof forOf;
  }
}

export default forOf
