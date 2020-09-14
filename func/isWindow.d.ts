/**
 * 判断是否 Window 对象
 * @param val 值
 */
export declare function isWindow(val: any): val is Window;

declare module './ctor' {
  interface XEUtilsMethods {
    isWindow: typeof isWindow;
  }
}

export default isWindow
