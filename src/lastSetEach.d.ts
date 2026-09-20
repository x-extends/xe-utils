type LastSetEachIteratee<V, K, C, T = unknown> = (
  this: T,
  value: V,
  key: K,
  collection: C
) => void | boolean;

/**
 * Set迭代器，从最后开始迭代
 * @param collection Set
 * @param iteratee 回调
 * @param context 上下文
 */
declare function lastSetEach<T, Ctx = unknown>(
  collection: Set<T>,
  iteratee: LastSetEachIteratee<T, T, Set<T>, Ctx>,
  context?: Ctx
): void;

declare module './ctor' {
  interface XEUtilsMethods {
    lastSetEach: typeof lastSetEach;
  }
}

export default lastSetEach
