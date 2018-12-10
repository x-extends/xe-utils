const XEUtils = require('../index')

describe('String functions', () => {
  test('trim()', () => {
    expect(
      XEUtils.trim(0)
    ).toEqual('0')
    expect(
      XEUtils.trim(null)
    ).toEqual('null')
    expect(
      XEUtils.trim(' abc ')
    ).toEqual('abc')
  })

  test('trimLeft()', () => {
    expect(
      XEUtils.trimLeft(0)
    ).toEqual('0')
    expect(
      XEUtils.trimLeft(null)
    ).toEqual('null')
    expect(
      XEUtils.trimLeft(' abc ')
    ).toEqual('abc ')
  })

  test('trimRight()', () => {
    expect(
      XEUtils.trimRight(0)
    ).toEqual('0')
    expect(
      XEUtils.trimRight(null)
    ).toEqual('null')
    expect(
      XEUtils.trimRight(' abc ')
    ).toEqual(' abc')
  })

  test('escape()', () => {
    expect(
      XEUtils.escape('<a>link</a>')
    ).toEqual('&lt;a&gt;link&lt;/a&gt;')
    expect(
      XEUtils.escape('<script>alert()</script>')
    ).toEqual('&lt;script&gt;alert()&lt;/script&gt;')
  })

  test('unescape()', () => {
    expect(
      XEUtils.unescape('&lt;a&gt;link&lt;/a&gt;')
    ).toEqual('<a>link</a>')
    expect(
      XEUtils.unescape('&lt;script&gt;alert()&lt;/script&gt;')
    ).toEqual('<script>alert()</script>')
  })

  test('camelCase()', () => {
    expect(
      XEUtils.camelCase('project-name')
    ).toEqual('projectName')
  })

  test('kebabCase()', () => {
    expect(
      XEUtils.kebabCase('projectName')
    ).toEqual('project-name')
  })

  test('repeat()', () => {
    expect(
      XEUtils.repeat('a', 5)
    ).toEqual('aaaaa')
    expect(
      XEUtils.repeat('ab', 3)
    ).toEqual('ababab')
  })

  test('padStart()', () => {
    expect(
      XEUtils.padStart(null, 2)
    ).toEqual('null')
    expect(
      XEUtils.padStart(null, 6)
    ).toEqual('  null')
    expect(
      XEUtils.padStart(0, 2)
    ).toEqual(' 0')
    expect(
      XEUtils.padStart('', 2)
    ).toEqual('  ')
    expect(
      XEUtils.padStart('a', 4)
    ).toEqual('   a')
    expect(
      XEUtils.padStart('a', 6, undefined)
    ).toEqual('     a')
    expect(
      XEUtils.padStart('a', 6, null)
    ).toEqual('nullna')
    expect(
      XEUtils.padStart('a', 6, false)
    ).toEqual('falsea')
    expect(
      XEUtils.padStart('a', 5, 'b')
    ).toEqual('bbbba')
    expect(
      XEUtils.padStart('2', 5, 0)
    ).toEqual('00002')
    expect(
      XEUtils.padStart('2', 5, '0')
    ).toEqual('00002')
  })

  test('padEnd()', () => {
    expect(
      XEUtils.padEnd(null, 2)
    ).toEqual('null')
    expect(
      XEUtils.padEnd(null, 6)
    ).toEqual('null  ')
    expect(
      XEUtils.padEnd(0, 2)
    ).toEqual('0 ')
    expect(
      XEUtils.padEnd('', 2)
    ).toEqual('  ')
    expect(
      XEUtils.padEnd('a', 4)
    ).toEqual('a   ')
    expect(
      XEUtils.padEnd('a', 6, undefined)
    ).toEqual('a     ')
    expect(
      XEUtils.padEnd('a', 6, null)
    ).toEqual('anulln')
    expect(
      XEUtils.padEnd('a', 6, false)
    ).toEqual('afalse')
    expect(
      XEUtils.padEnd('a', 5, 'b')
    ).toEqual('abbbb')
    expect(
      XEUtils.padEnd('2', 5, 0)
    ).toEqual('20000')
    expect(
      XEUtils.padEnd('2', 5, '0')
    ).toEqual('20000')
  })

  test('startsWith()', () => {
    expect(
      XEUtils.startsWith('abc', 'b')
    ).toEqual(false)
  })

  test('endsWith()', () => {
    expect(
      XEUtils.endsWith('abc', 5, 'a')
    ).toEqual(false)
  })
})
