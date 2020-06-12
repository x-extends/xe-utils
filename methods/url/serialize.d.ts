import { XEUtilsMethods } from '../xe-utils'

/**
 * 序列化查询参数
 * @param query 查询参数
 */
export declare function serialize(query: any): string;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 序列化查询参数
     * @param query 查询参数
     */
    serialize: typeof serialize;
  }
}

export default serialize
