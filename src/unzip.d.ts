/**
 * 与 zip 相反
 * @param arrays 数组
 */
export declare function unzip(arrays: any[]): any[];

declare module './ctor' {
  interface XEUtilsMethods {
    unzip: typeof unzip;
  }
}

export default unzip
