export interface CookieOptions {
  /**
   * 键
   */
  name?: string;
  /**
   * 值
   */
  value?: string;
  /**
   * 路径
   */
  path?: string;
  /**
   * 作用域
   */
  domain?: string;
  /**
   * 设置为安全的,只能用https协议
   */
  secure?: string;
  /**
   * 过期时间,可以指定日期或者字符串，默认天
   */
  expires?: string;
}

/**
 * Cookie 操作函数
 */
export declare function CookieFunc(): XECookie;

/**
 * Cookie 操作函数
 * @param name 键/数组/对象
 */
export declare function CookieFunc(name: string): XECookie;

/**
 * Cookie 操作函数
 * @param name 键/数组/对象
 * @param value 值
 */
export declare function CookieFunc(name: string, value: any): XECookie;

/**
 * Cookie 操作函数
 * @param name 键/数组/对象
 * @param value 值
 * @param options 可选参数
 */
export declare function CookieFunc(name: string, value: any, options: CookieOptions): XECookie;

export type XECookie = typeof CookieFunc & {
  /**
   * 根据 name 判断 Cookie 是否存在
   * @param name 键
   */
  has(name: string): boolean;

  /**
   * 添加 Cookie
   * @param name 键
   * @param value 值
   * @param options 可选参数
   */
  set(name: string, value: any, options?: CookieOptions): XECookie;

  /**
   * 根据 name 获取 Cookie
   * @param name 键
   */
  get(name: string): string;

  /**
   * 根据 name 删除 Cookie
   * @param name 键
   * @param options 可选参数
   */
  remove(name: string, options?: CookieOptions): number;

  /**
   * 获取 Cookie 所有键
   */
  keys(): any[];

  /**
   * 获取所有 Cookie
   */
  getJSON(): any;
}

export const cookie: XECookie

declare module './ctor' {
  interface XEUtilsMethods {
    cookie: XECookie;
  }
}

export default cookie
