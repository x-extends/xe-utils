const XEUtils = require('../index')

describe('String functions', () => {
  test('toString()', () => {
    expect(
      XEUtils.toString()
    ).toEqual('')
    expect(
      XEUtils.toString(null)
    ).toEqual('')
    expect(
      XEUtils.toString(undefined)
    ).toEqual('')
    expect(
      XEUtils.toString(0)
    ).toEqual('0')
    expect(
      XEUtils.toString(-1)
    ).toEqual('-1')
    expect(
      XEUtils.toString(123)
    ).toEqual('123')
    expect(
      XEUtils.toString([])
    ).toEqual('')
    expect(
      XEUtils.toString(/\w/)
    ).toEqual('/\\w/')
    expect(
      XEUtils.toString({})
    ).toEqual('[object Object]')
    expect(
      XEUtils.toString(function () {})
    ).toEqual('function () {}')
    expect(
      XEUtils.toString(['3e-9'])
    ).toEqual('3e-9')
    expect(
      XEUtils.toString(3e-9)
    ).toEqual('0.000000003')
    expect(
      XEUtils.toString(0.000003)
    ).toEqual('0.000003')
    expect(
      XEUtils.toString([123])
    ).toEqual('123')
    expect(
      XEUtils.toString([123.0000006])
    ).toEqual('123.0000006')
  })

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
      XEUtils.trim(123456)
    ).toEqual('123456')
    expect(
      XEUtils.trim(-1)
    ).toEqual('-1')
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
      XEUtils.trimLeft(123456)
    ).toEqual('123456')
    expect(
      XEUtils.trimLeft(-1)
    ).toEqual('-1')
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
      XEUtils.trimRight(123456)
    ).toEqual('123456')
    expect(
      XEUtils.trimRight(-1)
    ).toEqual('-1')
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
      XEUtils.escape(123456)
    ).toEqual('123456')
    expect(
      XEUtils.escape(-1)
    ).toEqual('-1')
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
      XEUtils.unescape(123456)
    ).toEqual('123456')
    expect(
      XEUtils.unescape(-1)
    ).toEqual('-1')
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
      XEUtils.camelCase(123456)
    ).toEqual('123456')
    expect(
      XEUtils.camelCase(-1)
    ).toEqual('-1')
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
      XEUtils.kebabCase(123456)
    ).toEqual('123456')
    expect(
      XEUtils.kebabCase(-1)
    ).toEqual('-1')
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
      XEUtils.startsWith()
    ).toEqual(false)
    expect(
      XEUtils.startsWith(0)
    ).toEqual(false)
    expect(
      XEUtils.startsWith(-1)
    ).toEqual(false)
    expect(
      XEUtils.startsWith(null)
    ).toEqual(false)
    expect(
      XEUtils.startsWith(undefined)
    ).toEqual(false)
    expect(
      XEUtils.startsWith('')
    ).toEqual(false)
    expect(
      XEUtils.startsWith('abc')
    ).toEqual(false)
    expect(
      XEUtils.startsWith('abc', null)
    ).toEqual(false)
    expect(
      XEUtils.startsWith('abc', -1)
    ).toEqual(false)
    expect(
      XEUtils.startsWith('abc', 'b')
    ).toEqual(false)
    expect(
      XEUtils.startsWith('abc', 'b', 2)
    ).toEqual(false)
    expect(
      XEUtils.startsWith('abc', 'a')
    ).toEqual(true)
    expect(
      XEUtils.startsWith('abc', 'b', 1)
    ).toEqual(true)
  })

  test('endsWith()', () => {
    expect(
      XEUtils.endsWith()
    ).toEqual(false)
    expect(
      XEUtils.endsWith(0)
    ).toEqual(false)
    expect(
      XEUtils.endsWith(-1)
    ).toEqual(false)
    expect(
      XEUtils.endsWith(null)
    ).toEqual(false)
    expect(
      XEUtils.endsWith(undefined)
    ).toEqual(false)
    expect(
      XEUtils.endsWith('')
    ).toEqual(false)
    expect(
      XEUtils.endsWith('abc')
    ).toEqual(false)
    expect(
      XEUtils.endsWith('abc', null)
    ).toEqual(false)
    expect(
      XEUtils.endsWith('abc', -1)
    ).toEqual(false)
    expect(
      XEUtils.endsWith('abc', 'a')
    ).toEqual(false)
    expect(
      XEUtils.endsWith('abc', 'c', 2)
    ).toEqual(false)
    expect(
      XEUtils.endsWith('abc', 'c')
    ).toEqual(true)
    expect(
      XEUtils.endsWith('abc', 'b', 2)
    ).toEqual(true)
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
      XEUtils.template(-1)
    ).toEqual('-1')
    expect(
      XEUtils.template(123)
    ).toEqual('123')
    expect(
      XEUtils.template(/\d/)
    ).toEqual('/\\d/')
    expect(
      XEUtils.template({})
    ).toEqual('[object Object]')
    expect(
      XEUtils.template(function () {})
    ).toEqual('function () {}')
    expect(
      XEUtils.template([])
    ).toEqual('')
    expect(
      XEUtils.template('0')
    ).toEqual('0')
    expect(
      XEUtils.template('[0]')
    ).toEqual('[0]')
    expect(
      XEUtils.template('{{0}}')
    ).toEqual('undefined')
    expect(
      XEUtils.template('name')
    ).toEqual('name')
    expect(
      XEUtils.template('{name')
    ).toEqual('{name')
    expect(
      XEUtils.template('name}name}')
    ).toEqual('name}name}')
    expect(
      XEUtils.template('{name}{name}')
    ).toEqual('{name}{name}')
    expect(
      XEUtils.template('{{name}}')
    ).toEqual('undefined')
    expect(
      XEUtils.template('{{name}}', null)
    ).toEqual('undefined')
    expect(
      XEUtils.template('{{name}}', undefined)
    ).toEqual('undefined')
    expect(
      XEUtils.template('{{name}}', '')
    ).toEqual('undefined')
    expect(
      XEUtils.template('{{name}}', -1)
    ).toEqual('undefined')
    expect(
      XEUtils.template('{{name}}', 0)
    ).toEqual('undefined')
    expect(
      XEUtils.template('{{name}}', [])
    ).toEqual('undefined')
    expect(
      XEUtils.template('{{name}}', {})
    ).toEqual('undefined')
    expect(
      XEUtils.template('{{0}}', [null])
    ).toEqual('null')
    expect(
      XEUtils.template('{{{0}}}', [null])
    ).toEqual('{null}')
    expect(
      XEUtils.template('{{  }}', { name: 'test1' })
    ).toEqual('undefined')
    expect(
      XEUtils.template('{{ }}')
    ).toEqual('undefined')
    expect(
      XEUtils.template('{{0}}', { name: 'test1' })
    ).toEqual('undefined')
    expect(
      XEUtils.template('{{name}}', { name: 'test1' })
    ).toEqual('test1')
    expect(
      XEUtils.template('{{}}', { name: 'test1' })
    ).toEqual('{{}}')
    expect(
      XEUtils.template('{{{{name}}}}', { name: 'test1' })
    ).toEqual('{{test1}}')
    expect(
      XEUtils.template('{{name }}', { name: 'test1' })
    ).toEqual('test1')
    expect(
      XEUtils.template('{{ name}}', { name: 'test1' })
    ).toEqual('test1')
    expect(
      XEUtils.template('{{ name }}', { name: 'test1' })
    ).toEqual('test1')
    expect(
      XEUtils.template('{{ name }}{{{ name }}}{{ name }}', { name: 'test1' })
    ).toEqual('test1{test1}test1')
    expect(
      XEUtils.template('{{ 0 }}{{{ 2 }}}{{ 3 }}', [null, 11, 22, 33, 44])
    ).toEqual('null{22}33')
    expect(
      XEUtils.template('{{name}}-{{age}}', { name: 'test1', age: 26 })
    ).toEqual('test1-26')
    expect(
      XEUtils.template('{{name}}-{{age}}', [])
    ).toEqual('undefined-undefined')
    expect(
      XEUtils.template('{{0}}-{{1}}', [])
    ).toEqual('undefined-undefined')
    expect(
      XEUtils.template('{{0}}-{{1}}', [11, '22'])
    ).toEqual('11-22')
    expect(
      XEUtils.template('{{name}} to {{{age}}}12{3} {{{{sex}}}}', { name: 'test1', age: 26, sex: '男' })
    ).toEqual('test1 to {26}12{3} {{男}}')
  })
})
