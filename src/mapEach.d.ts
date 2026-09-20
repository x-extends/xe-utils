type MapEachIteratee<V, K, C, T = unknown> = (
  this: T,
  value: V,
  key: K,
  collection: C
) => void | boolean;

/**
 * 通用迭代器
 * @param collection Map
 * @param iteratee 回调
 * @param context 上下文
 */
declare function mapEach<K, V, Ctx = unknown>(
  collection: Map<K, V>,
  iteratee: MapEachIteratee<V, K, Map<K, V>, Ctx>,
  context?: Ctx
): void;

declare module './ctor' {
  interface XEUtilsMethods {
    mapEach: typeof mapEach;
  }
}

export default mapEach
