const XEUtils = require('../index')

describe('String functions', () => {
  test('trim()', () => {
    expect(
      XEUtils.trim()
    ).toEqual('')
    expect(
      XEUtils.trim(null)
    ).toEqual('')
    expect(
      XEUtils.trim(undefined)
    ).toEqual('')
    expect(
      XEUtils.trim(0)
    ).toEqual('0')
    expect(
      XEUtils.trim([])
    ).toEqual('')
    expect(
      XEUtils.trim('0')
    ).toEqual('0')
    expect(
      XEUtils.trim(' abc ')
    ).toEqual('abc')
  })

  test('trimLeft()', () => {
    expect(
      XEUtils.trimLeft()
    ).toEqual('')
    expect(
      XEUtils.trimLeft(null)
    ).toEqual('')
    expect(
      XEUtils.trimLeft(undefined)
    ).toEqual('')
    expect(
      XEUtils.trimLeft(0)
    ).toEqual('0')
    expect(
      XEUtils.trimLeft([])
    ).toEqual('')
    expect(
      XEUtils.trimLeft('0')
    ).toEqual('0')
    expect(
      XEUtils.trimLeft(' abc ')
    ).toEqual('abc ')
  })

  test('trimRight()', () => {
    expect(
      XEUtils.trimRight()
    ).toEqual('')
    expect(
      XEUtils.trimRight(null)
    ).toEqual('')
    expect(
      XEUtils.trimRight(undefined)
    ).toEqual('')
    expect(
      XEUtils.trimRight(0)
    ).toEqual('0')
    expect(
      XEUtils.trimRight([])
    ).toEqual('')
    expect(
      XEUtils.trimRight('0')
    ).toEqual('0')
    expect(
      XEUtils.trimRight(' abc ')
    ).toEqual(' abc')
  })

  test('escape()', () => {
    expect(
      XEUtils.escape()
    ).toEqual('')
    expect(
      XEUtils.escape(null)
    ).toEqual('')
    expect(
      XEUtils.escape(undefined)
    ).toEqual('')
    expect(
      XEUtils.escape(0)
    ).toEqual('0')
    expect(
      XEUtils.escape([])
    ).toEqual('')
    expect(
      XEUtils.escape('<a>link</a>')
    ).toEqual('&lt;a&gt;link&lt;/a&gt;')
    expect(
      XEUtils.escape('<script>alert()</script>')
    ).toEqual('&lt;script&gt;alert()&lt;/script&gt;')
  })

  test('unescape()', () => {
    expect(
      XEUtils.unescape()
    ).toEqual('')
    expect(
      XEUtils.unescape(null)
    ).toEqual('')
    expect(
      XEUtils.unescape(undefined)
    ).toEqual('')
    expect(
      XEUtils.unescape(0)
    ).toEqual('0')
    expect(
      XEUtils.unescape([])
    ).toEqual('')
    expect(
      XEUtils.unescape('&lt;a&gt;link&lt;/a&gt;')
    ).toEqual('<a>link</a>')
    expect(
      XEUtils.unescape('&lt;script&gt;alert()&lt;/script&gt;')
    ).toEqual('<script>alert()</script>')
  })

  test('camelCase()', () => {
    expect(
      XEUtils.camelCase()
    ).toEqual('')
    expect(
      XEUtils.camelCase(null)
    ).toEqual('')
    expect(
      XEUtils.camelCase(undefined)
    ).toEqual('')
    expect(
      XEUtils.camelCase(0)
    ).toEqual('0')
    expect(
      XEUtils.camelCase([])
    ).toEqual('')
    expect(
      XEUtils.camelCase('project-name')
    ).toEqual('projectName')
  })

  test('kebabCase()', () => {
    expect(
      XEUtils.kebabCase()
    ).toEqual('')
    expect(
      XEUtils.kebabCase(null)
    ).toEqual('')
    expect(
      XEUtils.kebabCase(undefined)
    ).toEqual('')
    expect(
      XEUtils.kebabCase(0)
    ).toEqual('0')
    expect(
      XEUtils.kebabCase([])
    ).toEqual('')
    expect(
      XEUtils.kebabCase('projectName')
    ).toEqual('project-name')
  })

  test('repeat()', () => {
    expect(
      XEUtils.repeat()
    ).toEqual('')
    expect(
      XEUtils.repeat(null)
    ).toEqual('')
    expect(
      XEUtils.repeat(undefined)
    ).toEqual('')
    expect(
      XEUtils.repeat(0)
    ).toEqual('')
    expect(
      XEUtils.repeat([])
    ).toEqual('')
    expect(
      XEUtils.repeat('aaaaa')
    ).toEqual('')
    expect(
      XEUtils.repeat('aaaaa', 0)
    ).toEqual('')
    expect(
      XEUtils.repeat('aaaaa', null)
    ).toEqual('')
    expect(
      XEUtils.repeat('aaaaa', undefined)
    ).toEqual('')
    expect(
      XEUtils.repeat('a', 5)
    ).toEqual('aaaaa')
    expect(
      XEUtils.repeat('ab', 3)
    ).toEqual('ababab')
  })

  test('padStart()', () => {
    expect(
      XEUtils.padStart()
    ).toEqual('')
    expect(
      XEUtils.padStart(null)
    ).toEqual('')
    expect(
      XEUtils.padStart(undefined)
    ).toEqual('')
    expect(
      XEUtils.padStart(0)
    ).toEqual('0')
    expect(
      XEUtils.padStart([])
    ).toEqual('')
    expect(
      XEUtils.padStart(null, 2)
    ).toEqual('  ')
    expect(
      XEUtils.padStart(null, 6)
    ).toEqual('      ')
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
      XEUtils.padEnd()
    ).toEqual('')
    expect(
      XEUtils.padEnd(null)
    ).toEqual('')
    expect(
      XEUtils.padEnd(undefined)
    ).toEqual('')
    expect(
      XEUtils.padEnd(0)
    ).toEqual('0')
    expect(
      XEUtils.padEnd([])
    ).toEqual('')
    expect(
      XEUtils.padEnd(null, 2)
    ).toEqual('  ')
    expect(
      XEUtils.padEnd(null, 6)
    ).toEqual('      ')
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

  test('template()', () => {
    expect(
      XEUtils.template()
    ).toEqual('')
    expect(
      XEUtils.template(null)
    ).toEqual('')
    expect(
      XEUtils.template(undefined)
    ).toEqual('')
    expect(
      XEUtils.template(0)
    ).toEqual('0')
    expect(
      XEUtils.template([])
    ).toEqual('')
    expect(
      XEUtils.template('{name}')
    ).toEqual('{name}')
    expect(
      XEUtils.template('{{name}}')
    ).toEqual('{{name}}')
    expect(
      XEUtils.template('{{name}}', null)
    ).toEqual('{{name}}')
    expect(
      XEUtils.template('{{name}}', undefined)
    ).toEqual('{{name}}')
    expect(
      XEUtils.template('{{name}}', [])
    ).toEqual('undefined')
    expect(
      XEUtils.template('{{name}}', {})
    ).toEqual('undefined')
    expect(
      XEUtils.template('{{name}}', { name: 'test1' })
    ).toEqual('test1')
    expect(
      XEUtils.template('{{name}}-{{age}}', { name: 'test1', age: 26 })
    ).toEqual('test1-26')
    expect(
      XEUtils.template('{{name}} to {{{age}}}12{3} {{{{sex}}}}', { name: 'test1', age: 26, sex: '男' })
    ).toEqual('test1 to {26}12{3} {{男}}')
  })
})
