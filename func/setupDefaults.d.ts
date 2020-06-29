export interface SetupDefaults {
  treeOptions?: {
    strict?: boolean;
    parentKey?: string;
    key?: string;
    children?: string;
    data?: string;
    [key: string]: any;
  };
  formatDate?: string;
  formatString?: string;
  dateDiffRules?: any[][];
  [key: string]: any;
}

export default SetupDefaults
