/**
 * 复制数组的一部分到同一数组中的另一个位置,数组大小不变
 * @param array 数组
 * @param target 从该位置开始替换数据
 */
export declare function copyWithin<T>(array: T[], target: number): T[];

/**
 * 复制数组的一部分到同一数组中的另一个位置,数组大小不变
 * @param array 数组
 * @param target 从该位置开始替换数据
 * @param start 从该位置开始读取数据，默认为 0 。如果为负值，表示倒数
 * @param end 到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数
 */
export declare function copyWithin<T>(array: T[], target: number, start: Number, end?: number): T[];

declare module './ctor' {
  interface XEUtilsMethods {
    copyWithin: typeof copyWithin;
  }
}

export default copyWithin
