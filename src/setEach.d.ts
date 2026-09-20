type SetEachIteratee<V, K, C, T = unknown> = (
  this: T,
  value: V,
  key: K,
  collection: C
) => void | boolean;

/**
 * 通用迭代器
 * @param collection Set
 * @param iteratee 回调
 * @param context 上下文
 */
declare function setEach<T, Ctx = unknown>(
  collection: Set<T>,
  iteratee: SetEachIteratee<T, T, Set<T>, Ctx>,
  context?: Ctx
): void;

declare module './ctor' {
  interface XEUtilsMethods {
    setEach: typeof setEach;
  }
}

export default setEach
