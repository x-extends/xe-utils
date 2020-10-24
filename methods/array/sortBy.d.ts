import { XEUtilsMethods } from '../xe-utils'

import orderBy from './orderBy'

export const sortBy: typeof orderBy

declare module '../xe-utils' {
  interface XEUtilsMethods {
    sortBy: typeof sortBy;
  }
}

export default sortBy
