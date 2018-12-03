const XEUtils = require('../index')

describe('Array functions', () => {
  test('uniq()', () => {
    expect(XEUtils.uniq([11, 22, 33, 33, 22, 55])).toEqual([11, 22, 33, 55])
  })
})
