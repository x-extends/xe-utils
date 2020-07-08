const XEUtils = require('../func')

describe('Function functions', () => {
  test('noop()', () => {
    expect(
      [11, 22, 33].map(XEUtils.noop)
    ).toEqual([undefined, undefined, undefined])
  })

  test('delay()', done => {
    XEUtils.delay(function (name) {
      expect(
        name
      ).toEqual('test11')
      done()
    }, 300, 'test11')
  })

  test('after()', done => {
    function getJSON (url, complete) {
      setTimeout(function () {
        complete({ data: url })
      }, 200)
    }
    let finish = XEUtils.after(3, function (rests) {
      expect(
        rests
      ).toEqual([{ data: '/api/list1' }, { data: '/api/list2' }, { data: '/api/list3' }])
      done()
    })
    getJSON('/api/list1', finish)
    getJSON('/api/list2', finish)
    getJSON('/api/list3', finish)
  })

  test('before()', done => {
    let meeting = XEUtils.before(4, function (rests, val) {
      if (val === 222) {
        expect(
          rests
        ).toEqual([111, 222])
        done()
      }
    })
    meeting(111)
    meeting(222)
    meeting(333)
    meeting(444)
  })

  test('bind()', () => {
    let rest = XEUtils.bind(function (val) {
      return this.name + ' = ' + val
    }, { name: 'test' })
    expect(
      rest(222)
    ).toEqual('test = 222')
    expect(
      rest(333)
    ).toEqual('test = 333')
  })

  test('once()', () => {
    let rest = XEUtils.once(function (val) {
      return this.name + ' = ' + val
    }, { name: 'test' })
    expect(
      rest(222)
    ).toEqual('test = 222')
    expect(
      rest(333)
    ).toEqual('test = 222')
  })
})
