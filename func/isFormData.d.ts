/**
 * 判断是否 FormData 对象
 * @param val 值
 */
export declare function isFormData(val: any): boolean;

declare module './ctor' {
  interface XEUtilsMethods {
    /**
     * 判断是否 FormData 对象
     * @param val 值
     */
    isFormData: typeof isFormData;
  }
}

export default isFormData
