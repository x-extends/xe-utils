import { XEUtilsMethods } from '../xe-utils'

/**
 * 将一个数组随机打乱，返回一个新的数组
 * @param array 数组
  */
export declare function shuffle(array: any[]): any[];

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 将一个数组随机打乱，返回一个新的数组
     * @param array 数组
      */
    shuffle: typeof shuffle;
  }
}

export default shuffle
