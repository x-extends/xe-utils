export interface XEUtilsMethods {
  v: string;
  /**
   * 设置全局参数
   * @param options 全局参数
   */
  setup(options: object): void;

  /**
   * 将您自己的实用函数扩展到 XEUtils
   * @param methods 函数集
   */
  mixin(...methods: object[]): void;
}

/**
 * JavaScript 函数库、工具类
 */
export declare var XEUtils: XEUtilsMethods;

export default XEUtils;