import { CommafyOptions } from "./commafy"
import { GetDateDiffRules } from "./getDateDiff"
import { FirstDayOfWeek } from "./getWhatWeek"
import { ToDateStringFormats } from "./toDateString"

export interface SetupDefaults {
  /**
   * 默认树的转换配置  
   * 用于 toArrayTree()、toTreeArray()
   */
  treeOptions?: {
    strict?: boolean;
    parentKey?: string;
    key?: string;
    children?: string;
    data?: string;
    [key: string]: any;
  };
  /**
   * 默认解析的日期格式  
   * 用于 toDateString()
   */
  parseDateFormat?: string;
  /**
   * 默认格式化日期的规则  
   * 用于 toDateString()
   */
  parseDateRules?: ToDateStringFormats;
  /**
   * 默认周视图的起始天  
   * 用于 getWhatWeek()、getYearWeek()、toDateString()
   */
  firstDayOfWeek?: FirstDayOfWeek;
  /**
   * 默认日期差异规则配置  
   * 用于 getDateDiff()
   */
  dateDiffRules?: GetDateDiffRules;
  /**
   * 分隔函数配置  
   * 用于 commafy()
   */
  commafyOptions?: CommafyOptions;

  /**
   * 已被 parseDateRules 替换
   * @deprecated
   */
  formatStringMatchs?: any;
  /**
   * 已被 parseDateFormat 替换
   * @deprecated
   */
  formatString?: string;
  [key: string]: any;
}

export default SetupDefaults
