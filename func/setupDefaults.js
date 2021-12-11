'use strict'

var setupDefaults = {
  cookies: {
    path: '/'
  },
  treeOptions: {
    parentKey: 'parentId',
    key: 'id',
    children: 'children'
  },
  parseDateFormat: 'yyyy-MM-dd HH:mm:ss',
  firstDayOfWeek: 1,
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
