type LastEachIteratee<V, K, C, T = unknown> = (
  this: T,
  value: V,
  key: K,
  collection: C
) => void | boolean;

/**
 * 通用迭代器，从最后开始迭代
 */
interface LastEach {
  /**
   * @param collection Array
   * @param iteratee 回调
   * @param context 上下文
   */
  <T, Ctx = unknown>(
    collection: T[] | null | undefined,
    iteratee: LastEachIteratee<T, number, T[], Ctx>,
    context?: Ctx
  ): void;

  /**
   * @param collection Set
   * @param iteratee 回调
   * @param context 上下文
   */
  <T, Ctx = unknown>(
    collection: Set<T> | null | undefined,
    iteratee: LastEachIteratee<T, T, Set<T>, Ctx>,
    context?: Ctx
  ): void;

  /**
   * @param collection Map
   * @param iteratee 回调
   * @param context 上下文
   */
  <K, V, Ctx = unknown>(
    collection: Map<K, V> | null | undefined,
    iteratee: LastEachIteratee<V, K, Map<K, V>, Ctx>,
    context?: Ctx
  ): void;

  /**
   * @param collection object
   * @param iteratee 回调
   * @param context 上下文
   */
  <T extends object, Ctx = unknown>(
    collection: T | null | undefined,
    iteratee: LastEachIteratee<T[keyof T], Extract<keyof T, string>, T, Ctx>,
    context?: Ctx
  ): void;
}

export declare const lastEach: LastEach

declare module './ctor' {
  interface XEUtilsMethods {
    lastEach: typeof lastEach;
  }
}

export default lastEach
