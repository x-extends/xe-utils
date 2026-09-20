type LastMapEachIteratee<V, K, C, T = unknown> = (
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
declare function lastMapEach<K, V, Ctx = unknown>(
  collection: Map<K, V>,
  iteratee: LastMapEachIteratee<V, K, Map<K, V>, Ctx>,
  context?: Ctx
): void;

declare module './ctor' {
  interface XEUtilsMethods {
    lastMapEach: typeof lastMapEach;
  }
}

export default lastMapEach
