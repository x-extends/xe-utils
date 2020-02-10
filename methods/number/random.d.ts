import { XEUtilsMethods } from '../xe-utils'

/**
 * 获取一个指定范围内随机数
 * @param min 最小值
 * @param max 最大值
 */
export declare function random(min: number, max: number): number;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 获取一个指定范围内随机数
     * @param min 最小值
     * @param max 最大值
     */
    random: typeof random;
  }
}

export default random
