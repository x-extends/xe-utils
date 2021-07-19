const XEUtils = require('../func')

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
      XEUtils.min([0, 1, null, -1, undefined])
    ).toEqual(-1)
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
      XEUtils.max([0, 1, null, -1, undefined])
    ).toEqual(1)
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
    ).toEqual('n,ull')
    expect(
      XEUtils.commafy(null)
    ).toEqual('')
    expect(
      XEUtils.commafy('undefined')
    ).toEqual('und,efi,ned')
    expect(
      XEUtils.commafy(undefined)
    ).toEqual('')
    expect(
      XEUtils.commafy('cdabcdabcdabcdabcd', { spaceNumber: 4 })
    ).toEqual('cd,abcd,abcd,abcd,abcd')
    expect(
      XEUtils.commafy(1e3)
    ).toEqual('1,000')
    expect(
      XEUtils.commafy(1e11)
    ).toEqual('100,000,000,000')
    expect(
      XEUtils.commafy(-1e3)
    ).toEqual('-1,000')
    expect(
      XEUtils.commafy(-1e11)
    ).toEqual('-100,000,000,000')
    expect(
      XEUtils.commafy(-0.0001)
    ).toEqual('0')
    expect(
      XEUtils.commafy(-0.0001, { digits: 2 })
    ).toEqual('0.00')
    expect(
      XEUtils.commafy(-0.0001, { digits: 4 })
    ).toEqual('-0.0001')
    expect(
      XEUtils.commafy(-100)
    ).toEqual('-100')
    expect(
      XEUtils.commafy(-1000)
    ).toEqual('-1,000')
    expect(
      XEUtils.commafy(-33.222)
    ).toEqual('-33')
    expect(
      XEUtils.commafy(-332536.222, { digits: 2 })
    ).toEqual('-332,536.22')
    expect(
      XEUtils.commafy(123)
    ).toEqual('123')
    expect(
      XEUtils.commafy(100000)
    ).toEqual('100,000')
    expect(
      XEUtils.commafy(1000000)
    ).toEqual('1,000,000')
    expect(
      XEUtils.commafy(1000000, { digits: 2 })
    ).toEqual('1,000,000.00')
    expect(
      XEUtils.commafy('1000000')
    ).toEqual('1,000,000')
    expect(
      XEUtils.commafy(1000000, { digits: 4 })
    ).toEqual('1,000,000.0000')
    expect(
      XEUtils.commafy('1000000')
    ).toEqual('1,000,000')
    expect(
      XEUtils.commafy('1000000.22')
    ).toEqual('1,000,000.22')
    expect(
      XEUtils.commafy(1000000.22)
    ).toEqual('1,000,000')
    expect(
      XEUtils.commafy(1000000.555, { digits: 2 })
    ).toEqual('1,000,000.56')
    expect(
      XEUtils.commafy(1000000.551, { digits: 2 })
    ).toEqual('1,000,000.55')
    expect(
      XEUtils.commafy(1000000.555, { digits: 2, ceil: true })
    ).toEqual('1,000,000.56')
    expect(
      XEUtils.commafy(1000000.551, { digits: 2, ceil: true })
    ).toEqual('1,000,000.56')
    expect(
      XEUtils.commafy(1000000.555, { digits: 2, floor: true })
    ).toEqual('1,000,000.55')
    expect(
      XEUtils.commafy(1000000.551, { digits: 2, floor: true })
    ).toEqual('1,000,000.55')
    expect(
      XEUtils.commafy(6660000000000001, { spaceNumber: 4, separator: ' ' })
    ).toEqual('6660 0000 0000 0001')
    expect(
      XEUtils.commafy('111111111111111111111111111111111')
    ).toEqual('111,111,111,111,111,111,111,111,111,111,111')
    expect(
      XEUtils.commafy('cdabcdabcdabcdabcd', { spaceNumber: 4, separator: ' ' })
    ).toEqual('cd abcd abcd abcd abcd')
  })

  test('round()', () => {
    expect(
      XEUtils.round(null)
    ).toEqual(0)
    expect(
      XEUtils.round('null')
    ).toEqual(0)
    expect(
      XEUtils.round('-0')
    ).toEqual(-0)
    expect(
      XEUtils.round('-0.0')
    ).toEqual(-0)
    expect(
      XEUtils.round([])
    ).toEqual(0)
    expect(
      XEUtils.round({})
    ).toEqual(0)
    expect(
      XEUtils.round(function () {})
    ).toEqual(0)
    expect(
      XEUtils.round(true)
    ).toEqual(0)
    expect(
      XEUtils.round('abc')
    ).toEqual(0)
    expect(
      XEUtils.round('$123')
    ).toEqual(0)
    expect(
      XEUtils.round(null, 2)
    ).toEqual(0)
    expect(
      XEUtils.round('123元')
    ).toEqual(123)
    expect(
      XEUtils.round(123)
    ).toEqual(123)
    expect(
      XEUtils.round(-123)
    ).toEqual(-123)
    expect(
      XEUtils.round('1.00', 0)
    ).toEqual(1)
    expect(
      XEUtils.round('0', 2)
    ).toEqual(0)
    expect(
      XEUtils.round('4.555', 2)
    ).toEqual(4.56)
    expect(
      XEUtils.round('8.3339', 3)
    ).toEqual(8.334)
    expect(
      XEUtils.round(0.999, 4)
    ).toEqual(0.999)
    expect(
      XEUtils.round(-0.999, 4)
    ).toEqual(-0.999)
    expect(
      XEUtils.round(1.33, 3)
    ).toEqual(1.33)
    expect(
      XEUtils.round(33, 2)
    ).toEqual(33)
    expect(
      XEUtils.round(33.3, 2)
    ).toEqual(33.3)
    expect(
      XEUtils.round(52.636, 2)
    ).toEqual(52.64)
    expect(
      XEUtils.round(52.635, 2)
    ).toEqual(52.64)
    expect(
      XEUtils.round(52.634, 2)
    ).toEqual(52.63)
    expect(
      XEUtils.round(-52.636, 2)
    ).toEqual(-52.64)
    expect(
      XEUtils.round(-52.635, 2)
    ).toEqual(-52.63)
    expect(
      XEUtils.round(-52.634, 2)
    ).toEqual(-52.63)
    expect(
      XEUtils.round(2222.22, 2)
    ).toEqual(2222.22)
    expect(
      XEUtils.round(3333.99, 2)
    ).toEqual(3333.99)
    expect(
      XEUtils.round(-3333.99, 2)
    ).toEqual(-3333.99)
    expect(
      XEUtils.round(3.00099, 2)
    ).toEqual(3)
    expect(
      XEUtils.round(-3.00099, 2)
    ).toEqual(-3)
    expect(
      XEUtils.round(12.3999, 2)
    ).toEqual(12.4)
    expect(
      XEUtils.round(158335.645, 2)
    ).toEqual(158335.65)
    expect(
      XEUtils.round('12.3999', 6)
    ).toEqual(12.3999)
    expect(
      XEUtils.round('1452349847.3979', 2)
    ).toEqual(1452349847.4)
    expect(
      XEUtils.round('-1452349847.3979', 5)
    ).toEqual(-1452349847.3979)
    expect(
      XEUtils.round('1452349847.3979', 8)
    ).toEqual(1452349847.3979)
    expect(
      XEUtils.round(1e-8)
    ).toEqual(0)
    expect(
      XEUtils.round('9e-8', 6)
    ).toEqual(0)
    expect(
      XEUtils.round(9e-8, 8)
    ).toEqual(9e-8)
    expect(
      XEUtils.round('9e-8', 12)
    ).toEqual(9e-8)
    expect(
      XEUtils.round(-9e-12)
    ).toEqual(-0)
    expect(
      XEUtils.round('-9e-8', 8)
    ).toEqual(-9e-8)
    expect(
      XEUtils.round(-923e-8, 4)
    ).toEqual(-0)
    expect(
      XEUtils.round('-923e-8', 10)
    ).toEqual(-0.00000923)
  })

  test('ceil()', () => {
    expect(
      XEUtils.ceil(null)
    ).toEqual(0)
    expect(
      XEUtils.ceil('null')
    ).toEqual(0)
    expect(
      XEUtils.ceil('-0')
    ).toEqual(-0)
    expect(
      XEUtils.ceil('-0.0')
    ).toEqual(-0)
    expect(
      XEUtils.ceil([])
    ).toEqual(0)
    expect(
      XEUtils.ceil({})
    ).toEqual(0)
    expect(
      XEUtils.ceil(function () {})
    ).toEqual(0)
    expect(
      XEUtils.ceil(true)
    ).toEqual(0)
    expect(
      XEUtils.ceil('abc')
    ).toEqual(0)
    expect(
      XEUtils.ceil('$123')
    ).toEqual(0)
    expect(
      XEUtils.ceil(null, 2)
    ).toEqual(0)
    expect(
      XEUtils.ceil('123元')
    ).toEqual(123)
    expect(
      XEUtils.ceil(123)
    ).toEqual(123)
    expect(
      XEUtils.ceil(0.0001)
    ).toEqual(1)
    expect(
      XEUtils.ceil(0.003, 0)
    ).toEqual(1)
    expect(
      XEUtils.ceil(-0.003)
    ).toEqual(-0)
    expect(
      XEUtils.ceil(-0.002)
    ).toEqual(-0)
    expect(
      XEUtils.ceil(-0.003, 1)
    ).toEqual(-0)
    expect(
      XEUtils.ceil('1.00', 0)
    ).toEqual(1)
    expect(
      XEUtils.ceil('0', 2)
    ).toEqual(0)
    expect(
      XEUtils.ceil('4.555', 2)
    ).toEqual(4.56)
    expect(
      XEUtils.ceil('4.551', 2)
    ).toEqual(4.56)
    expect(
      XEUtils.ceil('8.3339', 3)
    ).toEqual(8.334)
    expect(
      XEUtils.ceil('8.3335', 3)
    ).toEqual(8.334)
    expect(
      XEUtils.ceil(0.999, 4)
    ).toEqual(0.999)
    expect(
      XEUtils.ceil(0.00001, 1)
    ).toEqual(0.1)
    expect(
      XEUtils.ceil(0.10001, 1)
    ).toEqual(0.2)
    expect(
      XEUtils.ceil(1.33, 3)
    ).toEqual(1.33)
    expect(
      XEUtils.ceil(33, 2)
    ).toEqual(33)
    expect(
      XEUtils.ceil(-33, 2)
    ).toEqual(-33)
    expect(
      XEUtils.ceil(33.3, 2)
    ).toEqual(33.3)
    expect(
      XEUtils.ceil(4.555, 2)
    ).toEqual(4.56)
    expect(
      XEUtils.ceil(52.635, 2)
    ).toEqual(52.64)
    expect(
      XEUtils.ceil(-52.635, 2)
    ).toEqual(-52.63)
    expect(
      XEUtils.ceil(52.63001, 2)
    ).toEqual(52.64)
    expect(
      XEUtils.ceil(2222.22, 2)
    ).toEqual(2222.22)
    expect(
      XEUtils.ceil(3333.99, 2)
    ).toEqual(3333.99)
    expect(
      XEUtils.ceil(3333.0000099, 3)
    ).toEqual(3333.001)
    expect(
      XEUtils.ceil(-3333.0000099, 3)
    ).toEqual(-3333)
    expect(
      XEUtils.ceil(3333.0009, 5)
    ).toEqual(3333.0009)
    expect(
      XEUtils.ceil(12.3999, 2)
    ).toEqual(12.4)
    expect(
      XEUtils.ceil(12.3909, 2)
    ).toEqual(12.4)
    expect(
      XEUtils.ceil('12.3999', 6)
    ).toEqual(12.3999)
    expect(
      XEUtils.ceil('1452349847.3979', 2)
    ).toEqual(1452349847.4)
    expect(
      XEUtils.ceil('-1452349847.3979', 5)
    ).toEqual(-1452349847.3979)
    expect(
      XEUtils.ceil('1452349847.3979', 8)
    ).toEqual(1452349847.3979)
    expect(
      XEUtils.ceil(1e-8)
    ).toEqual(1)
    expect(
      XEUtils.ceil(1e-8, 8)
    ).toEqual(1e-8)
    expect(
      XEUtils.ceil('9e-8', 6)
    ).toEqual(0.000001)
    expect(
      XEUtils.ceil(9e-8, 8)
    ).toEqual(0.00000009)
    expect(
      XEUtils.ceil(9e-8, 6)
    ).toEqual(0.000001)
    expect(
      XEUtils.ceil('9e-8', 12)
    ).toEqual(9e-8)
    expect(
      XEUtils.ceil(-9e-12)
    ).toEqual(-0)
    expect(
      XEUtils.ceil('-9e-8', 8)
    ).toEqual(-9e-8)
    expect(
      XEUtils.ceil(-923e-8, 4)
    ).toEqual(-0)
    expect(
      XEUtils.ceil('-923e-8', 10)
    ).toEqual(-0.00000923)
  })

  test('floor()', () => {
    expect(
      XEUtils.floor(null)
    ).toEqual(0)
    expect(
      XEUtils.floor('null')
    ).toEqual(0)
    expect(
      XEUtils.floor('-0')
    ).toEqual(-0)
    expect(
      XEUtils.floor('-0.0')
    ).toEqual(-0)
    expect(
      XEUtils.floor([])
    ).toEqual(0)
    expect(
      XEUtils.floor({})
    ).toEqual(0)
    expect(
      XEUtils.floor(function () {})
    ).toEqual(0)
    expect(
      XEUtils.floor(true)
    ).toEqual(0)
    expect(
      XEUtils.floor('abc')
    ).toEqual(0)
    expect(
      XEUtils.floor('$123')
    ).toEqual(0)
    expect(
      XEUtils.floor(null, 2)
    ).toEqual(0)
    expect(
      XEUtils.floor('123元')
    ).toEqual(123)
    expect(
      XEUtils.floor(123)
    ).toEqual(123)
    expect(
      XEUtils.floor('1.00', 0)
    ).toEqual(1)
    expect(
      XEUtils.floor('0', 2)
    ).toEqual(0)
    expect(
      XEUtils.floor('4.555', 2)
    ).toEqual(4.55)
    expect(
      XEUtils.floor('8.3339', 3)
    ).toEqual(8.333)
    expect(
      XEUtils.floor(4.555, 2)
    ).toEqual(4.55)
    expect(
      XEUtils.floor(52.635, 2)
    ).toEqual(52.63)
    expect(
      XEUtils.floor(-52.635, 2)
    ).toEqual(-52.64)
    expect(
      XEUtils.floor(0.999, 4)
    ).toEqual(0.999)
    expect(
      XEUtils.floor(1.33, 3)
    ).toEqual(1.33)
    expect(
      XEUtils.floor(-1.33, 3)
    ).toEqual(-1.33)
    expect(
      XEUtils.floor(33, 2)
    ).toEqual(33)
    expect(
      XEUtils.floor(33.3, 2)
    ).toEqual(33.3)
    expect(
      XEUtils.floor(2222.22, 2)
    ).toEqual(2222.22)
    expect(
      XEUtils.floor(3333.99, 2)
    ).toEqual(3333.99)
    expect(
      XEUtils.floor(-3333.99, 2)
    ).toEqual(-3333.99)
    expect(
      XEUtils.floor(33.00099, 2)
    ).toEqual(33)
    expect(
      XEUtils.floor(-33.00099, 2)
    ).toEqual(-33.01)
    expect(
      XEUtils.floor(12.3999, 2)
    ).toEqual(12.39)
    expect(
      XEUtils.floor('12.3999', 6)
    ).toEqual(12.3999)
    expect(
      XEUtils.floor('1452349847.3979', 2)
    ).toEqual(1452349847.39)
    expect(
      XEUtils.floor('-1452349847.3979', 5)
    ).toEqual(-1452349847.3979)
    expect(
      XEUtils.floor('1452349847.3979', 8)
    ).toEqual(1452349847.3979)
    expect(
      XEUtils.floor(1e-8)
    ).toEqual(0)
    expect(
      XEUtils.floor('9e-8', 6)
    ).toEqual(0)
    expect(
      XEUtils.floor(9e-8, 8)
    ).toEqual(9e-8)
    expect(
      XEUtils.floor('9e-8', 12)
    ).toEqual(9e-8)
    expect(
      XEUtils.floor(-9e-12)
    ).toEqual(-1)
    expect(
      XEUtils.floor('-9e-8', 8)
    ).toEqual(-9e-8)
    expect(
      XEUtils.floor(-923e-8, 4)
    ).toEqual(-0.0001)
    expect(
      XEUtils.floor('-923e-8', 10)
    ).toEqual(-0.00000923)
  })

  test('toFixed()', () => {
    expect(
      XEUtils.toFixed()
    ).toEqual('0')
    expect(
      XEUtils.toFixed('')
    ).toEqual('0')
    expect(
      XEUtils.toFixed(null)
    ).toEqual('0')
    expect(
      XEUtils.toFixed(undefined)
    ).toEqual('0')
    expect(
      XEUtils.toFixed('abc')
    ).toEqual('0')
    expect(
      XEUtils.toFixed(1e-9)
    ).toEqual('0')
    expect(
      XEUtils.toFixed(0)
    ).toEqual('0')
    expect(
      XEUtils.toFixed(-0)
    ).toEqual('0')
    expect(
      XEUtils.toFixed(-0.01)
    ).toEqual('0')
    expect(
      XEUtils.toFixed(0.01, 1)
    ).toEqual('0.0')
    expect(
      XEUtils.toFixed(-0.01, 1)
    ).toEqual('0.0')
    expect(
      XEUtils.toFixed(-0.01, 2)
    ).toEqual('-0.01')
    expect(
      XEUtils.toFixed(0.01, 2)
    ).toEqual('0.01')
    expect(
      XEUtils.toFixed(-0.01, 4)
    ).toEqual('-0.0100')
    expect(
      XEUtils.toFixed(0.01, 4)
    ).toEqual('0.0100')
    expect(
      XEUtils.toFixed(0.000001, 4)
    ).toEqual('0.0000')
    expect(
      XEUtils.toFixed(-0.000001, 4)
    ).toEqual('0.0000')
    expect(
      XEUtils.toFixed(0.6)
    ).toEqual('1')
    expect(
      XEUtils.toFixed(1)
    ).toEqual('1')
    expect(
      XEUtils.toFixed(0.01)
    ).toEqual('0')
    expect(
      XEUtils.toFixed(1, 2)
    ).toEqual('1.00')
    expect(
      XEUtils.toFixed(9999.77, 2)
    ).toEqual('9999.77')
    expect(
      XEUtils.toFixed(-9999.77, 1)
    ).toEqual('-9999.8')
    expect(
      XEUtils.toFixed(33.777, 2)
    ).toEqual('33.78')
    expect(
      XEUtils.toFixed(33.333, 2)
    ).toEqual('33.33')
    expect(
      XEUtils.toFixed(0.01, 4)
    ).toEqual((0.01).toFixed(4))
    expect(
      XEUtils.toFixed(-0.01, 4)
    ).toEqual((-0.01).toFixed(4))
    expect(
      XEUtils.toFixed(0.065, 2)
    ).toEqual((0.065).toFixed(2))
    expect(
      XEUtils.toFixed(0.065, 3)
    ).toEqual((0.065).toFixed(3))
    expect(
      XEUtils.toFixed(0.065, 4)
    ).toEqual((0.065).toFixed(4))
    expect(
      XEUtils.toFixed(-0.065, 2)
    ).toEqual('-0.06')
    expect(
      XEUtils.toFixed(-0.065, 3)
    ).toEqual('-0.065')
    expect(
      XEUtils.toFixed(-0.065, 4)
    ).toEqual('-0.0650')
    expect(
      XEUtils.toFixed('0.0001', 3)
    ).toEqual((0.0001).toFixed(3))
    expect(
      XEUtils.toFixed('0.0005', 3)
    ).toEqual((0.0005).toFixed(3))
    expect(
      XEUtils.toFixed('2222.222', 2)
    ).toEqual('2222.22')
    expect(
      XEUtils.toFixed('-2222.222', 2)
    ).toEqual('-2222.22')
    expect(
      XEUtils.toFixed(2222.222, 2)
    ).toEqual('2222.22')
    expect(
      XEUtils.toFixed(-2222.222, 2)
    ).toEqual('-2222.22')
    expect(
      XEUtils.toFixed(-0.123, 2)
    ).toEqual((-0.123).toFixed(2))
    expect(
      XEUtils.toFixed('1234.236', 10)
    ).toEqual((1234.236).toFixed(10))
    expect(
      XEUtils.toFixed(1234.236, 20)
    ).toEqual('1234.23600000000000000000')
    expect(
      XEUtils.toFixed(1.004, 30)
    ).toEqual('1.004000000000000000000000000000')
  })

  test('toNumberString()', () => {
    expect(
      XEUtils.toNumberString('')
    ).toEqual('')
    expect(
      XEUtils.toNumberString(0)
    ).toEqual('0')
    expect(
      XEUtils.toNumberString('0')
    ).toEqual('0')
    expect(
      XEUtils.toNumberString(-0)
    ).toEqual('0')
    expect(
      XEUtils.toNumberString('-0')
    ).toEqual('-0')
    expect(
      XEUtils.toNumberString('abc')
    ).toEqual('abc')
    expect(
      XEUtils.toNumberString(-0.001)
    ).toEqual('-0.001')
    expect(
      XEUtils.toNumberString('-0.001')
    ).toEqual('-0.001')
    expect(
      XEUtils.toNumberString('123')
    ).toEqual('123')
    expect(
      XEUtils.toNumberString(123)
    ).toEqual('123')
    expect(
      XEUtils.toNumberString(123.33)
    ).toEqual('123.33')
    expect(
      XEUtils.toNumberString('123.33')
    ).toEqual('123.33')
    expect(
      XEUtils.toNumberString(1e-9)
    ).toEqual('0.000000001')
    expect(
      XEUtils.toNumberString('1e-9')
    ).toEqual('0.000000001')
    expect(
      Number(XEUtils.toNumberString('1e-9'))
    ).toEqual(1e-9)
    expect(
      XEUtils.toNumberString(1e+22)
    ).toEqual('10000000000000000000000')
    expect(
      XEUtils.toNumberString('1e+22')
    ).toEqual('10000000000000000000000')
    expect(
      XEUtils.toNumberString(-1e+24)
    ).toEqual('-1000000000000000000000000')
    expect(
      Number(XEUtils.toNumberString(-1e+24))
    ).toEqual(-1e+24)
    expect(
      XEUtils.toNumberString(+1e+24)
    ).toEqual('1000000000000000000000000')
    expect(
      Number(XEUtils.toNumberString(+1e+24))
    ).toEqual(+1e+24)
    expect(
      XEUtils.toNumberString(1234e+22)
    ).toEqual('12340000000000000000000000')
    expect(
      XEUtils.toNumberString(123.4e+22)
    ).toEqual('1234000000000000000000000')
    expect(
      Number(XEUtils.toNumberString(123.4e+22))
    ).toEqual(123.4e+22)
    expect(
      XEUtils.toNumberString(2536e-16)
    ).toEqual('0.0000000000002536')
    expect(
      Number(XEUtils.toNumberString(2536e-16))
    ).toEqual(2536e-16)
    expect(
      XEUtils.toNumberString(25.36e-16)
    ).toEqual('0.000000000000002536')
    expect(
      Number(XEUtils.toNumberString(25.36e-16))
    ).toEqual(25.36e-16)
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

  test('add()', () => {
    expect(
      XEUtils.add(0)
    ).toEqual(0)
    expect(
      XEUtils.add(0, 0)
    ).toEqual(0)
    expect(
      XEUtils.add([])
    ).toEqual(0)
    expect(
      XEUtils.add({})
    ).toEqual(0)
    expect(
      XEUtils.add(/\d/)
    ).toEqual(0)
    expect(
      XEUtils.add(function () {})
    ).toEqual(0)
    expect(
      XEUtils.add(true)
    ).toEqual(0)
    expect(
      XEUtils.add('abc')
    ).toEqual(0)
    expect(
      XEUtils.add('abc', '123')
    ).toEqual(123)
    expect(
      XEUtils.add('22', 33)
    ).toEqual(55)
    expect(
      XEUtils.add(0, 33)
    ).toEqual(33)
    expect(
      XEUtils.add(2000, 500000)
    ).toEqual(502000)
    expect(
      XEUtils.add(3.84, 4.78)
    ).toEqual(8.62)
    expect(
      XEUtils.add(-3.33, 7.066)
    ).toEqual(3.736)
    expect(
      XEUtils.add(0.4598, 5.024666)
    ).toEqual(5.484466)
    expect(
      XEUtils.add(-0.4598, 5.0433)
    ).toEqual(4.5835)
    expect(
      XEUtils.add(17.67, 1.3)
    ).toEqual(18.97)
    expect(
      XEUtils.add(32654.324, 9666.7)
    ).toEqual(42321.024)
    expect(
      XEUtils.add(32654.111, 1e-4)
    ).toEqual(32654.1111)
    expect(
      XEUtils.add(1e-7, 1e-3)
    ).toEqual(0.0010001)
  })

  test('subtract()', () => {
    expect(
      XEUtils.subtract(0)
    ).toEqual(0)
    expect(
      XEUtils.subtract(0, 0)
    ).toEqual(0)
    expect(
      XEUtils.subtract([])
    ).toEqual(0)
    expect(
      XEUtils.subtract({})
    ).toEqual(0)
    expect(
      XEUtils.subtract(/\d/)
    ).toEqual(0)
    expect(
      XEUtils.subtract(function () {})
    ).toEqual(0)
    expect(
      XEUtils.subtract(true)
    ).toEqual(0)
    expect(
      XEUtils.subtract('abc')
    ).toEqual(0)
    expect(
      XEUtils.subtract('abc', '123')
    ).toEqual(-123)
    expect(
      XEUtils.subtract('22', 33)
    ).toEqual(-11)
    expect(
      XEUtils.subtract(0, 33)
    ).toEqual(-33)
    expect(
      XEUtils.subtract(500000, 2000)
    ).toEqual(498000)
    expect(
      XEUtils.subtract(324253.1, 23559.9)
    ).toEqual(300693.2)
    expect(
      XEUtils.subtract(6.66, 3.9)
    ).toEqual(2.76)
    expect(
      XEUtils.subtract(3.33, 7.066)
    ).toEqual(-3.736)
    expect(
      XEUtils.subtract(5.024664, 0.453)
    ).toEqual(4.571664)
    expect(
      XEUtils.subtract(25.77, 3.6)
    ).toEqual(22.17)
    expect(
      XEUtils.subtract(1e-4, 1.999)
    ).toEqual(-1.9989)
    expect(
      XEUtils.subtract(1e-7, 1e-3)
    ).toEqual(-0.0009999)
  })

  test('multiply()', () => {
    expect(
      XEUtils.multiply(0)
    ).toEqual(0)
    expect(
      XEUtils.multiply(0, 0)
    ).toEqual(0)
    expect(
      XEUtils.multiply([])
    ).toEqual(0)
    expect(
      XEUtils.multiply({})
    ).toEqual(0)
    expect(
      XEUtils.multiply(/\d/)
    ).toEqual(0)
    expect(
      XEUtils.multiply(function () {})
    ).toEqual(0)
    expect(
      XEUtils.multiply(true)
    ).toEqual(0)
    expect(
      XEUtils.multiply('abc')
    ).toEqual(0)
    expect(
      XEUtils.multiply('abc', '123')
    ).toEqual(0)
    expect(
      XEUtils.multiply('22', 33)
    ).toEqual(726)
    expect(
      XEUtils.multiply(0, 33)
    ).toEqual(0)
    expect(
      XEUtils.multiply(500000, 2000)
    ).toEqual(1000000000)
    expect(
      XEUtils.multiply(6.66, 3.7)
    ).toEqual(24.642)
    expect(
      XEUtils.multiply(3.33, 0.9)
    ).toEqual(2.997)
    expect(
      XEUtils.multiply(5.024664, 0.453)
    ).toEqual(2.276172792)
    expect(
      XEUtils.multiply(158335.645, 100)
    ).toEqual(15833564.5)
    expect(
      XEUtils.multiply(25.77, 7.1)
    ).toEqual(182.967)
    expect(
      XEUtils.multiply(17.67, 100)
    ).toEqual(1767)
    expect(
      XEUtils.multiply(1e-7, 3.3)
    ).toEqual(3.3e-7)
    expect(
      XEUtils.multiply(3.3, 0.0000001)
    ).toEqual(3.3e-7)
    expect(
      XEUtils.multiply(1e-7, 1e-3)
    ).toEqual(1e-10)
  })

  test('divide()', () => {
    expect(
      XEUtils.divide(0)
    ).toEqual(0)
    expect(
      XEUtils.divide(0, 0)
    ).toEqual(0)
    expect(
      XEUtils.divide([])
    ).toEqual(0)
    expect(
      XEUtils.divide({})
    ).toEqual(0)
    expect(
      XEUtils.divide(/\d/)
    ).toEqual(0)
    expect(
      XEUtils.divide(function () {})
    ).toEqual(0)
    expect(
      XEUtils.divide(true)
    ).toEqual(0)
    expect(
      XEUtils.divide('abc')
    ).toEqual(0)
    expect(
      XEUtils.divide('abc', '123')
    ).toEqual(0)
    expect(
      XEUtils.divide('33', 11)
    ).toEqual(3)
    expect(
      XEUtils.divide(0, 33)
    ).toEqual(0)
    expect(
      XEUtils.divide(21, 3)
    ).toEqual(7)
    expect(
      XEUtils.divide(100, 5)
    ).toEqual(20)
    expect(
      XEUtils.divide(500000, 2000)
    ).toEqual(250)
    expect(
      XEUtils.divide(1024.88, 0.2)
    ).toEqual(5124.4)
    expect(
      XEUtils.divide(51.2, 8)
    ).toEqual(6.4)
    expect(
      XEUtils.divide(2.997, 0.9)
    ).toEqual(3.33)
    expect(
      XEUtils.divide(2.276172792, 0.453)
    ).toEqual(5.024664)
    expect(
      XEUtils.divide(182.967, 25.77)
    ).toEqual(7.1)
    expect(
      XEUtils.divide(61.11109, 2)
    ).toEqual(30.555545)
    expect(
      XEUtils.divide(2641.1, 1e-9)
    ).toEqual(2641100000000)
    expect(
      XEUtils.divide(2641.1, 0.000000001)
    ).toEqual(2641100000000)
    expect(
      XEUtils.divide(1e-7, 1e-3)
    ).toEqual(0.0001)
  })
})
