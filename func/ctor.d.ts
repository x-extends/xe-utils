import SetupDefaults from './setupDefaults'

/**
 * 版本信息
 */
export const version: string

/**
 * 设置全局配置
 * @param options 全局参数
 */
export function setConfig(options: SetupDefaults): SetupDefaults;

/**
 * 获取全局配置
 */
export function getConfig(): SetupDefaults;

export const VERSION: string
export function setup(options: SetupDefaults): SetupDefaults;

/**
 * 将您自己的实用函数扩展到 XEUtils
 * @param methods 函数集
 */
export function mixin(...methods: {[key: string]: any}[]): void;

export interface XEUtilsMethods {
  version: typeof version;
  setConfig: typeof setConfig;
  getConfig: typeof getConfig;
  mixin: typeof mixin;

  VERSION: typeof VERSION;
  setup: typeof setup;

  [propertys: string]: any;
}

/**
 * JavaScript 函数库、工具类
 */
declare let XEUtils: XEUtilsMethods

export default XEUtils
