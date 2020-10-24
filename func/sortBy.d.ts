import orderBy from './orderBy'

export const sortBy: typeof orderBy

declare module './ctor' {
  interface XEUtilsMethods {
    sortBy: typeof sortBy;
  }
}

export default sortBy
