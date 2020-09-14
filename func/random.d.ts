/**
 * 获取一个指定范围内随机数
 * @param min 最小值
 * @param max 最大值
 */
export declare function random(min: number, max: number): number;

declare module './ctor' {
  interface XEUtilsMethods {
    random: typeof random;
  }
}

export default random
