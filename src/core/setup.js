'use strict'

var formatString = 'yyyy-MM-dd HH:mm:ss'
var setupDefaults = {
  cookies: null,
  treeOptions: {
    strict: false,
    parentKey: 'parentId',
    key: 'id',
    children: 'children'
  },
  formatDate: formatString + '.SSS',
  formatString: formatString,
  formatStringMatchs: null,
  dateDiffRules: [
    ['yyyy', 31536000000],
    ['MM', 2592000000],
    ['dd', 86400000],
    ['HH', 3600000],
    ['mm', 60000],
    ['ss', 1000],
    ['S', 0]
  ]
}

module.exports = setupDefaults
