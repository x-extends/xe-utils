import { XEUrl } from './url'

/**
 * 获取地址栏信息
 */
export declare function locat(): XEUrl;

declare module './ctor' {
  interface XEUtilsMethods {
    locat: typeof locat;
  }
}

export default locat
