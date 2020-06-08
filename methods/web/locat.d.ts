import { XEUtilsMethods } from '../xe-utils'
import { XEUrl } from '..//url'

/**
 * 获取地址栏信息
 */
export declare function locat(): XEUrl;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 获取地址栏信息
     */
    locat: typeof locat;
  }
}

export default locat
