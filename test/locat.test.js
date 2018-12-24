const XEUtils = require('../index')

describe('location functions', () => {
  test('serialize()', () => {
    expect(
      XEUtils.serialize()
    ).toEqual('')
    expect(
      XEUtils.serialize(null)
    ).toEqual('')
    expect(
      XEUtils.serialize(undefined)
    ).toEqual('')
    expect(
      XEUtils.serialize({})
    ).toEqual('')
    expect(
      XEUtils.serialize([])
    ).toEqual('')
    expect(
      XEUtils.serialize(-1)
    ).toEqual('')
    expect(
      XEUtils.serialize({ id: 123, name: 'test1' })
    ).toEqual('id=123&name=test1')
    expect(
      XEUtils.serialize({ id: 123, name: -1 })
    ).toEqual('id=123&name=-1')
    expect(
      XEUtils.serialize({ id: 123, name: 0 })
    ).toEqual('id=123&name=0')
    expect(
      XEUtils.serialize({ id: 123, name: false })
    ).toEqual('id=123&name=false')
    expect(
      XEUtils.serialize({ id: 123, name: null })
    ).toEqual('id=123&name=')
    expect(
      XEUtils.serialize({ id: 123, name: undefined })
    ).toEqual('id=123')
  })
  test('unserialize()', () => {
    expect(
      XEUtils.unserialize()
    ).toEqual({})
    expect(
      XEUtils.unserialize(null)
    ).toEqual({})
    expect(
      XEUtils.unserialize(undefined)
    ).toEqual({})
    expect(
      XEUtils.unserialize(0)
    ).toEqual({})
    expect(
      XEUtils.unserialize('id=123&name=test1')
    ).toEqual({ id: '123', name: 'test1' })
    expect(
      XEUtils.unserialize('id=123&name=false')
    ).toEqual({ id: '123', name: 'false' })
    expect(
      XEUtils.unserialize('id=123&name=0')
    ).toEqual({ id: '123', name: '0' })
    expect(
      XEUtils.unserialize('id=123&name=null')
    ).toEqual({ id: '123', name: 'null' })
    expect(
      XEUtils.unserialize('id=123&name=')
    ).toEqual({ id: '123', name: '' })
  })
  test('parseUrl()', () => {
    expect(
      XEUtils.parseUrl('http://xuliangzhan.com')
    ).toEqual({
      hash: '',
      hashKey: '',
      hashQuery: {},
      host: 'xuliangzhan.com',
      hostname: 'xuliangzhan.com',
      href: 'http://xuliangzhan.com',
      origin: 'http://xuliangzhan.com',
      path: '/',
      pathname: '/',
      port: '',
      protocol: 'http:',
      search: '',
      searchQuery: {}
    })
    expect(
      XEUtils.parseUrl('http://127.0.0.1/demo')
    ).toEqual({
      hash: '',
      hashKey: '',
      hashQuery: {},
      host: '127.0.0.1',
      hostname: '127.0.0.1',
      href: 'http://127.0.0.1/demo',
      origin: 'http://127.0.0.1',
      path: '/demo',
      pathname: '/demo',
      port: '',
      protocol: 'http:',
      search: '',
      searchQuery: {}
    })
    expect(
      XEUtils.parseUrl('http://localhost:8080/demo?id=123')
    ).toEqual({
      hash: '',
      hashKey: '',
      hashQuery: {},
      host: 'localhost:8080',
      hostname: 'localhost',
      href: 'http://localhost:8080/demo?id=123',
      origin: 'http://localhost:8080',
      path: '/demo?id=123',
      pathname: '/demo',
      port: '8080',
      protocol: 'http:',
      search: '?id=123',
      searchQuery: {
        id: '123'
      }
    })
    expect(
      XEUtils.parseUrl('http://www.xuliangzhan.com:8080/demo#/home?id=123')
    ).toEqual({
      hash: '#/home?id=123',
      hashKey: '/home',
      hashQuery: {
        id: '123'
      },
      host: 'www.xuliangzhan.com:8080',
      hostname: 'www.xuliangzhan.com',
      href: 'http://www.xuliangzhan.com:8080/demo#/home?id=123',
      origin: 'http://www.xuliangzhan.com:8080',
      path: '/demo',
      pathname: '/demo',
      port: '8080',
      protocol: 'http:',
      search: '',
      searchQuery: {}
    })
  })
})
