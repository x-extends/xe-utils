type EachIteratee<V, K, C, T = unknown> = (
  this: T,
  value: V,
  key: K,
  collection: C
) => void | boolean;

/**
 * 通用迭代器
 * @param collection Array
 * @param iteratee 回调
 * @param context 上下文
 */
declare function each<T, Ctx = unknown>(
  collection: T[],
  iteratee: EachIteratee<T, number, T[], Ctx>,
  context?: Ctx
): void;

/**
 * 通用迭代器
 * @param collection Set
 * @param iteratee 回调
 * @param context 上下文
 */
declare function each<T, Ctx = unknown>(
  collection: Set<T>,
  iteratee: EachIteratee<T, T, Set<T>, Ctx>,
  context?: Ctx
): void;

/**
 * 通用迭代器
 * @param collection Map
 * @param iteratee 回调
 * @param context 上下文
 */
declare function each<K, V, Ctx = unknown>(
  collection: Map<K, V>,
  iteratee: EachIteratee<V, K, Map<K, V>, Ctx>,
  context?: Ctx
): void;

/**
 * 通用迭代器
 * @param collection object
 * @param iteratee 回调
 * @param context 上下文
 */
declare function each<T extends object, Ctx = unknown>(
  collection: T,
  iteratee: EachIteratee<T[keyof T], Extract<keyof T, string>, T, Ctx>,
  context?: Ctx
): void;

declare module './ctor' {
  interface XEUtilsMethods {
    each: typeof each;
  }
}

export default each
