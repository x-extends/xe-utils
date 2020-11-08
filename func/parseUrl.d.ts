export interface XEUrl {
  /**
   * 获取完整的地址
   */
  href: string;
  /**
   * 获取 #Hash 的完整字符串
   */
  hash: string;
  /**
   * 获取主机信息
   */
  host: string;
  /**
   * 主机主机名
   */
  hostname: string;
  /**
   * 获取地址的协议类型
   */
  protocol: string;
  /**
   * 获取端口信息
   */
  port: string;
  /**
   * 查询字符串
   */
  search: string;
  /**
   * 获取路径字符串
   */
  pathname: string;
  /**
   * 获取 #hash 键值
   */
  origin: string;
  /**
   * 获取 #hash 键值，不包括参数
   */
  hashKey: string;
  /**
   * 获取 #hash 对象参数
   */
  hashQuery: any;
  /**
   * 获取查询对象参数
   */
  searchQuery: any;
}

/**
 * 解析 URL 参数
 * @param ulr 字符串
 */
export declare function parseUrl(ulr: string): XEUrl;
export declare function parseUrl(ulr: any): XEUrl;

declare module './ctor' {
  interface XEUtilsMethods {
    parseUrl: typeof parseUrl;
  }
}

export default parseUrl
