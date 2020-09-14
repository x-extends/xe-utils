/**
 * 获取上下文路径
 */
export declare function getBaseURL(): string;

declare module './ctor' {
  interface XEUtilsMethods {
    getBaseURL: typeof getBaseURL;
  }
}

export default getBaseURL
