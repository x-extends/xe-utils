type LastEachIteratee<V, K, C, T = unknown> = (
  this: T,
  value: V,
  key: K,
  collection: C
) => void | boolean;

/**
 * 通用迭代器，从最后开始迭代
 * @param collection Array
 * @param iteratee 回调
 * @param context 上下文
 */
declare function lastEach<T, Ctx = unknown>(
  collection: T[],
  iteratee: LastEachIteratee<T, number, T[], Ctx>,
  context?: Ctx
): void;

/**
 * 通用迭代器，从最后开始迭代
 * @param collection Set
 * @param iteratee 回调
 * @param context 上下文
 */
declare function lastEach<T, Ctx = unknown>(
  collection: Set<T>,
  iteratee: LastEachIteratee<T, T, Set<T>, Ctx>,
  context?: Ctx
): void;

/**
 * 通用迭代器，从最后开始迭代
 * @param collection Map
 * @param iteratee 回调
 * @param context 上下文
 */
declare function lastEach<K, V, Ctx = unknown>(
  collection: Map<K, V>,
  iteratee: LastEachIteratee<V, K, Map<K, V>, Ctx>,
  context?: Ctx
): void;

/**
 * 通用迭代器，从最后开始迭代
 * @param collection object
 * @param iteratee 回调
 * @param context 上下文
 */
declare function lastEach<T extends object, Ctx = unknown>(
  collection: T,
  iteratee: LastEachIteratee<T[keyof T], Extract<keyof T, string>, T, Ctx>,
  context?: Ctx
): void;

declare module './ctor' {
  interface XEUtilsMethods {
    lastEach: typeof lastEach;
  }
}

export default lastEach
