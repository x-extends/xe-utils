const XEUtils = require('../index')

describe('Array functions', () => {
  test('uniq()', () => {
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
      XEUtils.uniq([])
    ).toEqual([])
    expect(
      XEUtils.uniq({})
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
      XEUtils.union(undefined)
    ).toEqual([])
    expect(
      XEUtils.union(null)
    ).toEqual([])
    expect(
      XEUtils.union({})
    ).toEqual([])
    expect(
      XEUtils.union([])
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

  test('sortBy()', () => {
    expect(
      XEUtils.sortBy(null)
    ).toEqual([])
    expect(
      XEUtils.sortBy(undefined)
    ).toEqual([])
    expect(
      XEUtils.sortBy({})
    ).toEqual([])
    expect(
      XEUtils.sortBy(-1)
    ).toEqual([])
    expect(
      XEUtils.sortBy(123)
    ).toEqual([])
    expect(
      XEUtils.sortBy('abc')
    ).toEqual(['a', 'b', 'c'])
    expect(
      XEUtils.sortBy([11, 55, 99, 22])
    ).toEqual([11, 22, 55, 99])
    expect(
      XEUtils.sortBy([11, 55, 99, 77, 11, 55, 22], [])
    ).toEqual([11, 55, 99, 77, 11, 55, 22])
    expect(
      XEUtils.sortBy([11, 55, 99, 77, 11, 55, 22])
    ).toEqual([11, 11, 22, 55, 55, 77, 99])
    expect(
      XEUtils.sortBy([{ age: 27 }, { age: 26 }, { age: 28 }], 'age')
    ).toEqual([{ age: 26 }, { age: 27 }, { age: 28 }])
    expect(
      XEUtils.sortBy([{ age: 27 }, { age: 26 }, { age: 28 }], ['age'])
    ).toEqual([{ age: 26 }, { age: 27 }, { age: 28 }])
    expect(
      XEUtils.sortBy([{ age: 27 }, { age: 26 }, { age: 28 }], item => item.age)
    ).toEqual([{ age: 26 }, { age: 27 }, { age: 28 }])
    expect(
      XEUtils.sortBy([{ name: 'x' }, { name: 'l' }, { name: 'a' }], [item => item.name])
    ).toEqual([{ name: 'a' }, { name: 'l' }, { name: 'x' }])
    expect(
      XEUtils.sortBy([{ name: 'x', age: 26 }, { name: 'd', age: 27 }, { name: 'a', age: 28 }, { name: 'z', age: 29 }], ['name', 'age'])
    ).toEqual([{ name: 'a', age: 28 }, { name: 'd', age: 27 }, { name: 'x', age: 26 }, { name: 'z', age: 29 }])
    expect(
      XEUtils.sortBy([{ name: 'x', age: 26 }, { name: 'd', age: 27 }, { name: 'a', age: 28 }, { name: 'z', age: 29 }], ['age', 'name'])
    ).toEqual([{ name: 'x', age: 26 }, { name: 'd', age: 27 }, { name: 'a', age: 28 }, { name: 'z', age: 29 }])
    expect(
      XEUtils.sortBy([{ name: 'x', age: 26 }, { name: 'd', age: 27 }, { name: 'a', age: 28 }, { name: 'z', age: 29 }], [item => item.age, item => item.name])
    ).toEqual([{ name: 'x', age: 26 }, { name: 'd', age: 27 }, { name: 'a', age: 28 }, { name: 'z', age: 29 }])
    expect(
      XEUtils.sortBy([{ name: 'x', age: 26 }, { name: 'd', age: 27 }, { name: 'a', age: 28 }, { name: 'z', age: 29 }], ['age', item => item.name])
    ).toEqual([{ name: 'x', age: 26 }, { name: 'd', age: 27 }, { name: 'a', age: 28 }, { name: 'z', age: 29 }])
  })

  test('shuffle()', () => {
    expect(
      XEUtils.shuffle(null).length
    ).toEqual(0)
    expect(
      XEUtils.shuffle(undefined).length
    ).toEqual(0)
    expect(
      XEUtils.shuffle([]).length
    ).toEqual(0)
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
      XEUtils.sample([])
    ).toEqual(undefined)
    expect(
      XEUtils.sample(null, 4)
    ).toEqual([])
    expect(
      XEUtils.sample(undefined, 2)
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
      XEUtils.some(null)
    ).toEqual(false)
    expect(
      XEUtils.some(undefined)
    ).toEqual(false)
    expect(
      XEUtils.some({})
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
      XEUtils.every(null)
    ).toEqual(true)
    expect(
      XEUtils.every(undefined)
    ).toEqual(true)
    expect(
      XEUtils.every({})
    ).toEqual(true)
    expect(
      XEUtils.every(123)
    ).toEqual(true)
    expect(
      XEUtils.every([])
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
      XEUtils.filter(null)
    ).toEqual([])
    expect(
      XEUtils.filter(undefined)
    ).toEqual([])
    expect(
      XEUtils.filter({})
    ).toEqual([])
    expect(
      XEUtils.filter(123)
    ).toEqual([])
    expect(
      XEUtils.filter([])
    ).toEqual([])
    expect(
      XEUtils.filter('abc')
    ).toEqual([])
    expect(
      XEUtils.filter([])
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
      XEUtils.find(null)
    ).toEqual(undefined)
    expect(
      XEUtils.find(undefined)
    ).toEqual(undefined)
    expect(
      XEUtils.find(-1)
    ).toEqual(undefined)
    expect(
      XEUtils.find(123)
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
      XEUtils.find({ a: 11, b: 22, c: 33 }, item => item > 15)
    ).toEqual(22)
    expect(
      XEUtils.find([{ value: 11 }, { value: 22 }], item => item.value === 66)
    ).toEqual(undefined)
    expect(
      XEUtils.find([{ value: 11 }, { value: 22 }], item => item.value === 22)
    ).toEqual({ value: 22 })
  })

  test('findKey()', () => {
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
      XEUtils.findKey(-1)
    ).toEqual(undefined)
    expect(
      XEUtils.findKey(123)
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
      XEUtils.map(123)
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
      XEUtils.sum(10)
    ).toEqual(0)
    expect(
      XEUtils.sum(null)
    ).toEqual(0)
    expect(
      XEUtils.sum({})
    ).toEqual(0)
    expect(
      XEUtils.sum([])
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
      XEUtils.mean(10)
    ).toEqual(0)
    expect(
      XEUtils.mean(null)
    ).toEqual(0)
    expect(
      XEUtils.mean([])
    ).toEqual(0)
    expect(
      XEUtils.mean({})
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
      XEUtils.chunk(0)
    ).toEqual([])
    expect(
      XEUtils.chunk('123')
    ).toEqual([])
    expect(
      XEUtils.chunk(null)
    ).toEqual([])
    expect(
      XEUtils.chunk({})
    ).toEqual([])
    expect(
      XEUtils.chunk([])
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
      XEUtils.zip(['name1', 'name2', 'name3'], [true, true, false], [30, 40, 20])
    ).toEqual([['name1', true, 30], ['name2', true, 40], ['name3', false, 20]])
  })

  test('unzip()', () => {
    expect(
      XEUtils.unzip([['name1', true, 30], ['name2', true, 40], ['name3', false, 20]])
    ).toEqual([['name1', 'name2', 'name3'], [true, true, false], [30, 40, 20]])
  })

  test('zipObject()', () => {
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

  test('toArray()', () => {
    expect(
      XEUtils.toArray(0)
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
      XEUtils.toArray(function () {})
    ).toEqual([])
    expect(
      XEUtils.toArray({ name: 'test1', age: 25 })
    ).toEqual(['test1', 25])
  })

  test('includeArrays()', () => {
    expect(
      XEUtils.includeArrays(null, null)
    ).toEqual(false)
    expect(
      XEUtils.includeArrays(null, [])
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
      XEUtils.pluck([{ a: 11, b: 22 }, { a: 33, b: 44 }], 'a')
    ).toEqual([11, 33])
    expect(
      XEUtils.pluck([[11, 22, 33], [44, 55, 66]], 1)
    ).toEqual([22, 55])
  })

  test('invoke()', () => {
    expect(
      XEUtils.invoke([[3, 1, 6, 7], [3, 2, 1, 8]], 'sort')
    ).toEqual([[1, 3, 6, 7], [1, 2, 3, 8]])
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
      { id: 1, name: '111' },
      { id: 2, parentId: 1, name: '222' },
      { id: 4, parentId: 2, name: '444' },
      { id: 3, name: '333' }
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
  })
})
