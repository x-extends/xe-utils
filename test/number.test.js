const XEUtils = require('../index')

describe('Number functions', () => {
  test('random()', () => {
    let rest = XEUtils.random()
    expect(
      rest >= 0 && rest <= 9
    ).toEqual(true)
    rest = XEUtils.random(3, 6)
    expect(
      rest >= 3 && rest <= 6
    ).toEqual(true)
    rest = XEUtils.random(0, 5)
    expect(
      rest >= 0 && rest <= 5
    ).toEqual(true)
    rest = XEUtils.random(10, 100)
    expect(
      rest >= 10 && rest <= 100
    ).toEqual(true)
  })
})
