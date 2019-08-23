/**
 * 迭代器,支持 return false 跳出循环 break
 * @param obj 对象
 * @param iteratee 回调 
 * @param context 上下文
 */
export declare function forOf(obj: any, iteratee: Function, context?: any): void;

export default forOf