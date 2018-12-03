const XEUtils = require('../index')

describe('Base functions', () => {
  test('isNaN()', () => {
    expect(
      XEUtils.isNaN(undefined)
    ).toEqual(true)
    expect(
      XEUtils.isNaN({})
    ).toEqual(true)
    expect(
      XEUtils.isNaN('num')
    ).toEqual(true)
    expect(
      XEUtils.isNaN(true)
    ).toEqual(false)
    expect(
      XEUtils.isNaN(null)
    ).toEqual(false)
    expect(
      XEUtils.isNaN('')
    ).toEqual(false)
  })

  test('isFinite()', () => {
    expect(
      XEUtils.isFinite(NaN)
    ).toEqual(false)
    expect(
      XEUtils.isFinite(0)
    ).toEqual(true)
    expect(
      XEUtils.isFinite(2e64)
    ).toEqual(true)
  })
})
