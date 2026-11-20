/* eslint-disable prefer-regex-literals */

const XEUtils = require('../src')

describe('Base functions', () => {
  test('hasOwnProp()', () => {
    expect(
      XEUtils.hasOwnProp()
    ).toEqual(false)
    expect(
      XEUtils.hasOwnProp(0)
    ).toEqual(false)
    expect(
      XEUtils.hasOwnProp(-1)
    ).toEqual(false)
    expect(
      XEUtils.hasOwnProp(1)
    ).toEqual(false)
    expect(
      XEUtils.hasOwnProp(null)
    ).toEqual(false)
    expect(
      XEUtils.hasOwnProp('')
    ).toEqual(false)
    expect(
      XEUtils.hasOwnProp([])
    ).toEqual(false)
    expect(
      XEUtils.hasOwnProp(-1)
    ).toEqual(false)
    expect(
      XEUtils.hasOwnProp(true)
    ).toEqual(false)
    expect(
      XEUtils.hasOwnProp(false)
    ).toEqual(false)
    expect(
      XEUtils.hasOwnProp(undefined)
    ).toEqual(false)
    expect(
      XEUtils.hasOwnProp({})
    ).toEqual(false)
    expect(
      XEUtils.hasOwnProp({ a: 1 }, 'b')
    ).toEqual(false)
    expect(
      XEUtils.hasOwnProp({ aa: null }, 'aa.bb')
    ).toEqual(false)
    expect(
      XEUtils.hasOwnProp({ a: 1 }, 'a')
    ).toEqual(true)
    expect(
      XEUtils.hasOwnProp([1, 2, 3], 2)
    ).toEqual(true)
    expect(
      XEUtils.hasOwnProp([1, 2, 3], '2')
    ).toEqual(true)
    expect(
      XEUtils.hasOwnProp({ aa: { bb: 1 } }, 'aa.bb')
    ).toEqual(false)
  })

  test('isNaN()', () => {
    expect(
      XEUtils.isNaN()
    ).toEqual(false)
    expect(
      XEUtils.isNaN(0)
    ).toEqual(false)
    expect(
      XEUtils.isNaN(-1)
    ).toEqual(false)
    expect(
      XEUtils.isNaN(1)
    ).toEqual(false)
    expect(
      XEUtils.isNaN(null)
    ).toEqual(false)
    expect(
      XEUtils.isNaN('')
    ).toEqual(false)
    expect(
      XEUtils.isNaN([])
    ).toEqual(false)
    expect(
      XEUtils.isNaN(-1)
    ).toEqual(false)
    expect(
      XEUtils.isNaN(true)
    ).toEqual(false)
    expect(
      XEUtils.isNaN(false)
    ).toEqual(false)
    expect(
      XEUtils.isNaN(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isNaN({})
    ).toEqual(false)
    expect(
      XEUtils.isNaN('null')
    ).toEqual(false)
    expect(
      XEUtils.isNaN('NAN')
    ).toEqual(false)
    expect(
      XEUtils.isNaN(/\d/)
    ).toEqual(false)
    expect(
      XEUtils.isNaN(function () { })
    ).toEqual(false)
    expect(
      XEUtils.isNaN(NaN)
    ).toEqual(true)
  })

  test('isFinite()', () => {
    expect(
      XEUtils.isFinite()
    ).toEqual(false)
    expect(
      XEUtils.isFinite(null)
    ).toEqual(false)
    expect(
      XEUtils.isFinite(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isFinite(NaN)
    ).toEqual(false)
    expect(
      XEUtils.isFinite({})
    ).toEqual(false)
    expect(
      XEUtils.isFinite([])
    ).toEqual(false)
    expect(
      XEUtils.isFinite(function () { })
    ).toEqual(false)
    expect(
      XEUtils.isFinite(/\d/)
    ).toEqual(false)
    expect(
      XEUtils.isFinite('num')
    ).toEqual(false)
    expect(
      XEUtils.isFinite('5')
    ).toEqual(false)
    expect(
      XEUtils.isFinite('')
    ).toEqual(false)
    expect(
      XEUtils.isFinite(-2)
    ).toEqual(true)
    expect(
      XEUtils.isFinite(0)
    ).toEqual(true)
    expect(
      XEUtils.isFinite(5)
    ).toEqual(true)
    expect(
      XEUtils.isFinite(2e64)
    ).toEqual(true)
  })

  test('isUndefined()', () => {
    expect(
      XEUtils.isUndefined(0)
    ).toEqual(false)
    expect(
      XEUtils.isUndefined(-2)
    ).toEqual(false)
    expect(
      XEUtils.isUndefined(false)
    ).toEqual(false)
    expect(
      XEUtils.isUndefined('')
    ).toEqual(false)
    expect(
      XEUtils.isUndefined({})
    ).toEqual(false)
    expect(
      XEUtils.isUndefined([])
    ).toEqual(false)
    expect(
      XEUtils.isUndefined(function () { })
    ).toEqual(false)
    expect(
      XEUtils.isUndefined(/\d/)
    ).toEqual(false)
    expect(
      XEUtils.isUndefined(null)
    ).toEqual(false)
    expect(
      XEUtils.isUndefined('null')
    ).toEqual(false)
    expect(
      XEUtils.isUndefined('undefined')
    ).toEqual(false)
    expect(
      XEUtils.isUndefined(undefined)
    ).toEqual(true)
    expect(
      XEUtils.isUndefined()
    ).toEqual(true)
  })

  test('isArray()', () => {
    const method = function () {
      expect(
        XEUtils.isArray(arguments)
      ).toEqual(false)
    }
    method()
    method(11, 22)
    expect(
      XEUtils.isArray(null)
    ).toEqual(false)
    expect(
      XEUtils.isArray(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isArray({})
    ).toEqual(false)
    expect(
      XEUtils.isArray(function () { })
    ).toEqual(false)
    expect(
      XEUtils.isArray(0)
    ).toEqual(false)
    expect(
      XEUtils.isArray(-2)
    ).toEqual(false)
    expect(
      XEUtils.isArray(false)
    ).toEqual(false)
    expect(
      XEUtils.isArray('false')
    ).toEqual(false)
    expect(
      XEUtils.isArray([])
    ).toEqual(true)
    expect(
      XEUtils.isArray([1, 2, 3])
    ).toEqual(true)
  })

  test('isFloat()', () => {
    expect(
      XEUtils.isFloat(null)
    ).toEqual(false)
    expect(
      XEUtils.isFloat('null')
    ).toEqual(false)
    expect(
      XEUtils.isFloat({})
    ).toEqual(false)
    expect(
      XEUtils.isFloat([])
    ).toEqual(false)
    expect(
      XEUtils.isFloat(function () { })
    ).toEqual(false)
    expect(
      XEUtils.isFloat(/1\.3/)
    ).toEqual(false)
    expect(
      XEUtils.isFloat(0)
    ).toEqual(false)
    expect(
      XEUtils.isFloat(3)
    ).toEqual(false)
    expect(
      XEUtils.isFloat(-1)
    ).toEqual(false)
    expect(
      XEUtils.isFloat('0')
    ).toEqual(false)
    expect(
      XEUtils.isFloat('3.9a')
    ).toEqual(false)
    expect(
      XEUtils.isFloat('1.3')
    ).toEqual(true)
    expect(
      XEUtils.isFloat(3.3)
    ).toEqual(true)
    expect(
      XEUtils.isFloat(-2.3)
    ).toEqual(true)
  })

  test('isInteger()', () => {
    expect(
      XEUtils.isInteger(null)
    ).toEqual(false)
    expect(
      XEUtils.isInteger([])
    ).toEqual(false)
    expect(
      XEUtils.isInteger({})
    ).toEqual(false)
    expect(
      XEUtils.isInteger(/123/)
    ).toEqual(false)
    expect(
      XEUtils.isInteger(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isInteger(null)
    ).toEqual(false)
    expect(
      XEUtils.isInteger('null')
    ).toEqual(false)
    expect(
      XEUtils.isInteger('undefined')
    ).toEqual(false)
    expect(
      XEUtils.isInteger(3.3)
    ).toEqual(false)
    expect(
      XEUtils.isInteger(-1.3)
    ).toEqual(false)
    expect(
      XEUtils.isInteger('3.4')
    ).toEqual(false)
    expect(
      XEUtils.isInteger('0')
    ).toEqual(true)
    expect(
      XEUtils.isInteger('3')
    ).toEqual(true)
    expect(
      XEUtils.isInteger('-5')
    ).toEqual(true)
    expect(
      XEUtils.isInteger(2)
    ).toEqual(true)
    expect(
      XEUtils.isInteger(-1)
    ).toEqual(true)
    expect(
      XEUtils.isInteger(0)
    ).toEqual(true)
  })

  test('isFunction()', () => {
    expect(
      XEUtils.isFunction('null')
    ).toEqual(false)
    expect(
      XEUtils.isFunction(null)
    ).toEqual(false)
    expect(
      XEUtils.isFunction(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isFunction(false)
    ).toEqual(false)
    expect(
      XEUtils.isFunction(0)
    ).toEqual(false)
    expect(
      XEUtils.isFunction(-1)
    ).toEqual(false)
    expect(
      XEUtils.isFunction([])
    ).toEqual(false)
    expect(
      XEUtils.isFunction({})
    ).toEqual(false)
    expect(
      XEUtils.isFunction(function () { })
    ).toEqual(true)
  })

  test('isBoolean()', () => {
    expect(
      XEUtils.isBoolean([])
    ).toEqual(false)
    expect(
      XEUtils.isBoolean({})
    ).toEqual(false)
    expect(
      XEUtils.isBoolean(null)
    ).toEqual(false)
    expect(
      XEUtils.isBoolean(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isBoolean('false')
    ).toEqual(false)
    expect(
      XEUtils.isBoolean(0)
    ).toEqual(false)
    expect(
      XEUtils.isBoolean(-1)
    ).toEqual(false)
    expect(
      XEUtils.isBoolean(true)
    ).toEqual(true)
  })

  test('isString()', () => {
    expect(
      XEUtils.isString(1)
    ).toEqual(false)
    expect(
      XEUtils.isString(0)
    ).toEqual(false)
    expect(
      XEUtils.isString(null)
    ).toEqual(false)
    expect(
      XEUtils.isString(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isString({})
    ).toEqual(false)
    expect(
      XEUtils.isString([])
    ).toEqual(false)
    expect(
      XEUtils.isString(/\d/)
    ).toEqual(false)
    expect(
      XEUtils.isString(function () { })
    ).toEqual(false)
    if (typeof Symbol !== 'undefined') {
      expect(
        XEUtils.isString(Symbol('abc'))
      ).toEqual(false)
    }
    expect(
      XEUtils.isString(true)
    ).toEqual(false)
    expect(
      XEUtils.isString('')
    ).toEqual(true)
    expect(
      XEUtils.isString('abc')
    ).toEqual(true)
  })

  test('isNumber()', () => {
    expect(
      XEUtils.isNumber(null)
    ).toEqual(false)
    expect(
      XEUtils.isNumber(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isNumber({})
    ).toEqual(false)
    expect(
      XEUtils.isNumber([])
    ).toEqual(false)
    expect(
      XEUtils.isNumber(function () { })
    ).toEqual(false)
    expect(
      XEUtils.isNumber(/123/)
    ).toEqual(false)
    expect(
      XEUtils.isNumber('1')
    ).toEqual(false)
    expect(
      XEUtils.isNumber(-1)
    ).toEqual(true)
    expect(
      XEUtils.isNumber(0)
    ).toEqual(true)
    expect(
      XEUtils.isNumber(9.3)
    ).toEqual(true)
  })

  test('isRegExp()', () => {
    expect(
      XEUtils.isRegExp(null)
    ).toEqual(false)
    expect(
      XEUtils.isRegExp(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isRegExp([])
    ).toEqual(false)
    expect(
      XEUtils.isRegExp({})
    ).toEqual(false)
    expect(
      XEUtils.isRegExp(function () { })
    ).toEqual(false)
    expect(
      XEUtils.isRegExp(-1)
    ).toEqual(false)
    expect(
      XEUtils.isRegExp('a')
    ).toEqual(false)
    expect(
      XEUtils.isRegExp(new RegExp('a'))
    ).toEqual(true)
    expect(
      XEUtils.isRegExp(/\d/)
    ).toEqual(true)
  })

  test('isObject()', () => {
    expect(
      XEUtils.isObject(123)
    ).toEqual(false)
    expect(
      XEUtils.isObject(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isObject('null')
    ).toEqual(false)
    expect(
      XEUtils.isObject(function () { })
    ).toEqual(false)
    expect(
      XEUtils.isObject(-1)
    ).toEqual(false)
    expect(
      XEUtils.isObject(false)
    ).toEqual(false)
    if (typeof Symbol !== 'undefined') {
      expect(
        XEUtils.isObject(Symbol('123'))
      ).toEqual(false)
    }
    expect(
      XEUtils.isObject(/\d/)
    ).toEqual(true)
    expect(
      XEUtils.isObject(null)
    ).toEqual(true)
    expect(
      XEUtils.isObject([])
    ).toEqual(true)
    expect(
      XEUtils.isObject({})
    ).toEqual(true)
  })

  test('isPlainObject()', () => {
    expect(
      XEUtils.isPlainObject()
    ).toEqual(false)
    expect(
      XEUtils.isPlainObject(null)
    ).toEqual(false)
    expect(
      XEUtils.isPlainObject(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isPlainObject(/\d/)
    ).toEqual(false)
    expect(
      XEUtils.isPlainObject(function () { })
    ).toEqual(false)
    expect(
      XEUtils.isPlainObject([])
    ).toEqual(false)
    expect(
      XEUtils.isPlainObject('')
    ).toEqual(false)
    expect(
      XEUtils.isPlainObject(-1)
    ).toEqual(false)
    expect(
      XEUtils.isPlainObject(123)
    ).toEqual(false)
    if (typeof Symbol !== 'undefined') {
      expect(
        XEUtils.isPlainObject(Symbol('123'))
      ).toEqual(false)
    }
    expect(
      XEUtils.isPlainObject({})
    ).toEqual(true)
  })

  test('isDate()', () => {
    expect(
      XEUtils.isDate()
    ).toEqual(false)
    expect(
      XEUtils.isDate('')
    ).toEqual(false)
    expect(
      XEUtils.isDate('2017-12-20')
    ).toEqual(false)
    expect(
      XEUtils.isDate('ue Dec 04 2018 15:02:06 GMT+0800')
    ).toEqual(false)
    expect(
      XEUtils.isDate(-1)
    ).toEqual(false)
    expect(
      XEUtils.isDate(0)
    ).toEqual(false)
    expect(
      XEUtils.isDate(null)
    ).toEqual(false)
    expect(
      XEUtils.isDate(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isDate([])
    ).toEqual(false)
    expect(
      XEUtils.isDate({})
    ).toEqual(false)
    expect(
      XEUtils.isDate(1514096716800)
    ).toEqual(false)
    expect(
      XEUtils.isDate(new Date())
    ).toEqual(true)
    expect(
      XEUtils.isDate(XEUtils.toStringDate('2017-12-20', 'yyyy-MM-dd'))
    ).toEqual(true)
  })

  test('isError()', () => {
    expect(
      XEUtils.isError()
    ).toEqual(false)
    expect(
      XEUtils.isError(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isError(null)
    ).toEqual(false)
    expect(
      XEUtils.isError({})
    ).toEqual(false)
    expect(
      XEUtils.isError([])
    ).toEqual(false)
    expect(
      XEUtils.isError(-1)
    ).toEqual(false)
    expect(
      XEUtils.isError(0)
    ).toEqual(false)
    expect(
      XEUtils.isError('')
    ).toEqual(false)
    expect(
      XEUtils.isError(function () { })
    ).toEqual(false)
    expect(
      XEUtils.isError(new TypeError('error'))
    ).toEqual(true)
    expect(
      XEUtils.isError(new Error('error'))
    ).toEqual(true)
  })

  test('isTypeError()', () => {
    expect(
      XEUtils.isTypeError()
    ).toEqual(false)
    expect(
      XEUtils.isTypeError(null)
    ).toEqual(false)
    expect(
      XEUtils.isTypeError(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isTypeError([])
    ).toEqual(false)
    expect(
      XEUtils.isTypeError({})
    ).toEqual(false)
    expect(
      XEUtils.isTypeError(-1)
    ).toEqual(false)
    expect(
      XEUtils.isTypeError(0)
    ).toEqual(false)
    expect(
      XEUtils.isTypeError('')
    ).toEqual(false)
    expect(
      XEUtils.isTypeError(function () { })
    ).toEqual(false)
    expect(
      XEUtils.isTypeError(new Error('error'))
    ).toEqual(false)
    expect(
      XEUtils.isTypeError(new TypeError('error'))
    ).toEqual(true)
  })

  test('isEmpty()', () => {
    expect(
      XEUtils.isEmpty([11])
    ).toEqual(false)
    expect(
      XEUtils.isEmpty({ a: 1 })
    ).toEqual(false)
    expect(
      XEUtils.isEmpty(' ')
    ).toEqual(false)
    expect(
      XEUtils.isEmpty()
    ).toEqual(true)
    expect(
      XEUtils.isEmpty(0)
    ).toEqual(true)
    expect(
      XEUtils.isEmpty(100)
    ).toEqual(true)
    expect(
      XEUtils.isEmpty(-1)
    ).toEqual(true)
    expect(
      XEUtils.isEmpty('')
    ).toEqual(true)
    expect(
      XEUtils.isEmpty(false)
    ).toEqual(true)
    expect(
      XEUtils.isEmpty(null)
    ).toEqual(true)
    expect(
      XEUtils.isEmpty(undefined)
    ).toEqual(true)
    expect(
      XEUtils.isEmpty({})
    ).toEqual(true)
    expect(
      XEUtils.isEmpty([])
    ).toEqual(true)
    expect(
      XEUtils.isEmpty(/\d/)
    ).toEqual(true)
    expect(
      XEUtils.isEmpty(function () { })
    ).toEqual(true)
  })

  test('isNull()', () => {
    expect(
      XEUtils.isNull()
    ).toEqual(false)
    expect(
      XEUtils.isNull(0)
    ).toEqual(false)
    expect(
      XEUtils.isNull(false)
    ).toEqual(false)
    expect(
      XEUtils.isNull(function () { })
    ).toEqual(false)
    expect(
      XEUtils.isNull(/null/)
    ).toEqual(false)
    expect(
      XEUtils.isNull({})
    ).toEqual(false)
    expect(
      XEUtils.isNull([])
    ).toEqual(false)
    expect(
      XEUtils.isNull(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isNull('null')
    ).toEqual(false)
    expect(
      XEUtils.isNull('')
    ).toEqual(false)
    expect(
      XEUtils.isNull(null)
    ).toEqual(true)
  })

  test('isSymbol()', () => {
    expect(
      XEUtils.isSymbol()
    ).toEqual(false)
    expect(
      XEUtils.isSymbol(null)
    ).toEqual(false)
    expect(
      XEUtils.isSymbol(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isSymbol({})
    ).toEqual(false)
    expect(
      XEUtils.isSymbol([])
    ).toEqual(false)
    expect(
      XEUtils.isSymbol(0)
    ).toEqual(false)
    expect(
      XEUtils.isSymbol(-1)
    ).toEqual(false)
    expect(
      XEUtils.isSymbol(false)
    ).toEqual(false)
    expect(
      XEUtils.isSymbol(function () { })
    ).toEqual(false)
    expect(
      XEUtils.isSymbol('a')
    ).toEqual(false)
    if (typeof Symbol !== 'undefined') {
      expect(
        XEUtils.isSymbol(Symbol('a'))
      ).toEqual(true)
    }
  })

  test('isArguments()', () => {
    expect(
      XEUtils.isArguments()
    ).toEqual(false)
    expect(
      XEUtils.isArguments(null)
    ).toEqual(false)
    expect(
      XEUtils.isArguments(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isArguments()
    ).toEqual(false)
    expect(
      XEUtils.isArguments([])
    ).toEqual(false)
    expect(
      XEUtils.isArguments({})
    ).toEqual(false)
    expect(
      XEUtils.isArguments(0)
    ).toEqual(false)
    expect(
      XEUtils.isArguments(-1)
    ).toEqual(false)
    expect(
      XEUtils.isArguments(false)
    ).toEqual(false)
    expect(
      XEUtils.isArguments(function () { })
    ).toEqual(false)
    const method = function () {
      expect(
        XEUtils.isArguments(arguments)
      ).toEqual(true)
    }
    method()
  })

  test('isElement()', () => {
    expect(
      XEUtils.isElement()
    ).toEqual(false)
    expect(
      XEUtils.isElement(null)
    ).toEqual(false)
    expect(
      XEUtils.isElement(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isElement(-1)
    ).toEqual(false)
    expect(
      XEUtils.isElement(123)
    ).toEqual(false)
    expect(
      XEUtils.isElement(0)
    ).toEqual(false)
    expect(
      XEUtils.isElement('')
    ).toEqual(false)
    expect(
      XEUtils.isElement({})
    ).toEqual(false)
    expect(
      XEUtils.isElement([])
    ).toEqual(false)
    expect(
      XEUtils.isElement(function () { })
    ).toEqual(false)
  })

  test('isDocument()', () => {
    expect(
      XEUtils.isDocument()
    ).toEqual(false)
    expect(
      XEUtils.isDocument(null)
    ).toEqual(false)
    expect(
      XEUtils.isDocument(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isDocument(-1)
    ).toEqual(false)
    expect(
      XEUtils.isDocument(123)
    ).toEqual(false)
    expect(
      XEUtils.isDocument(0)
    ).toEqual(false)
    expect(
      XEUtils.isDocument('')
    ).toEqual(false)
    expect(
      XEUtils.isDocument({})
    ).toEqual(false)
    expect(
      XEUtils.isDocument([])
    ).toEqual(false)
    expect(
      XEUtils.isDocument(function () { })
    ).toEqual(false)
  })

  test('isWindow()', () => {
    expect(
      XEUtils.isWindow()
    ).toEqual(false)
    expect(
      XEUtils.isWindow(null)
    ).toEqual(false)
    expect(
      XEUtils.isWindow(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isWindow(-1)
    ).toEqual(false)
    expect(
      XEUtils.isWindow(123)
    ).toEqual(false)
    expect(
      XEUtils.isWindow(0)
    ).toEqual(false)
    expect(
      XEUtils.isWindow('')
    ).toEqual(false)
    expect(
      XEUtils.isWindow({})
    ).toEqual(false)
    expect(
      XEUtils.isWindow([])
    ).toEqual(false)
    expect(
      XEUtils.isWindow(function () { })
    ).toEqual(false)
  })

  test('isFormData()', () => {
    expect(
      XEUtils.isFormData()
    ).toEqual(false)
    expect(
      XEUtils.isFormData(null)
    ).toEqual(false)
    expect(
      XEUtils.isFormData(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isFormData(-1)
    ).toEqual(false)
    expect(
      XEUtils.isFormData(123)
    ).toEqual(false)
    expect(
      XEUtils.isFormData(0)
    ).toEqual(false)
    expect(
      XEUtils.isFormData('')
    ).toEqual(false)
    expect(
      XEUtils.isFormData({})
    ).toEqual(false)
    expect(
      XEUtils.isFormData([])
    ).toEqual(false)
    expect(
      XEUtils.isFormData('a=1')
    ).toEqual(false)
    // expect(
    //   XEUtils.isFormData(new FormData())
    // ).toEqual(true)
  })

  test('isMap()', () => {
    expect(
      XEUtils.isMap()
    ).toEqual(false)
    expect(
      XEUtils.isMap(null)
    ).toEqual(false)
    expect(
      XEUtils.isMap(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isMap(-1)
    ).toEqual(false)
    expect(
      XEUtils.isMap(123)
    ).toEqual(false)
    expect(
      XEUtils.isMap(0)
    ).toEqual(false)
    expect(
      XEUtils.isMap('')
    ).toEqual(false)
    expect(
      XEUtils.isMap({})
    ).toEqual(false)
    expect(
      XEUtils.isMap([])
    ).toEqual(false)
    expect(
      XEUtils.isMap(new Map())
    ).toEqual(true)
  })

  test('isWeakMap()', () => {
    expect(
      XEUtils.isWeakMap()
    ).toEqual(false)
    expect(
      XEUtils.isWeakMap(null)
    ).toEqual(false)
    expect(
      XEUtils.isWeakMap(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isWeakMap(-1)
    ).toEqual(false)
    expect(
      XEUtils.isWeakMap(123)
    ).toEqual(false)
    expect(
      XEUtils.isWeakMap(0)
    ).toEqual(false)
    expect(
      XEUtils.isWeakMap('')
    ).toEqual(false)
    expect(
      XEUtils.isWeakMap({})
    ).toEqual(false)
    expect(
      XEUtils.isWeakMap([])
    ).toEqual(false)
    expect(
      XEUtils.isWeakMap(new WeakMap())
    ).toEqual(true)
  })

  test('isSet()', () => {
    expect(
      XEUtils.isSet()
    ).toEqual(false)
    expect(
      XEUtils.isSet(null)
    ).toEqual(false)
    expect(
      XEUtils.isSet(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isSet(-1)
    ).toEqual(false)
    expect(
      XEUtils.isSet(123)
    ).toEqual(false)
    expect(
      XEUtils.isSet(0)
    ).toEqual(false)
    expect(
      XEUtils.isSet('')
    ).toEqual(false)
    expect(
      XEUtils.isSet({})
    ).toEqual(false)
    expect(
      XEUtils.isSet([])
    ).toEqual(false)
    expect(
      XEUtils.isSet(new Set())
    ).toEqual(true)
  })

  test('isWeakSet()', () => {
    expect(
      XEUtils.isWeakSet()
    ).toEqual(false)
    expect(
      XEUtils.isWeakSet(null)
    ).toEqual(false)
    expect(
      XEUtils.isWeakSet(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isWeakSet(-1)
    ).toEqual(false)
    expect(
      XEUtils.isWeakSet(123)
    ).toEqual(false)
    expect(
      XEUtils.isWeakSet(0)
    ).toEqual(false)
    expect(
      XEUtils.isWeakSet('')
    ).toEqual(false)
    expect(
      XEUtils.isWeakSet({})
    ).toEqual(false)
    expect(
      XEUtils.isWeakSet([])
    ).toEqual(false)
    expect(
      XEUtils.isWeakSet(new WeakSet())
    ).toEqual(true)
  })

  test('isLeapYear()', () => {
    expect(
      XEUtils.isLeapYear('2018-12-01')
    ).toEqual(false)
    expect(
      XEUtils.isLeapYear('2020-12-01 10:30:30')
    ).toEqual(true)
    expect(
      XEUtils.isLeapYear(1581305634689)
    ).toEqual(true)
    expect(
      XEUtils.isLeapYear(new Date(2012, 1, 1).getTime())
    ).toEqual(true)
    expect(
      XEUtils.isLeapYear(new Date(2020, 11, 1))
    ).toEqual(true)
  })

  test('isMatch()', () => {
    expect(
      XEUtils.isMatch()
    ).toEqual(true)
    expect(
      XEUtils.isMatch(null)
    ).toEqual(true)
    expect(
      XEUtils.isMatch(undefined)
    ).toEqual(true)
    expect(
      XEUtils.isMatch([])
    ).toEqual(true)
    expect(
      XEUtils.isMatch({})
    ).toEqual(true)
    expect(
      XEUtils.isMatch(-1)
    ).toEqual(true)
    expect(
      XEUtils.isMatch(0)
    ).toEqual(true)
    expect(
      XEUtils.isMatch('')
    ).toEqual(true)
    expect(
      XEUtils.isMatch('sbc')
    ).toEqual(true)
    expect(
      XEUtils.isMatch([], [])
    ).toEqual(true)
    expect(
      XEUtils.isMatch({}, {})
    ).toEqual(true)
    expect(
      XEUtils.isMatch({ a: 22 })
    ).toEqual(true)
    expect(
      XEUtils.isMatch([11, 22], [11])
    ).toEqual(true)
    expect(
      XEUtils.isMatch([22, 11], [11])
    ).toEqual(false)
    expect(
      XEUtils.isMatch([11], [33])
    ).toEqual(false)
    expect(
      XEUtils.isMatch([{ a: { bb: 33 } }], [{ a: { bb: 33 } }])
    ).toEqual(true)
    expect(
      XEUtils.isMatch({ aa: 11, bb: 22 }, { bb: 22 })
    ).toEqual(true)
    expect(
      XEUtils.isMatch({ aa: 11, bb: [1, 2, 3] }, { bb: [1, 2, 3] })
    ).toEqual(true)
    expect(XEUtils.isMatch({ a: 11, bb: 22 }, { aa: 11, bb: 22 })).toEqual(false)
    expect(XEUtils.isMatch({ a: 1, b: 2 }, { a: 1, b: 999 })).toBe(false)
  })

  test('isEqual()', () => {
    expect(
      XEUtils.isEqual(0)
    ).toEqual(false)
    expect(
      XEUtils.isEqual(false)
    ).toEqual(false)
    expect(
      XEUtils.isEqual(0, false)
    ).toEqual(false)
    expect(
      XEUtils.isEqual(undefined, false)
    ).toEqual(false)
    expect(
      XEUtils.isEqual(undefined, null)
    ).toEqual(false)
    expect(
      XEUtils.isEqual(null, false)
    ).toEqual(false)
    expect(
      XEUtils.isEqual(0, undefined)
    ).toEqual(false)
    expect(
      XEUtils.isEqual(undefined, 0)
    ).toEqual(false)
    expect(
      XEUtils.isEqual(false, 0)
    ).toEqual(false)
    expect(
      XEUtils.isEqual(/0/, 0)
    ).toEqual(false)
    expect(
      XEUtils.isEqual(true, 1)
    ).toEqual(false)
    expect(
      XEUtils.isEqual(false, true)
    ).toEqual(false)
    expect(
      XEUtils.isEqual({}, function () { })
    ).toEqual(false)
    expect(
      XEUtils.isEqual({}, [])
    ).toEqual(false)
    expect(
      XEUtils.isEqual({ 0: 1 }, [1])
    ).toEqual(false)
    expect(
      XEUtils.isEqual([undefined], [null])
    ).toEqual(false)
    expect(
      XEUtils.isEqual([11, 22], [22, 11])
    ).toEqual(false)
    expect(
      XEUtils.isEqual({ name: 'test1', list: [11, 33, { a: /\D/ }] }, { name: 'test1', list: [11, 33, { a: /\d/ }] })
    ).toEqual(false)
    expect(
      XEUtils.isEqual([11, 22, 33], [11, 22, 33])
    ).toEqual(true)
    expect(
      XEUtils.isEqual([11, '22', /\d/, false], [11, '22', new RegExp('\\d'), false])
    ).toEqual(true)
    expect(
      XEUtils.isEqual({ name: 'test1' }, { name: 'test1' })
    ).toEqual(true)
    expect(
      XEUtils.isEqual({ name: 'test1', list: [11, /\d/] }, { name: 'test1', list: [11, /\d/] })
    ).toEqual(true)
    expect(
      XEUtils.isEqual([{ a: 1, b: [{ aa: false }, { bb: new Date(2018, 1, 1) }] }, { c: /\D/, d: null }], [{ a: 1, b: [{ aa: false }, { bb: new Date(2018, 1, 1) }] }, { c: /\D/, d: null }])
    ).toEqual(true)
  })

  test('isEqualWith()', () => {
    expect(
      XEUtils.isEqualWith(0)
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith(false)
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith(0, false)
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith(undefined, false)
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith(undefined, null)
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith(null, false)
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith(0, undefined)
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith(undefined, 0)
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith(false, 0)
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith(/0/, 0)
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith(true, 1)
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith(false, true)
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith({}, function () { })
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith({}, [])
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith({ 0: 1 }, [1])
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith([undefined], [null])
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith([11, 22], [22, 11])
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith([11, 22], [22, 11], (v1, v2) => true)
    ).toEqual(true)
    expect(
      XEUtils.isEqualWith({ name: 'test1', list: [11, 33, { a: /\D/ }] }, { name: 'test1', list: [11, 33, { a: /\d/ }] })
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith([11, 22, 33], [11, 22, 33])
    ).toEqual(true)
    expect(
      XEUtils.isEqualWith([11, 22, 33], [11, 22, 33], (v1, v2) => false)
    ).toEqual(false)
    expect(
      XEUtils.isEqualWith([11, '22', /\d/, false], [11, '22', new RegExp('\\d'), false])
    ).toEqual(true)
    expect(
      XEUtils.isEqualWith({ name: 'test1' }, { name: 'test1' })
    ).toEqual(true)
    expect(
      XEUtils.isEqualWith({ name: 'test1', list: [11, /\d/] }, { name: 'test1', list: [11, /\d/] })
    ).toEqual(true)
    expect(
      XEUtils.isEqualWith([{ a: 1, b: [{ aa: false }, { bb: new Date(2018, 1, 1) }] }, { c: /\D/, d: null }], [{ a: 1, b: [{ aa: false }, { bb: new Date(2018, 1, 1) }] }, { c: /\D/, d: null }])
    ).toEqual(true)
  })

  test('property()', () => {
    const getName = XEUtils.property('name')
    expect(
      getName({ name: 'test11', age: 25, height: 176 })
    ).toEqual('test11')
    expect(
      getName({ age: 25, height: 176 })
    ).toEqual(undefined)
  })

  test('getType()', () => {
    expect(
      XEUtils.getType()
    ).toEqual('undefined')
    expect(
      XEUtils.getType(undefined)
    ).toEqual('undefined')
    expect(
      XEUtils.getType(null)
    ).toEqual('null')
    expect(
      XEUtils.getType('')
    ).toEqual('string')
    expect(
      XEUtils.getType('1')
    ).toEqual('string')
    expect(
      XEUtils.getType(1)
    ).toEqual('number')
    expect(
      XEUtils.getType(1547895990810)
    ).toEqual('number')
    expect(
      XEUtils.getType(new Date())
    ).toEqual('date')
    expect(
      XEUtils.getType([])
    ).toEqual('array')
    expect(
      XEUtils.getType([{}])
    ).toEqual('array')
    expect(
      XEUtils.getType(/\d/)
    ).toEqual('regexp')
    expect(
      XEUtils.getType(new RegExp('-'))
    ).toEqual('regexp')
    expect(
      XEUtils.getType({})
    ).toEqual('object')
    expect(
      XEUtils.getType(false)
    ).toEqual('boolean')
    expect(
      XEUtils.getType(true)
    ).toEqual('boolean')
    expect(
      XEUtils.getType(new Error())
    ).toEqual('error')
    expect(
      XEUtils.getType(new TypeError())
    ).toEqual('error')
    expect(
      XEUtils.getType(function () { })
    ).toEqual('function')
    const method = function () {
      expect(
        XEUtils.getType(arguments)
      ).toEqual('object')
    }
    method(11, 22)
    if (typeof Symbol !== 'undefined') {
      expect(
        XEUtils.getType(Symbol('name'))
      ).toEqual('symbol')
    }
  })

  test('uniqueId()', () => {
    expect(
      XEUtils.uniqueId(undefined)
    ).toEqual('1')
    expect(
      XEUtils.uniqueId(null)
    ).toEqual('2')
    expect(
      XEUtils.uniqueId()
    ).toEqual('3')
    expect(
      XEUtils.uniqueId()
    ).toEqual('4')
    expect(
      XEUtils.uniqueId(0)
    ).toEqual('05')
    expect(
      XEUtils.uniqueId(-1)
    ).toEqual('-16')
    expect(
      XEUtils.uniqueId('prefix_')
    ).toEqual('prefix_7')
  })

  test('getSize()', () => {
    expect(
      XEUtils.getSize()
    ).toEqual(0)
    expect(
      XEUtils.getSize(null)
    ).toEqual(0)
    expect(
      XEUtils.getSize(undefined)
    ).toEqual(0)
    expect(
      XEUtils.getSize('')
    ).toEqual(0)
    expect(
      XEUtils.getSize(false)
    ).toEqual(0)
    expect(
      XEUtils.getSize(-1)
    ).toEqual(0)
    expect(
      XEUtils.getSize(10)
    ).toEqual(0)
    expect(
      XEUtils.getSize(function () { })
    ).toEqual(0)
    expect(
      XEUtils.getSize('123')
    ).toEqual(3)
    expect(
      XEUtils.getSize([1, 3])
    ).toEqual(2)
    expect(
      XEUtils.getSize([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }])
    ).toEqual(4)
    expect(
      XEUtils.getSize({ a: 2, b: 5 })
    ).toEqual(2)
  })

  test('indexOf()', () => {
    expect(
      XEUtils.indexOf()
    ).toEqual(-1)
    expect(
      XEUtils.indexOf(null)
    ).toEqual(-1)
    expect(
      XEUtils.indexOf(undefined)
    ).toEqual(-1)
    expect(
      XEUtils.indexOf([])
    ).toEqual(-1)
    expect(
      XEUtils.indexOf({})
    ).toEqual(-1)
    expect(
      XEUtils.indexOf(function () { })
    ).toEqual(-1)
    expect(
      XEUtils.indexOf([11, 22, 33, 22])
    ).toEqual(-1)
    expect(
      XEUtils.indexOf([11, 22, 33, 22], 55)
    ).toEqual(-1)
    expect(
      XEUtils.indexOf({ a: 1, b: 3 })
    ).toEqual(-1)
    expect(
      XEUtils.indexOf({ a: 1, b: 3 }, 5)
    ).toEqual(-1)
    expect(
      XEUtils.indexOf({ a: 1, b: 3 }, 1)
    ).toEqual('a')
    expect(
      XEUtils.indexOf({ a: 1, b: 3 }, 3)
    ).toEqual('b')
    expect(
      XEUtils.indexOf([11, 22, 33, 22], 22)
    ).toEqual(1)
    expect(
      XEUtils.indexOf([11, 22, 33, 22], 33)
    ).toEqual(2)
  })

  test('arrayIndexOf()', () => {
    expect(
      XEUtils.arrayIndexOf([11, 22, 33, 22])
    ).toEqual(-1)
    expect(
      XEUtils.arrayIndexOf([11, 22, 33, 22], 55)
    ).toEqual(-1)
    expect(
      XEUtils.arrayIndexOf([11, 22, 33, 22], 22)
    ).toEqual(1)
    expect(
      XEUtils.arrayIndexOf([11, 22, 33, 22], 33)
    ).toEqual(2)
  })

  test('lastIndexOf()', () => {
    expect(
      XEUtils.lastIndexOf([11, 22, 33, 22])
    ).toEqual(-1)
    expect(
      XEUtils.lastIndexOf([11, 22, 33, 22], 55)
    ).toEqual(-1)
    expect(
      XEUtils.lastIndexOf({ a: 1, b: 3 })
    ).toEqual(-1)
    expect(
      XEUtils.lastIndexOf({ a: 1, b: 3 }, 5)
    ).toEqual(-1)
    expect(
      XEUtils.lastIndexOf({ a: 1, b: 3 }, 1)
    ).toEqual('a')
    expect(
      XEUtils.lastIndexOf({ a: 1, b: 3 }, 3)
    ).toEqual('b')
    expect(
      XEUtils.lastIndexOf([11, 22, 33, 22], 22)
    ).toEqual(3)
    expect(
      XEUtils.lastIndexOf([11, 22, 33, 22], 33)
    ).toEqual(2)
  })

  test('arrayLastIndexOf()', () => {
    expect(
      XEUtils.arrayLastIndexOf([11, 22, 33, 22])
    ).toEqual(-1)
    expect(
      XEUtils.arrayLastIndexOf([11, 22, 33, 22], 55)
    ).toEqual(-1)
    expect(
      XEUtils.arrayLastIndexOf([11, 22, 33, 22], 22)
    ).toEqual(3)
    expect(
      XEUtils.arrayLastIndexOf([11, 22, 33, 22], 33)
    ).toEqual(2)
  })

  test('findIndexOf()', () => {
    expect(
      XEUtils.findIndexOf([11, 22, 33, 22], item => item === 55)
    ).toEqual(-1)
    expect(
      XEUtils.findIndexOf({ a: 11, b: 22, c: 33 }, item => item === 55)
    ).toEqual(-1)
    expect(
      XEUtils.findIndexOf({ a: 11, b: 22, c: 33 }, item => item === 22)
    ).toEqual('b')
    expect(
      XEUtils.findIndexOf([11, 22, 33, 22], item => item === 22)
    ).toEqual(1)
  })

  test('findLastIndexOf()', () => {
    expect(
      XEUtils.findLastIndexOf([11, 22, 33, 22], item => item === 55)
    ).toEqual(-1)
    expect(
      XEUtils.findLastIndexOf({ a: 11, b: 22, c: 33 }, item => item === 55)
    ).toEqual(-1)
    expect(
      XEUtils.findLastIndexOf({ a: 11, b: 22, c: 33 }, item => item === 22)
    ).toEqual('b')
    expect(
      XEUtils.findLastIndexOf([11, 22, 33, 22], item => item === 22)
    ).toEqual(3)
  })

  test('includes()', () => {
    expect(
      XEUtils.includes()
    ).toEqual(false)
    expect(
      XEUtils.includes(null)
    ).toEqual(false)
    expect(
      XEUtils.includes(undefined)
    ).toEqual(false)
    expect(
      XEUtils.includes(0)
    ).toEqual(false)
    expect(
      XEUtils.includes(-1)
    ).toEqual(false)
    expect(
      XEUtils.includes([11])
    ).toEqual(false)
    expect(
      XEUtils.includes({})
    ).toEqual(false)
    expect(
      XEUtils.includes([], 22)
    ).toEqual(false)
    expect(
      XEUtils.includes({}, 22)
    ).toEqual(false)
    expect(
      XEUtils.includes([11], 22)
    ).toEqual(false)
    expect(
      XEUtils.includes({ a: 11, b: 22 }, 22)
    ).toEqual(true)
    expect(
      XEUtils.includes([11, 22], 22)
    ).toEqual(true)
  })

  test('toStringJSON()', () => {
    expect(
      XEUtils.toStringJSON()
    ).toEqual({})
    expect(
      XEUtils.toStringJSON(0)
    ).toEqual({})
    expect(
      XEUtils.toStringJSON(-1)
    ).toEqual({})
    expect(
      XEUtils.toStringJSON(null)
    ).toEqual({})
    expect(
      XEUtils.toStringJSON(undefined)
    ).toEqual({})
    expect(
      XEUtils.toStringJSON('')
    ).toEqual({})
    expect(
      XEUtils.toStringJSON('{"a":1}')
    ).toEqual({ a: 1 })
    expect(
      XEUtils.toStringJSON('[11,22]')
    ).toEqual([11, 22])
  })

  test('toJSONString()', () => {
    expect(
      XEUtils.toJSONString()
    ).toEqual('')
    expect(
      XEUtils.toJSONString(null)
    ).toEqual('')
    expect(
      XEUtils.toJSONString(undefined)
    ).toEqual('')
    expect(
      XEUtils.toJSONString('')
    ).toEqual('""')
    expect(
      XEUtils.toJSONString(-1)
    ).toEqual('-1')
    expect(
      XEUtils.toJSONString(0)
    ).toEqual('0')
    expect(
      XEUtils.toJSONString([])
    ).toEqual('[]')
    expect(
      XEUtils.toJSONString({})
    ).toEqual('{}')
    expect(
      XEUtils.toJSONString({ a: 1 })
    ).toEqual('{"a":1}')
    expect(
      XEUtils.toJSONString([11, 22])
    ).toEqual('[11,22]')
  })

  test('keys()', () => {
    expect(
      XEUtils.keys()
    ).toEqual([])
    expect(
      XEUtils.keys('')
    ).toEqual([])
    expect(
      XEUtils.keys([])
    ).toEqual([])
    expect(
      XEUtils.keys(false)
    ).toEqual([])
    expect(
      XEUtils.keys({})
    ).toEqual([])
    expect(
      XEUtils.keys(-1)
    ).toEqual([])
    expect(
      XEUtils.keys(123)
    ).toEqual([])
    expect(
      XEUtils.keys({ a: 11, b: 22 })
    ).toEqual(['a', 'b'])
    expect(
      XEUtils.keys([{ a: 11 }, { a: 22 }, { a: 33 }])
    ).toEqual(['0', '1', '2'])
    expect(
      XEUtils.keys([11, 22])
    ).toEqual(['0', '1'])
    expect(
      XEUtils.keys('123')
    ).toEqual(['0', '1', '2'])
  })

  test('values()', () => {
    expect(
      XEUtils.values()
    ).toEqual([])
    expect(
      XEUtils.values('')
    ).toEqual([])
    expect(
      XEUtils.values(false)
    ).toEqual([])
    expect(
      XEUtils.values({})
    ).toEqual([])
    expect(
      XEUtils.values(-1)
    ).toEqual([])
    expect(
      XEUtils.values(123)
    ).toEqual([])
    expect(
      XEUtils.values({ a: 11, b: 22 })
    ).toEqual([11, 22])
    expect(
      XEUtils.values([{ a: 11 }, { a: 22 }, { a: 33 }])
    ).toEqual([{ a: 11 }, { a: 22 }, { a: 33 }])
    expect(
      XEUtils.values([11, 22])
    ).toEqual([11, 22])
    expect(
      XEUtils.values('123')
    ).toEqual(['1', '2', '3'])
  })

  test('entries()', () => {
    expect(
      XEUtils.entries()
    ).toEqual([])
    expect(
      XEUtils.entries(null)
    ).toEqual([])
    expect(
      XEUtils.entries(undefined)
    ).toEqual([])
    expect(
      XEUtils.entries('')
    ).toEqual([])
    expect(
      XEUtils.entries(false)
    ).toEqual([])
    expect(
      XEUtils.entries({})
    ).toEqual([])
    expect(
      XEUtils.entries(-1)
    ).toEqual([])
    expect(
      XEUtils.entries(123)
    ).toEqual([])
    expect(
      XEUtils.entries({ a: 11, b: 22 })
    ).toEqual([['a', 11], ['b', 22]])
    expect(
      XEUtils.entries([11, 22])
    ).toEqual([['0', 11], ['1', 22]])
    expect(
      XEUtils.entries('123')
    ).toEqual([['0', '1'], ['1', '2'], ['2', '3']])
  })

  test('pick()', () => {
    expect(
      XEUtils.pick({ name: 'test11', age: 25, height: 176 }, 'name')
    ).toEqual({ name: 'test11' })
    expect(
      XEUtils.pick({ name: 'test11', age: 25, height: 176 }, ['age'])
    ).toEqual({ age: 25 })
    expect(
      XEUtils.pick({ name: 'test11', age: 25, height: 176 }, val => XEUtils.isNumber(val))
    ).toEqual({ age: 25, height: 176 })

    const obj1 = { aa: 11, bb: 22, cc: 33, dd: 44 }
    expect(
      XEUtils.pick(obj1, ['cc', 'aa', 'dd'])
    ).toEqual({ cc: 33, aa: 11, dd: 44 })
    // 结果属性顺序与传入的 key 顺序保持一致
    expect(
      Object.keys(XEUtils.pick(obj1, ['cc', 'aa', 'dd']))
    ).toEqual(['cc', 'aa', 'dd'])
    expect(
      Object.keys(XEUtils.pick(obj1, ['dd', 'bb']))
    ).toEqual(['dd', 'bb'])
    // 支持多个字符串参数
    expect(
      Object.keys(XEUtils.pick(obj1, 'cc', 'aa'))
    ).toEqual(['cc', 'aa'])
    // 不存在的 key 被忽略
    expect(
      XEUtils.pick(obj1, ['zz', 'aa'])
    ).toEqual({ aa: 11 })
    expect(
      Object.keys(XEUtils.pick(obj1, ['zz', 'aa']))
    ).toEqual(['aa'])
    // 重复的 key 只保留一次
    expect(
      XEUtils.pick(obj1, ['aa', 'aa', 'bb'])
    ).toEqual({ aa: 11, bb: 22 })
    expect(
      Object.keys(XEUtils.pick(obj1, ['aa', 'aa', 'bb']))
    ).toEqual(['aa', 'bb'])
    // 边界值
    expect(
      XEUtils.pick(obj1, [])
    ).toEqual({})
    expect(
      XEUtils.pick({}, ['aa'])
    ).toEqual({})
    expect(
      XEUtils.pick(null, ['aa'])
    ).toEqual({})
    expect(
      XEUtils.pick(undefined, ['aa'])
    ).toEqual({})
    expect(
      XEUtils.pick(0, ['aa'])
    ).toEqual({})
    expect(
      XEUtils.pick(-1, ['aa'])
    ).toEqual({})
    expect(
      XEUtils.pick(1, ['aa'])
    ).toEqual({})
    expect(
      XEUtils.pick(true, ['aa'])
    ).toEqual({})
    expect(
      XEUtils.pick(false, ['aa'])
    ).toEqual({})
    // 回调函数保持源对象顺序
    expect(
      Object.keys(XEUtils.pick(obj1, (val, key) => key !== 'aa'))
    ).toEqual(['bb', 'cc', 'dd'])
  })

  test('omit()', () => {
    expect(
      XEUtils.omit({ name: 'test11', age: 25, height: 176 }, 'name', 'height')
    ).toEqual({ age: 25 })
    expect(
      XEUtils.omit({ name: 'test11', age: 25, height: 176 }, ['name', 'age'])
    ).toEqual({ height: 176 })
    expect(
      XEUtils.omit({ name: 'test11', age: 25, height: 176 }, val => XEUtils.isNumber(val))
    ).toEqual({ name: 'test11' })

    const obj1 = { aa: 11, bb: 22, cc: 33, dd: 44 }
    expect(
      XEUtils.omit(obj1, ['bb'])
    ).toEqual({ aa: 11, cc: 33, dd: 44 })
    // 排除时保持源对象顺序
    expect(
      Object.keys(XEUtils.omit(obj1, ['bb']))
    ).toEqual(['aa', 'cc', 'dd'])
    expect(
      Object.keys(XEUtils.omit(obj1, 'cc', 'aa'))
    ).toEqual(['bb', 'dd'])
    expect(
      XEUtils.omit(obj1, [])
    ).toEqual(obj1)
    expect(
      XEUtils.omit(null, ['aa'])
    ).toEqual({})
    expect(
      XEUtils.omit(undefined, ['aa'])
    ).toEqual({})
    expect(
      XEUtils.omit([], ['aa'])
    ).toEqual({})
    expect(
      XEUtils.omit({}, ['aa'])
    ).toEqual({})
    expect(
      XEUtils.omit(0, ['aa'])
    ).toEqual({})
    expect(
      XEUtils.omit(-1, ['aa'])
    ).toEqual({})
    expect(
      XEUtils.omit(1, ['aa'])
    ).toEqual({})
    expect(
      XEUtils.omit(true, ['aa'])
    ).toEqual({})
    expect(
      XEUtils.omit(false, ['aa'])
    ).toEqual({})
  })

  test('first()', () => {
    expect(
      XEUtils.first()
    ).toEqual(undefined)
    expect(
      XEUtils.first(undefined)
    ).toEqual(undefined)
    expect(
      XEUtils.first(null)
    ).toEqual(undefined)
    expect(
      XEUtils.first(123)
    ).toEqual(undefined)
    expect(
      XEUtils.first(true)
    ).toEqual(undefined)
    expect(
      XEUtils.first({})
    ).toEqual(undefined)
    expect(
      XEUtils.first([])
    ).toEqual(undefined)
    expect(
      XEUtils.first('123')
    ).toEqual('1')
    expect(
      XEUtils.first({ a: 11, b: 22 })
    ).toEqual(11)
    expect(
      XEUtils.first([11, 22])
    ).toEqual(11)
  })

  test('last()', () => {
    expect(
      XEUtils.last()
    ).toEqual(undefined)
    expect(
      XEUtils.last(undefined)
    ).toEqual(undefined)
    expect(
      XEUtils.last(null)
    ).toEqual(undefined)
    expect(
      XEUtils.last(123)
    ).toEqual(undefined)
    expect(
      XEUtils.last(true)
    ).toEqual(undefined)
    expect(
      XEUtils.last({})
    ).toEqual(undefined)
    expect(
      XEUtils.last([])
    ).toEqual(undefined)
    expect(
      XEUtils.last('123')
    ).toEqual('3')
    expect(
      XEUtils.last({ a: 11, b: 22 })
    ).toEqual(22)
    expect(
      XEUtils.last([11, 22])
    ).toEqual(22)
  })

  test('arrayEach()', () => {
    let rest = []
    XEUtils.arrayEach([11, 22, 33], (item, key, obj) => {
      rest.push([item, key])
    })
    expect(
      rest
    ).toEqual([[11, 0], [22, 1], [33, 2]])

    rest = []
    XEUtils.arrayEach([{ a: 11 }, { b: 22 }, { c: 33 }], (item, key, obj) => {
      rest.push([item, key])
    })
    expect(
      rest
    ).toEqual([[{ a: 11 }, 0], [{ b: 22 }, 1], [{ c: 33 }, 2]])
  })

  test('objectEach()', () => {
    const test1Obj = {}
    test1Obj.a = 11
    test1Obj.e = 55
    test1Obj.c = 33
    const rest1 = []
    XEUtils.objectEach(test1Obj, (val, key, obj) => {
      rest1.push([val, key])
    })
    expect(
      rest1
    ).toEqual([[11, 'a'], [55, 'e'], [33, 'c']])

    const test2Obj = Object.create(null)
    test2Obj.a = 11
    test2Obj.e = 55
    test2Obj.c = 33
    const rest2 = []
    XEUtils.objectEach(test2Obj, (val, key, obj) => {
      rest2.push([val, key])
    })
    expect(
      rest2
    ).toEqual([[11, 'a'], [55, 'e'], [33, 'c']])
  })

  test('each()', () => {
    let rest = []
    XEUtils.each([11, 22, 33], (item, key, obj) => {
      rest.push([item, key])
    })
    expect(
      rest
    ).toEqual([[11, 0], [22, 1], [33, 2]])
    rest = []
    XEUtils.each({ a: 11, b: 22, c: 33 }, (item, key, obj) => {
      rest.push([item, key])
    })
    expect(
      rest
    ).toEqual([[11, 'a'], [22, 'b'], [33, 'c']])
    rest = []
    XEUtils.each('12345', (item, key, obj) => {
      rest.push([item, key])
    })
    expect(
      rest
    ).toEqual([['1', '0'], ['2', '1'], ['3', '2'], ['4', '3'], ['5', '4']])

    const test3Obj = Object.create(null)
    test3Obj.a = 11
    test3Obj.e = 55
    test3Obj.c = 33
    rest = []
    XEUtils.each(test3Obj, (val, key, obj) => {
      rest.push([val, key])
    })
    expect(
      rest
    ).toEqual([[11, 'a'], [55, 'e'], [33, 'c']])

    const test4Map = new Map([
      [11, 'aa'],
      [22, 'bb'],
      [33, 'cc']
    ])
    rest = []
    XEUtils.each(test4Map, (val, key, obj) => {
      rest.push([val, key])
    })
    expect(
      rest
    ).toEqual([['aa', 11], ['bb', 22], ['cc', 33]])

    const test5Set = new Set(['aa', 'cc', 'aa', 'bb', 'cc', 'ee'])
    rest = []
    XEUtils.each(test5Set, (val, key, obj) => {
      rest.push(val)
    })
    expect(
      rest
    ).toEqual(['aa', 'cc', 'bb', 'ee'])
  })

  test('lastEach()', () => {
    let rest = []
    XEUtils.lastEach([11, 22, 33], (item, key, obj) => {
      rest.push([item, key])
    })
    expect(
      rest
    ).toEqual([[33, 2], [22, 1], [11, 0]])
    rest = []
    XEUtils.lastEach({ a: 11, b: 22, c: 33 }, (item, key, obj) => {
      rest.push([item, key])
    })
    expect(
      rest
    ).toEqual([[33, 'c'], [22, 'b'], [11, 'a']])
    rest = []
    XEUtils.lastEach('12345', (item, key, obj) => {
      rest.push([item, key])
    })
    expect(
      rest
    ).toEqual([['5', '4'], ['4', '3'], ['3', '2'], ['2', '1'], ['1', '0']])

    const test3Obj = Object.create(null)
    test3Obj.a = 11
    test3Obj.e = 55
    test3Obj.c = 33
    rest = []
    XEUtils.lastEach(test3Obj, (val, key, obj) => {
      rest.push([val, key])
    })
    expect(
      rest
    ).toEqual([[33, 'c'], [55, 'e'], [11, 'a']])
    const test4Map = new Map([
      [11, 'aa'],
      [22, 'bb'],
      [33, 'cc']
    ])
    rest = []
    XEUtils.lastEach(test4Map, (val, key, obj) => {
      rest.push([val, key])
    })
    expect(
      rest
    ).toEqual([['cc', 33], ['bb', 22], ['aa', 11]])

    const test5Set = new Set(['aa', 'cc', 'aa', 'bb', 'cc', 'ee'])
    rest = []
    XEUtils.lastEach(test5Set, (val, key, obj) => {
      rest.push(val)
    })
    expect(
      rest
    ).toEqual(['ee', 'bb', 'cc', 'aa'])
  })

  test('has()', () => {
    // ========== 返回 false 的场景 ==========
    // 无参 / 单参基础类型
    expect(XEUtils.has()).toEqual(false)
    expect(XEUtils.has('123')).toEqual(false)
    expect(XEUtils.has(null)).toEqual(false)
    expect(XEUtils.has(undefined)).toEqual(false)
    expect(XEUtils.has(-1)).toEqual(false)
    expect(XEUtils.has(0)).toEqual(false)
    expect(XEUtils.has({})).toEqual(false)
    expect(XEUtils.has([])).toEqual(false)
    expect(XEUtils.has(/\d/)).toEqual(false)
    expect(XEUtils.has(function () { })).toEqual(false)

    // 布尔、NaN、BigInt 等基础类型单参
    expect(XEUtils.has(true)).toEqual(false)
    expect(XEUtils.has(NaN)).toEqual(false)
    expect(XEUtils.has(1n)).toEqual(false)

    // 对象 + 无效路径（空/非法路径值）
    expect(XEUtils.has({ a: { b: 11, c: 22, d: [33, 44] } })).toEqual(false)
    expect(XEUtils.has({ a: { b: 11, c: 22, d: [33, 44] } }, null)).toEqual(false)
    expect(XEUtils.has({ a: { b: 11, c: 22, d: [33, 44] } }, undefined)).toEqual(false)
    expect(XEUtils.has({ a: { b: 11, c: 22, d: [33, 44] } }, '')).toEqual(false)
    expect(XEUtils.has({ a: { b: 11, c: 22, d: [33, 44] } }, [])).toEqual(false)

    // 非法路径类型
    expect(XEUtils.has({ a: 1 }, true)).toEqual(false)
    expect(XEUtils.has({ a: 1 }, 1.5)).toEqual(false)
    expect(XEUtils.has({ a: 1 }, () => 'a')).toEqual(false)

    // 索引越界 / 路径断链
    expect(XEUtils.has({ a: { b: 11, c: 22, d: [33, 44] } }, 'a.d[3]')).toEqual(false)
    expect(XEUtils.has({ aa: undefined }, 'aa.bb.cc')).toEqual(false)
    expect(XEUtils.has({ aa: null }, 'aa.bb.cc')).toEqual(false)
    expect(XEUtils.has({ aa: { bb: null, cc: 11 } }, 'aa.bb.cc')).toEqual(false)
    expect(XEUtils.has([0, 1, null, undefined, -1, /\d/], 6)).toEqual(false)
    expect(XEUtils.has([[[11]]], '[0][0][1]')).toEqual(false)

    // 数组边界越界、负索引
    expect(XEUtils.has([1, 2, 3], 3)).toEqual(false) // 索引等于数组长度
    expect(XEUtils.has([1, 2, 3], -1)).toEqual(false) // 负索引（默认不支持）

    // 稀疏数组空位（区别于显式 undefined）
    // eslint-disable-next-line no-sparse-arrays
    expect(XEUtils.has([1, , 3], 1)).toEqual(false)

    // 无效路径语法
    expect(XEUtils.has({ a: { b: 1 } }, 'a..b')).toEqual(false)
    expect(XEUtils.has({ a: { b: 1 } }, '.a.b')).toEqual(false)
    expect(XEUtils.has({ a: { b: 1 } }, 'a.b.')).toEqual(false)
    expect(XEUtils.has({ a: { b: 1 } }, 'a...b')).toEqual(false)
    expect(XEUtils.has({ a: { b: 1 } }, 'a[0].')).toEqual(false)

    // 原型链属性（仅判断自身属性，不沿原型链查找）
    expect(XEUtils.has({}, 'toString')).toEqual(false)
    expect(XEUtils.has([], 'push')).toEqual(false)
    expect(XEUtils.has('abc', 'trim')).toEqual(false)

    // 中间节点是基本类型时深层访问
    expect(XEUtils.has({ a: 123 }, 'a.b')).toEqual(false)
    expect(XEUtils.has(123, 'a.b')).toEqual(false)

    // ========== 返回 true 的场景 ==========
    // 值为 null/undefined 但属性自身存在
    expect(XEUtils.has({ aa: { bb: null } }, 'aa.bb')).toEqual(true)
    expect(XEUtils.has({ aa: { bb: { cc: undefined } } }, 'aa.bb.cc')).toEqual(true)

    // 字符串索引访问
    expect(XEUtils.has('abc', '[2]')).toEqual(true)
    expect(XEUtils.has('abc', [0])).toEqual(true)

    // 字符串/数组的 length 自身属性
    expect(XEUtils.has('abc', 'length')).toEqual(true)
    expect(XEUtils.has([1, 2, 3], 'length')).toEqual(true)

    // 数组索引访问
    expect(XEUtils.has([11, 22, 33], 1)).toEqual(true)
    expect(XEUtils.has([{ a: 11, b: 22 }, { a: 33, b: 44 }], 1)).toEqual(true)
    expect(XEUtils.has([{ a: 11, b: 22 }, { a: 33, b: 44 }], '[1]')).toEqual(true)
    expect(XEUtils.has([{ a: 11, b: 22 }, { a: 33, b: 44 }], '[1].b')).toEqual(true)

    // 对象单层/深层路径
    expect(XEUtils.has({ a: { b: 11, c: 22, d: [33, 44] } }, 'a')).toEqual(true)
    expect(XEUtils.has({ a: { b: 0, c: 22, d: [33, 44] } }, 'a.b')).toEqual(true)
    expect(XEUtils.has({ a: { b: 11, c: 22, d: [33, 44] }, 'a.d': 333 }, 'a.d')).toEqual(true)
    expect(XEUtils.has({ a: { c: 22, d: [33, 44] }, 'a.b': 333 }, 'a.b')).toEqual(true)
    expect(XEUtils.has({ a: { b: 11, c: 22, d: [33, 44] } }, 'a.d')).toEqual(true)
    expect(XEUtils.has({ a: { b: 11, c: 22, d: [null] } }, 'a.d[0]')).toEqual(true)
    expect(XEUtils.has({ a: { b: 11, c: 22, d: [33, { f: 66 }] } }, 'a.d[1].f')).toEqual(true)
    expect(XEUtils.has({ a: { b: 11, c: 22, d: [33, 44, 55, undefined] } }, 'a.d[3]')).toEqual(true)

    // 数组形式路径
    expect(XEUtils.has({ a: { b: 11, c: undefined, d: [33, 44] } }, ['a', 'c'])).toEqual(true)
    expect(XEUtils.has({ a: { b: 11, c: 22, d: [33, 44], e: 0 } }, ['a', 'e'])).toEqual(true)
    expect(XEUtils.has({ a: { b: [11, 22] } }, ['a', 'b', '0'])).toEqual(true)
    expect(XEUtils.has([{ a: { b: 33 } }], ['0', 'a', 'b'])).toEqual(true)

    // 数组各类值的索引存在性
    expect(XEUtils.has([0, 1, null, undefined, -1, /\d/], 0)).toEqual(true)
    expect(XEUtils.has([0, 1, null, undefined, -1, /\d/], '3')).toEqual(true)

    // 多维数组
    expect(XEUtils.has([[[11]]], '[0][0][0]')).toEqual(true)

    // 空字符串键名
    expect(XEUtils.has({ '': 123 }, '')).toEqual(true)

    // 类数组对象数字索引
    expect(XEUtils.has({ 0: 'a', 1: 'b', length: 2 }, 0)).toEqual(true)
    expect(XEUtils.has({ 0: 'a', 1: 'b', length: 2 }, '1')).toEqual(true)

    // 纯净对象（无原型链）
    const pureObj = Object.create(null)
    pureObj.key = 1
    expect(XEUtils.has(pureObj, 'key')).toEqual(true)

    // 不可枚举自身属性
    const hiddenObj = {}
    Object.defineProperty(hiddenObj, 'inner', { value: 100, enumerable: false })
    expect(XEUtils.has(hiddenObj, 'inner')).toEqual(true)

    // ===== 补充：Symbol 键 =====
    const symKey = Symbol('s')
    const symObj = {}
    symObj[symKey] = 1
    expect(XEUtils.has(symObj, symKey)).toEqual(true) // 自身 Symbol 键命中

    // ===== 补充：对象套数组套对象套数组（交替深链）=====
    const deepNest = { a: [{ b: [{ c: [10, { d: [99, 88] }] }] }] }
    expect(XEUtils.has(deepNest, 'a[0].b[0].c[1].d[0]')).toEqual(true)
    expect(XEUtils.has(deepNest, 'a[0].b[0].c[1].d')).toEqual(true) // 末段是数组本身
    expect(XEUtils.has(deepNest, 'a[0].b[0].c[1].d[5]')).toEqual(false) // 末段越界
    expect(XEUtils.has(deepNest, 'a[0].b[2].c')).toEqual(false) // 中间数组越界断链
    expect(XEUtils.has(deepNest, 'a[0].b[0].c[1].d[0].x')).toEqual(false) // 越过标量叶子
    expect(XEUtils.has(deepNest, ['a', '0', 'b', '0', 'c', '1', 'd', '0'])).toEqual(true)

    // ===== 补充：连续数组（多维）=====
    const arr3d = [[[10, 20], [30, 40]], [50]]
    expect(XEUtils.has(arr3d, '[0][0][1]')).toEqual(true)
    expect(XEUtils.has(arr3d, '[0][1][0]')).toEqual(true)
    expect(XEUtils.has(arr3d, '[1][0]')).toEqual(true)
    expect(XEUtils.has(arr3d, '[0][1][1]')).toEqual(true)
    expect(XEUtils.has(arr3d, '[1][1]')).toEqual(false)
    expect(XEUtils.has(arr3d, '[2][0]')).toEqual(false)

    // ===== 补充：连续对象（多层）=====
    const objDeep = { a: { b: { c: { d: { e: 42 } } } } }
    expect(XEUtils.has(objDeep, 'a.b.c.d.e')).toEqual(true)
    expect(XEUtils.has(objDeep, 'a.b.c.d.e.f')).toEqual(false) // 越过标量叶子
    expect(XEUtils.has(objDeep, ['a', 'b', 'c', 'd', 'e'])).toEqual(true)

    // ===== 补充：连续数组 + 连续对象交替 =====
    const mix = [[{ a: { b: [[{ c: 1 }]] } }]]
    expect(XEUtils.has(mix, '[0][0].a.b[0][0].c')).toEqual(true)
    expect(XEUtils.has(mix, '[0][0].a.b[1][0].c')).toEqual(false)
  })

  test('get()', () => {
    expect(XEUtils.get()).toEqual(undefined)
    expect(XEUtils.get('123')).toEqual(undefined)
    expect(XEUtils.get(null)).toEqual(undefined)
    expect(XEUtils.get(undefined)).toEqual(undefined)
    expect(XEUtils.get([])).toEqual(undefined)
    expect(XEUtils.get({})).toEqual(undefined)
    expect(XEUtils.get(-1)).toEqual(undefined)
    expect(XEUtils.get(0)).toEqual(undefined)
    expect(XEUtils.get(/\d/)).toEqual(undefined)
    expect(XEUtils.get(function () { })).toEqual(undefined)
    expect(XEUtils.get({ a: { b: 11, c: 22, d: [33, 44] } })).toEqual(undefined)
    expect(XEUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, null)).toEqual(undefined)
    expect(XEUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, undefined)).toEqual(undefined)
    expect(XEUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, '')).toEqual(undefined)
    expect(XEUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, [])).toEqual(undefined)
    expect(XEUtils.get('abc', '[2]')).toEqual('c')
    expect(XEUtils.get('abc', [0])).toEqual('a')
    expect(XEUtils.get([11, 22, 33], 1)).toEqual(22)
    expect(XEUtils.get([[11, 22]], '[0][1]')).toEqual(22)
    expect(XEUtils.get({ a: [[11, 22]] }, 'a[0][1]')).toEqual(22)
    expect(XEUtils.get({ a: [[11, { bb: [33, 44, 55] }]] }, 'a[0][1].bb[1]')).toEqual(44)
    expect(XEUtils.get([[[11, 22, [33, [44, 55]]]]], '[0][0][2][1][0]')).toEqual(44)
    expect(XEUtils.get({ a: [[11, 22, [33, [44, 55]]]] }, 'a[0][2][1][0]')).toEqual(44)
    expect(XEUtils.get({ a: [[11, 22, [33, [{ cc: 88 }, 55]]]] }, 'a[0][2][1][0].cc')).toEqual(88)
    expect(XEUtils.get([{ a: 11, b: 22 }, { a: 33, b: 44 }], 1)).toEqual({ a: 33, b: 44 })
    expect(XEUtils.get([{ a: 11, b: 22 }, { a: 33, b: 44 }], '[1]')).toEqual({ a: 33, b: 44 })
    expect(XEUtils.get([{ a: 11, b: 22 }, { a: 33, b: 44 }], '[1].b')).toEqual(44)
    expect(XEUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, 'a')).toEqual({ b: 11, c: 22, d: [33, 44] })
    expect(XEUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, 'a.b')).toEqual(11)
    expect(XEUtils.get({ a: { b: 11, c: 22, d: [33, 44] }, 'a.b': 333 }, 'a.b')).toEqual(333)
    expect(XEUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, 'a.d')).toEqual([33, 44])
    expect(XEUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, 'a.d[0]')).toEqual(33)
    expect(XEUtils.get({ a: { b: 11, c: 22, d: [33, { f: 66 }] } }, 'a.d[1].f')).toEqual(66)
    expect(XEUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, 'a.d[3]', '111')).toEqual('111')
    expect(XEUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, ['a', 'c'], '222')).toEqual(22)
    expect(XEUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, ['a', 'e'], '333')).toEqual('333')
    expect(XEUtils.get([0, 1, null, undefined, -1, /\d/], 0)).toEqual(0)
    expect(XEUtils.get([0, 1, null, undefined, -1, /\d/], '3')).toEqual(undefined)
    expect(XEUtils.get([0, 1, null, undefined, -1, /\d/], '5')).toEqual(/\d/)
    expect(XEUtils.get({ a: 1, b: { c: null, d: 33, cc: { f: undefined, e: 0 } } }, 'b.cc.e')).toEqual(0)
    expect(XEUtils.get({ a: 1, b: { c: null, cc: { f: undefined, e: 0 } } }, 'b.cc.f')).toEqual(undefined)

    // 默认值（defaultValue）Falsy 边界
    expect(XEUtils.get({ a: 0 }, 'a', 99)).toEqual(0)
    expect(XEUtils.get({ a: false }, 'a', 99)).toEqual(false)
    expect(XEUtils.get({ a: '' }, 'a', 99)).toEqual('')
    expect(XEUtils.get({ a: null }, 'a', 99)).toEqual(null) // null !== undefined，原样返回
    expect(XEUtils.get({}, 'missing', 0)).toEqual(0)
    expect(XEUtils.get({}, 'missing', null)).toEqual(null)

    // 特殊键名与完整键名优先匹配
    expect(XEUtils.get({ 'a.b.c': 999 }, 'a.b.c')).toEqual(999)
    expect(XEUtils.get({ 'a[0]': 888 }, 'a[0]')).toEqual(888)
    expect(XEUtils.get({ '': 'empty key' }, '')).toEqual('empty key')

    // 深层遇 null/undefined 提前终止
    expect(XEUtils.get({ a: { b: null } }, 'a.b.c', 'default')).toEqual('default')
    expect(XEUtils.get({ a: null }, 'a.b.c.d', 'default')).toEqual('default')

    // 原型链属性访问（get 支持原型链）
    function TestClass () {
      this.x = 10
    }
    TestClass.prototype.y = 20
    const instance = new TestClass()
    expect(XEUtils.get(instance, 'y')).toEqual(20)

    // 字符串索引越界
    expect(XEUtils.get('hello', '10', 'out')).toEqual('out')
    expect(XEUtils.get('hello', 10, 'out')).toEqual('out')

    // 非法空段路径 → 默认值
    expect(XEUtils.get({ a: { b: 1 } }, 'a..b', 'no')).toEqual('no')
    expect(XEUtils.get({ a: { b: 1 } }, '.a.b', 'no')).toEqual('no')
    expect(XEUtils.get({ a: { b: 1 } }, 'a.b.', 'no')).toEqual('no')

    // ===== 补充：对象套数组套对象套数组（交替深链）=====
    const deepNest = { a: [{ b: [{ c: [10, { d: [99, 88] }] }] }] }
    expect(XEUtils.get(deepNest, 'a[0].b[0].c[1].d[0]')).toEqual(99)
    expect(XEUtils.get(deepNest, 'a[0].b[0].c[1].d[1]')).toEqual(88)
    expect(XEUtils.get(deepNest, 'a[0].b[0].c[0]')).toEqual(10)
    expect(XEUtils.get(deepNest, ['a', '0', 'b', '0', 'c', '1', 'd', '0'])).toEqual(99)
    expect(XEUtils.get(deepNest, 'a[0].b[0].c[1].d[5]', 'no')).toEqual('no')
    expect(XEUtils.get(deepNest, 'a[2].b[0]', 'no')).toEqual('no')
    expect(XEUtils.get(deepNest, 'a[0].b[0].c[1].d[0].x', 'no')).toEqual('no')

    // ===== 补充：连续数组（多维）=====
    const arr3d = [[[10, 20], [30, 40]], [50]]
    expect(XEUtils.get(arr3d, '[0][0][1]')).toEqual(20)
    expect(XEUtils.get(arr3d, '[0][1][0]')).toEqual(30)
    expect(XEUtils.get(arr3d, '[1][0]')).toEqual(50)
    expect(XEUtils.get(arr3d, '[1][1]', 'no')).toEqual('no')
    expect(XEUtils.get(arr3d, '[0][0][5]', 'no')).toEqual('no')

    // ===== 补充：连续对象（多层）=====
    const objDeep = { a: { b: { c: { d: { e: 42 } } } } }
    expect(XEUtils.get(objDeep, 'a.b.c.d.e')).toEqual(42)
    expect(XEUtils.get(objDeep, 'a.b.c')).toEqual({ d: { e: 42 } })
    expect(XEUtils.get(objDeep, 'a.b.x.y', 'no')).toEqual('no')
    expect(XEUtils.get(objDeep, ['a', 'b', 'c', 'd', 'e'])).toEqual(42)

    // ===== 补充：连续数组 + 连续对象交替 =====
    const mix = [[{ a: { b: [[{ c: 1 }]] } }]]
    expect(XEUtils.get(mix, '[0][0].a.b[0][0].c')).toEqual(1)
    expect(XEUtils.get(mix, '[0][0].a.b[1][0].c', 'no')).toEqual('no')
  })

  test('set()', () => {
    expect(XEUtils.set(null)).toEqual(null)
    expect(XEUtils.set(undefined)).toEqual(undefined)
    expect(XEUtils.set('')).toEqual('')
    expect(XEUtils.set(0)).toEqual(0)
    expect(XEUtils.set(-1)).toEqual(-1)
    expect(XEUtils.set({})).toEqual({})
    expect(XEUtils.set([])).toEqual([])
    expect(XEUtils.set({ a: 11 }, null)).toEqual({ a: 11 })
    expect(XEUtils.set({}, 'a', 11)).toEqual({ a: 11 })
    expect(XEUtils.sum(XEUtils.set({ b: 22 }, 'a', 11))).toEqual(33)
    expect(XEUtils.set({}, 'a.b', 11)).toEqual({ a: { b: 11 } })
    expect(XEUtils.set({}, 'a.d[0]', 33)).toEqual({ a: { d: [33] } })
    expect(XEUtils.set({ a: [{ a: 4 }] }, 'a[1]', 33)).toEqual({ a: [{ a: 4 }, 33] })
    expect(XEUtils.set({ a: [] }, 'a[0].b', 5)).toEqual({ a: [{ b: 5 }] })
    expect(XEUtils.set({ a: [{ a: 4 }] }, 'a[0].b', 5)).toEqual({ a: [{ a: 4, b: 5 }] })
    expect(XEUtils.set({ a: {} }, 'a.d[0].f.h', 44)).toEqual({ a: { d: [{ f: { h: 44 } }] } })
    expect(XEUtils.set({}, 'a.d[0].f.h[0]', 55)).toEqual({ a: { d: [{ f: { h: [55] } }] } })
    expect(XEUtils.set({}, 'a[0][2]', 11)).toEqual({ a: [[undefined, undefined, 11]] })
    expect(XEUtils.set({ a: [0, 1, 2] }, 'a[0][2]', 11)).toEqual({ a: [[undefined, undefined, 11], 1, 2] })
    expect(XEUtils.set({ a: [[22], 1, 2] }, 'a[0][2]', 11)).toEqual({ a: [[22, undefined, 11], 1, 2] })
    expect(XEUtils.set({}, 'a[0][2].b[1]', 22)).toEqual({ a: [[undefined, undefined, { b: [undefined, 22] }]] })
    expect(XEUtils.set({}, ['a'], 11)).toEqual({ a: 11 })
    expect(XEUtils.sum(XEUtils.set({ c: 33 }, ['a'], 11))).toEqual(44)
    expect(XEUtils.set({}, ['a', 'c'], 22)).toEqual({ a: { c: 22 } })
    expect(XEUtils.set({}, ['a', 'd[0]', 'f', 'h'], 44)).toEqual({ a: { d: [{ f: { h: 44 } }] } })
    expect(XEUtils.set({ a: {} }, ['a', 'd[0]', 'f', 'h[0]'], 55)).toEqual({ a: { d: [{ f: { h: [55] } }] } })
    expect(XEUtils.set([], '[1][5][2]', 55)).toEqual([undefined, [undefined, undefined, undefined, undefined, undefined, [undefined, undefined, 55]]])

    // 原型污染防护
    const obj1 = {}
    XEUtils.set(obj1, '__proto__.attr1', 1)
    expect(obj1.attr1 === 1).toEqual(true)
    expect(({}).attr1 !== 1).toEqual(true)

    const obj2 = {}
    XEUtils.set(obj2, 'constructor', 1)
    expect(obj2.constructor !== 1).toEqual(true)

    const FN3 = function FN3 () { }
    const obj3 = new FN3()
    XEUtils.set(obj3, 'prototype.a3', 1)
    expect(obj3.a3 === 1).toEqual(true)
    const obj4 = new FN3()
    expect(obj4.a3 !== 1).toEqual(true)

    const obj5 = {}
    const val5 = () => { }
    XEUtils.set(obj5, 'aa', val5)
    expect(obj5.aa === val5).toEqual(true)

    // 返回原对象引用
    const oRef = {}
    expect(XEUtils.set(oRef, 'a', 1) === oRef).toEqual(true)

    // ===== 补充：对象套数组套对象套数组（交替深链）=====
    expect(XEUtils.set({}, 'a[0].b[1].c[0].d', 7))
      .toEqual({ a: [{ b: [undefined, { c: [{ d: 7 }] }] }] })
    expect(XEUtils.set({ a: [{ b: [{ c: [] }] }] }, 'a[0].b[0].c[2].e', 5))
      .toEqual({ a: [{ b: [{ c: [undefined, undefined, { e: 5 }] }] }] })
    expect(XEUtils.set({ a: [{ b: [{ c: [1, 2] }] }] }, 'a[0].b[0].c[1]', 99))
      .toEqual({ a: [{ b: [{ c: [1, 99] }] }] })
    expect(XEUtils.set({ a: [{ keep: 1 }] }, 'a[0].b[0]', 2))
      .toEqual({ a: [{ keep: 1, b: [2] }] })

    // ===== 补充：连续数组（多维）=====
    expect(XEUtils.set([], '[2][1][3]', 9))
      .toEqual([undefined, undefined, [undefined, [undefined, undefined, undefined, 9]]])
    expect(XEUtils.set([[1, 2]], '[0][2][1]', 7))
      .toEqual([[undefined, undefined, [undefined, 7]]])

    // ===== 补充：连续对象（多层）=====
    expect(XEUtils.set({}, 'a.b.c.d.e.f', 1))
      .toEqual({ a: { b: { c: { d: { e: { f: 1 } } } } } })
    expect(XEUtils.set({ a: { b: { keep: 1 } } }, 'a.b.c.d', 2))
      .toEqual({ a: { b: { keep: 1, c: { d: 2 } } } })

    // ===== 补充：连续数组 + 连续对象交替 =====
    expect(XEUtils.set([], '[0][1].x[2].y[0]', 3))
      .toEqual([[undefined, { x: [undefined, undefined, { y: [3] }] }]])
  })

  test('groupBy()', () => {
    expect(
      XEUtils.groupBy()
    ).toEqual({})
    expect(
      XEUtils.groupBy(null)
    ).toEqual({})
    expect(
      XEUtils.groupBy(undefined)
    ).toEqual({})
    expect(
      XEUtils.groupBy({})
    ).toEqual({})
    expect(
      XEUtils.groupBy([])
    ).toEqual({})
    expect(
      XEUtils.groupBy(/\d/)
    ).toEqual({})
    expect(
      XEUtils.groupBy(0)
    ).toEqual({})
    expect(
      XEUtils.groupBy(-1)
    ).toEqual({})
    expect(
      XEUtils.groupBy(0, -1)
    ).toEqual({})
    expect(
      XEUtils.groupBy(-1, 'type')
    ).toEqual({})
    expect(
      XEUtils.groupBy([{ type: 'a' }, { type: 'b' }], 'type')
    ).toEqual({ a: [{ type: 'a' }], b: [{ type: 'b' }] })
    expect(
      XEUtils.groupBy([{ type: 'a' }, { type: 'a' }, { type: 'b' }], 'type')
    ).toEqual({ a: [{ type: 'a' }, { type: 'a' }], b: [{ type: 'b' }] })
  })

  test('countBy()', () => {
    expect(
      XEUtils.countBy()
    ).toEqual({})
    expect(
      XEUtils.countBy(null)
    ).toEqual({})
    expect(
      XEUtils.countBy(undefined)
    ).toEqual({})
    expect(
      XEUtils.countBy({})
    ).toEqual({})
    expect(
      XEUtils.countBy([])
    ).toEqual({})
    expect(
      XEUtils.countBy(/\d/)
    ).toEqual({})
    expect(
      XEUtils.countBy(0)
    ).toEqual({})
    expect(
      XEUtils.countBy(-1)
    ).toEqual({})
    expect(
      XEUtils.countBy(0, -1)
    ).toEqual({})
    expect(
      XEUtils.countBy(-1, 'type')
    ).toEqual({})
    expect(
      XEUtils.countBy([{ type: 'a' }, { type: 'b' }], 'type')
    ).toEqual({ a: 1, b: 1 })
    expect(
      XEUtils.countBy([{ type: 'a' }, { type: 'a' }, { type: 'b' }], 'type')
    ).toEqual({ a: 2, b: 1 })
  })

  test('clone()', () => {
    expect(
      XEUtils.clone()
    ).toEqual()
    expect(
      XEUtils.clone(null)
    ).toEqual(null)
    expect(
      XEUtils.clone(undefined)
    ).toEqual(undefined)
    expect(
      XEUtils.clone([])
    ).toEqual([])
    expect(
      XEUtils.clone({})
    ).toEqual({})
    expect(
      XEUtils.clone(0)
    ).toEqual(0)
    expect(
      XEUtils.clone(-1)
    ).toEqual(-1)
    expect(
      XEUtils.clone(Object.create(null))
    ).toEqual(Object.create(null))
    expect(
      XEUtils.clone(Object.create({}))
    ).toEqual(Object.create({}))
    expect(
      XEUtils.clone(Object.create([]))
    ).toEqual(Object.create([]))
    expect(
      XEUtils.clone(/\n/)
    ).toEqual(/\n/)
    expect(
      XEUtils.clone([11, 22, { bb: 22 }])
    ).toEqual([11, 22, { bb: 22 }])
    expect(
      XEUtils.clone({ aa: 11, bb: [{ hh: 44 }] })
    ).toEqual({ aa: 11, bb: [{ hh: 44 }] })
    expect(
      XEUtils.clone(['11', /\d/])
    ).toEqual(['11', /\d/])
    expect(
      XEUtils.clone([new Date(2025, 0, 1)])
    ).toEqual([new Date(2025, 0, 1)])
    expect(
      XEUtils.clone([['112', /[0-9]/, 12], [[11, [[new Date(2025, 2, 1)], 22, [{ aa: 33 }, 44]]], { jj: 99 }], { uu: 88 }])
    ).toEqual([['112', /[0-9]/, 12], [[11, [[new Date(2025, 2, 1)], 22, [{ aa: 33 }, 44]]], { jj: 99 }], { uu: 88 }])

    const v1 = {
      num: 11,
      str: 'abc',
      obj: { b1: 22 },
      date: new Date(),
      re: /\d/,
      set: new Set([11, 22, 33]),
      map: new Map([['aa', 11], ['bb', 22], [33, 0]])
    }

    const v2 = XEUtils.clone(v1)
    expect(
      v1.num === v2.num
    ).toEqual(true)
    expect(
      v1.str === v2.str
    ).toEqual(true)
    expect(
      v1.obj === v2.obj
    ).toEqual(true)
    expect(
      v1.date === v2.date
    ).toEqual(true)
    expect(
      v1.re === v2.re
    ).toEqual(true)
    expect(
      v1.set === v2.set
    ).toEqual(true)
    expect(
      v1.map === v2.map
    ).toEqual(true)

    const v3 = XEUtils.clone(v1, true)
    expect(
      v1.num === v3.num
    ).toEqual(true)
    expect(
      v1.str === v3.str
    ).toEqual(true)
    expect(
      v1.obj === v3.obj
    ).toEqual(false)
    expect(
      v1.date === v3.date
    ).toEqual(false)
    expect(
      v1.re === v3.re
    ).toEqual(false)
    expect(
      v1.set === v3.set
    ).toEqual(false)
    expect(
      v1.map === v3.map
    ).toEqual(false)

    function Func1 () {
      this.hhh = 22
    }
    Func1.prototype.val = 11

    const f1 = new Func1()
    const f2 = XEUtils.clone(f1, true)

    class Demo1 {
      constructor () {
        this.name = 1
      }
    }
    const d1 = new Demo1()
    const d2 = XEUtils.clone(d1, true)
    expect(
      d2 instanceof Demo1
    ).toEqual(true)
    expect(d2.name).toEqual(1)
    expect(
      d1.name === d2.name
    ).toEqual(true)
    expect(
      d1 === d2
    ).toEqual(false)

    class Test1 {
      constructor (name) {
        this.name = name
      }
    }
    const t1 = new Test1(123)
    const t2 = XEUtils.clone(t1, true)
    expect(
      t2 instanceof Test1
    ).toEqual(true)
    expect(t2.name).toEqual(123)
    expect(
      t1.name === t2.name
    ).toEqual(true)
    expect(
      t1 === t2
    ).toEqual(false)
  })

  test('clear()', () => {
    expect(
      XEUtils.clear()
    ).toEqual()
    expect(
      XEUtils.clear(null)
    ).toEqual(null)
    expect(
      XEUtils.clear(undefined)
    ).toEqual(undefined)
    expect(
      XEUtils.clear({})
    ).toEqual({})
    expect(
      XEUtils.clear([])
    ).toEqual([])
    expect(
      XEUtils.clear(/\d/)
    ).toEqual(/\d/)
    expect(
      XEUtils.clear(0)
    ).toEqual(0)
    expect(
      XEUtils.clear(-1)
    ).toEqual(-1)
    expect(
      XEUtils.clear([11, 22, 33, 33])
    ).toEqual([])
    expect(
      XEUtils.clear([11, 22, 33, 33], undefined)
    ).toEqual([undefined, undefined, undefined, undefined])
    expect(
      XEUtils.clear([11, 22, 33, 33], null)
    ).toEqual([null, null, null, null])
    expect(
      XEUtils.clear({ b1: 11, b2: 22 })
    ).toEqual({})
    expect(
      XEUtils.clear({ b1: 11, b2: 22 }, undefined)
    ).toEqual({ b1: undefined, b2: undefined })
    expect(
      XEUtils.clear({ b1: 11, b2: 22 }, null)
    ).toEqual({ b1: null, b2: null })

    class MyTest {
      constructor () {
        this.abc = 1
      }
    }
    const test1 = [new MyTest()]
    const test2 = XEUtils.clone(test1)
    const test3 = XEUtils.clone(test1, true)
    test1[0].abc = null
    expect(test1[0] === test2[0]).toEqual(true)
    expect(test1[0].abc === test2[0].abc).toEqual(true)
    expect(test1[0] === test3[0]).toEqual(false)
    expect(test1[0].abc === test3[0].abc).toEqual(false)
  })

  test('remove()', () => {
    let list = [11, 22, 33, 44]
    XEUtils.remove(list)
    expect(list).toEqual([])

    list = [11, 22, 33, 44]
    XEUtils.remove(list, 2)
    expect(list).toEqual([11, 22, 44])

    list = [11, 22, 33, 44]
    XEUtils.remove(list, '2')
    expect(list).toEqual([11, 22, 33, 44])

    list = [11, 22, 33, 44]
    XEUtils.remove(list, item => item === 22)
    expect(list).toEqual([11, 33, 44])

    let obj = { a: 11, b: 22, c: 33 }
    XEUtils.remove(obj)
    expect(obj).toEqual({})

    obj = { a: 11, b: 22, c: 33 }
    XEUtils.remove(obj, item => item === 22)
    expect(obj).toEqual({ a: 11, c: 33 })

    obj = { a: 11, b: 22, c: 33 }
    XEUtils.remove(obj, 'c')
    expect(obj).toEqual({ a: 11, b: 22 })

    obj = { a: 11, b: 22, c: 33, 2: 33 }
    XEUtils.remove(obj, 2)
    expect(obj).toEqual({ a: 11, b: 22, c: 33, 2: 33 })
  })

  test('range()', () => {
    expect(
      XEUtils.range()
    ).toEqual([])
    expect(
      XEUtils.range(null)
    ).toEqual([])
    expect(
      XEUtils.range(undefined)
    ).toEqual([])
    expect(
      XEUtils.range({})
    ).toEqual([])
    expect(
      XEUtils.range([])
    ).toEqual([])
    expect(
      XEUtils.range(/\d/)
    ).toEqual([])
    expect(
      XEUtils.range(-5)
    ).toEqual([])
    expect(
      XEUtils.range(0)
    ).toEqual([])
    expect(
      XEUtils.range(10)
    ).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(
      XEUtils.range(-5, 5)
    ).toEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4])
    expect(
      XEUtils.range(0, 10, 0)
    ).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(
      XEUtils.range(0, 10, 2)
    ).toEqual([0, 2, 4, 6, 8])
    expect(
      XEUtils.range(1, 50, 10)
    ).toEqual([1, 11, 21, 31, 41])
  })

  test('destructuring()', () => {
    expect(
      XEUtils.destructuring()
    ).toEqual(undefined)
    expect(
      XEUtils.destructuring(undefined)
    ).toEqual(undefined)
    expect(
      XEUtils.destructuring(null)
    ).toEqual(null)
    expect(
      XEUtils.destructuring({})
    ).toEqual({})
    expect(
      XEUtils.destructuring([])
    ).toEqual([])
    expect(
      XEUtils.destructuring(/\d/)
    ).toEqual(/\d/)
    expect(
      XEUtils.destructuring(true)
    ).toEqual(true)
    expect(
      XEUtils.destructuring(0)
    ).toEqual(0)
    expect(
      XEUtils.destructuring(-1)
    ).toEqual(-1)
    expect(
      XEUtils.destructuring(null, { a: 11, b: 22, c: 33 })
    ).toEqual(null)
    expect(
      XEUtils.destructuring({}, { a: 11, b: 22, c: 33 })
    ).toEqual({})
    expect(
      XEUtils.destructuring({ a: null }, { a: 11, b: 22, c: 33 })
    ).toEqual({ a: 11 })
    expect(
      XEUtils.destructuring({ a: 11, d: 44 }, { a: 11, b: 22, c: 33 })
    ).toEqual({ a: 11, d: 44 })
    expect(
      XEUtils.destructuring({ a: 11, c: 33, d: 44 }, { a: 11, b: 22, c: null, e: 55, f: 66 })
    ).toEqual({ a: 11, c: null, d: 44 })
  })
})
