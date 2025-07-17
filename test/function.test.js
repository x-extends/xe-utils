const XEUtils = require('../func')

function awaitFn (time = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

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

  test('debounce()', async () => {
    let flag1 = 0
    const rest1 = []
    let cb1 = XEUtils.debounce(function () {
      flag1++
    }, 300, { leading: false, trailing: false })
    cb1()
    rest1.push(flag1)
    setTimeout(() => {
      cb1()
      rest1.push(flag1)
    }, 100)
    setTimeout(() => {
      cb1()
      rest1.push(flag1)
    }, 200)
    setTimeout(() => {
      cb1()
      rest1.push(flag1)
    }, 400)
    setTimeout(() => {
      cb1()
      rest1.push(flag1)
    }, 750)

    let flag2 = 0
    let args2 = null
    const rest2 = []
    let cb2 = XEUtils.debounce(function (...args) {
      flag2++
      args2 = args
    }, 300, { leading: false, trailing: true })
    cb2()
    rest2.push([flag2, args2])
    setTimeout(() => {
      cb2()
      rest2.push([flag2, args2])
    }, 100)
    setTimeout(() => {
      cb2()
      rest2.push([flag2, args2])
    }, 200)
    setTimeout(() => {
      cb2()
      rest2.push([flag2, args2])
    }, 400)
    setTimeout(() => {
      cb2()
      rest2.push([flag2, args2])
    }, 750)
    setTimeout(() => {
      cb2()
      rest2.push([flag2, args2])
    }, 1000)
    setTimeout(() => {
      cb2()
      rest2.push([flag2, args2])
    }, 1350)

    let flag3 = 0
    let args3 = null
    const rest3 = []
    let cb3 = XEUtils.debounce(function (...args) {
      flag3++
      args3 = args
    }, 300, { leading: false, trailing: true })
    cb3()
    rest3.push([flag3, args3])
    setTimeout(() => {
      cb3()
      rest3.push([flag3, args3])
    }, 100)
    setTimeout(() => {
      cb3()
      rest3.push([flag3, args3])
    }, 200)
    setTimeout(() => {
      cb3()
      rest3.push([flag3, args3])
    }, 400)
    setTimeout(() => {
      cb3()
      rest3.push([flag3, args3])
    }, 750)
    setTimeout(() => {
      cb3()
      rest3.push([flag3, args3])
    }, 1000)
    setTimeout(() => {
      cb3()
      rest3.push([flag3, args3])
    }, 1350)

    let flag4 = 0
    let args4 = null
    const rest4 = []
    let cb4 = XEUtils.debounce(function (...args) {
      flag4++
      args4 = args
    }, 300, { leading: true, trailing: true })
    cb4('a')
    rest4.push([flag4, args4])
    setTimeout(() => {
      cb4('b')
      rest4.push([flag4, args4])
    }, 100)
    setTimeout(() => {
      cb4('c')
      rest4.push([flag4, args4])
    }, 200)
    setTimeout(() => {
      cb4('d')
      rest4.push([flag4, args4])
    }, 400)
    setTimeout(() => {
      cb4('e')
      rest4.push([flag4, args4])
    }, 750)
    setTimeout(() => {
      cb4('f')
      rest4.push([flag4, args4])
    }, 1000)
    setTimeout(() => {
      cb4('g')
      rest4.push([flag4, args4])
    }, 1350)

    let flag5 = 0
    let args5 = null
    const rest5 = []
    let cb5 = XEUtils.debounce(function (...args) {
      flag5++
      args5 = args
    }, 300)
    cb5('a')
    rest5.push([flag5, args5])
    setTimeout(() => {
      cb5('b')
      rest5.push([flag5, args5])
    }, 100)
    setTimeout(() => {
      cb5('c')
      rest5.push([flag5, args5])
    }, 200)
    setTimeout(() => {
      cb5('d')
      rest5.push([flag5, args5])
    }, 400)
    setTimeout(() => {
      cb5('e')
      rest5.push([flag5, args5])
    }, 750)
    setTimeout(() => {
      cb5('f')
      rest5.push([flag5, args5])
    }, 1000)
    setTimeout(() => {
      cb5('g')
      rest5.push([flag5, args5])
    }, 1350)

    await awaitFn(2000)

    expect(rest1).toEqual([0, 0, 0, 0, 0])
    expect(rest2).toEqual(
      [[0,null],[0,null],[0,null],[0,null],[1,[]],[1,[]],[2,[]]]
    )
    expect(rest3).toEqual(
      [[0,null],[0,null],[0,null],[0,null],[1,[]],[1,[]],[2,[]]]
    )
    expect(rest4).toEqual(
      [[1,["a"]],[1,["a"]],[1,["a"]],[1,["a"]],[3,["e"]],[3,["e"]],[5,["g"]]]
    )
    expect(rest5).toEqual(
      [[0,null],[0,null],[0,null],[0,null],[1,["d"]],[1,["d"]],[2,["f"]]]
    )
  })

  test('throttle()', async () => {
     let flag1 = 0
    const rest1 = []
    let cb1 = XEUtils.throttle(function () {
      flag1++
    }, 300, { leading: false, trailing: false })
    cb1()
    rest1.push(flag1)
    setTimeout(() => {
      cb1()
      rest1.push(flag1)
    }, 100)
    setTimeout(() => {
      cb1()
      rest1.push(flag1)
    }, 200)
    setTimeout(() => {
      cb1()
      rest1.push(flag1)
    }, 400)
    setTimeout(() => {
      cb1()
      rest1.push(flag1)
    }, 750)

    let flag2 = 0
    let args2 = null
    const rest2 = []
    let cb2 = XEUtils.throttle(function (...args) {
      flag2++
      args2 = args
    }, 300, { leading: false, trailing: true })
    cb2()
    rest2.push([flag2, args2])
    setTimeout(() => {
      cb2()
      rest2.push([flag2, args2])
    }, 100)
    setTimeout(() => {
      cb2()
      rest2.push([flag2, args2])
    }, 200)
    setTimeout(() => {
      cb2()
      rest2.push([flag2, args2])
    }, 400)
    setTimeout(() => {
      cb2()
      rest2.push([flag2, args2])
    }, 750)
    setTimeout(() => {
      cb2()
      rest2.push([flag2, args2])
    }, 1000)
    setTimeout(() => {
      cb2()
      rest2.push([flag2, args2])
    }, 1350)

    let flag3 = 0
    let args3 = null
    const rest3 = []
    let cb3 = XEUtils.throttle(function (...args) {
      flag3++
      args3 = args
    }, 300, { leading: false, trailing: true })
    cb3()
    rest3.push([flag3, args3])
    setTimeout(() => {
      cb3()
      rest3.push([flag3, args3])
    }, 100)
    setTimeout(() => {
      cb3()
      rest3.push([flag3, args3])
    }, 200)
    setTimeout(() => {
      cb3()
      rest3.push([flag3, args3])
    }, 400)
    setTimeout(() => {
      cb3()
      rest3.push([flag3, args3])
    }, 750)
    setTimeout(() => {
      cb3()
      rest3.push([flag3, args3])
    }, 1000)
    setTimeout(() => {
      cb3()
      rest3.push([flag3, args3])
    }, 1350)

    let flag4 = 0
    let args4 = null
    const rest4 = []
    let cb4 = XEUtils.throttle(function (...args) {
      flag4++
      args4 = args
    }, 300, { leading: true, trailing: true })
    cb4('a')
    rest4.push([flag4, args4])
    setTimeout(() => {
      cb4('b')
      rest4.push([flag4, args4])
    }, 100)
    setTimeout(() => {
      cb4('c')
      rest4.push([flag4, args4])
    }, 200)
    setTimeout(() => {
      cb4('d')
      rest4.push([flag4, args4])
    }, 400)
    setTimeout(() => {
      cb4('e')
      rest4.push([flag4, args4])
    }, 750)
    setTimeout(() => {
      cb4('f')
      rest4.push([flag4, args4])
    }, 1000)
    setTimeout(() => {
      cb4('g')
      rest4.push([flag4, args4])
    }, 1350)

    let flag5 = 0
    let args5 = null
    const rest5 = []
    let cb5 = XEUtils.throttle(function (...args) {
      flag5++
      args5 = args
    }, 300)
    cb5('a')
    rest5.push([flag5, args5])
    setTimeout(() => {
      cb5('b')
      rest5.push([flag5, args5])
    }, 100)
    setTimeout(() => {
      cb5('c')
      rest5.push([flag5, args5])
    }, 200)
    setTimeout(() => {
      cb5('d')
      rest5.push([flag5, args5])
    }, 400)
    setTimeout(() => {
      cb5('e')
      rest5.push([flag5, args5])
    }, 750)
    setTimeout(() => {
      cb5('f')
      rest5.push([flag5, args5])
    }, 1000)
    setTimeout(() => {
      cb5('g')
      rest5.push([flag5, args5])
    }, 1350)

    await awaitFn(2000)

    expect(rest1).toEqual([0, 0, 0, 0, 0])
    expect(rest2).toEqual(
      [[0,null],[0,null],[0,null],[1,[]],[2,[]],[2,[]],[3,[]]]
    )
    expect(rest3).toEqual(
      [[0,null],[0,null],[0,null],[1,[]],[2,[]],[2,[]],[3,[]]]
    )
    expect(rest4).toEqual(
      [[1,["a"]],[1,["a"]],[1,["a"]],[2,["c"]],[4,["e"]],[4,["e"]],[6,["g"]]]
    )
    expect(rest5).toEqual(
      [[1,["a"]],[1,["a"]],[1,["a"]],[2,["c"]],[4,["e"]],[4,["e"]],[6,["g"]]]
    )
  })
})
