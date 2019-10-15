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
    rest = XEUtils.random(500, 50000)
    expect(
      rest >= 500 && rest <= 50000
    ).toEqual(true)
    rest = XEUtils.random(-5, 5)
    expect(
      rest >= -5 && rest <= 5
    ).toEqual(true)
  })

  test('min()', () => {
    expect(
      XEUtils.min([22, null, 77, 11])
    ).toEqual(11)
    expect(
      XEUtils.min([22, 66, 77, 11])
    ).toEqual(11)
    expect(
      XEUtils.min([{ a: 11 }, { a: 44 }], 'a')
    ).toEqual({ a: 11 })
    expect(
      XEUtils.min([{ a: 33 }, { a: 11 }, { a: 44 }], item => item.a)
    ).toEqual({ a: 11 })
  })

  test('max()', () => {
    expect(
      XEUtils.max([22, 66, null, 11])
    ).toEqual(66)
    expect(
      XEUtils.max([22, 66, 77, 11])
    ).toEqual(77)
    expect(
      XEUtils.max([{ a: 11 }, { a: 44 }], 'a')
    ).toEqual({ a: 44 })
    expect(
      XEUtils.max([{ a: 33 }, { a: 11 }, { a: 44 }], item => item.a)
    ).toEqual({ a: 44 })
  })

  test('commafy()', () => {
    expect(
      XEUtils.commafy(0)
    ).toEqual('0')
    expect(
      XEUtils.commafy(-1)
    ).toEqual('-1')
    expect(
      XEUtils.commafy(12345)
    ).toEqual('12,345')
    expect(
      XEUtils.commafy('null')
    ).toEqual('null')
    expect(
      XEUtils.commafy(null)
    ).toEqual('')
    expect(
      XEUtils.commafy('undefined')
    ).toEqual('undefined')
    expect(
      XEUtils.commafy(undefined)
    ).toEqual('')
    expect(
      XEUtils.commafy('abcdefg')
    ).toEqual('abcdefg')
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

  test('toFixedString()', () => {
    expect(
      XEUtils.toFixedString(null)
    ).toEqual('0')
    expect(
      XEUtils.toFixedString('null')
    ).toEqual('0')
    expect(
      XEUtils.toFixedString('-0')
    ).toEqual('0')
    expect(
      XEUtils.toFixedString('-0.0')
    ).toEqual('0')
    expect(
      XEUtils.toFixedString([])
    ).toEqual('0')
    expect(
      XEUtils.toFixedString({})
    ).toEqual('0')
    expect(
      XEUtils.toFixedString(function () {})
    ).toEqual('0')
    expect(
      XEUtils.toFixedString(true)
    ).toEqual('0')
    expect(
      XEUtils.toFixedString('abc')
    ).toEqual('0')
    expect(
      XEUtils.toFixedString('$123')
    ).toEqual('0')
    expect(
      XEUtils.toFixedString('123元')
    ).toEqual('123')
    expect(
      XEUtils.toFixedString(123)
    ).toEqual('123')
    expect(
      XEUtils.toFixedString(null, 2)
    ).toEqual('0.00')
    expect(
      XEUtils.toFixedString('1.00', 0)
    ).toEqual('1')
    expect(
      XEUtils.toFixedString('0', 2)
    ).toEqual('0.00')
    expect(
      XEUtils.toFixedString('0.38996', 4)
    ).toEqual('0.3899')
    expect(
      XEUtils.toFixedString('8.3339', 3)
    ).toEqual('8.333')
    expect(
      XEUtils.toFixedString(12.3999, 2)
    ).toEqual('12.39')
    expect(
      XEUtils.toFixedString('12.3999', 6)
    ).toEqual('12.399900')
    expect(
      XEUtils.toFixedString('1452349847.3979', 2)
    ).toEqual('1452349847.39')
    expect(
      XEUtils.toFixedString('-1452349847.3979', 5)
    ).toEqual('-1452349847.39790')
    expect(
      XEUtils.toFixedString('1452349847.3979', 20)
    ).toEqual('1452349847.39790000000000000000')
    expect(
      XEUtils.toFixedString(1e-8)
    ).toEqual('0')
    expect(
      XEUtils.toFixedString('1e-8', 6)
    ).toEqual('0.000000')
    expect(
      XEUtils.toFixedString(1e-8, 8)
    ).toEqual('0.00000001')
    expect(
      XEUtils.toFixedString('1e-8', 12)
    ).toEqual('0.000000010000')
    expect(
      XEUtils.toFixedString(-1e-12)
    ).toEqual('0')
    expect(
      XEUtils.toFixedString('-1e-8', 8)
    ).toEqual('-0.00000001')
    expect(
      XEUtils.toFixedString(-123e-8, 4)
    ).toEqual('0.0000')
    expect(
      XEUtils.toFixedString('-123e-8', 12)
    ).toEqual('-0.000001230000')
  })

  test('toFixedNumber()', () => {
    expect(
      XEUtils.toFixedNumber(null)
    ).toEqual(0)
    expect(
      XEUtils.toFixedNumber('null')
    ).toEqual(0)
    expect(
      XEUtils.toFixedNumber('-0')
    ).toEqual(0)
    expect(
      XEUtils.toFixedNumber('-0.0')
    ).toEqual(0)
    expect(
      XEUtils.toFixedNumber([])
    ).toEqual(0)
    expect(
      XEUtils.toFixedNumber({})
    ).toEqual(0)
    expect(
      XEUtils.toFixedNumber(function () {})
    ).toEqual(0)
    expect(
      XEUtils.toFixedNumber(true)
    ).toEqual(0)
    expect(
      XEUtils.toFixedNumber('abc')
    ).toEqual(0)
    expect(
      XEUtils.toFixedNumber('$123')
    ).toEqual(0)
    expect(
      XEUtils.toFixedNumber(null, 2)
    ).toEqual(0)
    expect(
      XEUtils.toFixedNumber('123元')
    ).toEqual(123)
    expect(
      XEUtils.toFixedNumber(123)
    ).toEqual(123)
    expect(
      XEUtils.toFixedNumber('1.00', 0)
    ).toEqual(1)
    expect(
      XEUtils.toFixedNumber('0', 2)
    ).toEqual(0)
    expect(
      XEUtils.toFixedNumber('0.38996', 4)
    ).toEqual(0.3899)
    expect(
      XEUtils.toFixedNumber('8.3339', 3)
    ).toEqual(8.333)
    expect(
      XEUtils.toFixedNumber(12.3999, 2)
    ).toEqual(12.39)
    expect(
      XEUtils.toFixedNumber('12.3999', 6)
    ).toEqual(12.3999)
    expect(
      XEUtils.toFixedNumber('1452349847.3979', 2)
    ).toEqual(1452349847.39)
    expect(
      XEUtils.toFixedNumber('-1452349847.3979', 5)
    ).toEqual(-1452349847.3979)
    expect(
      XEUtils.toFixedNumber('1452349847.3979', 20)
    ).toEqual(1452349847.3979)
    expect(
      XEUtils.toFixedNumber(1e-8)
    ).toEqual(0)
    expect(
      XEUtils.toFixedNumber('9e-8', 6)
    ).toEqual(0)
    expect(
      XEUtils.toFixedNumber(9e-8, 8)
    ).toEqual(9e-8)
    expect(
      XEUtils.toFixedNumber('9e-8', 12)
    ).toEqual(9e-8)
    expect(
      XEUtils.toFixedNumber(-9e-12)
    ).toEqual(0)
    expect(
      XEUtils.toFixedNumber('-9e-8', 8)
    ).toEqual(-9e-8)
    expect(
      XEUtils.toFixedNumber(-923e-8, 4)
    ).toEqual(0)
    expect(
      XEUtils.toFixedNumber('-923e-8', 12)
    ).toEqual(-0.00000923)
  })

  test('toNumber()', () => {
    expect(
      XEUtils.toNumber([])
    ).toEqual(0)
    expect(
      XEUtils.toNumber({})
    ).toEqual(0)
    expect(
      XEUtils.toNumber(function () {})
    ).toEqual(0)
    expect(
      XEUtils.toNumber(true)
    ).toEqual(0)
    expect(
      XEUtils.toNumber('abc')
    ).toEqual(0)
    expect(
      XEUtils.toNumber('$123')
    ).toEqual(0)
    expect(
      XEUtils.toNumber('123元')
    ).toEqual(123)
    expect(
      XEUtils.toNumber(123)
    ).toEqual(123)
    expect(
      XEUtils.toNumber('12.3')
    ).toEqual(12.3)
    expect(
      XEUtils.toNumber('12456456.66663')
    ).toEqual(12456456.66663)
  })

  test('toInteger()', () => {
    expect(
      XEUtils.toInteger(0)
    ).toEqual(0)
    expect(
      XEUtils.toInteger(-1)
    ).toEqual(-1)
    expect(
      XEUtils.toInteger([])
    ).toEqual(0)
    expect(
      XEUtils.toInteger({})
    ).toEqual(0)
    expect(
      XEUtils.toInteger(/\d/)
    ).toEqual(0)
    expect(
      XEUtils.toInteger(function () {})
    ).toEqual(0)
    expect(
      XEUtils.toInteger(true)
    ).toEqual(0)
    expect(
      XEUtils.toInteger('abc')
    ).toEqual(0)
    expect(
      XEUtils.toInteger(123)
    ).toEqual(123)
    expect(
      XEUtils.toInteger(5675.9004)
    ).toEqual(5675)
    expect(
      XEUtils.toInteger('12.3')
    ).toEqual(12)
    expect(
      XEUtils.toInteger('16572.3657567')
    ).toEqual(16572)
  })
})
