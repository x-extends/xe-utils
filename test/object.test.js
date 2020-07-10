const XEUtils = require('../func')

test('assign()', () => {
  let obj1 = { bb: { gg: 1 } }
  let obj2 = XEUtils.assign({}, obj1, { a: 11 })
  expect(
    obj1 === obj2
  ).toEqual(false)
  expect(
    obj1.bb === obj2.bb
  ).toEqual(true)
  let obj3 = { bb: { b: 11 } }
  let obj4 = XEUtils.assign(obj3, { a: 11 })
  expect(
    obj3.bb === obj4.bb
  ).toEqual(true)
  expect(
    obj3.bb === obj4.bb
  ).toEqual(true)
  let arr1 = [11, 22]
  expect(
    XEUtils.assign(arr1, [44, 11, 55])
  ).toEqual([44, 11, 55])
})

test('objectMap()', () => {
  expect(
    XEUtils.objectMap({ a: { type: 'a' }, b: { type: 'b' } }, item => item.type)
  ).toEqual({ a: 'a', b: 'b' })
  expect(
    XEUtils.objectMap([{ type: 'a' }, { type: 'b' }], item => item.type)
  ).toEqual({ 0: 'a', 1: 'b' })
  expect(
    XEUtils.objectMap([11, 22, 33], item => item)
  ).toEqual({ 0: 11, 1: 22, 2: 33 })
})

test('objectEach()', () => {
  let rest = []
  XEUtils.each({ a: 11, b: 22, c: 33, d: 44 }, (item, key, obj) => {
    rest.push([item, key])
  })
  expect(
    rest
  ).toEqual([[11, 'a'], [22, 'b'], [33, 'c'], [44, 'd']])
})

test('lastObjectEach()', () => {
  let rest = []
  XEUtils.lastObjectEach({ a: 11, b: 22, c: 33, d: 44 }, (item, key, obj) => {
    rest.push([item, key])
  })
  expect(
    rest
  ).toEqual([[44, 'd'], [33, 'c'], [22, 'b'], [11, 'a']])
})

test('merge()', () => {
  expect(
    XEUtils.merge()
  ).toEqual({})
  expect(
    XEUtils.merge(null)
  ).toEqual({})
  expect(
    XEUtils.merge(undefined)
  ).toEqual({})
  expect(
    XEUtils.merge({}, null)
  ).toEqual({})
  expect(
    XEUtils.merge({}, undefined)
  ).toEqual({})
  expect(
    XEUtils.merge({}, 0)
  ).toEqual({})
  expect(
    XEUtils.merge({}, -1)
  ).toEqual({})
  expect(
    XEUtils.merge({}, {})
  ).toEqual({})
  expect(
    XEUtils.merge([], [])
  ).toEqual([])
  expect(
    XEUtils.merge({}, { a: 11, b: 22 })
  ).toEqual({ a: 11, b: 22 })
  expect(
    XEUtils.merge([], [11, 22])
  ).toEqual([11, 22])
  expect(
    XEUtils.merge({ a: { a1: 11, a2: 44 } }, { a: { a2: 55, a3: 44 } }, { b: 11 })
  ).toEqual({ a: { a1: 11, a2: 55, a3: 44 }, b: 11 })
  expect(
    XEUtils.merge({ a: [11, 22, 33] }, { a: [22] })
  ).toEqual({ a: [22, 22, 33] })
  expect(
    XEUtils.merge({ a: [11, 22, 33] }, { a: [22] }, { a: [33], b: 77 }, { a: [44], c: 77 })
  ).toEqual({ a: [44, 22, 33], b: 77, c: 77 })
  expect(
    XEUtils.merge({ a: { a1: 11, a2: { bb1: 44 } } }, { a: { a2: { bdd: 55 }, a3: 44 } })
  ).toEqual({ a: { a1: 11, a2: { bb1: 44, bdd: 55 }, a3: 44 } })
  const obj1 = { a: { a1: 11, a2: { bb1: 44 } }, bb: [{ vv: 11 }], v: 11 }
  const obj2 = XEUtils.merge(obj1, { a: { a2: { bdd: 55 }, a3: 44 }, bb: [{ cc: 11 }], f: 33, v: [88] })
  expect(
    obj1 === obj2
  ).toEqual(true)
  expect(
    obj1.a === obj2.a
  ).toEqual(true)
  expect(
    obj2
  ).toEqual({ a: { a1: 11, a2: { bb1: 44, bdd: 55 }, a3: 44 }, bb: [{ vv: 11, cc: 11 }], f: 33, v: [88] })
})
