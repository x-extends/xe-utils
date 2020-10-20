export interface ToTreeArrayOptions {
  children?: string;
  data?: string;
  clear?: boolean;
}

/**
 * 将一个树结构转成数组列表
 * @param {Array} list 数组
 * @param {Object} options { children: 'children', data: 'data', clear: false }
 */
export declare function toTreeArray<T>(list: T[], options?: ToTreeArrayOptions): T[];
export declare function toTreeArray(list: any, options?: ToTreeArrayOptions): any[];

declare module './ctor' {
  interface XEUtilsMethods {
    toTreeArray: typeof toTreeArray;
  }
}

export default toTreeArray
