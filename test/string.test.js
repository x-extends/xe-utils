const XEUtils = require('../func')

describe('String functions', () => {
  test('toValueString()', () => {
    expect(
      XEUtils.toValueString()
    ).toEqual('')
    expect(
      XEUtils.toValueString(null)
    ).toEqual('')
    expect(
      XEUtils.toValueString(undefined)
    ).toEqual('')
    expect(
      XEUtils.toValueString('')
    ).toEqual('')
    expect(
      XEUtils.toValueString(0)
    ).toEqual('0')
    expect(
      XEUtils.toValueString(-1)
    ).toEqual('-1')
    expect(
      XEUtils.toValueString(123)
    ).toEqual('123')
    expect(
      XEUtils.toValueString([])
    ).toEqual('')
    expect(
      XEUtils.toValueString(/\w/)
    ).toEqual('/\\w/')
    expect(
      XEUtils.toValueString({})
    ).toEqual('[object Object]')
    expect(
      XEUtils.toValueString(function () { })
    ).toEqual('function () {}')
    expect(
      XEUtils.toValueString(['3e-9'])
    ).toEqual('3e-9')
    expect(
      XEUtils.toValueString(1e-8)
    ).toEqual('0.00000001')
    expect(
      XEUtils.toValueString(-11e-10)
    ).toEqual('-0.0000000011')
    expect(
      XEUtils.toValueString(-11e+10)
    ).toEqual('-110000000000')
    expect(
      XEUtils.toValueString(-11e+20)
    ).toEqual('-1100000000000000000000')
    expect(
      Number(XEUtils.toValueString(-11e+20))
    ).toEqual(-11e+20)
    expect(
      XEUtils.toValueString(+11e-10)
    ).toEqual('0.0000000011')
    expect(
      XEUtils.toValueString(+11e+10)
    ).toEqual('110000000000')
    expect(
      Number(XEUtils.toValueString(+11e+10))
    ).toEqual(+11e+10)
    expect(
      XEUtils.toValueString(+11e+20)
    ).toEqual('1100000000000000000000')
    expect(
      XEUtils.toValueString(123456e-3)
    ).toEqual('123.456')
    expect(
      XEUtils.toValueString(123456e+3)
    ).toEqual('123456000')
    expect(
      XEUtils.toValueString(4567.890e-4)
    ).toEqual('0.456789')
    expect(
      Number(XEUtils.toValueString(4567.890e-4))
    ).toEqual(4567.890e-4)
    expect(
      XEUtils.toValueString(4567.890e+4)
    ).toEqual('45678900')
    expect(
      Number(XEUtils.toValueString(4567.890e+4))
    ).toEqual(4567.890e+4)
    expect(
      XEUtils.toValueString(-4567.890e-14)
    ).toEqual('-0.0000000000456789')
    expect(
      XEUtils.toValueString(+4567.890e+14)
    ).toEqual('456789000000000000')
    expect(
      XEUtils.toValueString(+4567.890e+18)
    ).toEqual('4567890000000000000000')
    expect(
      XEUtils.toValueString(3e-9)
    ).toEqual('0.000000003')
    expect(
      Number(XEUtils.toValueString(3e-9))
    ).toEqual(3e-9)
    expect(
      XEUtils.toValueString(3e+9)
    ).toEqual('3000000000')
    expect(
      XEUtils.toValueString(3e+22)
    ).toEqual('30000000000000000000000')
    expect(
      Number(XEUtils.toValueString(3e+22))
    ).toEqual(3e+22)
    expect(
      XEUtils.toValueString(123e-25)
    ).toEqual('0.0000000000000000000000123')
    expect(
      XEUtils.toValueString(123e+25)
    ).toEqual('1230000000000000000000000000')
    expect(
      XEUtils.toValueString(0.000003)
    ).toEqual('0.000003')
    expect(
      XEUtils.toValueString([123])
    ).toEqual('123')
    expect(
      XEUtils.toValueString([123.0000006])
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
      XEUtils.trim('')
    ).toEqual('')
    expect(
      XEUtils.trim('  ')
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
      XEUtils.trimLeft('')
    ).toEqual('')
    expect(
      XEUtils.trimLeft('   ')
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
      XEUtils.trimRight('')
    ).toEqual('')
    expect(
      XEUtils.trimRight('   ')
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
      XEUtils.escape('')
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
      XEUtils.unescape('')
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
      XEUtils.camelCase('')
    ).toEqual('')
    expect(
      XEUtils.camelCase(0)
    ).toEqual('0')
    expect(
      XEUtils.camelCase(123456)
    ).toEqual('123456')
    expect(
      XEUtils.camelCase(-1)
    ).toEqual('1')
    expect(
      XEUtils.camelCase([])
    ).toEqual('')
    expect(
      XEUtils.camelCase('---project')
    ).toEqual('project')
    expect(
      XEUtils.camelCase('---project----')
    ).toEqual('project')
    expect(
      XEUtils.camelCase('proJect----')
    ).toEqual('proJect')
    expect(
      XEUtils.camelCase('-project-')
    ).toEqual('project')
    expect(
      XEUtils.camelCase('---project-name')
    ).toEqual('projectName')
    expect(
      XEUtils.camelCase('--project-name--')
    ).toEqual('projectName')
    expect(
      XEUtils.camelCase('--project----name--')
    ).toEqual('projectName')
    expect(
      XEUtils.camelCase('project-name')
    ).toEqual('projectName')
    expect(
      XEUtils.camelCase('projectName')
    ).toEqual('projectName')
    expect(
      XEUtils.camelCase('AABBC')
    ).toEqual('aabbc')
    expect(
      XEUtils.camelCase('AaBBC')
    ).toEqual('aaBbc')
    expect(
      XEUtils.camelCase('AaBBCdfGG')
    ).toEqual('aaBbCdfGg')
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
      XEUtils.kebabCase('')
    ).toEqual('')
    expect(
      XEUtils.kebabCase(0)
    ).toEqual('0')
    expect(
      XEUtils.kebabCase(123456)
    ).toEqual('123456')
    expect(
      XEUtils.kebabCase(-1)
    ).toEqual('1')
    expect(
      XEUtils.kebabCase('----1')
    ).toEqual('1')
    expect(
      XEUtils.kebabCase([])
    ).toEqual('')
    expect(
      XEUtils.kebabCase('aaaa')
    ).toEqual('aaaa')
    expect(
      XEUtils.kebabCase('aaBa')
    ).toEqual('aa-ba')
    expect(
      XEUtils.kebabCase('aAba')
    ).toEqual('a-aba')
    expect(
      XEUtils.kebabCase('aaAba')
    ).toEqual('aa-aba')
    expect(
      XEUtils.kebabCase('aaaAba')
    ).toEqual('aaa-aba')
    expect(
      XEUtils.kebabCase('aABba')
    ).toEqual('a-a-bba')
    expect(
      XEUtils.kebabCase('ABaa')
    ).toEqual('a-baa')
    expect(
      XEUtils.kebabCase('ABCaa')
    ).toEqual('ab-caa')
    expect(
      XEUtils.kebabCase('ABCaaF')
    ).toEqual('ab-caa-f')
    expect(
      XEUtils.kebabCase('ABCaaFG')
    ).toEqual('ab-caa-fg')
    expect(
      XEUtils.kebabCase('ABCaaFGK')
    ).toEqual('ab-caa-fgk')
    expect(
      XEUtils.kebabCase('aABaa')
    ).toEqual('a-a-baa')
    expect(
      XEUtils.kebabCase('VXETable')
    ).toEqual('vxe-table')
    expect(
      XEUtils.kebabCase('Aaa')
    ).toEqual('aaa')
    expect(
      XEUtils.kebabCase('AAaa')
    ).toEqual('a-aaa')
    expect(
      XEUtils.kebabCase('AAAaa')
    ).toEqual('aa-aaa')
    expect(
      XEUtils.kebabCase('AAAAaa')
    ).toEqual('aaa-aaa')
    expect(
      XEUtils.kebabCase('AAAAAaa')
    ).toEqual('aaaa-aaa')
    expect(
      XEUtils.kebabCase('AB')
    ).toEqual('ab')
    expect(
      XEUtils.kebabCase('ABC')
    ).toEqual('abc')
    expect(
      XEUtils.kebabCase('ABCD')
    ).toEqual('abcd')
    expect(
      XEUtils.kebabCase('ABCDE')
    ).toEqual('abcde')
    expect(
      XEUtils.kebabCase('AaB')
    ).toEqual('aa-b')
    expect(
      XEUtils.kebabCase('AaBBBB')
    ).toEqual('aa-bbbb')
    expect(
      XEUtils.kebabCase('aaaBBBccc')
    ).toEqual('aaa-bb-bccc')
    expect(
      XEUtils.kebabCase('BBBffGG')
    ).toEqual('bb-bff-gg')
    expect(
      XEUtils.kebabCase('projectName')
    ).toEqual('project-name')
    expect(
      XEUtils.kebabCase('ProjectName')
    ).toEqual('project-name')
    expect(
      XEUtils.kebabCase('-ProjectName-')
    ).toEqual('project-name')
    expect(
      XEUtils.kebabCase('Enter')
    ).toEqual('enter')
    expect(
      XEUtils.kebabCase('AABBC')
    ).toEqual('aabbc')
    expect(
      XEUtils.kebabCase('a-bC')
    ).toEqual('a-b-c')
    expect(
      XEUtils.kebabCase('Ac-cc')
    ).toEqual('ac-cc')
    expect(
      XEUtils.kebabCase('AAc-cc')
    ).toEqual('a-ac-cc')
    expect(
      XEUtils.kebabCase('AAA-cc')
    ).toEqual('aaa-cc')
    expect(
      XEUtils.kebabCase('AAAc-cc')
    ).toEqual('aa-ac-cc')
    expect(
      XEUtils.kebabCase('AAA-BBB')
    ).toEqual('aaa-bbb')
    expect(
      XEUtils.kebabCase('AAA-BBbBB')
    ).toEqual('aaa-b-bb-bb')
    expect(
      XEUtils.kebabCase('--aaa--bb--')
    ).toEqual('aaa-bb')
    expect(
      XEUtils.kebabCase('a-b-C')
    ).toEqual('a-b-c')
    expect(
      XEUtils.kebabCase('a-b-----C')
    ).toEqual('a-b-c')
    expect(
      XEUtils.kebabCase('a-b-----CDF')
    ).toEqual('a-b-cdf')
    expect(
      XEUtils.kebabCase('aaDddddDDDff')
    ).toEqual('aa-ddddd-dd-dff')
    expect(
      XEUtils.kebabCase('aaBBffHHHggt--H-HHH-hjJ-J')
    ).toEqual('aa-b-bff-hh-hggt-h-hhh-hj-j-j')
    expect(
      XEUtils.kebabCase('a-b--bbBBB-bB--xxDDff')
    ).toEqual('a-b-bb-bbb-b-b-xx-d-dff')
    expect(
      XEUtils.kebabCase('aAA-bBBBB---bF--Fs')
    ).toEqual('a-aa-b-bbbb-b-f-fs')
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
      XEUtils.repeat('')
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
      XEUtils.padStart('')
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
      XEUtils.padEnd('')
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
      XEUtils.template(function () { })
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

  test('toFormatString()', () => {
    expect(
      XEUtils.toFormatString()
    ).toEqual('')
    expect(
      XEUtils.toFormatString(null)
    ).toEqual('')
    expect(
      XEUtils.toFormatString(undefined)
    ).toEqual('')
    expect(
      XEUtils.toFormatString(0)
    ).toEqual('0')
    expect(
      XEUtils.toFormatString(-1)
    ).toEqual('-1')
    expect(
      XEUtils.toFormatString(123)
    ).toEqual('123')
    expect(
      XEUtils.toFormatString(/\d/)
    ).toEqual('/\\d/')
    expect(
      XEUtils.toFormatString({})
    ).toEqual('[object Object]')
    expect(
      XEUtils.toFormatString(function () { })
    ).toEqual('function () {}')
    expect(
      XEUtils.toFormatString([])
    ).toEqual('')
    expect(
      XEUtils.toFormatString('0')
    ).toEqual('0')
    expect(
      XEUtils.toFormatString('[0]')
    ).toEqual('[0]')
    expect(
      XEUtils.toFormatString('{{0}}')
    ).toEqual('{undefined}')
    expect(
      XEUtils.toFormatString('name')
    ).toEqual('name')
    expect(
      XEUtils.toFormatString('{name')
    ).toEqual('{name')
    expect(
      XEUtils.toFormatString('name}name}')
    ).toEqual('name}name}')
    expect(
      XEUtils.toFormatString('{name}{name}')
    ).toEqual('undefinedundefined')
    expect(
      XEUtils.toFormatString('{name}')
    ).toEqual('undefined')
    expect(
      XEUtils.toFormatString('{name}', null)
    ).toEqual('undefined')
    expect(
      XEUtils.toFormatString('{name}', undefined)
    ).toEqual('undefined')
    expect(
      XEUtils.toFormatString('{name}', '')
    ).toEqual('undefined')
    expect(
      XEUtils.toFormatString('{name}', -1)
    ).toEqual('undefined')
    expect(
      XEUtils.toFormatString('{name}', 0)
    ).toEqual('undefined')
    expect(
      XEUtils.toFormatString('{name}', [])
    ).toEqual('undefined')
    expect(
      XEUtils.toFormatString('{name}', {})
    ).toEqual('undefined')
    expect(
      XEUtils.toFormatString('{0}', [null])
    ).toEqual('null')
    expect(
      XEUtils.toFormatString('{{0}}', [null])
    ).toEqual('{null}')
    expect(
      XEUtils.toFormatString('{  }', { name: 'test1' })
    ).toEqual('undefined')
    expect(
      XEUtils.toFormatString('{{ }}')
    ).toEqual('{undefined}')
    expect(
      XEUtils.toFormatString('{0}', { name: 'test1' })
    ).toEqual('undefined')
    expect(
      XEUtils.toFormatString('{name}', { name: 'test1' })
    ).toEqual('test1')
    expect(
      XEUtils.toFormatString('{}', { name: 'test1' })
    ).toEqual('{}')
    expect(
      XEUtils.toFormatString('{{{name}}}', { name: 'test1' })
    ).toEqual('{{test1}}')
    expect(
      XEUtils.toFormatString('{name }', { name: 'test1' })
    ).toEqual('test1')
    expect(
      XEUtils.toFormatString('{ name}', { name: 'test1' })
    ).toEqual('test1')
    expect(
      XEUtils.toFormatString('{ name }', { name: 'test1' })
    ).toEqual('test1')
    expect(
      XEUtils.toFormatString('{ name }{{ name }}{ name }', { name: 'test1' })
    ).toEqual('test1{test1}test1')
    expect(
      XEUtils.toFormatString('{ 0 }{{ 2 }}{ 3 }', [null, 11, 22, 33, 44])
    ).toEqual('null{22}33')
    expect(
      XEUtils.toFormatString('{name}-{age}', { name: 'test1', age: 26 })
    ).toEqual('test1-26')
    expect(
      XEUtils.toFormatString('{name}-{age}', [])
    ).toEqual('undefined-undefined')
    expect(
      XEUtils.toFormatString('{0}-{1}', [])
    ).toEqual('undefined-undefined')
    expect(
      XEUtils.toFormatString('{0}-{1}', [11, '22'])
    ).toEqual('11-22')
    expect(
      XEUtils.toFormatString('{name} to {{age}}12{3} {{{sex}}}', { name: 'test1', age: 26, sex: '男', 3: 'xx' })
    ).toEqual('test1 to {26}12xx {{男}}')
  })
})
