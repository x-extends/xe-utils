import { XEUtilsMethods } from '../xe-utils'

/**
 * 序号列表生成函数
 * @param start 起始值
 * @param stop 结束值
 * @param step 自增值
 */
export declare function range(start: number, stop: number, step?: number): Array<any>;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 序号列表生成函数
     * @param start 起始值
     * @param stop 结束值
     * @param step 自增值
     */
    range: typeof range;
  }
}

export default range
