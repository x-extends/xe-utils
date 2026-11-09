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
interface Each {
  <T, Ctx = unknown>(
    collection: T[] | null | undefined,
    iteratee: EachIteratee<T, number, T[], Ctx>,
    context?: Ctx
  ): void;

  /**
   * @param collection Set
   */
  <T, Ctx = unknown>(
    collection: Set<T> | null | undefined,
    iteratee: EachIteratee<T, T, Set<T>, Ctx>,
    context?: Ctx
  ): void;

  /**
   * @param collection Map
   */
  <K, V, Ctx = unknown>(
    collection: Map<K, V> | null | undefined,
    iteratee: EachIteratee<V, K, Map<K, V>, Ctx>,
    context?: Ctx
  ): void;

  /**
   * @param collection object
   */
  <T extends object, Ctx = unknown>(
    collection: T | null | undefined,
    iteratee: EachIteratee<T[keyof T], Extract<keyof T, string>, T, Ctx>,
    context?: Ctx
  ): void;
}

export declare const each: Each

declare module './ctor' {
  interface XEUtilsMethods {
    each: typeof each;
  }
}

export default each
