'use strict'

var setupDefaults = {
  keyId: 1,
  cookies: {
    path: '/'
  },
  treeOptions: {
    parentKey: 'parentId',
    key: 'id',
    children: 'children'
  },
  parseDateFormat: 'yyyy-MM-dd HH:mm:ss',
  firstDayOfWeek: 1
}

module.exports = setupDefaults
