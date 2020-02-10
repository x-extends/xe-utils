import { XEUtilsMethods } from '../xe-utils'

/**
 * 清空对象; defs如果不传（清空所有属性）、如果传对象（清空并继承)、如果传值(给所有赋值)
 * @param obj 对象
 * @param defs 默认值
 * @param assigns 值
 */
export declare function clear(obj: any, defs?: any, assigns?: any): any;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 清空对象; defs如果不传（清空所有属性）、如果传对象（清空并继承)、如果传值(给所有赋值)
     * @param obj 对象
     * @param defs 默认值
     * @param assigns 值
     */
    clear: typeof clear;
  }
}

export default clear
