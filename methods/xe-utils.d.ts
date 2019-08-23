interface XEUtilsMethods {
  v: string;
  /**
   * 设置全局参数
   * @param options 全局参数
   */
  setup(options: object): void;

  /**
   * 将您自己的实用函数扩展到 XEUtils
   * @param methods 扩展函数集
   */
  mixin(...methods: object[]): void;
}

/**
 * A JavaScript tools library.
 */
export declare var XEUtils: XEUtilsMethods;

export default XEUtils;