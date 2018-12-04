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

  test('min()', () => {
    expect(
      XEUtils.min([22, 66, 77, 11])
    ).toEqual(11)
    expect(
      XEUtils.min([{ a: 11 }, { a: 44 }], 'a')
    ).toEqual({ a: 11 })
    expect(
      XEUtils.min([{ a: 11 }, { a: 44 }], item => item.a)
    ).toEqual({ a: 11 })
  })

  test('max()', () => {
    expect(
      XEUtils.max([22, 66, 77, 11])
    ).toEqual(77)
    expect(
      XEUtils.max([{ a: 11 }, { a: 44 }], 'a')
    ).toEqual({ a: 44 })
    expect(
      XEUtils.max([{ a: 11 }, { a: 44 }], item => item.a)
    ).toEqual({ a: 44 })
  })

  test('commafy()', () => {
    expect(
      XEUtils.commafy(1000000)
    ).toEqual('1,000,000')
    expect(
      XEUtils.commafy('1000000', { fixed: 2 })
    ).toEqual('1,000,000.00')
    expect(
      XEUtils.commafy(6660000000000001, { spaceNumber: 4, separator: ' ' })
    ).toEqual('6660 0000 0000 0001')
    expect(
      XEUtils.commafy('111111111111111111111111111111111')
    ).toEqual('111,111,111,111,111,111,111,111,111,111,111')
  })

  test('toNumber()', () => {
    expect(
      XEUtils.toNumber(123)
    ).toEqual(123)
    expect(
      XEUtils.toNumber('12.3')
    ).toEqual(12.3)
    expect(
      XEUtils.toNumber('abc')
    ).toEqual(0)
  })

  test('toInteger()', () => {
    expect(
      XEUtils.toInteger(123)
    ).toEqual(123)
    expect(
      XEUtils.toInteger('12.3')
    ).toEqual(12)
    expect(
      XEUtils.toInteger('abc')
    ).toEqual(0)
  })
})
