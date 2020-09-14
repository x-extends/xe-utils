/**
 * 序列化查询参数
 * @param query 查询参数
 */
export declare function serialize(query: any): string;

declare module './ctor' {
  interface XEUtilsMethods {
    serialize: typeof serialize;
  }
}

export default serialize
