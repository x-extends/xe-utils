const XEUtils = require('../index')

describe('String functions', () => {
  test('trim()', () => {
    expect(
      XEUtils.trim(' abc ')
    ).toEqual('abc')
  })
})
