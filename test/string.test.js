const XEUtils = require('../index')

describe('String functions', () => {
  test('trim()', () => {
    expect(
      XEUtils.trim(' abc ')
    ).toEqual('abc')
  })

  test('trimLeft()', () => {
    expect(
      XEUtils.trimLeft(' abc ')
    ).toEqual('abc ')
  })

  test('trimRight()', () => {
    expect(
      XEUtils.trimRight(' abc ')
    ).toEqual(' abc')
  })

  test('escape()', () => {
    expect(
      XEUtils.escape('<a>link</a>')
    ).toEqual('&lt;a&gt;link&lt;/a&gt;')
  })

  test('unescape()', () => {
    expect(
      XEUtils.unescape('&lt;a&gt;link&lt;/a&gt;')
    ).toEqual('<a>link</a>')
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
      XEUtils.padStart('a', 5, 'b')
    ).toEqual('bbbba')
  })

  test('padEnd()', () => {
    expect(
      XEUtils.padEnd('a', 5, 'b')
    ).toEqual('abbbb')
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
