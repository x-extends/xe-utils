import { XEUtilsMethods } from '../xe-utils'

export interface XECookie {
  /**
   * 根据 name 判断 Cookie 是否存在
   * @param name 键
   */
  isKey(name: string): boolean;

  /**
   * 添加 Cookie
   * @param name 键
   * @param value 值
   * @param options 可选参数
   */
  setItem(name: string, value: any, options?: object): this;

  /**
   * 根据 name 获取 Cookie
   * @param name 键
   */
  getItem(name: string): string;

  /**
   * 根据 name 删除 Cookie
   * @param name 键
   * @param options 可选参数
   */
  removeItem(name: string, options?: object): number;

  /**
   * 获取 Cookie 所有键
   */
  keys(): Array<object>;

  /**
   * 获取所有 Cookie
   */
  getJSON(): object;
}
  
/**
 * Cookie 操作函数
 * @param name 键/数组/对象
 * @param value 值
 * @param options 可选参数 
 */
export declare function cookie(): XECookie;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
    * Cookie 操作函数
    * @param name 键/数组/对象
    * @param value 值
    * @param options 可选参数 
    */
    cookie(): XECookie;
  }
}

export default cookie