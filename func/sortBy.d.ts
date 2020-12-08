import orderBy from './orderBy'

/**
 * 被 orderBy 替换
 * @deprecated
 */
export const sortBy: typeof orderBy

declare module './ctor' {
  interface XEUtilsMethods {
    sortBy: typeof sortBy;
  }
}

export default sortBy
