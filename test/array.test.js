const XEUtils = require('../func')

describe('Array functions', () => {
  test('uniq()', () => {
    expect(
      XEUtils.uniq()
    ).toEqual([])
    expect(
      XEUtils.uniq(null)
    ).toEqual([])
    expect(
      XEUtils.uniq(undefined)
    ).toEqual([])
    expect(
      XEUtils.uniq(-1)
    ).toEqual([])
    expect(
      XEUtils.uniq(123)
    ).toEqual([])
    expect(
      XEUtils.uniq('')
    ).toEqual([])
    expect(
      XEUtils.uniq(/\d/)
    ).toEqual([])
    expect(
      XEUtils.uniq([])
    ).toEqual([])
    expect(
      XEUtils.uniq({})
    ).toEqual([])
    expect(
      XEUtils.uniq(function () { })
    ).toEqual([])
    expect(
      XEUtils.uniq('abcb')
    ).toEqual(['a', 'b', 'c'])
    expect(
      XEUtils.uniq([11, 22, 33, 33, 22, '22'])
    ).toEqual([11, 22, 33, '22'])
    expect(
      XEUtils.uniq([11, 22, 33, 33, 22, 55])
    ).toEqual([11, 22, 33, 55])
    expect(
      XEUtils.uniq([11, 33, 33, { a: 11 }, { a: 11 }])
    ).toEqual([11, 33, { a: 11 }, { a: 11 }])
    let a1 = { a: 11 }
    expect(
      XEUtils.uniq([11, 33, 33, a1, a1])
    ).toEqual([11, 33, { a: 11 }])
  })

  test('union()', () => {
    expect(
      XEUtils.union()
    ).toEqual([])
    expect(
      XEUtils.union(0)
    ).toEqual([])
    expect(
      XEUtils.union(-1)
    ).toEqual([])
    expect(
      XEUtils.union(undefined)
    ).toEqual([])
    expect(
      XEUtils.union(null)
    ).toEqual([])
    expect(
      XEUtils.union('')
    ).toEqual([])
    expect(
      XEUtils.union(/\d/)
    ).toEqual([])
    expect(
      XEUtils.union({})
    ).toEqual([])
    expect(
      XEUtils.union([])
    ).toEqual([])
    expect(
      XEUtils.union(function () { })
    ).toEqual([])
    expect(
      XEUtils.union([11, 22, 44, 11])
    ).toEqual([11, 22, 44])
    expect(
      XEUtils.union([11, 22, 44, 11], [11, 44])
    ).toEqual([11, 22, 44])
    expect(
      XEUtils.union([11, 22], [33, 22], [44, 11])
    ).toEqual([11, 22, 33, 44])
  })

  test('slice()', () => {
    expect(
      XEUtils.slice(0)
    ).toEqual([])
    expect(
      XEUtils.slice(-1)
    ).toEqual([])
    expect(
      XEUtils.slice(123)
    ).toEqual([])
    expect(
      XEUtils.slice(false)
    ).toEqual([])
    expect(
      XEUtils.slice('')
    ).toEqual([])
    expect(
      XEUtils.slice(/\d/)
    ).toEqual([])
    expect(
      XEUtils.slice({})
    ).toEqual([])
    expect(
      XEUtils.slice([])
    ).toEqual([])
    expect(
      XEUtils.slice(function () { })
    ).toEqual([])
    expect(
      XEUtils.slice([11, 22])
    ).toEqual([11, 22])
    expect(
      XEUtils.slice([11, 22, 33, 44], 0)
    ).toEqual([11, 22, 33, 44])
    expect(
      XEUtils.slice([11, 22, 33, 44], 0, 0)
    ).toEqual([])
    expect(
      XEUtils.slice([11, 22, 33, 44], 1)
    ).toEqual([22, 33, 44])
    expect(
      XEUtils.slice([11, 22, 33, 44], 1, 3)
    ).toEqual([22, 33])
    expect(
      XEUtils.slice([11, 22, 33, 44], 0, 1)
    ).toEqual([11])
    let method = function () {
      expect(
        XEUtils.slice(arguments, 1, 3)
      ).toEqual([22, 33])
    }
    method(11, 22, 33, 44)
  })

  test('orderBy()', () => {
    expect(
      XEUtils.orderBy()
    ).toEqual([])
    expect(
      XEUtils.orderBy(null)
    ).toEqual([])
    expect(
      XEUtils.orderBy(undefined)
    ).toEqual([])
    expect(
      XEUtils.orderBy({})
    ).toEqual([])
    expect(
      XEUtils.orderBy(-1)
    ).toEqual([])
    expect(
      XEUtils.orderBy(0)
    ).toEqual([])
    expect(
      XEUtils.orderBy(123)
    ).toEqual([])
    expect(
      XEUtils.orderBy('')
    ).toEqual([])
    expect(
      XEUtils.orderBy(/\d/)
    ).toEqual([])
    expect(
      XEUtils.orderBy(function () { })
    ).toEqual([])
    expect(
      XEUtils.orderBy('abc')
    ).toEqual(['a', 'b', 'c'])
    expect(
      XEUtils.orderBy(['b', 'j', 'a', 'c'])
    ).toEqual(['a', 'b', 'c', 'j'])
    expect(
      XEUtils.orderBy([11, 55, 99, 22, 9, 1, 10])
    ).toEqual([1, 9, 10, 11, 22, 55, 99])
    expect(
      XEUtils.orderBy([11, 55, 99, 77, 11, 55, 22, 10, 9, 111], [])
    ).toEqual([11, 55, 99, 77, 11, 55, 22, 10, 9, 111])
    expect(
      XEUtils.orderBy([120, 103, 10, 13, 22, 23, 24, 33, 55, 8, 9, 30, 40, 90, 99, 88, 77, 0, 1, 2, 3, 11, 12, 4, 5, 6, 7, 66, 44, 77, 100])
    ).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 22, 23, 24, 30, 33, 40, 44, 55, 66, 77, 77, 88, 90, 99, 100, 103, 120])
    expect(
      XEUtils.orderBy(['11', '55', '99', '77', '11', '55', '22', '0', '9'])
    ).toEqual(['0', '11', '11', '22', '55', '55', '77', '9', '99'])
    expect(
      XEUtils.orderBy(['x', 'z', 'g', 'q', 'e', 'b', 'a', 'g', 'f', 'c', 'j'])
    ).toEqual(['a', 'b', 'c', 'e', 'f', 'g', 'g', 'j', 'q', 'x', 'z'])
    expect(
      XEUtils.orderBy([null, 'a', 'g', null, null, 'c', 'j'])
    ).toEqual(['a', 'c', 'g', 'j', null, null, null])
    expect(
      XEUtils.orderBy([null, 'a', 'g', null, undefined, null, 'c', undefined, 0, 'j'])
    ).toEqual([0, 'a', 'c', 'g', 'j', null, null, null, undefined, undefined])
    expect(
      XEUtils.orderBy([{ a: null }, { a: 'g' }, { a: undefined }, { a: 'a' }, { a: null }, { a: null }, { a: 'j' }, { a: 'c' }], 'a')
    ).toEqual([{ a: 'a' }, { a: 'c' }, { a: 'g' }, { a: 'j' }, { a: null }, { a: null }, { a: null }, { a: undefined }])
    expect(
      XEUtils.orderBy([{ age: 27 }, { age: 26 }, { age: 28 }], 'age')
    ).toEqual([{ age: 26 }, { age: 27 }, { age: 28 }])
    expect(
      XEUtils.orderBy([{ age: 27 }, { age: 26 }, { age: 28 }], ['age'])
    ).toEqual([{ age: 26 }, { age: 27 }, { age: 28 }])
    expect(
      XEUtils.orderBy([{ a: { b: 66 } }, { a: { b: 33 } }, { a: { b: 11 } }], 'a.b')
    ).toEqual([{ a: { b: 11 } }, { a: { b: 33 } }, { a: { b: 66 } }])
    expect(
      XEUtils.orderBy([{ a: { b: 66 } }, { a: { b: 33 } }, { a: { b: 11 } }], ['a.b'])
    ).toEqual([{ a: { b: 11 } }, { a: { b: 33 } }, { a: { b: 66 } }])
    expect(
      XEUtils.orderBy([{ a: { b: 66 }, c: 6 }, { a: { b: 33 }, c: 9 }, { a: { b: 11 }, c: 6 }], ['c', 'a.b'])
    ).toEqual([{ a: { b: 11 }, c: 6 }, { a: { b: 66 }, c: 6 }, { a: { b: 33 }, c: 9 }])
    expect(
      XEUtils.orderBy([{ age: 27 }, { age: 26 }, { age: 28 }], item => item.age)
    ).toEqual([{ age: 26 }, { age: 27 }, { age: 28 }])
    expect(
      XEUtils.orderBy([{ name: 'x' }, { name: 'l' }, { name: 'a' }], [item => item.name])
    ).toEqual([{ name: 'a' }, { name: 'l' }, { name: 'x' }])
    expect(
      XEUtils.orderBy([
        { name: 'x', age: 25 },
        { name: 'd', age: 27 },
        { name: 'z', age: 27 },
        { name: 'x', age: 24 },
        { name: 'x', age: 26 },
        { name: 'z', age: 26 }
      ], ['name', 'age'])
    ).toEqual([
      { name: 'd', age: 27 },
      { name: 'x', age: 24 },
      { name: 'x', age: 25 },
      { name: 'x', age: 26 },
      { name: 'z', age: 26 },
      { name: 'z', age: 27 }
    ])
    expect(
      XEUtils.orderBy([
        { name: 'x', age: 26 },
        { name: 'd', age: 27 },
        { name: 'z', age: 26 },
        { name: 'z', age: 26 }
      ], ['age', 'name'])
    ).toEqual([
      { name: 'x', age: 26 },
      { name: 'z', age: 26 },
      { name: 'z', age: 26 },
      { name: 'd', age: 27 }
    ])
    expect(
      XEUtils.orderBy([
        { name: 'x', age: 26 },
        { name: 'd', age: 27 },
        { name: 'x', age: 26 },
        { name: 'z', age: 26 }
      ], [item => item.name, item => item.age])
    ).toEqual([
      { name: 'd', age: 27 },
      { name: 'x', age: 26 },
      { name: 'x', age: 26 },
      { name: 'z', age: 26 }
    ])
    expect(
      XEUtils.orderBy([
        { name: 'x', age: 26 },
        { name: 'd', age: 27 },
        { name: 'z', age: 26 },
        { name: 'z', age: 26 }]
        , ['age', item => item.name])
    ).toEqual([
      { name: 'x', age: 26 },
      { name: 'z', age: 26 },
      { name: 'z', age: 26 },
      { name: 'd', age: 27 }
    ])
    expect(
      XEUtils.orderBy([
        { name: 'x', age: 26, height: 176 },
        { name: 'd', age: 27, height: 176 },
        { name: 'z', age: 26, height: 178 },
        { name: 'z', age: 26, height: 176 },
        { name: 'd', age: 27, height: 175 }
      ], ['name', 'age', 'height'])
    ).toEqual([
      { name: 'd', age: 27, height: 175 },
      { name: 'd', age: 27, height: 176 },
      { name: 'x', age: 26, height: 176 },
      { name: 'z', age: 26, height: 176 },
      { name: 'z', age: 26, height: 178 }
    ])
    expect(
      XEUtils.orderBy([
        { name: 'x', age: 26, height: 176 },
        { name: 'd', age: 27, height: 176 },
        { name: 'z', age: 26, height: 178 },
        { name: 'z', age: 26, height: 176 },
        { name: 'd', age: 27, height: 175 }
      ], [['name'], ['age'], ['height']])
    ).toEqual([
      { name: 'd', age: 27, height: 175 },
      { name: 'd', age: 27, height: 176 },
      { name: 'x', age: 26, height: 176 },
      { name: 'z', age: 26, height: 176 },
      { name: 'z', age: 26, height: 178 }
    ])
    expect(
      XEUtils.orderBy([
        { name: 'x', age: 26, height: 176 },
        { name: 'd', age: 27, height: 176 },
        { name: 'z', age: 26, height: 178 },
        { name: 'z', age: 26, height: 176 },
        { name: 'x', age: 30, height: 176 },
        { name: 'd', age: 27, height: 175 },
        { name: 'd', age: 21, height: 165 },
        { name: 'x', age: 22, height: 196 }
      ], [{ field: 'name', order: 'asc' }, { field: 'age', order: 'asc' }, { field: 'height', order: 'asc' }])
    ).toEqual([
      { name: 'd', age: 21, height: 165 },
      { name: 'd', age: 27, height: 175 },
      { name: 'd', age: 27, height: 176 },
      { name: 'x', age: 22, height: 196 },
      { name: 'x', age: 26, height: 176 },
      { name: 'x', age: 30, height: 176 },
      { name: 'z', age: 26, height: 176 },
      { name: 'z', age: 26, height: 178 }
    ])
    expect(
      XEUtils.orderBy([
        { name: 'x', age: 26, height: 176 },
        { name: 'd', age: 27, height: 176 },
        { name: 'z', age: 26, height: 178 },
        { name: 'z', age: 26, height: 176 },
        { name: 'x', age: 30, height: 176 },
        { name: 'd', age: 27, height: 175 },
        { name: 'd', age: 21, height: 165 },
        { name: 'x', age: 22, height: 196 }
      ], [['name', 'asc'], ['age', 'desc']])
    ).toEqual([
      { name: 'd', age: 27, height: 176 },
      { name: 'd', age: 27, height: 175 },
      { name: 'd', age: 21, height: 165 },
      { name: 'x', age: 30, height: 176 },
      { name: 'x', age: 26, height: 176 },
      { name: 'x', age: 22, height: 196 },
      { name: 'z', age: 26, height: 178 },
      { name: 'z', age: 26, height: 176 }
    ])
    expect(
      XEUtils.orderBy([
        { name: 'x', age: 26, height: 176 },
        { name: 'd', age: 27, height: 176 },
        { name: 'z', age: 26, height: 178 },
        { name: 'z', age: 26, height: 176 },
        { name: 'x', age: 30, height: 176 },
        { name: 'd', age: 27, height: 175 },
        { name: 'd', age: 21, height: 165 },
        { name: 'x', age: 22, height: 196 }
      ], [{ field: 'name', order: 'asc' }, { field: 'age', order: 'desc' }, { field: 'height', order: 'asc' }])
    ).toEqual([
      { name: 'd', age: 27, height: 175 },
      { name: 'd', age: 27, height: 176 },
      { name: 'd', age: 21, height: 165 },
      { name: 'x', age: 30, height: 176 },
      { name: 'x', age: 26, height: 176 },
      { name: 'x', age: 22, height: 196 },
      { name: 'z', age: 26, height: 176 },
      { name: 'z', age: 26, height: 178 }
    ])
    expect(
      XEUtils.orderBy([
        { name: 'x', age: 26, height: 176 },
        { name: 'd', age: 27, height: 176 },
        { name: 'z', age: 26, height: 178 },
        { name: 'z', age: 26, height: 176 },
        { name: 'x', age: 30, height: 176 },
        { name: 'd', age: 27, height: 175 },
        { name: 'd', age: 21, height: 165 },
        { name: 'x', age: 22, height: 196 }
      ], [['name', 'asc'], ['age', 'desc'], ['height', 'desc']])
    ).toEqual([
      { name: 'd', age: 27, height: 176 },
      { name: 'd', age: 27, height: 175 },
      { name: 'd', age: 21, height: 165 },
      { name: 'x', age: 30, height: 176 },
      { name: 'x', age: 26, height: 176 },
      { name: 'x', age: 22, height: 196 },
      { name: 'z', age: 26, height: 178 },
      { name: 'z', age: 26, height: 176 }
    ])
  })

  test('shuffle()', () => {
    expect(
      XEUtils.shuffle()
    ).toEqual([])
    expect(
      XEUtils.shuffle(null)
    ).toEqual([])
    expect(
      XEUtils.shuffle(undefined)
    ).toEqual([])
    expect(
      XEUtils.shuffle('')
    ).toEqual([])
    expect(
      XEUtils.shuffle(/\d/)
    ).toEqual([])
    expect(
      XEUtils.shuffle(0)
    ).toEqual([])
    expect(
      XEUtils.shuffle(-1)
    ).toEqual([])
    expect(
      XEUtils.shuffle(333)
    ).toEqual([])
    expect(
      XEUtils.shuffle(function () { })
    ).toEqual([])
    expect(
      XEUtils.shuffle([])
    ).toEqual([])
    expect(
      XEUtils.shuffle('abc').length
    ).toEqual(3)
    expect(
      XEUtils.shuffle([11, '22', 33, '44']).length
    ).toEqual(4)
    expect(
      XEUtils.shuffle([11, 22, 33, 44, 55]).length
    ).toEqual(5)
    expect(
      XEUtils.shuffle([{ a: 11 }, { b: 22 }, { c: 33 }]).length
    ).toEqual(3)
  })

  test('sample()', () => {
    expect(
      XEUtils.sample()
    ).toEqual(undefined)
    expect(
      XEUtils.sample(null)
    ).toEqual(undefined)
    expect(
      XEUtils.sample(undefined)
    ).toEqual(undefined)
    expect(
      XEUtils.sample({})
    ).toEqual(undefined)
    expect(
      XEUtils.sample(-1)
    ).toEqual(undefined)
    expect(
      XEUtils.sample(0)
    ).toEqual(undefined)
    expect(
      XEUtils.sample(456)
    ).toEqual(undefined)
    expect(
      XEUtils.sample([])
    ).toEqual(undefined)
    expect(
      XEUtils.sample(0)
    ).toEqual(undefined)
    expect(
      XEUtils.sample(function () { })
    ).toEqual(undefined)
    expect(
      XEUtils.sample(null, 4)
    ).toEqual([])
    expect(
      XEUtils.sample(undefined, 2)
    ).toEqual([])
    expect(
      XEUtils.sample([], undefined)
    ).toEqual([])
    expect(
      XEUtils.sample([], null)
    ).toEqual([])
    expect(
      XEUtils.sample({}, 2)
    ).toEqual([])
    expect(
      XEUtils.sample(-1, 3)
    ).toEqual([])
    expect(
      XEUtils.sample([], 2)
    ).toEqual([])
    expect(
      ['a', 'b', 'c'].includes(XEUtils.sample('abc'))
    ).toEqual(true)
    expect(
      XEUtils.sample('abc', 2).length
    ).toEqual(2)
    expect(
      [11, 22, 33, 44, 55].includes(XEUtils.sample([11, 22, 33, 44, 55]))
    ).toEqual(true)
    expect(
      XEUtils.sample([11, 22, 33, 44, 55], 2).length
    ).toEqual(2)
    expect(
      XEUtils.sample([11, 22, 33, 44, 55], 3).length
    ).toEqual(3)
  })

  test('some()', () => {
    expect(
      XEUtils.some()
    ).toEqual(false)
    expect(
      XEUtils.some(null)
    ).toEqual(false)
    expect(
      XEUtils.some(undefined)
    ).toEqual(false)
    expect(
      XEUtils.some({})
    ).toEqual(false)
    expect(
      XEUtils.some(/\d/)
    ).toEqual(false)
    expect(
      XEUtils.some(0)
    ).toEqual(false)
    expect(
      XEUtils.some(-1)
    ).toEqual(false)
    expect(
      XEUtils.some(123)
    ).toEqual(false)
    expect(
      XEUtils.some([])
    ).toEqual(false)
    expect(
      XEUtils.some('abc')
    ).toEqual(false)
    expect(
      XEUtils.some([{ value: 11 }, { value: 22 }], item => item.value === 55)
    ).toEqual(false)
    expect(
      XEUtils.some({ a: 11, b: 22, c: 33 }, item => item === 44)
    ).toEqual(false)
    expect(
      XEUtils.some(['a', 1, {}, 'b'], item => XEUtils.isString(item))
    ).toEqual(true)
    expect(
      XEUtils.some({ a: 11, b: 22, c: 33 }, item => item === 22)
    ).toEqual(true)
    expect(
      XEUtils.some('abc', item => item === 'b')
    ).toEqual(true)
    expect(
      XEUtils.some([{ value: 11 }, { value: 22 }], item => item.value > 10)
    ).toEqual(true)
  })

  test('every()', () => {
    expect(
      XEUtils.every()
    ).toEqual(true)
    expect(
      XEUtils.every(null)
    ).toEqual(true)
    expect(
      XEUtils.every(undefined)
    ).toEqual(true)
    expect(
      XEUtils.every({})
    ).toEqual(true)
    expect(
      XEUtils.every(/\W/)
    ).toEqual(true)
    expect(
      XEUtils.every(0)
    ).toEqual(true)
    expect(
      XEUtils.every(-1)
    ).toEqual(true)
    expect(
      XEUtils.every(123)
    ).toEqual(true)
    expect(
      XEUtils.every([])
    ).toEqual(true)
    expect(
      XEUtils.every(function () { })
    ).toEqual(true)
    expect(
      XEUtils.every('')
    ).toEqual(true)
    expect(
      XEUtils.every('abc')
    ).toEqual(true)
    expect(
      XEUtils.every('abc', item => XEUtils.isString(item))
    ).toEqual(true)
    expect(
      XEUtils.every([{ value: 11 }, { value: 22 }], item => item.value >= 11)
    ).toEqual(true)
    expect(
      XEUtils.every(['a', 1, {}, 'b'], item => XEUtils.isString(item))
    ).toEqual(false)
    expect(
      XEUtils.every([{ value: 11 }, { value: 22 }], item => item.value === 11)
    ).toEqual(false)
  })

  test('filter()', () => {
    expect(
      XEUtils.filter()
    ).toEqual([])
    expect(
      XEUtils.filter(null)
    ).toEqual([])
    expect(
      XEUtils.filter(undefined)
    ).toEqual([])
    expect(
      XEUtils.filter({})
    ).toEqual([])
    expect(
      XEUtils.filter(0)
    ).toEqual([])
    expect(
      XEUtils.filter(-1)
    ).toEqual([])
    expect(
      XEUtils.filter(123)
    ).toEqual([])
    expect(
      XEUtils.filter([])
    ).toEqual([])
    expect(
      XEUtils.filter(/\s/)
    ).toEqual([])
    expect(
      XEUtils.filter('')
    ).toEqual([])
    expect(
      XEUtils.filter('abc')
    ).toEqual([])
    expect(
      XEUtils.filter(function () { })
    ).toEqual([])
    expect(
      XEUtils.filter({ a: 11, b: 22 }, item => item > 22)
    ).toEqual([])
    expect(
      XEUtils.filter('abc', item => ['b', 'c'].includes(item))
    ).toEqual(['b', 'c'])
    expect(
      XEUtils.filter({ a: 11, b: 22 }, item => item > 11)
    ).toEqual([22])
    expect(
      XEUtils.filter([{ value: 11 }, { value: 22 }], item => item.value > 33)
    ).toEqual([])
    expect(
      XEUtils.filter([{ value: 11 }, { value: 22 }], item => item.value > 11)
    ).toEqual([{ value: 22 }])
  })

  test('find()', () => {
    expect(
      XEUtils.find()
    ).toEqual(undefined)
    expect(
      XEUtils.find(null)
    ).toEqual(undefined)
    expect(
      XEUtils.find(undefined)
    ).toEqual(undefined)
    expect(
      XEUtils.find(0)
    ).toEqual(undefined)
    expect(
      XEUtils.find(-1)
    ).toEqual(undefined)
    expect(
      XEUtils.find(123)
    ).toEqual(undefined)
    expect(
      XEUtils.find('')
    ).toEqual(undefined)
    expect(
      XEUtils.find('abc')
    ).toEqual(undefined)
    expect(
      XEUtils.find({})
    ).toEqual(undefined)
    expect(
      XEUtils.find([])
    ).toEqual(undefined)
    expect(
      XEUtils.find(function () { })
    ).toEqual(undefined)
    expect(
      XEUtils.find({ a: 11, b: 22, c: 33, d: 11 }, item => item > 15)
    ).toEqual(22)
    expect(
      XEUtils.find([{ value: 11 }, { value: 22 }], item => item.value === 66)
    ).toEqual(undefined)
    expect(
      XEUtils.find([{ value: 11 }, { value: 22 }], item => item.value === 22)
    ).toEqual({ value: 22 })
  })

  test('findLast()', () => {
    expect(
      XEUtils.findLast()
    ).toEqual(undefined)
    expect(
      XEUtils.findLast(null)
    ).toEqual(undefined)
    expect(
      XEUtils.findLast(undefined)
    ).toEqual(undefined)
    expect(
      XEUtils.findLast(0)
    ).toEqual(undefined)
    expect(
      XEUtils.findLast(-1)
    ).toEqual(undefined)
    expect(
      XEUtils.findLast(123)
    ).toEqual(undefined)
    expect(
      XEUtils.findLast('')
    ).toEqual(undefined)
    expect(
      XEUtils.find('abc')
    ).toEqual(undefined)
    expect(
      XEUtils.findLast({})
    ).toEqual(undefined)
    expect(
      XEUtils.findLast([])
    ).toEqual(undefined)
    expect(
      XEUtils.findLast(function () { })
    ).toEqual(undefined)
    expect(
      XEUtils.findLast({ a: 11, b: 22, c: 33, d: 12 }, item => item > 15)
    ).toEqual(33)
    expect(
      XEUtils.findLast({ a: 11, b: 22, c: 33, d: 12 }, item => item > 15)
    ).toEqual(33)
    expect(
      XEUtils.findLast({ a: 11, b: 22, c: 33, d: 12 }, item => item > 99)
    ).toEqual(undefined)
    expect(
      XEUtils.findLast([{ value: 11 }, { value: 22 }], item => item.value === 66)
    ).toEqual(undefined)
    expect(
      XEUtils.findLast([{ a: 11, value: 22 }, { a: 22, value: 11 }, { a: 33, value: 22 }], item => item.value === 22)
    ).toEqual({ a: 33, value: 22 })
  })

  test('findKey()', () => {
    expect(
      XEUtils.findKey()
    ).toEqual(undefined)
    expect(
      XEUtils.findKey([])
    ).toEqual(undefined)
    expect(
      XEUtils.findKey()
    ).toEqual(undefined)
    expect(
      XEUtils.findKey(null)
    ).toEqual(undefined)
    expect(
      XEUtils.findKey(undefined)
    ).toEqual(undefined)
    expect(
      XEUtils.findKey(0)
    ).toEqual(undefined)
    expect(
      XEUtils.findKey(-1)
    ).toEqual(undefined)
    expect(
      XEUtils.findKey(123)
    ).toEqual(undefined)
    expect(
      XEUtils.findKey(/\D/)
    ).toEqual(undefined)
    expect(
      XEUtils.findKey(function () { })
    ).toEqual(undefined)
    expect(
      XEUtils.findKey('')
    ).toEqual(undefined)
    expect(
      XEUtils.findKey('abc')
    ).toEqual(undefined)
    expect(
      XEUtils.findKey('abc', item => item === 'b')
    ).toEqual('1')
    expect(
      XEUtils.findKey([{ value: 11 }, { value: 22 }])
    ).toEqual(undefined)
    expect(
      XEUtils.findKey([{ value: 11 }, { value: 22 }], item => item.value === 22)
    ).toEqual('1')
    expect(
      XEUtils.findKey({ aa: 11, bb: 22, cc: 33 }, item => item === 22)
    ).toEqual('bb')
  })

  test('map()', () => {
    expect(
      XEUtils.map()
    ).toEqual([])
    expect(
      XEUtils.map(null)
    ).toEqual([])
    expect(
      XEUtils.map(undefined)
    ).toEqual([])
    expect(
      XEUtils.map(-1)
    ).toEqual([])
    expect(
      XEUtils.map(0)
    ).toEqual([])
    expect(
      XEUtils.map(123)
    ).toEqual([])
    expect(
      XEUtils.map(/\d/)
    ).toEqual([])
    expect(
      XEUtils.map('abc')
    ).toEqual([])
    expect(
      XEUtils.map([])
    ).toEqual([])
    expect(
      XEUtils.map({})
    ).toEqual([])
    expect(
      XEUtils.map(function () { })
    ).toEqual([])
    expect(
      XEUtils.map([], item => item.value)
    ).toEqual([])
    expect(
      XEUtils.map('abc', item => item)
    ).toEqual(['a', 'b', 'c'])
    expect(
      XEUtils.map({ a: 11, b: 22, c: 33 }, item => item)
    ).toEqual([11, 22, 33])
    expect(
      XEUtils.map([11, 22, 33], item => item * 2)
    ).toEqual([22, 44, 66])
    expect(
      XEUtils.map([{ value: 11 }, { value: 22 }], item => item.value)
    ).toEqual([11, 22])
  })

  test('sum()', () => {
    expect(
      XEUtils.sum()
    ).toEqual(0)
    expect(
      XEUtils.sum(undefined)
    ).toEqual(0)
    expect(
      XEUtils.sum(0)
    ).toEqual(0)
    expect(
      XEUtils.sum(-1)
    ).toEqual(0)
    expect(
      XEUtils.sum(10)
    ).toEqual(0)
    expect(
      XEUtils.sum(null)
    ).toEqual(0)
    expect(
      XEUtils.sum('')
    ).toEqual(0)
    expect(
      XEUtils.sum(/\w/)
    ).toEqual(0)
    expect(
      XEUtils.sum({})
    ).toEqual(0)
    expect(
      XEUtils.sum([])
    ).toEqual(0)
    expect(
      XEUtils.sum(function () { })
    ).toEqual(0)
    expect(
      XEUtils.sum([22, 66, 88])
    ).toEqual(176)
    expect(
      XEUtils.sum([{ value: 11 }, { value: 22 }, { value: 66 }], 'value')
    ).toEqual(99)
    expect(
      XEUtils.sum({ val1: 21, val2: 34, val3: 47 })
    ).toEqual(102)
  })

  test('mean()', () => {
    expect(
      XEUtils.mean()
    ).toEqual(0)
    expect(
      XEUtils.mean(undefined)
    ).toEqual(0)
    expect(
      XEUtils.mean(0)
    ).toEqual(0)
    expect(
      XEUtils.mean(-1)
    ).toEqual(0)
    expect(
      XEUtils.mean(10)
    ).toEqual(0)
    expect(
      XEUtils.mean(null)
    ).toEqual(0)
    expect(
      XEUtils.mean('')
    ).toEqual(0)
    expect(
      XEUtils.mean(/\w/)
    ).toEqual(0)
    expect(
      XEUtils.mean([])
    ).toEqual(0)
    expect(
      XEUtils.mean({})
    ).toEqual(0)
    expect(
      XEUtils.mean(function () { })
    ).toEqual(0)
    expect(
      XEUtils.mean({ val1: 21, val2: 34, val3: 47 })
    ).toEqual(34)
    expect(
      XEUtils.mean([22, 66, 60, 60])
    ).toEqual(52)
    expect(
      XEUtils.mean([{ value: 34 }, { value: 22 }], 'value')
    ).toEqual(28)
    expect(
      XEUtils.mean([{ value: 11 }, { value: 22 }, { value: 66 }], item => item.value * 2)
    ).toEqual(66)
    expect(
      XEUtils.mean({ val1: 21, val2: 34, val3: 45, val4: 55 })
    ).toEqual(38.75)
  })

  test('reduce()', () => {
    expect(
      XEUtils.reduce()
    ).toEqual(undefined)
    expect(
      XEUtils.reduce(null)
    ).toEqual(undefined)
    expect(
      XEUtils.reduce(undefined)
    ).toEqual(undefined)
    expect(
      XEUtils.reduce(0)
    ).toEqual(undefined)
    expect(
      XEUtils.reduce(-1)
    ).toEqual(undefined)
    expect(
      XEUtils.reduce(333)
    ).toEqual(undefined)
    expect(
      XEUtils.reduce('')
    ).toEqual(undefined)
    expect(
      XEUtils.reduce(function () { })
    ).toEqual(undefined)
    expect(
      XEUtils.reduce(null, (previous, item) => previous + item)
    ).toEqual(undefined)
    expect(
      XEUtils.reduce({}, (previous, item) => previous + item)
    ).toEqual(XEUtils.reduce({}, (previous, item) => previous + item))
    expect(
      XEUtils.reduce([], (previous, item) => previous + item)
    ).toEqual(XEUtils.reduce({}, (previous, item) => previous + item))
    expect(
      XEUtils.reduce([22, 66, 88], (previous, item) => previous + item)
    ).toEqual(176)
    expect(
      XEUtils.reduce([22, 66, 88], (previous, item) => previous + item, 0)
    ).toEqual(176)
    expect(
      XEUtils.reduce([{ num: 11 }, { num: 22 }, { num: 33 }], (previous, item) => previous + item.num, 0)
    ).toEqual(66)
  })

  test('copyWithin()', () => {
    expect(
      XEUtils.copyWithin([11, 22, 33, 44], 0, 2)
    ).toEqual([33, 44, 33, 44])
    expect(
      XEUtils.copyWithin([11, 22, 33, 44], 0, -1)
    ).toEqual([44, 22, 33, 44])
  })

  test('chunk()', () => {
    expect(
      XEUtils.chunk()
    ).toEqual([])
    expect(
      XEUtils.chunk(0)
    ).toEqual([])
    expect(
      XEUtils.chunk(-1)
    ).toEqual([])
    expect(
      XEUtils.chunk('')
    ).toEqual([])
    expect(
      XEUtils.chunk(123)
    ).toEqual([])
    expect(
      XEUtils.chunk('123')
    ).toEqual([])
    expect(
      XEUtils.chunk(/\d/)
    ).toEqual([])
    expect(
      XEUtils.chunk(null)
    ).toEqual([])
    expect(
      XEUtils.chunk(undefined)
    ).toEqual([])
    expect(
      XEUtils.chunk({})
    ).toEqual([])
    expect(
      XEUtils.chunk([])
    ).toEqual([])
    expect(
      XEUtils.chunk(function () { })
    ).toEqual([])
    expect(
      XEUtils.chunk(['a', 'b', 'c', 'd'])
    ).toEqual([['a'], ['b'], ['c'], ['d']])
    expect(
      XEUtils.chunk(['a', 'b', 'c', 'd'], 2)
    ).toEqual([['a', 'b'], ['c', 'd']])
    expect(
      XEUtils.chunk(['a', 'b', 'c', 'd'], 3)
    ).toEqual([['a', 'b', 'c'], ['d']])
  })

  test('zip()', () => {
    expect(
      XEUtils.zip()
    ).toEqual([])
    expect(
      XEUtils.zip(null)
    ).toEqual([])
    expect(
      XEUtils.zip(undefined)
    ).toEqual([])
    expect(
      XEUtils.zip(-1)
    ).toEqual([])
    expect(
      XEUtils.zip(0)
    ).toEqual([])
    expect(
      XEUtils.zip(123)
    ).toEqual([])
    expect(
      XEUtils.zip('')
    ).toEqual([])
    expect(
      XEUtils.zip(/\w/)
    ).toEqual([])
    expect(
      XEUtils.zip({})
    ).toEqual([])
    expect(
      XEUtils.zip([])
    ).toEqual([])
    expect(
      XEUtils.zip(function () { })
    ).toEqual([])
    expect(
      XEUtils.zip(['name1', 'name2', 'name3'], [true, true, false], [30, 40, 20])
    ).toEqual([['name1', true, 30], ['name2', true, 40], ['name3', false, 20]])
  })

  test('unzip()', () => {
    expect(
      XEUtils.unzip()
    ).toEqual([])
    expect(
      XEUtils.unzip(null)
    ).toEqual([])
    expect(
      XEUtils.unzip(undefined)
    ).toEqual([])
    expect(
      XEUtils.unzip(-1)
    ).toEqual([])
    expect(
      XEUtils.unzip(0)
    ).toEqual([])
    expect(
      XEUtils.unzip(123)
    ).toEqual([])
    expect(
      XEUtils.unzip('')
    ).toEqual([])
    expect(
      XEUtils.unzip(/\d/)
    ).toEqual([])
    expect(
      XEUtils.unzip({})
    ).toEqual([])
    expect(
      XEUtils.unzip([])
    ).toEqual([])
    expect(
      XEUtils.unzip(function () { })
    ).toEqual([])
    expect(
      XEUtils.unzip([['name1', true, 30], ['name2', true, 40], ['name3', false, 20]])
    ).toEqual([['name1', 'name2', 'name3'], [true, true, false], [30, 40, 20]])
  })

  test('zipObject()', () => {
    expect(
      XEUtils.zipObject()
    ).toEqual({})
    expect(
      XEUtils.zipObject(null)
    ).toEqual({})
    expect(
      XEUtils.zipObject(undefined)
    ).toEqual({})
    expect(
      XEUtils.zipObject(0)
    ).toEqual({})
    expect(
      XEUtils.zipObject(-1)
    ).toEqual({})
    expect(
      XEUtils.zipObject(123)
    ).toEqual({})
    expect(
      XEUtils.zipObject(/\d/)
    ).toEqual({})
    expect(
      XEUtils.zipObject(null)
    ).toEqual({})
    expect(
      XEUtils.zipObject(undefined)
    ).toEqual({})
    expect(
      XEUtils.zipObject(false)
    ).toEqual({})
    expect(
      XEUtils.zipObject({})
    ).toEqual({})
    expect(
      XEUtils.zipObject([])
    ).toEqual({})
    expect(
      XEUtils.zipObject(function () { })
    ).toEqual({})
    expect(
      XEUtils.zipObject({ a: 'aa', b: 'bb' }, [11, 22, 33])
    ).toEqual({ aa: 11, bb: 22 })
    expect(
      XEUtils.zipObject({ 0: 'aa', 1: 'bb', 2: 'cc' }, [11, 22])
    ).toEqual({ aa: 11, bb: 22, cc: undefined })
    expect(
      XEUtils.zipObject(['aa', 'bb', 'cc'], [11, 22, 33])
    ).toEqual({ aa: 11, bb: 22, cc: 33 })
    expect(
      XEUtils.zipObject(['aa', 'bb', 'cc'], [11, 22])
    ).toEqual({ aa: 11, bb: 22, cc: undefined })
  })

  test('flatten()', () => {
    expect(
      XEUtils.flatten()
    ).toEqual([])
    expect(
      XEUtils.flatten(null)
    ).toEqual([])
    expect(
      XEUtils.flatten(undefined)
    ).toEqual([])
    expect(
      XEUtils.flatten(0)
    ).toEqual([])
    expect(
      XEUtils.flatten('')
    ).toEqual([])
    expect(
      XEUtils.flatten([])
    ).toEqual([])
    expect(
      XEUtils.flatten({})
    ).toEqual([])
    expect(
      XEUtils.flatten(/\d/)
    ).toEqual([])
    expect(
      XEUtils.flatten(function () { })
    ).toEqual([])
    expect(
      XEUtils.flatten([[1, 2, 3], [4, 5, 6], [7, 8]])
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
    expect(
      XEUtils.flatten([1, [2, [3, [4]], 5]])
    ).toEqual([1, 2, [3, [4]], 5])
    expect(
      XEUtils.flatten([1, [2, [3, [4]], 5]], true)
    ).toEqual([1, 2, 3, 4, 5])
    expect(
      XEUtils.flatten([1, [2, [3, [4]], [[[5], [6, [7]]]]]], true)
    ).toEqual([1, 2, 3, 4, 5, 6, 7])
  })

  test('toArray()', () => {
    expect(
      XEUtils.toArray()
    ).toEqual([])
    expect(
      XEUtils.toArray(null)
    ).toEqual([])
    expect(
      XEUtils.toArray(undefined)
    ).toEqual([])
    expect(
      XEUtils.toArray(0)
    ).toEqual([])
    expect(
      XEUtils.toArray('')
    ).toEqual([])
    expect(
      XEUtils.toArray(true)
    ).toEqual([])
    expect(
      XEUtils.toArray(/1,2,3/)
    ).toEqual([])
    expect(
      XEUtils.toArray([])
    ).toEqual([])
    expect(
      XEUtils.toArray({})
    ).toEqual([])
    expect(
      XEUtils.toArray(10)
    ).toEqual([])
    expect(
      XEUtils.toArray(function () { })
    ).toEqual([])
    expect(
      XEUtils.toArray({ name: 'test1', age: 25 })
    ).toEqual(['test1', 25])
  })

  test('includeArrays()', () => {
    expect(
      XEUtils.includeArrays()
    ).toEqual(false)
    expect(
      XEUtils.includeArrays(null)
    ).toEqual(false)
    expect(
      XEUtils.includeArrays(null, null)
    ).toEqual(false)
    expect(
      XEUtils.includeArrays(null, undefined)
    ).toEqual(false)
    expect(
      XEUtils.includeArrays(undefined, null)
    ).toEqual(false)
    expect(
      XEUtils.includeArrays(undefined, undefined)
    ).toEqual(false)
    expect(
      XEUtils.includeArrays(undefined, -1)
    ).toEqual(false)
    expect(
      XEUtils.includeArrays(-1, undefined)
    ).toEqual(false)
    expect(
      XEUtils.includeArrays(null, [])
    ).toEqual(false)
    expect(
      XEUtils.includeArrays(0, undefined)
    ).toEqual(false)
    expect(
      XEUtils.includeArrays(undefined, null)
    ).toEqual(false)
    expect(
      XEUtils.includeArrays(0, -1)
    ).toEqual(false)
    expect(
      XEUtils.includeArrays({}, [])
    ).toEqual(false)
    expect(
      XEUtils.includeArrays([], 0)
    ).toEqual(false)
    expect(
      XEUtils.includeArrays([], null)
    ).toEqual(false)
    expect(
      XEUtils.includeArrays([], {})
    ).toEqual(false)
    expect(
      XEUtils.includeArrays([11, 22, 33], { 0: 11, 1: 22 })
    ).toEqual(false)
    expect(
      XEUtils.includeArrays([11, 22, 33], [11, 22, 33, 44])
    ).toEqual(false)
    expect(
      XEUtils.includeArrays([], [])
    ).toEqual(true)
    expect(
      XEUtils.includeArrays([11, 22, 33], [])
    ).toEqual(true)
    expect(
      XEUtils.includeArrays([11, 22, 33], [11])
    ).toEqual(true)
    expect(
      XEUtils.includeArrays([11, 22, 33], [22, 33])
    ).toEqual(true)
    expect(
      XEUtils.includeArrays([11, 22, 33], [22, 44])
    ).toEqual(false)
  })

  test('pluck()', () => {
    expect(
      XEUtils.pluck()
    ).toEqual([])
    expect(
      XEUtils.pluck(null)
    ).toEqual([])
    expect(
      XEUtils.pluck(undefined)
    ).toEqual([])
    expect(
      XEUtils.pluck(-1)
    ).toEqual([])
    expect(
      XEUtils.pluck(0)
    ).toEqual([])
    expect(
      XEUtils.pluck(123)
    ).toEqual([])
    expect(
      XEUtils.pluck(/\d/)
    ).toEqual([])
    expect(
      XEUtils.pluck([])
    ).toEqual([])
    expect(
      XEUtils.pluck({})
    ).toEqual([])
    expect(
      XEUtils.pluck(function () { })
    ).toEqual([])
    expect(
      XEUtils.pluck([{ a: 11, b: 22 }, { a: 33, b: 44 }], 'a')
    ).toEqual([11, 33])
    expect(
      XEUtils.pluck([[11, 22, 33], [44, 55, 66]], 1)
    ).toEqual([22, 55])
  })

  test('invoke()', () => {
    expect(
      XEUtils.invoke()
    ).toEqual([])
    expect(
      XEUtils.invoke(null)
    ).toEqual([])
    expect(
      XEUtils.invoke(undefined)
    ).toEqual([])
    expect(
      XEUtils.invoke(-1)
    ).toEqual([])
    expect(
      XEUtils.invoke(0)
    ).toEqual([])
    expect(
      XEUtils.invoke([])
    ).toEqual([])
    expect(
      XEUtils.invoke({})
    ).toEqual([])
    expect(
      XEUtils.invoke([
        [3, 1, 6, 7],
        [3, 2, 1, 8],
        [3, 2, 5, 9, 6],
        [3, 3, 1, 2]
      ], 'sort')
    ).toEqual([
      [1, 3, 6, 7],
      [1, 2, 3, 8],
      [2, 3, 5, 6, 9],
      [1, 2, 3, 3]
    ])
    expect(
      XEUtils.invoke(['123', '456'], 'split')
    ).toEqual([['123'], ['456']])
    expect(
      XEUtils.invoke([123, 456], String.prototype.split, '')
    ).toEqual([['1', '2', '3'], ['4', '5', '6']])
    expect(
      XEUtils.invoke([{ a: { b: [2, 0, 1] } }, { a: { b: [2, 1] } }, { a: { b: [4, 8, 1] } }], ['a', 'b', 'sort'])
    ).toEqual([[0, 1, 2], [1, 2], [1, 4, 8]])
  })

  test('toArrayTree()', () => {
    expect(
      XEUtils.toArrayTree()
    ).toEqual([])
    expect(
      XEUtils.toArrayTree(null)
    ).toEqual([])
    expect(
      XEUtils.toArrayTree(0)
    ).toEqual([])
    expect(
      XEUtils.toArrayTree(-1)
    ).toEqual([])
    expect(
      XEUtils.toArrayTree(123)
    ).toEqual([])
    expect(
      XEUtils.toArrayTree([])
    ).toEqual([])
    expect(
      XEUtils.toArrayTree({})
    ).toEqual([])
    expect(
      XEUtils.toArrayTree(function () { })
    ).toEqual([])
    let list1 = [
      { id: 1, name: '111' },
      { id: 2, parentId: 1, name: '222' },
      { id: 3, name: '333' },
      { id: 4, parentId: 2, name: '444' }
    ]
    expect(
      XEUtils.toArrayTree(list1)
    ).toEqual([
      {
        id: 1,
        name: '111',
        children: [
          {
            id: 2,
            parentId: 1,
            name: '222',
            children: [
              {
                id: 4,
                parentId: 2,
                name: '444',
                children: []
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: '333',
        children: []
      }
    ])
    let list2 = [
      { id: 1, name: '111', seq: 5 },
      { id: 2, parentId: 1, name: '222', seq: 3 },
      { id: 3, name: '333', seq: 6 },
      { id: 4, parentId: 2, name: '444', seq: 2 },
      { id: 5, parentId: 1, name: '555', seq: 1 }
    ]
    expect(
      XEUtils.toArrayTree(list2, { sortKey: 'seq' })
    ).toEqual([
      {
        id: 1,
        name: '111',
        seq: 5,
        children: [
          {
            id: 5,
            parentId: 1,
            name: '555',
            seq: 1,
            children: []
          },
          {
            id: 2,
            parentId: 1,
            name: '222',
            seq: 3,
            children: [
              {
                id: 4,
                parentId: 2,
                name: '444',
                seq: 2,
                children: []
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: '333',
        seq: 6,
        children: []
      }
    ])
    let list3 = [
      { id: 1, name: '111' },
      { id: 2, parentId: 1, name: '222' },
      { id: 3, name: '333' },
      { id: 4, parentId: 2, name: '444' },
      { id: 5, parentId: 22, name: '555' }
    ]
    expect(
      XEUtils.toArrayTree(list3, { data: 'data' })
    ).toEqual([
      {
        data: { id: 1, name: '111' },
        id: 1,
        children: [
          {
            data: { id: 2, parentId: 1, name: '222' },
            id: 2,
            parentId: 1,
            children: [
              {
                data: { id: 4, parentId: 2, name: '444' },
                id: 4,
                parentId: 2,
                children: []
              }
            ]
          }
        ]
      },
      {
        data: { id: 3, name: '333' },
        id: 3,
        children: []
      },
      {
        data: { id: 5, parentId: 22, name: '555' },
        id: 5,
        parentId: 22,
        children: []
      }
    ])
    let list4 = [
      { id: 1, name: '111' },
      { id: 2, parentId: 1, name: '222' },
      { id: 3, name: '333' },
      { id: 4, parentId: 2, name: '444' },
      { id: 5, parentId: 22, name: '555' }
    ]
    expect(
      XEUtils.toArrayTree(list4, { strict: true, parentKey: 'parentId', key: 'id', children: 'children', data: 'data' })
    ).toEqual([
      {
        data: { id: 1, name: '111' },
        id: 1,
        children: [
          {
            data: { id: 2, parentId: 1, name: '222' },
            id: 2,
            parentId: 1,
            children: [
              {
                data: { id: 4, parentId: 2, name: '444' },
                id: 4,
                parentId: 2,
                children: []
              }
            ]
          }
        ]
      },
      {
        data: { id: 3, name: '333' },
        id: 3,
        children: []
      }
    ])
  })

  test('toTreeArray()', () => {
    expect(
      XEUtils.toTreeArray()
    ).toEqual([])
    expect(
      XEUtils.toTreeArray(null)
    ).toEqual([])
    expect(
      XEUtils.toTreeArray(0)
    ).toEqual([])
    expect(
      XEUtils.toTreeArray(-1)
    ).toEqual([])
    expect(
      XEUtils.toTreeArray(123)
    ).toEqual([])
    expect(
      XEUtils.toTreeArray([])
    ).toEqual([])
    expect(
      XEUtils.toTreeArray({})
    ).toEqual([])
    expect(
      XEUtils.toTreeArray(function () { })
    ).toEqual([])
    let list1 = [
      {
        id: 1,
        name: '111',
        children: [
          {
            id: 2,
            parentId: 1,
            name: '222',
            children: [
              {
                id: 4,
                parentId: 2,
                name: '444',
                children: []
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: '333',
        children: []
      }
    ]
    expect(
      XEUtils.toTreeArray(list1)
    ).toEqual([
      list1[0],
      list1[0].children[0],
      list1[0].children[0].children[0],
      list1[1]
    ])
    let list2 = [
      {
        data: { id: 1, name: '111' },
        id: 1,
        children: [
          {
            data: { id: 2, parentId: 1, name: '222' },
            id: 2,
            parentId: 1,
            children: [
              {
                data: { id: 4, parentId: 2, name: '444' },
                id: 4,
                parentId: 2,
                children: []
              }
            ]
          }
        ]
      },
      {
        data: { id: 3, name: '333' },
        id: 3,
        children: []
      },
      {
        data: { id: 5, parentId: 22, name: '555' },
        id: 5,
        parentId: 22,
        children: []
      }
    ]
    expect(
      XEUtils.toTreeArray(list2, { data: 'data' })
    ).toEqual([
      { id: 1, name: '111' },
      { id: 2, parentId: 1, name: '222' },
      { id: 4, parentId: 2, name: '444' },
      { id: 3, name: '333' },
      { id: 5, parentId: 22, name: '555' }
    ])
    let list3 = [
      {
        id: 1,
        name: '111',
        children: [
          {
            id: 2,
            parentId: 1,
            name: '222',
            children: [
              {
                id: 4,
                parentId: 2,
                name: '444',
                children: []
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: '333',
        children: []
      }
    ]
    expect(
      XEUtils.toTreeArray(list3, { clear: true })
    ).toEqual([
      {
        id: 1,
        name: '111'
      },
      {
        id: 2,
        parentId: 1,
        name: '222'
      },
      {
        id: 4,
        parentId: 2,
        name: '444'
      },
      {
        id: 3,
        name: '333'
      }
    ])
  })

  test('findTree()', () => {
    let rest
    expect(
      XEUtils.findTree(0, item => item)
    ).toEqual(undefined)
    expect(
      XEUtils.findTree(null, item => item)
    ).toEqual(undefined)
    expect(
      XEUtils.findTree(undefined, item => item)
    ).toEqual(undefined)
    expect(
      XEUtils.findTree([], item => item)
    ).toEqual(undefined)
    rest = XEUtils.findTree([{ a: 11 }], item => item.a === 11)
    expect(rest.item).toEqual({ a: 11 })
    rest = XEUtils.findTree([{ a: 11 }, { a: 22 }, { a: 33, children: [{ a: 44 }] }], item => item.a === 44)
    expect(rest.item).toEqual({ a: 44 })
    rest = XEUtils.findTree([{ a: 11 }, { a: 22 }, { a: 33, childs: [{ a: 44 }] }], item => item.a === 44, { children: 'childs' })
    expect(rest.item).toEqual({ a: 44 })
  })

  test('eachTree()', () => {
    let rest = []
    XEUtils.eachTree(null, item => {
      rest.push(item)
    })
    expect(rest).toEqual([])
    rest = []
    XEUtils.eachTree([{ a: 11 }, { a: 22 }], item => {
      rest.push(item)
    })
    expect(rest).toEqual([{ a: 11 }, { a: 22 }])
    rest = []
    XEUtils.eachTree([{ a: 11 }, { a: 22, children: [{ a: 222 }, { a: 223 }] }], item => {
      rest.push(item)
    })
    expect(rest).toEqual([{ a: 11 }, { a: 22, children: [{ a: 222 }, { a: 223 }] }, { a: 222 }, { a: 223 }])
    rest = []
    XEUtils.eachTree([{ a: 11 }, { a: 22, childs: [{ a: 222 }, { a: 223 }] }], item => {
      rest.push(item)
    }, { children: 'childs' })
    expect(rest).toEqual([{ a: 11 }, { a: 22, childs: [{ a: 222 }, { a: 223 }] }, { a: 222 }, { a: 223 }])
  })

  test('mapTree()', () => {
    expect(
      XEUtils.mapTree(null, item => {
        return item.a * 2
      })
    ).toEqual([])
    expect(
      XEUtils.mapTree([{ a: 11 }, { a: 22 }], item => {
        return item.a * 2
      })
    ).toEqual([22, 44])
    expect(
      XEUtils.mapTree([{ a: 11 }, { a: 22 }], item => {
        return { a: item.a * 2 }
      })
    ).toEqual([{ a: 22 }, { a: 44 }])
    expect(
      XEUtils.mapTree([{ a: 11 }, { a: 22, children: [{ a: 222 }, { a: 223 }] }], item => {
        return { a: item.a * 2 }
      })
    ).toEqual([{ a: 22 }, { a: 44, children: [{ a: 444 }, { a: 446 }] }])
    expect(
      XEUtils.mapTree([{ a: 11 }, { a: 22, childs: [{ a: 222 }, { a: 223 }] }], item => {
        return { a: item.a * 2 }
      }, { children: 'childs' })
    ).toEqual([{ a: 22 }, { a: 44, childs: [{ a: 444 }, { a: 446 }] }])
    expect(
      XEUtils.mapTree([{ a: 11 }, { a: 22, childs: [{ a: 222 }, { a: 223 }] }], item => {
        return { a: item.a * 2 }
      }, { children: 'childs', mapChildren: 'childs2' })
    ).toEqual([{ a: 22 }, { a: 44, childs2: [{ a: 444 }, { a: 446 }] }])
  })

  test('filterTree()', () => {
    expect(
      XEUtils.filterTree(null, item => {
        return item.a === 33
      })
    ).toEqual([])
    expect(
      XEUtils.filterTree([{ a: 11 }, { a: 22 }], item => {
        return item.a === 33
      })
    ).toEqual([])
    expect(
      XEUtils.filterTree([{ a: 11 }, { a: 22 }], item => {
        return item.a === 11
      })
    ).toEqual([{ a: 11 }])
    expect(
      XEUtils.filterTree([{ a: 11 }, { a: 22, children: [{ a: 222 }, { a: 223 }] }], item => {
        return item.a >= 22
      })
    ).toEqual([{ a: 22, children: [{ a: 222 }, { a: 223 }] }, { a: 222 }, { a: 223 }])
    expect(
      XEUtils.filterTree([{ a: 11 }, { a: 22, childs: [{ a: 222 }, { a: 223 }] }], item => {
        return item.a >= 22
      }, { children: 'childs' })
    ).toEqual([{ a: 22, childs: [{ a: 222 }, { a: 223 }] }, { a: 222 }, { a: 223 }])
  })

  test('searchTree()', () => {
    expect(
      XEUtils.searchTree(null, item => item.a === 33)
    ).toEqual([])
    expect(
      XEUtils.searchTree([{ a: 11 }, { a: 22 }], item => item.a === 33)
    ).toEqual([])
    expect(
      XEUtils.searchTree([{ a: 11 }, { a: 22 }], item => item.a === 11)
    ).toEqual([{ a: 11, children: [] }])
    expect(
      XEUtils.searchTree([{ id: 1 }, { id: 2, children: [{ id: 0 }] }, { id: 3, children: [{ id: 30 }] }], item => item.id > 1)
    ).toEqual([{ id: 2, children: [{ id: 0, children: [] }] }, { id: 3, children: [{ id: 30, children: [] }] }])
    expect(
      XEUtils.searchTree([{ id: 1 }, { id: 2, childs: [{ id: 0 }] }, { id: 3, childs: [{ id: 30 }] }], item => item.id >= 2, { children: 'childs' })
    ).toEqual([{ id: 2, childs: [{ id: 0, childs: [] }] }, { id: 3, childs: [{ id: 30, childs: [] }] }])
    expect(
      XEUtils.searchTree([
        { id: 1 },
        { id: 2, childs: [{ id: 0 }] },
        { id: 3, childs: [{ id: 30 }] }
      ], item => item.id >= 2, { children: 'childs', data: '_item' })
    ).toEqual([
      { id: 2, childs: [{ id: 0, childs: [], _item: { id: 0 } }], _item: { id: 2, childs: [{ id: 0 }] } },
      { id: 3, childs: [{ id: 30, childs: [], _item: { id: 30 } }], _item: { id: 3, childs: [{ id: 30 }] } }
    ])
  })
})
