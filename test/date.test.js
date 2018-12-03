const XEUtils = require('../index')

describe('Date functions', () => {
  test('now()', () => {
    let time = XEUtils.now()
    expect(
      XEUtils.now()
    ).toEqual(time)
  })
})
