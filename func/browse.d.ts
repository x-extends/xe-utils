export interface XEBrowse {
  /**
   * 判断是否 NodeJs 环境
   */
  isNode: boolean;
  /**
   * 判断是否有 document 元素
   */
  isDoc: boolean;
  /**
   * 判断是否 Edge 浏览器
   */
  edge: boolean;
  /**
   * 判断是否 Firefox 浏览器
   */
  firefox: boolean;
  /**
   * 判断是否 IE 浏览器
   */
  msie: boolean;
  /**
   * 判断是否 Safari 浏览器
   */
  safari: boolean;
  /**
   * 判断是否移动端
   */
  isMobile: boolean;
  /**
   * 判断是否 PC 端
   */
  isPC: boolean;
  /**
   * 判断浏览器是否支持 LocalStorage
   */
  isLocalStorage: boolean;
  /**
   * 判断浏览器是否支持 SessionStorage
   */
  isSessionStorage: boolean;
  /**
   * 判断浏览器是否 -webkit 内核
   */
  '-webkit': boolean;
  /**
   * 判断浏览器是否 -moz 内核
   */
  '-moz': boolean;
  /**
   * 判断浏览器是否 -ms 内核
   */
  '-ms': boolean;
  /**
   * 判断浏览器是否 -o 内核
   */
  '-o': boolean;
}

/**
 * 获取浏览器信息
 */
export declare function browse(): XEBrowse;

declare module './ctor' {
  interface XEUtilsMethods {
    browse: typeof browse;
  }
}

export default browse
