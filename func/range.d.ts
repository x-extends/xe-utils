/**
 * 序号列表生成函数
 * @param start 起始值
 * @param stop 结束值
 */
export declare function range(start: number, stop: number): number[];

/**
 * 序号列表生成函数
 * @param start 起始值
 * @param stop 结束值
 * @param step 自增值
 */
export declare function range(start: number, stop: number, step: number): number[];

declare module './ctor' {
  interface XEUtilsMethods {
    range: typeof range;
  }
}

export default range
