import { XEUtilsMethods } from '../xe-utils'

/**
 * 获取上下文路径
 */
export declare function getBaseURL(): string;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 获取上下文路径
     */
    getBaseURL: typeof getBaseURL;
  }
}

export default getBaseURL
