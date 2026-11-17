const XEUtils = require('../src')

describe('Date functions', () => {
  const date = new Date(2017, 0, 1, 14, 5, 30, 99)
  const time = date.getTime()
  test('now()', () => {
    expect(
      XEUtils.now() >= time
    ).toEqual(true)
  })

  test('timestamp()', () => {
    expect(
      XEUtils.timestamp(-1).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.timestamp(123456).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.timestamp('abc').toString()
    ).toEqual('NaN')
    expect(
      XEUtils.timestamp([]).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.timestamp({}).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.timestamp(/\d/).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.timestamp(function () { }).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.timestamp() >= time
    ).toEqual(true)
    expect(
      XEUtils.timestamp(time)
    ).toEqual(new Date(2017, 0, 1, 14, 5, 30, 99).getTime())
    expect(
      XEUtils.timestamp(date)
    ).toEqual(time)
    expect(
      XEUtils.timestamp('2018-12-01')
    ).toEqual(new Date(2018, 11, 1).getTime())
    expect(
      XEUtils.timestamp('2017/12/20 10:10:30.459', 'yyyy/MM/dd HH:mm:ss.SSS')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 459).getTime())
  })

  test('isDateSame()', () => {
    expect(
      XEUtils.isDateSame()
    ).toEqual(false)
    expect(
      XEUtils.isDateSame(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isDateSame(-1, 0)
    ).toEqual(false)
    expect(
      XEUtils.isDateSame(-1, -1)
    ).toEqual(false)
    expect(
      XEUtils.isDateSame(0, 0)
    ).toEqual(false)
    expect(
      XEUtils.isDateSame(new Date(''))
    ).toEqual(false)
    expect(
      XEUtils.isDateSame(new Date('abc'), 0)
    ).toEqual(false)
    expect(
      XEUtils.isDateSame(null, new Date(''))
    ).toEqual(false)
    expect(
      XEUtils.isDateSame(0, new Date('abc'))
    ).toEqual(false)
    expect(
      XEUtils.isDateSame(new Date(''), new Date(''))
    ).toEqual(false)
    expect(
      XEUtils.isDateSame(new Date('abc'), new Date('abc'))
    ).toEqual(false)
    expect(
      XEUtils.isDateSame('2018-12-01', '2018-12-11')
    ).toEqual(false)
    expect(
      XEUtils.isDateSame('2017-04-01', new Date(2017, 0, 1), 'yyyy-MM')
    ).toEqual(false)
    expect(
      XEUtils.isDateSame(new Date(2018, 0, 1), new Date(2018, 10, 2), 'yyyy-MM')
    ).toEqual(false)
    expect(
      XEUtils.isDateSame('2018-12-01', '2018-12-01')
    ).toEqual(true)
    expect(
      XEUtils.isDateSame(time, '2018-12-01', 'yyyy')
    ).toEqual(false)
    expect(
      XEUtils.isDateSame(new Date(2017, 0, 1), '2017-01-01', 'yyyy')
    ).toEqual(true)
    expect(
      XEUtils.isDateSame('2017-04-01', new Date(2017, 0, 1), 'yyyy')
    ).toEqual(true)
    expect(
      XEUtils.isDateSame(new Date(2018, 0, 1), new Date(2018, 0, 1), 'yyyy')
    ).toEqual(true)
    expect(
      XEUtils.isDateSame(new Date(2018, 0, 1), new Date(2018, 10, 1), 'yyyy')
    ).toEqual(true)
    expect(
      XEUtils.isDateSame(date, XEUtils.toStringDate('01/01/2017', 'MM/dd/yyyy'), 'MM')
    ).toEqual(true)
    expect(
      XEUtils.isDateSame('2018-01-28', '2018-12-01', 'yyyy')
    ).toEqual(true)
    expect(
      XEUtils.isDateSame('2017-12-01', '2018-12-01', 'MM-dd')
    ).toEqual(true)
    expect(
      XEUtils.isDateSame(time, date, 'dd')
    ).toEqual(true)
    expect(
      XEUtils.isDateSame(time, date, 'yyyyMMdd')
    ).toEqual(true)
  })

  test('toStringDate()', () => {
    expect(
      XEUtils.toStringDate() instanceof Date
    ).toEqual(true)
    expect(
      XEUtils.toStringDate(undefined) instanceof Date
    ).toEqual(true)
    expect(
      XEUtils.toStringDate(null) instanceof Date
    ).toEqual(true)
    expect(
      XEUtils.toStringDate('') instanceof Date
    ).toEqual(true)
    expect(
      XEUtils.toStringDate(0) instanceof Date
    ).toEqual(true)
    expect(
      XEUtils.toStringDate(/\d/) instanceof Date
    ).toEqual(true)
    expect(
      XEUtils.toStringDate([]) instanceof Date
    ).toEqual(true)
    expect(
      XEUtils.toStringDate({}) instanceof Date
    ).toEqual(true)
    expect(
      XEUtils.toStringDate([2018, 1, 1]) instanceof Date
    ).toEqual(true)
    expect(
      XEUtils.toStringDate({ time: 2018 }) instanceof Date
    ).toEqual(true)
    expect(
      XEUtils.toStringDate('null') instanceof Date
    ).toEqual(true)
    expect(
      XEUtils.toStringDate(function () { }) instanceof Date
    ).toEqual(true)
    expect(
      XEUtils.toStringDate('2') instanceof Date
    ).toEqual(true)
    expect(
      XEUtils.toStringDate('20') instanceof Date
    ).toEqual(true)
    expect(
      XEUtils.toStringDate('201') instanceof Date
    ).toEqual(true)
    expect(
      XEUtils.toStringDate('Year:2018 Month:01 Day:26') instanceof Date
    ).toEqual(true)
    expect(
      XEUtils.toStringDate().toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.toStringDate(undefined).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.toStringDate(null).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.toStringDate('').toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.toStringDate(0).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.toStringDate(/\d/).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.toStringDate([]).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.toStringDate({}).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.toStringDate([2018, 1, 1]).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.toStringDate({ time: 2018 }).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.toStringDate('null').toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.toStringDate(function () { }).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.toStringDate('2').toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.toStringDate('20').toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.toStringDate('Year:2018 Month:01 Day:26').toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.toStringDate('201')
    ).toEqual(new Date(201, 0, 1))
    expect(
      XEUtils.toStringDate('Year:2018 Month:01 Day:26', 'Year:yyyy [M]onth:MM Day:dd')
    ).toEqual(new Date(2018, 0, 26))
    expect(
      XEUtils.toStringDate('2020')
    ).toEqual(new Date(2020, 0, 1))
    expect(
      XEUtils.toStringDate('2020-02')
    ).toEqual(new Date(2020, 1, 1))
    expect(
      XEUtils.toStringDate('2020-3')
    ).toEqual(new Date(2020, 2, 1))
    expect(
      XEUtils.toStringDate('2020-02-02')
    ).toEqual(new Date(2020, 1, 2))
    expect(
      XEUtils.toStringDate(time)
    ).toEqual(new Date(2017, 0, 1, 14, 5, 30, 99))
    expect(
      XEUtils.toStringDate('' + time)
    ).toEqual(new Date(2017, 0, 1, 14, 5, 30, 99))
    expect(
      XEUtils.toStringDate(date)
    ).toEqual(new Date(2017, 0, 1, 14, 5, 30, 99))
    expect(
      XEUtils.toStringDate('2017-12-20')
    ).toEqual(new Date(2017, 11, 20))
    expect(
      XEUtils.toStringDate('2017-5-2')
    ).toEqual(new Date(2017, 4, 2))
    expect(
      XEUtils.toStringDate('20|2018/12', 'dd|yyyy/MM')
    ).toEqual(new Date(2018, 11, 20))
    expect(
      XEUtils.toStringDate('20|2018/12', 'd|yyyy/M')
    ).toEqual(new Date(2018, 11, 20))
    expect(
      XEUtils.toStringDate('2018/12', 'yyyy/MM')
    ).toEqual(new Date(2018, 11))
    expect(
      XEUtils.toStringDate('2017-12-20 10:10:30')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30))
    expect(
      XEUtils.toStringDate('2017-8-2 9:1:3')
    ).toEqual(new Date(2017, 7, 2, 9, 1, 3))
    expect(
      XEUtils.toStringDate('2017-12-20 10:10:30.9')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 900))
    expect(
      XEUtils.toStringDate('2017-12-20 10:10:30.99')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 990))
    expect(
      XEUtils.toStringDate('2017-12-20 10:10:30.999')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 999))
    expect(
      XEUtils.toStringDate('2017-12-20 10:10:30.2880929')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 288))
    expect(
      XEUtils.toStringDate('2017-12-20 10:10:30.9999999')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 999))
    expect(
      XEUtils.toStringDate('2017-12-20T10:10:30.4+0800')
    ).toEqual(new Date('2017-12-20T10:10:30.400+08:00'))
    expect(
      XEUtils.toStringDate('2017-12-20T10:10:30.42+0800')
    ).toEqual(new Date('2017-12-20T10:10:30.420+08:00'))
    expect(
      XEUtils.toStringDate('2017-12-20T10:10:30.423+0800')
    ).toEqual(new Date('2017-12-20T10:10:30.423+08:00'))
    expect(
      XEUtils.toStringDate('2017-12-20T10:10:30.423+08:00')
    ).toEqual(new Date('2017-12-20T10:10:30.423+08:00'))
    expect(
      XEUtils.toStringDate('2017-12-20T10:10:30.423+00:00')
    ).toEqual(new Date('2017-12-20T10:10:30.423+00:00'))
    expect(
      XEUtils.toStringDate('2017-12-20T10:10:30.423+10:00')
    ).toEqual(new Date('2017-12-20T10:10:30.423+10:00'))
    expect(
      XEUtils.toStringDate('2017-12-20T10:10:30.42+10:00')
    ).toEqual(new Date('2017-12-20T10:10:30.420+10:00'))
    expect(
      XEUtils.toStringDate('2017-12-20T10:10:30.42+10:00')
    ).toEqual(new Date('2017-12-20T10:10:30.420+10:00'))
    expect(
      XEUtils.toStringDate('2017-12-2T10:2:30.42+10:00')
    ).toEqual(new Date('2017-12-02T10:02:30.420+10:00'))
    expect(
      XEUtils.toStringDate('2017-12-20T10:10:30.4Z')
    ).toEqual(new Date('2017-12-20T10:10:30.4Z'))
    expect(
      XEUtils.toStringDate('2017/12/20 10:10:30.4Z')
    ).toEqual(new Date('2017-12-20T10:10:30.400Z'))
    expect(
      XEUtils.toStringDate('2017-12-20T10:10:30.43Z')
    ).toEqual(new Date('2017-12-20T10:10:30.43Z'))
    expect(
      XEUtils.toStringDate('2017-12-20T10:10:30.43Z')
    ).toEqual(new Date('2017-12-20T10:10:30.430Z'))
    expect(
      XEUtils.toStringDate('2017/12/20T10:10:30.423Z')
    ).toEqual(new Date('2017-12-20T10:10:30.423Z'))
    expect(
      XEUtils.toStringDate('2017/1/3T10:10:30.423Z')
    ).toEqual(new Date('2017-01-03T10:10:30.423Z'))
    expect(
      XEUtils.toStringDate('2018/1/2T2:9:8.423Z')
    ).toEqual(new Date('2018-01-02T02:09:08.423Z'))
    expect(
      XEUtils.toStringDate('2018/1/2T2:9:8.4Z')
    ).toEqual(new Date('2018-01-02T02:09:08.400Z'))
    expect(
      XEUtils.toStringDate(1513735830000)
    ).toEqual(new Date(1513735830000))
    expect(
      XEUtils.toStringDate(20171220101030)
    ).toEqual(new Date(20171220101030))
    expect(
      XEUtils.toStringDate('1513735830000')
    ).toEqual(new Date(1513735830000))
    expect(
      XEUtils.toStringDate('20171220101030')
    ).toEqual(new Date(20171220101030))
    expect(
      XEUtils.toStringDate('12/20/2017', 'MM/dd/yyyy')
    ).toEqual(new Date(2017, 11, 20))
    expect(
      XEUtils.toStringDate('12/20/2017', 'M/d/yyyy')
    ).toEqual(new Date(2017, 11, 20))
    expect(
      XEUtils.toStringDate('20171220101030', 'yyyyMMddHHmmss')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30))
    expect(
      XEUtils.toStringDate('2017/12/20 10:10:30', 'yyyy/MM/dd HH:mm:ss')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30))
    expect(
      XEUtils.toStringDate('2017/12/20 10:10:30', 'yyyy/M/d H:m:s')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30))
    expect(
      XEUtils.toStringDate('12/20/2017 10:10:30.100', 'MM/dd/yyyy HH:mm:ss.SSS')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 100))
    expect(
      XEUtils.toStringDate('12/20/2017 10:10:30.1', 'M/d/yyyy H:m:s.S')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 100))
    expect(
      XEUtils.toStringDate('12/20/2017 10:10:30.10', 'M/d/yyyy H:m:s.S')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 100))
    expect(
      XEUtils.toStringDate('12/20/2017 10:10:30.100', 'M/d/yyyy H:m:s.S')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 100))
    expect(
      XEUtils.toStringDate('12/20/2017 10:10:30.1', 'M/d/yyyy H:m:s.SSS')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 100))
    expect(
      XEUtils.toStringDate('12/20/2017 10:10:30.11', 'M/d/yyyy H:m:s.SSS')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 110))
    expect(
      XEUtils.toStringDate('12/20/2017 10:10:30.111', 'M/d/yyyy H:m:s.SSS')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 111))
    expect(
      XEUtils.toStringDate('12/20/2017 10:10:30.001', 'M/d/yyyy H:m:s.SSS')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 1))
    expect(
      XEUtils.toStringDate('12/20/2017 10:10:30.011', 'M/d/yyyy H:m:s.SSS')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 11))
    expect(
      XEUtils.toStringDate('12/20/2017 10:10:30.111', 'M/d/yyyy H:m:s.SSS')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 111))
    expect(
      XEUtils.toStringDate('yyyy:2017 MM:01 dd:20', '[yyyy]:yyyy [MM]:MM [dd]:dd')
    ).toEqual(new Date(2017, 0, 20))
    expect(
      XEUtils.toStringDate('yyyy:2017 MM:01 dd:20', '[yyyy]:yyyy [MM]:M [dd]:d')
    ).toEqual(new Date(2017, 0, 20))
    expect(
      XEUtils.toStringDate('oo MM:01 dd:20 yyyy:2017 oo', 'oo [MM]:M [dd]:d [yyyy]:yyyy oo')
    ).toEqual(new Date(2017, 0, 20))
    expect(
      XEUtils.toStringDate(time)
    ).toEqual(date)
    expect(
      XEUtils.toStringDate(time, 'yyyy-MM-dd')
    ).toEqual(date)
    expect(
      XEUtils.toStringDate(time, 'MM/dd/yyyy')
    ).toEqual(date)
    expect(
      XEUtils.toStringDate(time, 'yyyy/MM/dd HH:mm:ss')
    ).toEqual(date)

    // ========== 负数时间戳 ==========
    expect(XEUtils.toStringDate(-1) instanceof Date).toEqual(true)
    expect(XEUtils.toStringDate('-1') instanceof Date).toEqual(true)

    // ========== 格式模板边界 ==========
    // 月份/日期溢出
    expect(XEUtils.toStringDate('2020-13-01', 'yyyy-MM-dd')).toEqual(new Date(2021, 0, 1))
    expect(XEUtils.toStringDate('2020-02-30', 'yyyy-MM-dd')).toEqual(new Date(2020, 2, 1))

    // 格式模板不匹配但能部分解析
    expect(XEUtils.toStringDate('2017-12-20 extra', 'yyyy-MM-dd')).toEqual(new Date(2017, 11, 20))

    // ========== 毫秒截断边界 ==========
    // 7位毫秒 → 截断到3位
    expect(XEUtils.toStringDate('2017-12-20 10:10:30.1234567')).toEqual(new Date(2017, 11, 20, 10, 10, 30, 123))

    // 1位毫秒
    expect(XEUtils.toStringDate('2017-12-20 10:10:30.1')).toEqual(new Date(2017, 11, 20, 10, 10, 30, 100))

    // ========== 空格式模板 ==========
    expect(XEUtils.toStringDate('2017-12-20', '') instanceof Date).toEqual(true)
  })

  test('toDateString()', () => {
    expect(
      XEUtils.toDateString()
    ).toEqual('')
    expect(
      XEUtils.toDateString(undefined)
    ).toEqual('')
    expect(
      XEUtils.toDateString(null)
    ).toEqual('')
    expect(
      XEUtils.toDateString('')
    ).toEqual('')
    expect(
      XEUtils.toDateString(0)
    ).toEqual('')
    expect(
      XEUtils.toDateString(123)
    ).toEqual('Invalid Date')
    expect(
      XEUtils.toDateString(-1)
    ).toEqual('Invalid Date')
    expect(
      XEUtils.toDateString(/\d/)
    ).toEqual('Invalid Date')
    expect(
      XEUtils.toDateString({})
    ).toEqual('Invalid Date')
    expect(
      XEUtils.toDateString([])
    ).toEqual('Invalid Date')
    expect(
      XEUtils.toDateString(function () { })
    ).toEqual('Invalid Date')
    expect(
      XEUtils.toDateString([2018, 1, 1])
    ).toEqual('Invalid Date')
    expect(
      XEUtils.toDateString({ time: 2018 })
    ).toEqual('Invalid Date')
    expect(
      XEUtils.toDateString('null')
    ).toEqual('Invalid Date')
    expect(
      XEUtils.toDateString(new Date(''))
    ).toEqual('Invalid Date')
    expect(
      XEUtils.toDateString(new Date('abc'))
    ).toEqual('Invalid Date')
    expect(
      XEUtils.toDateString('Year:2018 Month:01 Day:26')
    ).toEqual('Invalid Date')
    expect(
      XEUtils.toDateString('2017')
    ).toEqual('2017-01-01 00:00:00')
    expect(
      XEUtils.toDateString('2017-01')
    ).toEqual('2017-01-01 00:00:00')
    expect(
      XEUtils.toDateString('2017-02')
    ).toEqual('2017-02-01 00:00:00')
    expect(
      XEUtils.toDateString('2017-02-03')
    ).toEqual('2017-02-03 00:00:00')
    expect(
      XEUtils.toDateString(time)
    ).toEqual('2017-01-01 14:05:30')
    expect(
      XEUtils.toDateString('' + time)
    ).toEqual('2017-01-01 14:05:30')
    expect(
      XEUtils.toDateString(date)
    ).toEqual('2017-01-01 14:05:30')
    expect(
      XEUtils.toDateString('2026-02-10@14:30:20')
    ).toEqual('2026-02-10 14:30:20')
    expect(
      XEUtils.toDateString('2026-02-10 14:30:20(GMT+08:00)')
    ).toEqual('2026-02-10 14:30:20')
    expect(
      XEUtils.toDateString(time, 'MM/dd/yyyy')
    ).toEqual('01/01/2017')
    expect(
      XEUtils.toDateString('2017-01-01 10:05:30', 'M/d/yyyy')
    ).toEqual('1/1/2017')
    expect(
      XEUtils.toDateString(date, 'yyyyMMddHHmmssSSS')
    ).toEqual('20170101140530099')
    expect(
      XEUtils.toDateString(date, 'yyyy-MM-dd')
    ).toEqual('2017-01-01')
    expect(
      XEUtils.toDateString(date, 'yy-M-d')
    ).toEqual('17-1-1')
    expect(
      XEUtils.toDateString(date, 'yyyy-MM-dd 00:00:00')
    ).toEqual('2017-01-01 00:00:00')
    expect(
      XEUtils.toDateString(date, 'yyyy-MM-dd 00:00:00.000')
    ).toEqual('2017-01-01 00:00:00.000')
    expect(
      XEUtils.toDateString(date, 'yyyy-MM-dd 23:59:59.999')
    ).toEqual('2017-01-01 23:59:59.999')
    expect(
      XEUtils.toDateString(date, 'yyyy-MM-dd HH:mm:ss.SSS')
    ).toEqual('2017-01-01 14:05:30.099')
    expect(
      XEUtils.toDateString(date, 'yyyy-MM-dd hh:mm:ss.SSS')
    ).toEqual('2017-01-01 02:05:30.099')
    expect(
      XEUtils.toDateString(date, 'yyyy-MM-dd hh:mm:ss.SSS')
    ).toEqual('2017-01-01 02:05:30.099')
    expect(
      XEUtils.toDateString('2017-01-07 14:05:30', 'yyyy-M-d h:m:s.S E e')
    ).toEqual('2017-1-7 2:5:30.0 6 6')
    expect(
      XEUtils.toDateString(date, 'yyyy-M-d H:m:s.S')
    ).toEqual('2017-1-1 14:5:30.99')
    expect(
      XEUtils.toDateString(time + 86400000, 'yyyy-M-d h:m:s.S E e')
    ).toEqual('2017-1-2 2:5:30.99 1 1')
    expect(
      XEUtils.toDateString(time, 'yyyy年MM月dd日 HH时mm分ss秒S毫秒,星期E 第q季度')
    ).toEqual('2017年01月01日 14时05分30秒99毫秒,星期0 第1季度')
    expect(
      XEUtils.toDateString(time, 'yy年M月d日 HH时m分s秒S毫秒,星期E 第q季度 今年第D天 今年第W周')
    ).toEqual('17年1月1日 14时5分30秒99毫秒,星期0 第1季度 今年第1天 今年第52周')
    expect(
      XEUtils.toDateString(time, 'yyyy年MM月dd日 hh时mm分ss秒SSS毫秒 星期E e 第q季 今年第DDD天 今年第WW周 a A')
    ).toEqual('2017年01月01日 02时05分30秒099毫秒 星期0 0 第1季 今年第001天 今年第52周 pm PM')
    expect(
      XEUtils.toDateString(date, 'yyyy-MM-dd [yyyy-MM-dd] [yyyy]] [[MM]')
    ).toEqual('2017-01-01 yyyy-MM-dd yyyy] [MM')
    expect(
      XEUtils.toDateString(date, '[Week] yyyy-MM-dd [[yyyy-MM-dd]]')
    ).toEqual('Week 2017-01-01 [yyyy-MM-dd]')

    // 周日视图
    expect(
      XEUtils.toDateString('2024-12-31', 'W', { firstDay: 0 })
    ).toEqual('1')
    expect(
      XEUtils.toDateString('2025-01-01', 'W', { firstDay: 0 })
    ).toEqual('1')
    expect(
      XEUtils.toDateString('2025-12-28', 'W', { firstDay: 0 })
    ).toEqual('53')
    expect(
      XEUtils.toDateString('2026-01-03', 'W', { firstDay: 0 })
    ).toEqual('53')

    // 周一视图
    expect(
      XEUtils.toDateString('2024-12-31', 'W', { firstDay: 1 })
    ).toEqual('1')
    expect(
      XEUtils.toDateString('2025-01-01', 'W', { firstDay: 1 })
    ).toEqual('1')

    // 周二视图
    expect(
      XEUtils.toDateString('2024-12-31', 'W', { firstDay: 2 })
    ).toEqual('1')
    expect(
      XEUtils.toDateString('2025-01-01', 'W', { firstDay: 2 })
    ).toEqual('1')

    // 周三视图
    expect(
      XEUtils.toDateString('2024-12-31', 'W', { firstDay: 3 })
    ).toEqual('52')
    expect(
      XEUtils.toDateString('2025-01-01', 'W', { firstDay: 3 })
    ).toEqual('1')

    // 周四视图
    expect(
      XEUtils.toDateString('2024-12-31', 'W', { firstDay: 4 })
    ).toEqual('52')
    expect(
      XEUtils.toDateString('2025-01-01', 'W', { firstDay: 4 })
    ).toEqual('52')

    // 周五视图
    expect(
      XEUtils.toDateString('2024-12-31', 'W', { firstDay: 5 })
    ).toEqual('53')
    expect(
      XEUtils.toDateString('2025-01-01', 'W', { firstDay: 5 })
    ).toEqual('53')

    // 周六视图
    expect(
      XEUtils.toDateString('2024-12-31', 'W', { firstDay: 6 })
    ).toEqual('53')
    expect(
      XEUtils.toDateString('2025-01-01', 'W', { firstDay: 6 })
    ).toEqual('53')

    // ========== 特殊日期 ==========
    // 闰年2月29日
    expect(
      XEUtils.toDateString('2016-02-29', 'yyyy-MM-dd')
    ).toEqual('2016-02-29')

    // 平年2月28日
    expect(
      XEUtils.toDateString('2017-02-28', 'yyyy-MM-dd')
    ).toEqual('2017-02-28')

    // 年末
    expect(
      XEUtils.toDateString('2017-12-31 23:59:59.999', 'yyyy-MM-dd HH:mm:ss.SSS')
    ).toEqual('2017-12-31 23:59:59.999')

    // 年初
    expect(
      XEUtils.toDateString('2017-01-01 00:00:00.000', 'yyyy-MM-dd HH:mm:ss.SSS')
    ).toEqual('2017-01-01 00:00:00.000')

    // ========== 季度边界 ==========
    expect(XEUtils.toDateString('2017-01-15', 'q')).toEqual('1')
    expect(XEUtils.toDateString('2017-04-15', 'q')).toEqual('2')
    expect(XEUtils.toDateString('2017-07-15', 'q')).toEqual('3')
    expect(XEUtils.toDateString('2017-10-15', 'q')).toEqual('4')

    // ========== 星期覆盖 ==========
    // 周一到周日各一天
    expect(XEUtils.toDateString('2017-01-02', 'E e')).toEqual('1 1') // 周一
    expect(XEUtils.toDateString('2017-01-03', 'E e')).toEqual('2 2') // 周二
    expect(XEUtils.toDateString('2017-01-04', 'E e')).toEqual('3 3') // 周三
    expect(XEUtils.toDateString('2017-01-05', 'E e')).toEqual('4 4') // 周四
    expect(XEUtils.toDateString('2017-01-06', 'E e')).toEqual('5 5') // 周五
    expect(XEUtils.toDateString('2017-01-07', 'E e')).toEqual('6 6') // 周六
    expect(XEUtils.toDateString('2017-01-01', 'E e')).toEqual('0 0') // 周日

    // ========== DDD 年内天数边界 ==========
    expect(XEUtils.toDateString('2017-01-01', 'DDD')).toEqual('001')
    expect(XEUtils.toDateString('2017-12-31', 'DDD')).toEqual('365')
    expect(XEUtils.toDateString('2016-12-31', 'DDD')).toEqual('366') // 闰年
    expect(XEUtils.toDateString('2017-06-15', 'D')).toEqual('166')

    // ========== WW 周数边界 ==========
    // 跨年周
    expect(XEUtils.toDateString('2016-01-01', 'W', { firstDay: 1 })).toEqual('53') // 属于2015年最后一周
    expect(XEUtils.toDateString('2017-01-01', 'W', { firstDay: 1 })).toEqual('52')
    expect(XEUtils.toDateString('2017-01-02', 'W', { firstDay: 1 })).toEqual('1')
    expect(XEUtils.toDateString('2020-01-01', 'W', { firstDay: 1 })).toEqual('1') // 闰年年初

    // ========== WW 补零 ==========
    expect(XEUtils.toDateString('2017-01-01', 'WW', { firstDay: 1 })).toEqual('52')
    expect(XEUtils.toDateString('2017-04-01', 'WW', { firstDay: 1 })).toEqual('13')

    // ========== hh 12小时制边界 ==========
    expect(XEUtils.toDateString('2017-01-01 00:00:00', 'hh a')).toEqual('12 am')
    expect(XEUtils.toDateString('2017-01-01 12:00:00', 'hh a')).toEqual('12 pm')
    expect(XEUtils.toDateString('2017-01-01 13:00:00', 'hh a')).toEqual('01 pm')
    expect(XEUtils.toDateString('2017-01-01 23:59:59', 'hh A')).toEqual('11 PM')

    // ========== 毫秒 S/SS/SSS 精度 ==========
    expect(XEUtils.toDateString('2017-01-01 00:00:00.5', 'S')).toEqual('500')
    expect(XEUtils.toDateString('2017-01-01 00:00:00.5', 'SSS')).toEqual('500')
    expect(XEUtils.toDateString('2017-01-01 00:00:00.05', 'S')).toEqual('50')
    expect(XEUtils.toDateString('2017-01-01 00:00:00.05', 'SSS')).toEqual('050')
    expect(XEUtils.toDateString('2017-01-01 00:00:00.005', 'S')).toEqual('5')
    expect(XEUtils.toDateString('2017-01-01 00:00:00.005', 'SSS')).toEqual('005')

    // ========== 未提供 format 时的默认行为 ==========
    // 确认默认格式是否是 'yyyy-MM-dd HH:mm:ss'
    expect(
      XEUtils.toDateString('2017-01-01 14:05:30')
    ).toEqual('2017-01-01 14:05:30')
  })

  test('getWhatYear()', () => {
    expect(
      XEUtils.getWhatYear() instanceof Date
    ).toEqual(true)
    expect(
      XEUtils.getWhatYear(0) instanceof Date
    ).toEqual(true)
    expect(
      XEUtils.getWhatYear(-1) instanceof Date
    ).toEqual(true)
    expect(
      XEUtils.getWhatYear([]) instanceof Date
    ).toEqual(true)
    expect(
      XEUtils.getWhatYear({}) instanceof Date
    ).toEqual(true)
    expect(
      XEUtils.getWhatYear(null) instanceof Date
    ).toEqual(true)
    expect(
      XEUtils.getWhatYear(undefined) instanceof Date
    ).toEqual(true)
    expect(
      XEUtils.getWhatYear([2018, 1, 1]) instanceof Date
    ).toEqual(true)
    expect(
      XEUtils.getWhatYear({ time: 2018 }) instanceof Date
    ).toEqual(true)
    expect(
      XEUtils.getWhatYear('null') instanceof Date
    ).toEqual(true)
    expect(
      XEUtils.getWhatYear(new Date('')) instanceof Date
    ).toEqual(true)
    expect(
      XEUtils.getWhatYear(new Date('abc')) instanceof Date
    ).toEqual(true)
    expect(
      XEUtils.getWhatYear().toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatYear(0).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatYear(-1).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatYear([]).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatYear({}).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatYear(null).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatYear(undefined).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatYear([2018, 1, 1]).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatYear({ time: 2018 }).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatYear('null').toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatYear(new Date('')).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatYear(new Date('abc')).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatYear(date, -1)
    ).toEqual(new Date(2016, 0, 1, 14, 5, 30, 99))
    expect(
      XEUtils.getWhatYear(time, -1)
    ).toEqual(new Date(2016, 0, 1, 14, 5, 30, 99))
    expect(
      XEUtils.getWhatYear('2017-12-20', -1)
    ).toEqual(new Date(2016, 11, 20))
    expect(
      XEUtils.getWhatYear('2017-12-20', 1)
    ).toEqual(new Date(2018, 11, 20))
    expect(
      XEUtils.getWhatYear(new Date(2017, 11, 10), 1)
    ).toEqual(new Date(2018, 11, 10))
    expect(
      XEUtils.getWhatYear('2017-12-20', 0, 'first')
    ).toEqual(new Date(2017, 0, 1, 0, 0, 0, 0))
    expect(
      XEUtils.getWhatYear('2017-12-20', 0, 'last')
    ).toEqual(new Date(2017, 11, 31, 23, 59, 59, 999))

    // offset = 0 应该生效，年份不变
    expect(
      XEUtils.getWhatYear('2017-12-20', 0)
    ).toEqual(new Date(2017, 11, 20))

    // offset = 0 + month = 0（1月）
    expect(
      XEUtils.getWhatYear('2017-12-20', 0, 0)
    ).toEqual(new Date(2017, 0, 20))

    // offset = 0 + 'first'
    expect(
      XEUtils.getWhatYear('2017-12-20', 0, 'first')
    ).toEqual(new Date(2017, 0, 1, 0, 0, 0, 0))

    // offset = 0 + 'last'
    expect(
      XEUtils.getWhatYear('2017-12-20', 0, 'last')
    ).toEqual(new Date(2017, 11, 31, 23, 59, 59, 999))

    // offset 为小数
    expect(
      XEUtils.getWhatYear('2017-12-20', 1.9)
    ).toEqual(new Date(2018, 11, 20))

    // offset 为负数小数
    expect(
      XEUtils.getWhatYear('2017-12-20', -1.5)
    ).toEqual(new Date(2016, 11, 20))

    // offset 为字符串数字
    expect(
      XEUtils.getWhatYear('2017-12-20', '2')
    ).toEqual(new Date(2019, 11, 20))

    // offset 为非数字字符串 → 应该兜底为 0
    expect(
      XEUtils.getWhatYear('2017-12-20', 'abc')
    ).toEqual(new Date(2017, 11, 20))

    // month = 0（1月），验证之前 falsy bug
    expect(
      XEUtils.getWhatYear('2017-12-20', 1, 0)
    ).toEqual(new Date(2018, 0, 20))

    // month = 11（12月）
    expect(
      XEUtils.getWhatYear('2017-12-20', 1, 11)
    ).toEqual(new Date(2018, 11, 20))

    // month 为字符串数字
    expect(
      XEUtils.getWhatYear('2017-12-20', 1, '6')
    ).toEqual(new Date(2018, 6, 20))

    // month = null → 不应进入 month 分支
    expect(
      XEUtils.getWhatYear('2017-12-20', 1, null)
    ).toEqual(new Date(2018, 11, 20))

    // month = undefined → 同上
    expect(
      XEUtils.getWhatYear('2017-12-20', 1, undefined)
    ).toEqual(new Date(2018, 11, 20))

    // 闰年 2月29日 - 4年 → 回到闰年
    expect(
      XEUtils.getWhatYear('2016-02-29', -4)
    ).toEqual(new Date(2012, 1, 29))

    // 世纪闰年 2000
    expect(
      XEUtils.getWhatYear('2000-02-29', 4)
    ).toEqual(new Date(2004, 1, 29))

    // 非闰年 2月28日 + 1年
    expect(
      XEUtils.getWhatYear('2017-02-28', 1)
    ).toEqual(new Date(2018, 1, 28))
  })

  test('getWhatQuarter()', () => {
    expect(
      XEUtils.getWhatQuarter().toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatQuarter(0).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatQuarter(-1).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatQuarter({}).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatQuarter([]).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatQuarter(null).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatQuarter(undefined).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatQuarter([2018, 1, 1]).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatQuarter({ time: 2018 }).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatQuarter('null').toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatQuarter(new Date('')).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatQuarter(new Date('abc')).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatQuarter(date, -1)
    ).toEqual(new Date(2016, 9, 1, 14, 5, 30, 99))
    expect(
      XEUtils.getWhatQuarter(time, 1)
    ).toEqual(new Date(2017, 3, 1, 14, 5, 30, 99))
    expect(
      XEUtils.getWhatQuarter('2017-12-20', -1)
    ).toEqual(new Date(2017, 6, 20))
    expect(
      XEUtils.getWhatQuarter('2017-12-20', 1)
    ).toEqual(new Date(2018, 0, 20))
    expect(
      XEUtils.getWhatQuarter(new Date(2017, 11, 20), 1)
    ).toEqual(new Date(2018, 0, 20))
    expect(
      XEUtils.getWhatQuarter(new Date(2017, 11, 20), 3)
    ).toEqual(new Date(2018, 6, 20))
    expect(
      XEUtils.getWhatQuarter('2017-12-20', -1, 'first')
    ).toEqual(new Date(2017, 6, 1, 0, 0, 0, 0))
    expect(
      XEUtils.getWhatQuarter('2017-12-20', 1, 'last')
    ).toEqual(new Date(2018, 2, 31, 23, 59, 59, 999))
    expect(
      XEUtils.getWhatQuarter('2021-01-31', -1)
    ).toEqual(new Date(2020, 9, 31))
    expect(
      XEUtils.getWhatQuarter('2021-01-31', -3)
    ).toEqual(new Date(2020, 3, 30))
    expect(
      XEUtils.getWhatQuarter('2021-01-31', 1)
    ).toEqual(new Date(2021, 3, 30))
    expect(
      XEUtils.getWhatQuarter('2021-01-31', 1, 'last')
    ).toEqual(new Date(2021, 5, 30, 23, 59, 59, 999))
    expect(
      XEUtils.getWhatQuarter('2021-01-31', 6)
    ).toEqual(new Date(2022, 6, 31))
    expect(
      XEUtils.getWhatQuarter('2021-01-31', -6)
    ).toEqual(new Date(2019, 6, 31))
    expect(
      XEUtils.getWhatQuarter('2021-01-31', 12)
    ).toEqual(new Date(2024, 0, 31))
  })

  test('getWhatMonth()', () => {
    expect(
      XEUtils.getWhatMonth().toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatMonth(0).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatMonth(-1).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatMonth({}).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatMonth([]).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatMonth(null).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatMonth(undefined).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatMonth([2018, 1, 1]).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatMonth({ time: 2018 }).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatMonth('null').toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatMonth(new Date('')).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatMonth(new Date('abc')).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatMonth(date, -1)
    ).toEqual(new Date(2016, 11, 1, 14, 5, 30, 99))
    expect(
      XEUtils.getWhatMonth(time, 1)
    ).toEqual(new Date(2017, 1, 1, 14, 5, 30, 99))
    expect(
      XEUtils.getWhatMonth('2017-12-20', -1)
    ).toEqual(new Date(2017, 10, 20))
    expect(
      XEUtils.getWhatMonth('2017-12-20', 1)
    ).toEqual(new Date(2018, 0, 20))
    expect(
      XEUtils.getWhatMonth(new Date(2017, 11, 20), 1)
    ).toEqual(new Date(2018, 0, 20))
    expect(
      XEUtils.getWhatMonth('2017-12-20', -1, 'first')
    ).toEqual(new Date(2017, 10, 1, 0, 0, 0, 0))
    expect(
      XEUtils.getWhatMonth('2017-12-20', 1, 'last')
    ).toEqual(new Date(2018, 0, 31, 23, 59, 59, 999))
    expect(
      XEUtils.getWhatMonth('2021-01-31', -1)
    ).toEqual(new Date(2020, 11, 31))
    expect(
      XEUtils.getWhatMonth('2021-01-31', -2)
    ).toEqual(new Date(2020, 10, 30))
    expect(
      XEUtils.getWhatMonth('2021-01-31', 1)
    ).toEqual(new Date(2021, 1, 28))
    expect(
      XEUtils.getWhatMonth('2021-01-31', 1, 'last')
    ).toEqual(new Date(2021, 1, 28, 23, 59, 59, 999))
    expect(
      XEUtils.getWhatMonth('2021-01-31', 2)
    ).toEqual(new Date(2021, 2, 31))
    expect(
      XEUtils.getWhatMonth('2021-01-31', 12)
    ).toEqual(new Date(2022, 0, 31))
  })

  test('getWhatWeek()', () => {
    expect(
      XEUtils.getWhatWeek().toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatWeek(0).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatWeek(-1).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatWeek(null).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatWeek(undefined).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatWeek({}).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatWeek([]).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatWeek([2018, 1, 1]).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatWeek({ time: 2018 }).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatWeek('null').toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatWeek(new Date('')).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatWeek(new Date('abc')).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatWeek(date, -1)
    ).toEqual(new Date(2016, 11, 25, 14, 5, 30, 99))
    expect(
      XEUtils.getWhatWeek(time, 1)
    ).toEqual(new Date(2017, 0, 8, 14, 5, 30, 99))
    expect(
      XEUtils.getWhatWeek('2017-12-20', -1)
    ).toEqual(new Date(2017, 11, 13))
    expect(
      XEUtils.getWhatWeek(new Date(2017, 11, 20), -1)
    ).toEqual(new Date(2017, 11, 13))
    expect(
      XEUtils.getWhatWeek('2017-12-20', 1)
    ).toEqual(new Date(2017, 11, 27))
    expect(
      XEUtils.getWhatWeek('2017-12-20', -1, 5)
    ).toEqual(new Date(2017, 11, 15))
    expect(
      XEUtils.getWhatWeek('2017-12-20', 1, 0)
    ).toEqual(new Date(2017, 11, 31))

    expect(
      XEUtils.getWhatWeek('2017-12-01', 0, 0, 0)
    ).toEqual(new Date(2017, 10, 26))
    expect(
      XEUtils.getWhatWeek('2017-12-18', 0, 0, 0)
    ).toEqual(new Date(2017, 11, 17))
    expect(
      XEUtils.getWhatWeek('2017-12-19', 0, 0, 0)
    ).toEqual(new Date(2017, 11, 17))
    expect(
      XEUtils.getWhatWeek('2017-12-23', 0, 0, 0)
    ).toEqual(new Date(2017, 11, 17))
    expect(
      XEUtils.getWhatWeek('2017-12-24', 0, 0, 0)
    ).toEqual(new Date(2017, 11, 24))
    expect(
      XEUtils.getWhatWeek('2017-12-26', 0, 0, 0)
    ).toEqual(new Date(2017, 11, 24))
    expect(
      XEUtils.getWhatWeek('2017-12-29', 0, 0, 0)
    ).toEqual(new Date(2017, 11, 24))
    expect(
      XEUtils.getWhatWeek('2017-12-30', 0, 0, 0)
    ).toEqual(new Date(2017, 11, 24))
    expect(
      XEUtils.getWhatWeek('2017-12-30', 0, 'first', 0)
    ).toEqual(new Date(2017, 11, 24))
    expect(
      XEUtils.getWhatWeek('2017-12-30', 0, 'last', 0)
    ).toEqual(new Date(2017, 11, 30))
    expect(
      XEUtils.getWhatWeek('2017-12-01', 0, 2, 0)
    ).toEqual(new Date(2017, 10, 28))
    expect(
      XEUtils.getWhatWeek('2017-12-18', 0, 2, 0)
    ).toEqual(new Date(2017, 11, 19))
    expect(
      XEUtils.getWhatWeek('2017-12-19', 0, 2, 0)
    ).toEqual(new Date(2017, 11, 19))
    expect(
      XEUtils.getWhatWeek('2017-12-23', 0, 2, 0)
    ).toEqual(new Date(2017, 11, 19))
    expect(
      XEUtils.getWhatWeek('2017-12-24', 0, 2, 0)
    ).toEqual(new Date(2017, 11, 26))
    expect(
      XEUtils.getWhatWeek('2017-12-26', 0, 2, 0)
    ).toEqual(new Date(2017, 11, 26))
    expect(
      XEUtils.getWhatWeek('2017-12-29', 0, 2, 0)
    ).toEqual(new Date(2017, 11, 26))
    expect(
      XEUtils.getWhatWeek('2017-12-30', 0, 2, 0)
    ).toEqual(new Date(2017, 11, 26))
    expect(
      XEUtils.getWhatWeek('2017-12-31', 0, 2, 0)
    ).toEqual(new Date(2018, 0, 2))

    expect(
      XEUtils.getWhatWeek('2017-12-01', 0, 0, 1)
    ).toEqual(new Date(2017, 11, 3))
    expect(
      XEUtils.getWhatWeek('2017-12-18', 0, 0, 1)
    ).toEqual(new Date(2017, 11, 24))
    expect(
      XEUtils.getWhatWeek('2017-12-19', 0, 0, 1)
    ).toEqual(new Date(2017, 11, 24))
    expect(
      XEUtils.getWhatWeek('2017-12-23', 0, 0, 1)
    ).toEqual(new Date(2017, 11, 24))
    expect(
      XEUtils.getWhatWeek('2017-12-24', 0, 0, 1)
    ).toEqual(new Date(2017, 11, 24))
    expect(
      XEUtils.getWhatWeek('2017-12-26', 0, 0, 1)
    ).toEqual(new Date(2017, 11, 31))
    expect(
      XEUtils.getWhatWeek('2017-12-29', 0, 0, 1)
    ).toEqual(new Date(2017, 11, 31))
    expect(
      XEUtils.getWhatWeek('2017-12-30', 0, 0, 1)
    ).toEqual(new Date(2017, 11, 31))
    expect(
      XEUtils.getWhatWeek('2017-12-30', 0, 'first', 1)
    ).toEqual(new Date(2017, 11, 25))
    expect(
      XEUtils.getWhatWeek('2017-12-30', 0, 'last', 1)
    ).toEqual(new Date(2017, 11, 31))
    expect(
      XEUtils.getWhatWeek('2017-12-01', 0, 3, 1)
    ).toEqual(new Date(2017, 10, 29))
    expect(
      XEUtils.getWhatWeek('2017-12-18', 0, 3, 1)
    ).toEqual(new Date(2017, 11, 20))
    expect(
      XEUtils.getWhatWeek('2017-12-19', 0, 3, 1)
    ).toEqual(new Date(2017, 11, 20))
    expect(
      XEUtils.getWhatWeek('2017-12-23', 0, 3, 1)
    ).toEqual(new Date(2017, 11, 20))
    expect(
      XEUtils.getWhatWeek('2017-12-24', 0, 3, 1)
    ).toEqual(new Date(2017, 11, 20))
    expect(
      XEUtils.getWhatWeek('2017-12-26', 0, 3, 1)
    ).toEqual(new Date(2017, 11, 27))
    expect(
      XEUtils.getWhatWeek('2017-12-29', 0, 3, 1)
    ).toEqual(new Date(2017, 11, 27))
    expect(
      XEUtils.getWhatWeek('2017-12-30', 0, 3, 1)
    ).toEqual(new Date(2017, 11, 27))

    expect(
      XEUtils.getWhatWeek('2017-12-01', 0, 0, 2)
    ).toEqual(new Date(2017, 11, 3))
    expect(
      XEUtils.getWhatWeek('2017-12-18', 0, 0, 2)
    ).toEqual(new Date(2017, 11, 17))
    expect(
      XEUtils.getWhatWeek('2017-12-19', 0, 0, 2)
    ).toEqual(new Date(2017, 11, 24))
    expect(
      XEUtils.getWhatWeek('2017-12-23', 0, 0, 2)
    ).toEqual(new Date(2017, 11, 24))
    expect(
      XEUtils.getWhatWeek('2017-12-24', 0, 0, 2)
    ).toEqual(new Date(2017, 11, 24))
    expect(
      XEUtils.getWhatWeek('2017-12-26', 0, 0, 2)
    ).toEqual(new Date(2017, 11, 31))
    expect(
      XEUtils.getWhatWeek('2017-12-29', 0, 0, 2)
    ).toEqual(new Date(2017, 11, 31))
    expect(
      XEUtils.getWhatWeek('2017-12-30', 0, 0, 2)
    ).toEqual(new Date(2017, 11, 31))
    expect(
      XEUtils.getWhatWeek('2017-12-30', 0, 'first', 2)
    ).toEqual(new Date(2017, 11, 26))
    expect(
      XEUtils.getWhatWeek('2017-12-30', 0, 'last', 2)
    ).toEqual(new Date(2018, 0, 1))
    expect(
      XEUtils.getWhatWeek('2017-12-01', 0, 4, 2)
    ).toEqual(new Date(2017, 10, 30))
    expect(
      XEUtils.getWhatWeek('2017-12-18', 0, 4, 2)
    ).toEqual(new Date(2017, 11, 14))
    expect(
      XEUtils.getWhatWeek('2017-12-19', 0, 4, 2)
    ).toEqual(new Date(2017, 11, 21))
    expect(
      XEUtils.getWhatWeek('2017-12-23', 0, 4, 2)
    ).toEqual(new Date(2017, 11, 21))
    expect(
      XEUtils.getWhatWeek('2017-12-24', 0, 4, 2)
    ).toEqual(new Date(2017, 11, 21))
    expect(
      XEUtils.getWhatWeek('2017-12-26', 0, 4, 2)
    ).toEqual(new Date(2017, 11, 28))
    expect(
      XEUtils.getWhatWeek('2017-12-29', 0, 4, 2)
    ).toEqual(new Date(2017, 11, 28))
    expect(
      XEUtils.getWhatWeek('2017-12-30', 0, 4, 2)
    ).toEqual(new Date(2017, 11, 28))

    expect(
      XEUtils.getWhatWeek('2017-12-01', 0, 0, 3)
    ).toEqual(new Date(2017, 11, 3))
    expect(
      XEUtils.getWhatWeek('2017-12-18', 0, 0, 3)
    ).toEqual(new Date(2017, 11, 17))
    expect(
      XEUtils.getWhatWeek('2017-12-19', 0, 0, 3)
    ).toEqual(new Date(2017, 11, 17))
    expect(
      XEUtils.getWhatWeek('2017-12-23', 0, 0, 3)
    ).toEqual(new Date(2017, 11, 24))
    expect(
      XEUtils.getWhatWeek('2017-12-24', 0, 0, 3)
    ).toEqual(new Date(2017, 11, 24))
    expect(
      XEUtils.getWhatWeek('2017-12-26', 0, 0, 3)
    ).toEqual(new Date(2017, 11, 24))
    expect(
      XEUtils.getWhatWeek('2017-12-29', 0, 0, 3)
    ).toEqual(new Date(2017, 11, 31))
    expect(
      XEUtils.getWhatWeek('2017-12-30', 0, 0, 3)
    ).toEqual(new Date(2017, 11, 31))
    expect(
      XEUtils.getWhatWeek('2017-12-01', 0, 6, 3)
    ).toEqual(new Date(2017, 11, 2))
    expect(
      XEUtils.getWhatWeek('2017-12-18', 0, 6, 3)
    ).toEqual(new Date(2017, 11, 16))
    expect(
      XEUtils.getWhatWeek('2017-12-19', 0, 6, 3)
    ).toEqual(new Date(2017, 11, 16))
    expect(
      XEUtils.getWhatWeek('2017-12-23', 0, 6, 3)
    ).toEqual(new Date(2017, 11, 23))
    expect(
      XEUtils.getWhatWeek('2017-12-24', 0, 6, 3)
    ).toEqual(new Date(2017, 11, 23))
    expect(
      XEUtils.getWhatWeek('2017-12-26', 0, 6, 3)
    ).toEqual(new Date(2017, 11, 23))
    expect(
      XEUtils.getWhatWeek('2017-12-29', 0, 6, 3)
    ).toEqual(new Date(2017, 11, 30))
    expect(
      XEUtils.getWhatWeek('2017-12-30', 0, 6, 3)
    ).toEqual(new Date(2017, 11, 30))
    expect(
      XEUtils.getWhatWeek('2017-12-29', 0, 'first', 3)
    ).toEqual(new Date(2017, 11, 27))
    expect(
      XEUtils.getWhatWeek('2017-12-30', 0, 'last', 3)
    ).toEqual(new Date(2018, 0, 2))

    expect(
      XEUtils.getWhatWeek('2017-12-01', 0, 0, 4)
    ).toEqual(new Date(2017, 11, 3))
    expect(
      XEUtils.getWhatWeek('2017-12-18', 0, 0, 4)
    ).toEqual(new Date(2017, 11, 17))
    expect(
      XEUtils.getWhatWeek('2017-12-19', 0, 0, 4)
    ).toEqual(new Date(2017, 11, 17))
    expect(
      XEUtils.getWhatWeek('2017-12-23', 0, 0, 4)
    ).toEqual(new Date(2017, 11, 24))
    expect(
      XEUtils.getWhatWeek('2017-12-24', 0, 0, 4)
    ).toEqual(new Date(2017, 11, 24))
    expect(
      XEUtils.getWhatWeek('2017-12-26', 0, 0, 4)
    ).toEqual(new Date(2017, 11, 24))
    expect(
      XEUtils.getWhatWeek('2017-12-29', 0, 0, 4)
    ).toEqual(new Date(2017, 11, 31))
    expect(
      XEUtils.getWhatWeek('2017-12-30', 0, 0, 4)
    ).toEqual(new Date(2017, 11, 31))
    expect(
      XEUtils.getWhatWeek('2017-12-01', 0, 2, 4)
    ).toEqual(new Date(2017, 11, 5))
    expect(
      XEUtils.getWhatWeek('2017-12-18', 0, 2, 4)
    ).toEqual(new Date(2017, 11, 19))
    expect(
      XEUtils.getWhatWeek('2017-12-19', 0, 2, 4)
    ).toEqual(new Date(2017, 11, 19))
    expect(
      XEUtils.getWhatWeek('2017-12-23', 0, 2, 4)
    ).toEqual(new Date(2017, 11, 26))
    expect(
      XEUtils.getWhatWeek('2017-12-24', 0, 2, 4)
    ).toEqual(new Date(2017, 11, 26))
    expect(
      XEUtils.getWhatWeek('2017-12-26', 0, 2, 4)
    ).toEqual(new Date(2017, 11, 26))
    expect(
      XEUtils.getWhatWeek('2017-12-29', 0, 2, 4)
    ).toEqual(new Date(2018, 0, 2))
    expect(
      XEUtils.getWhatWeek('2017-12-30', 0, 2, 4)
    ).toEqual(new Date(2018, 0, 2))
    expect(
      XEUtils.getWhatWeek('2017-12-29', 0, 'first', 4)
    ).toEqual(new Date(2017, 11, 28))
    expect(
      XEUtils.getWhatWeek('2017-12-30', 0, 'last', 4)
    ).toEqual(new Date(2018, 0, 3))

    expect(
      XEUtils.getWhatWeek('2017-12-01', 0, 0, 5)
    ).toEqual(new Date(2017, 11, 3))
    expect(
      XEUtils.getWhatWeek('2017-12-18', 0, 0, 5)
    ).toEqual(new Date(2017, 11, 17))
    expect(
      XEUtils.getWhatWeek('2017-12-19', 0, 0, 5)
    ).toEqual(new Date(2017, 11, 17))
    expect(
      XEUtils.getWhatWeek('2017-12-23', 0, 0, 5)
    ).toEqual(new Date(2017, 11, 24))
    expect(
      XEUtils.getWhatWeek('2017-12-24', 0, 0, 5)
    ).toEqual(new Date(2017, 11, 24))
    expect(
      XEUtils.getWhatWeek('2017-12-26', 0, 0, 5)
    ).toEqual(new Date(2017, 11, 24))
    expect(
      XEUtils.getWhatWeek('2017-12-29', 0, 0, 5)
    ).toEqual(new Date(2017, 11, 31))
    expect(
      XEUtils.getWhatWeek('2017-12-30', 0, 0, 5)
    ).toEqual(new Date(2017, 11, 31))
    expect(
      XEUtils.getWhatWeek('2017-12-01', 0, 6, 5)
    ).toEqual(new Date(2017, 11, 2))
    expect(
      XEUtils.getWhatWeek('2017-12-18', 0, 6, 5)
    ).toEqual(new Date(2017, 11, 16))
    expect(
      XEUtils.getWhatWeek('2017-12-19', 0, 6, 5)
    ).toEqual(new Date(2017, 11, 16))
    expect(
      XEUtils.getWhatWeek('2017-12-23', 0, 6, 5)
    ).toEqual(new Date(2017, 11, 23))
    expect(
      XEUtils.getWhatWeek('2017-12-24', 0, 6, 5)
    ).toEqual(new Date(2017, 11, 23))
    expect(
      XEUtils.getWhatWeek('2017-12-26', 0, 6, 5)
    ).toEqual(new Date(2017, 11, 23))
    expect(
      XEUtils.getWhatWeek('2017-12-29', 0, 6, 5)
    ).toEqual(new Date(2017, 11, 30))
    expect(
      XEUtils.getWhatWeek('2017-12-30', 0, 6, 5)
    ).toEqual(new Date(2017, 11, 30))
    expect(
      XEUtils.getWhatWeek('2017-12-29', 0, 'first', 5)
    ).toEqual(new Date(2017, 11, 29))
    expect(
      XEUtils.getWhatWeek('2017-12-30', 0, 'last', 5)
    ).toEqual(new Date(2018, 0, 4))

    expect(
      XEUtils.getWhatWeek('2017-12-01', 0, 0, 6)
    ).toEqual(new Date(2017, 10, 26))
    expect(
      XEUtils.getWhatWeek('2017-12-15', 0, 0, 6)
    ).toEqual(new Date(2017, 11, 10))
    expect(
      XEUtils.getWhatWeek('2017-12-18', 0, 0, 6)
    ).toEqual(new Date(2017, 11, 17))
    expect(
      XEUtils.getWhatWeek('2017-12-19', 0, 0, 6)
    ).toEqual(new Date(2017, 11, 17))
    expect(
      XEUtils.getWhatWeek('2017-12-23', 0, 0, 6)
    ).toEqual(new Date(2017, 11, 24))
    expect(
      XEUtils.getWhatWeek('2017-12-24', 0, 0, 6)
    ).toEqual(new Date(2017, 11, 24))
    expect(
      XEUtils.getWhatWeek('2017-12-26', 0, 0, 6)
    ).toEqual(new Date(2017, 11, 24))
    expect(
      XEUtils.getWhatWeek('2017-12-29', 0, 0, 6)
    ).toEqual(new Date(2017, 11, 24))
    expect(
      XEUtils.getWhatWeek('2017-12-30', 0, 0, 6)
    ).toEqual(new Date(2017, 11, 31))
    expect(
      XEUtils.getWhatWeek('2017-12-01', 0, 2, 6)
    ).toEqual(new Date(2017, 10, 28))
    expect(
      XEUtils.getWhatWeek('2017-12-15', 0, 2, 6)
    ).toEqual(new Date(2017, 11, 12))
    expect(
      XEUtils.getWhatWeek('2017-12-18', 0, 2, 6)
    ).toEqual(new Date(2017, 11, 19))
    expect(
      XEUtils.getWhatWeek('2017-12-19', 0, 2, 6)
    ).toEqual(new Date(2017, 11, 19))
    expect(
      XEUtils.getWhatWeek('2017-12-23', 0, 2, 6)
    ).toEqual(new Date(2017, 11, 26))
    expect(
      XEUtils.getWhatWeek('2017-12-24', 0, 2, 6)
    ).toEqual(new Date(2017, 11, 26))
    expect(
      XEUtils.getWhatWeek('2017-12-26', 0, 2, 6)
    ).toEqual(new Date(2017, 11, 26))
    expect(
      XEUtils.getWhatWeek('2017-12-29', 0, 2, 6)
    ).toEqual(new Date(2017, 11, 26))
    expect(
      XEUtils.getWhatWeek('2017-12-30', 0, 2, 6)
    ).toEqual(new Date(2018, 0, 2))
    expect(
      XEUtils.getWhatWeek('2017-12-29', 0, 'first', 6)
    ).toEqual(new Date(2017, 11, 23))
    expect(
      XEUtils.getWhatWeek('2017-12-29', 0, 'last', 6)
    ).toEqual(new Date(2017, 11, 29))
    expect(
      XEUtils.getWhatWeek('2017-12-30', 0, 'last', 6)
    ).toEqual(new Date(2018, 0, 5))
  })

  test('getWhatDay()', () => {
    expect(
      XEUtils.getWhatDay().toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatDay(0).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatDay(-1).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatDay(123).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatDay(null).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatDay(undefined).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatDay({}).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatDay([]).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatDay([2018, 1, 1]).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatDay({ time: 2018 }).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatDay('null').toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatDay(new Date('')).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatDay(new Date('abc')).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatDay(date, -1)
    ).toEqual(new Date(2016, 11, 31, 14, 5, 30, 99))
    expect(
      XEUtils.getWhatDay(time, 1)
    ).toEqual(new Date(2017, 0, 2, 14, 5, 30, 99))
    expect(
      XEUtils.getWhatDay('2017-12-20', -1)
    ).toEqual(new Date(2017, 11, 19))
    expect(
      XEUtils.getWhatDay(new Date(2017, 11, 10), -1)
    ).toEqual(new Date(2017, 11, 9))
    expect(
      XEUtils.getWhatDay('2017-12-20', 1)
    ).toEqual(new Date(2017, 11, 21))
    expect(
      XEUtils.getWhatDay('2017-12-20', 0, 'first')
    ).toEqual(new Date(2017, 11, 20, 0, 0, 0, 0))
    expect(
      XEUtils.getWhatDay('2017-12-20', 0, 'last')
    ).toEqual(new Date(2017, 11, 20, 23, 59, 59, 999))
  })

  test('getWhatHours()', () => {
    expect(
      XEUtils.getWhatHours().toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatHours(0).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatHours(-1).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatHours(123).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatHours(null).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatHours(undefined).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatHours({}).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatHours([]).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatHours([2018, 1, 1]).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatHours({ time: 2018 }).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatHours('null').toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatHours(new Date('')).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatHours(new Date('abc')).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatHours(date, -1)
    ).toEqual(new Date(2017, 0, 1, 13, 5, 30, 99))
    expect(
      XEUtils.getWhatHours(time, 1)
    ).toEqual(new Date(2017, 0, 1, 15, 5, 30, 99))
    expect(
      XEUtils.getWhatHours('2017-12-20 12', -1)
    ).toEqual(new Date(2017, 11, 20, 11))
    expect(
      XEUtils.getWhatHours(new Date(2017, 11, 10, 12), -1)
    ).toEqual(new Date(2017, 11, 10, 11))
    expect(
      XEUtils.getWhatHours('2017-12-20 12', 1)
    ).toEqual(new Date(2017, 11, 20, 13))
    expect(
      XEUtils.getWhatHours('2017-12-20 12', 0, 'first')
    ).toEqual(new Date(2017, 11, 20, 12, 0, 0, 0))
    expect(
      XEUtils.getWhatHours('2017-12-20 12', 0, 'last')
    ).toEqual(new Date(2017, 11, 20, 12, 59, 59, 999))
  })

  test('getWhatMinutes()', () => {
    expect(
      XEUtils.getWhatMinutes().toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatMinutes(0).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatMinutes(-1).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatMinutes(123).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatMinutes(null).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatMinutes(undefined).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatMinutes({}).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatMinutes([]).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatMinutes([2018, 1, 1]).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatMinutes({ time: 2018 }).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatMinutes('null').toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatMinutes(new Date('')).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatMinutes(new Date('abc')).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatMinutes(date, -1)
    ).toEqual(new Date(2017, 0, 1, 14, 4, 30, 99))
    expect(
      XEUtils.getWhatMinutes(time, 1)
    ).toEqual(new Date(2017, 0, 1, 14, 6, 30, 99))
    expect(
      XEUtils.getWhatMinutes('2017-12-20 12:30', -1)
    ).toEqual(new Date(2017, 11, 20, 12, 29))
    expect(
      XEUtils.getWhatMinutes(new Date(2017, 11, 10, 12, 30), -1)
    ).toEqual(new Date(2017, 11, 10, 12, 29))
    expect(
      XEUtils.getWhatMinutes('2017-12-20 12:30', 1)
    ).toEqual(new Date(2017, 11, 20, 12, 31))
    expect(
      XEUtils.getWhatMinutes('2017-12-20 12:30', 0, 'first')
    ).toEqual(new Date(2017, 11, 20, 12, 30, 0, 0))
    expect(
      XEUtils.getWhatMinutes('2017-12-20 12:30', 0, 'last')
    ).toEqual(new Date(2017, 11, 20, 12, 30, 59, 999))
  })

  test('getWhatSeconds()', () => {
    expect(
      XEUtils.getWhatSeconds().toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatSeconds(0).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatSeconds(-1).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatSeconds(123).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatSeconds(null).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatSeconds(undefined).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatSeconds({}).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatSeconds([]).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatSeconds([2018, 1, 1]).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatSeconds({ time: 2018 }).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatSeconds('null').toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatSeconds(new Date('')).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatSeconds(new Date('abc')).toString()
    ).toEqual('Invalid Date')
    expect(
      XEUtils.getWhatSeconds(date, -1)
    ).toEqual(new Date(2017, 0, 1, 14, 5, 29, 99))
    expect(
      XEUtils.getWhatSeconds(time, 1)
    ).toEqual(new Date(2017, 0, 1, 14, 5, 31, 99))
    expect(
      XEUtils.getWhatSeconds('2017-12-20 12:30:40', -1)
    ).toEqual(new Date(2017, 11, 20, 12, 30, 39))
    expect(
      XEUtils.getWhatSeconds(new Date(2017, 11, 10, 12, 30, 40), -1)
    ).toEqual(new Date(2017, 11, 10, 12, 30, 39))
    expect(
      XEUtils.getWhatSeconds('2017-12-20 12:30:40', 1)
    ).toEqual(new Date(2017, 11, 20, 12, 30, 41))
    expect(
      XEUtils.getWhatSeconds('2017-12-20 12:30:40', 0, 'first')
    ).toEqual(new Date(2017, 11, 20, 12, 30, 40, 0))
    expect(
      XEUtils.getWhatSeconds('2017-12-20 12:30:40', 0, 'last')
    ).toEqual(new Date(2017, 11, 20, 12, 30, 40, 999))
  })

  test('getYearDay()', () => {
    expect(
      XEUtils.getYearDay().toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getYearDay(0).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getYearDay(-1).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getYearDay(null).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getYearDay(undefined).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getYearDay({}).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getYearDay([]).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getYearDay([2018, 1, 1]).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getYearDay({ time: 2018 }).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getYearDay('null').toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getYearDay(new Date('')).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getYearDay(new Date('abc')).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getYearDay(date)
    ).toEqual(1)
    expect(
      XEUtils.getYearDay('2017-01-20')
    ).toEqual(20)
    expect(
      XEUtils.getYearDay('2018-05-20 08:00:00')
    ).toEqual(140)
    expect(
      XEUtils.getYearDay('2018-05-20 12:00:00')
    ).toEqual(140)
    expect(
      XEUtils.getYearDay('2018-05-20 18:00:00')
    ).toEqual(140)
    expect(
      XEUtils.getYearDay('2018-05-20')
    ).toEqual(140)
  })

  test('getYearWeek()', () => {
    // 默认视图
    expect(
      XEUtils.getYearWeek().toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getYearWeek(0).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getYearWeek(null).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getYearWeek(undefined).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getYearWeek({}).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getYearWeek([]).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getYearWeek([2018, 1, 1]).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getYearWeek({ time: 2018 }).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getYearWeek('null').toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getYearWeek(new Date('')).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getYearWeek(new Date('abc')).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getYearWeek(date)
    ).toEqual(52)
    expect(
      XEUtils.getYearWeek('2017-01-01')
    ).toEqual(52)
    expect(
      XEUtils.getYearWeek('2017-01-01') === XEUtils.getYearWeek(new Date(2017, 0, 1))
    ).toEqual(true)
    expect(
      XEUtils.getYearWeek('2017-01-20')
    ).toEqual(3)
    expect(
      XEUtils.getYearWeek('2017-01-28 18:00:00')
    ).toEqual(4)
    expect(
      XEUtils.getYearWeek(new Date(2017, 0, 28))
    ).toEqual(4)
    expect(
      XEUtils.getYearWeek('2017-01-28') === XEUtils.getYearWeek(new Date(2017, 0, 28))
    ).toEqual(true)
    expect(
      XEUtils.getYearWeek('2018-05-20 08:00:00')
    ).toEqual(20)
    expect(
      XEUtils.getYearWeek('2018-11-20 12:00:00')
    ).toEqual(47)
    expect(
      XEUtils.getYearWeek('2018-11-20') === XEUtils.getYearWeek(new Date(2018, 10, 20))
    ).toEqual(true)
    expect(
      XEUtils.getYearWeek(new Date(2018, 10, 20))
    ).toEqual(47)
    expect(
      XEUtils.getYearWeek('2018-12-20 ')
    ).toEqual(51)

    // 默认星期一
    expect(XEUtils.getYearWeek('2020-12-27')).toEqual(52)
    expect(XEUtils.getYearWeek('2020-12-28')).toEqual(53)
    expect(XEUtils.getYearWeek('2020-12-29')).toEqual(53)
    expect(XEUtils.getYearWeek('2020-12-30')).toEqual(53)
    expect(XEUtils.getYearWeek('2020-12-31')).toEqual(53)
    expect(XEUtils.getYearWeek('2021-01-01')).toEqual(53)
    expect(XEUtils.getYearWeek('2021-01-02')).toEqual(53)
    expect(XEUtils.getYearWeek('2021-01-03')).toEqual(53)
    expect(XEUtils.getYearWeek('2021-01-04')).toEqual(1)

    // 周日视图
    expect(XEUtils.getYearWeek('2019-12-28', 0)).toEqual(52)
    expect(XEUtils.getYearWeek('2019-12-29', 0)).toEqual(1)

    expect(XEUtils.getYearWeek('2019-12-30', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2019-12-31', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2020-01-01', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2020-01-02', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2020-01-03', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2020-01-04', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2020-01-05', 0)).toEqual(2)

    expect(XEUtils.getYearWeek('2020-12-26', 0)).toEqual(52)
    expect(XEUtils.getYearWeek('2020-12-27', 0)).toEqual(53)

    expect(XEUtils.getYearWeek('2020-12-28', 0)).toEqual(53)
    expect(XEUtils.getYearWeek('2020-12-29', 0)).toEqual(53)
    expect(XEUtils.getYearWeek('2020-12-30', 0)).toEqual(53)
    expect(XEUtils.getYearWeek('2020-12-31', 0)).toEqual(53)
    expect(XEUtils.getYearWeek('2021-01-01', 0)).toEqual(53)
    expect(XEUtils.getYearWeek('2021-01-02', 0)).toEqual(53)
    expect(XEUtils.getYearWeek('2021-01-03', 0)).toEqual(1)

    expect(XEUtils.getYearWeek('2021-01-04', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2021-01-05', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2021-01-06', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2021-01-07', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2021-01-08', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2021-01-09', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2021-01-10', 0)).toEqual(2)

    expect(XEUtils.getYearWeek('2021-01-11', 0)).toEqual(2)
    expect(XEUtils.getYearWeek('2021-01-12', 0)).toEqual(2)

    expect(XEUtils.getYearWeek('2021-12-25', 0)).toEqual(51)
    expect(XEUtils.getYearWeek('2021-12-26', 0)).toEqual(52)

    expect(XEUtils.getYearWeek('2021-12-27', 0)).toEqual(52)
    expect(XEUtils.getYearWeek('2021-12-28', 0)).toEqual(52)
    expect(XEUtils.getYearWeek('2021-12-29', 0)).toEqual(52)
    expect(XEUtils.getYearWeek('2021-12-30', 0)).toEqual(52)
    expect(XEUtils.getYearWeek('2021-12-31', 0)).toEqual(52)
    expect(XEUtils.getYearWeek('2022-01-01', 0)).toEqual(52)
    expect(XEUtils.getYearWeek('2022-01-02', 0)).toEqual(1)

    expect(XEUtils.getYearWeek('2022-01-03', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2022-01-04', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2022-01-05', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2022-01-06', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2022-01-07', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2022-01-08', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2022-01-09', 0)).toEqual(2)

    expect(XEUtils.getYearWeek('2022-01-10', 0)).toEqual(2)
    expect(XEUtils.getYearWeek('2022-01-11', 0)).toEqual(2)

    expect(XEUtils.getYearWeek('2022-12-24', 0)).toEqual(51)
    expect(XEUtils.getYearWeek('2022-12-25', 0)).toEqual(52)

    expect(XEUtils.getYearWeek('2022-12-26', 0)).toEqual(52)
    expect(XEUtils.getYearWeek('2022-12-27', 0)).toEqual(52)
    expect(XEUtils.getYearWeek('2022-12-28', 0)).toEqual(52)
    expect(XEUtils.getYearWeek('2022-12-29', 0)).toEqual(52)
    expect(XEUtils.getYearWeek('2022-12-30', 0)).toEqual(52)
    expect(XEUtils.getYearWeek('2022-12-31', 0)).toEqual(52)
    expect(XEUtils.getYearWeek('2023-01-01', 0)).toEqual(1)

    expect(XEUtils.getYearWeek('2023-01-02', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2023-01-03', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2023-01-04', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2023-01-05', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2023-01-06', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2023-01-07', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2023-01-08', 0)).toEqual(2)

    expect(XEUtils.getYearWeek('2023-01-09', 0)).toEqual(2)
    expect(XEUtils.getYearWeek('2023-01-10', 0)).toEqual(2)

    expect(XEUtils.getYearWeek('2023-12-23', 0)).toEqual(51)
    expect(XEUtils.getYearWeek('2023-12-24', 0)).toEqual(52)

    expect(XEUtils.getYearWeek('2023-12-25', 0)).toEqual(52)
    expect(XEUtils.getYearWeek('2023-12-26', 0)).toEqual(52)
    expect(XEUtils.getYearWeek('2023-12-27', 0)).toEqual(52)
    expect(XEUtils.getYearWeek('2023-12-28', 0)).toEqual(52)
    expect(XEUtils.getYearWeek('2023-12-29', 0)).toEqual(52)
    expect(XEUtils.getYearWeek('2023-12-30', 0)).toEqual(52)
    expect(XEUtils.getYearWeek('2023-12-31', 0)).toEqual(1)

    expect(XEUtils.getYearWeek('2024-01-01', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2024-01-02', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2024-01-03', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2024-01-04', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2024-01-05', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2024-01-06', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2024-01-07', 0)).toEqual(2)

    expect(XEUtils.getYearWeek('2024-01-08', 0)).toEqual(2)
    expect(XEUtils.getYearWeek('2024-01-09', 0)).toEqual(2)

    expect(XEUtils.getYearWeek('2024-12-21', 0)).toEqual(51)
    expect(XEUtils.getYearWeek('2024-12-22', 0)).toEqual(52)

    expect(XEUtils.getYearWeek('2024-12-23', 0)).toEqual(52)
    expect(XEUtils.getYearWeek('2024-12-24', 0)).toEqual(52)
    expect(XEUtils.getYearWeek('2024-12-25', 0)).toEqual(52)
    expect(XEUtils.getYearWeek('2024-12-26', 0)).toEqual(52)
    expect(XEUtils.getYearWeek('2024-12-27', 0)).toEqual(52)
    expect(XEUtils.getYearWeek('2024-12-28', 0)).toEqual(52)
    expect(XEUtils.getYearWeek('2024-12-29', 0)).toEqual(1)

    expect(XEUtils.getYearWeek('2024-12-30', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2024-12-31', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2025-01-01', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2025-01-02', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2025-01-03', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2025-01-04', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2025-01-05', 0)).toEqual(2)

    expect(XEUtils.getYearWeek('2025-01-06', 0)).toEqual(2)
    expect(XEUtils.getYearWeek('2025-01-07', 0)).toEqual(2)
    expect(XEUtils.getYearWeek('2025-01-08', 0)).toEqual(2)
    expect(XEUtils.getYearWeek('2025-01-09', 0)).toEqual(2)
    expect(XEUtils.getYearWeek('2025-01-10', 0)).toEqual(2)
    expect(XEUtils.getYearWeek('2025-01-11', 0)).toEqual(2)
    expect(XEUtils.getYearWeek('2025-01-12', 0)).toEqual(3)

    expect(XEUtils.getYearWeek('2025-01-13', 0)).toEqual(3)
    expect(XEUtils.getYearWeek('2025-01-14', 0)).toEqual(3)

    expect(XEUtils.getYearWeek('2025-12-20', 0)).toEqual(51)
    expect(XEUtils.getYearWeek('2025-12-21', 0)).toEqual(52)

    expect(XEUtils.getYearWeek('2025-12-22', 0)).toEqual(52)
    expect(XEUtils.getYearWeek('2025-12-23', 0)).toEqual(52)
    expect(XEUtils.getYearWeek('2025-12-24', 0)).toEqual(52)
    expect(XEUtils.getYearWeek('2025-12-25', 0)).toEqual(52)
    expect(XEUtils.getYearWeek('2025-12-26', 0)).toEqual(52)
    expect(XEUtils.getYearWeek('2025-12-27', 0)).toEqual(52)
    expect(XEUtils.getYearWeek('2025-12-28', 0)).toEqual(53)

    expect(XEUtils.getYearWeek('2025-12-29', 0)).toEqual(53)
    expect(XEUtils.getYearWeek('2025-12-30', 0)).toEqual(53)
    expect(XEUtils.getYearWeek('2025-12-31', 0)).toEqual(53)
    expect(XEUtils.getYearWeek('2026-01-01', 0)).toEqual(53)
    expect(XEUtils.getYearWeek('2026-01-02', 0)).toEqual(53)
    expect(XEUtils.getYearWeek('2026-01-03', 0)).toEqual(53)
    expect(XEUtils.getYearWeek('2026-01-04', 0)).toEqual(1)

    expect(XEUtils.getYearWeek('2026-01-05', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2026-01-06', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2026-01-07', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2026-01-08', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2026-01-09', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2026-01-10', 0)).toEqual(1)
    expect(XEUtils.getYearWeek('2026-01-11', 0)).toEqual(2)

    expect(XEUtils.getYearWeek('2026-01-12', 0)).toEqual(2)
    expect(XEUtils.getYearWeek('2026-01-13', 0)).toEqual(2)

    expect(
      XEUtils.getYearWeek('2013-01-01', 0)
    ).toEqual(1)
    expect(
      XEUtils.getYearWeek('2013-01-06', 0)
    ).toEqual(2)
    expect(
      XEUtils.getYearWeek('2013-01-07', 0)
    ).toEqual(2)
    expect(
      XEUtils.getYearWeek('2013-01-27', 0)
    ).toEqual(5)
    expect(
      XEUtils.getYearWeek('2013-01-31', 0)
    ).toEqual(5)
    expect(
      XEUtils.getYearWeek('2021-01-01 08:00:00', 0)
    ).toEqual(53)
    expect(
      XEUtils.getYearWeek('2021-01-10 12:00:00', 0)
    ).toEqual(2)
    expect(
      XEUtils.getYearWeek('2021-01-31 18:00:00', 0)
    ).toEqual(5)
    expect(
      XEUtils.getYearWeek('2021-12-05', 0)
    ).toEqual(49)
    expect(
      XEUtils.getYearWeek('2021-12-08', 0)
    ).toEqual(49)

    // 周六视图
    expect(XEUtils.getYearWeek('2019-12-28', 6)).toEqual(53)
    expect(XEUtils.getYearWeek('2019-12-29', 6)).toEqual(53)

    expect(XEUtils.getYearWeek('2019-12-30', 6)).toEqual(53)
    expect(XEUtils.getYearWeek('2019-12-31', 6)).toEqual(53)
    expect(XEUtils.getYearWeek('2020-01-01', 6)).toEqual(53)
    expect(XEUtils.getYearWeek('2020-01-02', 6)).toEqual(53)
    expect(XEUtils.getYearWeek('2020-01-03', 6)).toEqual(53)
    expect(XEUtils.getYearWeek('2020-01-04', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2020-01-05', 6)).toEqual(1)

    expect(XEUtils.getYearWeek('2020-12-26', 6)).toEqual(52)
    expect(XEUtils.getYearWeek('2020-12-27', 6)).toEqual(52)

    expect(XEUtils.getYearWeek('2020-12-28', 6)).toEqual(52)
    expect(XEUtils.getYearWeek('2020-12-29', 6)).toEqual(52)
    expect(XEUtils.getYearWeek('2020-12-30', 6)).toEqual(52)
    expect(XEUtils.getYearWeek('2020-12-31', 6)).toEqual(52)
    expect(XEUtils.getYearWeek('2021-01-01', 6)).toEqual(52)
    expect(XEUtils.getYearWeek('2021-01-02', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2021-01-03', 6)).toEqual(1)

    expect(XEUtils.getYearWeek('2021-01-04', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2021-01-05', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2021-01-06', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2021-01-07', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2021-01-08', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2021-01-09', 6)).toEqual(2)
    expect(XEUtils.getYearWeek('2021-01-10', 6)).toEqual(2)

    expect(XEUtils.getYearWeek('2021-01-11', 6)).toEqual(2)
    expect(XEUtils.getYearWeek('2021-01-12', 6)).toEqual(2)

    expect(XEUtils.getYearWeek('2021-12-25', 6)).toEqual(52)
    expect(XEUtils.getYearWeek('2021-12-26', 6)).toEqual(52)

    expect(XEUtils.getYearWeek('2021-12-27', 6)).toEqual(52)
    expect(XEUtils.getYearWeek('2021-12-28', 6)).toEqual(52)
    expect(XEUtils.getYearWeek('2021-12-29', 6)).toEqual(52)
    expect(XEUtils.getYearWeek('2021-12-30', 6)).toEqual(52)
    expect(XEUtils.getYearWeek('2021-12-31', 6)).toEqual(52)
    expect(XEUtils.getYearWeek('2022-01-01', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2022-01-02', 6)).toEqual(1)

    expect(XEUtils.getYearWeek('2022-01-03', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2022-01-04', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2022-01-05', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2022-01-06', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2022-01-07', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2022-01-08', 6)).toEqual(2)
    expect(XEUtils.getYearWeek('2022-01-09', 6)).toEqual(2)

    expect(XEUtils.getYearWeek('2022-01-10', 6)).toEqual(2)
    expect(XEUtils.getYearWeek('2022-01-11', 6)).toEqual(2)

    expect(XEUtils.getYearWeek('2022-12-24', 6)).toEqual(52)
    expect(XEUtils.getYearWeek('2022-12-25', 6)).toEqual(52)

    expect(XEUtils.getYearWeek('2022-12-26', 6)).toEqual(52)
    expect(XEUtils.getYearWeek('2022-12-27', 6)).toEqual(52)
    expect(XEUtils.getYearWeek('2022-12-28', 6)).toEqual(52)
    expect(XEUtils.getYearWeek('2022-12-29', 6)).toEqual(52)
    expect(XEUtils.getYearWeek('2022-12-30', 6)).toEqual(52)
    expect(XEUtils.getYearWeek('2022-12-31', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2023-01-01', 6)).toEqual(1)

    expect(XEUtils.getYearWeek('2023-01-02', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2023-01-03', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2023-01-04', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2023-01-05', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2023-01-06', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2023-01-07', 6)).toEqual(2)
    expect(XEUtils.getYearWeek('2023-01-08', 6)).toEqual(2)

    expect(XEUtils.getYearWeek('2023-01-09', 6)).toEqual(2)
    expect(XEUtils.getYearWeek('2023-01-10', 6)).toEqual(2)

    expect(XEUtils.getYearWeek('2023-12-23', 6)).toEqual(52)
    expect(XEUtils.getYearWeek('2023-12-24', 6)).toEqual(52)

    expect(XEUtils.getYearWeek('2023-12-25', 6)).toEqual(52)
    expect(XEUtils.getYearWeek('2023-12-26', 6)).toEqual(52)
    expect(XEUtils.getYearWeek('2023-12-27', 6)).toEqual(52)
    expect(XEUtils.getYearWeek('2023-12-28', 6)).toEqual(52)
    expect(XEUtils.getYearWeek('2023-12-29', 6)).toEqual(52)
    expect(XEUtils.getYearWeek('2023-12-30', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2023-12-31', 6)).toEqual(1)

    expect(XEUtils.getYearWeek('2024-01-01', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2024-01-02', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2024-01-03', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2024-01-04', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2024-01-05', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2024-01-06', 6)).toEqual(2)
    expect(XEUtils.getYearWeek('2024-01-07', 6)).toEqual(2)

    expect(XEUtils.getYearWeek('2024-01-08', 6)).toEqual(2)
    expect(XEUtils.getYearWeek('2024-01-09', 6)).toEqual(2)

    expect(XEUtils.getYearWeek('2024-12-21', 6)).toEqual(52)
    expect(XEUtils.getYearWeek('2024-12-22', 6)).toEqual(52)

    expect(XEUtils.getYearWeek('2024-12-23', 6)).toEqual(52)
    expect(XEUtils.getYearWeek('2024-12-24', 6)).toEqual(52)
    expect(XEUtils.getYearWeek('2024-12-25', 6)).toEqual(52)
    expect(XEUtils.getYearWeek('2024-12-26', 6)).toEqual(52)
    expect(XEUtils.getYearWeek('2024-12-27', 6)).toEqual(52)
    expect(XEUtils.getYearWeek('2024-12-28', 6)).toEqual(53)
    expect(XEUtils.getYearWeek('2024-12-29', 6)).toEqual(53)

    expect(XEUtils.getYearWeek('2024-12-30', 6)).toEqual(53)
    expect(XEUtils.getYearWeek('2024-12-31', 6)).toEqual(53)
    expect(XEUtils.getYearWeek('2025-01-01', 6)).toEqual(53)
    expect(XEUtils.getYearWeek('2025-01-02', 6)).toEqual(53)
    expect(XEUtils.getYearWeek('2025-01-03', 6)).toEqual(53)
    expect(XEUtils.getYearWeek('2025-01-04', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2025-01-05', 6)).toEqual(1)

    expect(XEUtils.getYearWeek('2025-01-06', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2025-01-07', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2025-01-08', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2025-01-09', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2025-01-10', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2025-01-11', 6)).toEqual(2)
    expect(XEUtils.getYearWeek('2025-01-12', 6)).toEqual(2)

    expect(XEUtils.getYearWeek('2025-01-13', 6)).toEqual(2)
    expect(XEUtils.getYearWeek('2025-01-14', 6)).toEqual(2)

    expect(XEUtils.getYearWeek('2025-12-20', 6)).toEqual(51)
    expect(XEUtils.getYearWeek('2025-12-21', 6)).toEqual(51)

    expect(XEUtils.getYearWeek('2025-12-22', 6)).toEqual(51)
    expect(XEUtils.getYearWeek('2025-12-23', 6)).toEqual(51)
    expect(XEUtils.getYearWeek('2025-12-24', 6)).toEqual(51)
    expect(XEUtils.getYearWeek('2025-12-25', 6)).toEqual(51)
    expect(XEUtils.getYearWeek('2025-12-26', 6)).toEqual(51)
    expect(XEUtils.getYearWeek('2025-12-27', 6)).toEqual(52)
    expect(XEUtils.getYearWeek('2025-12-28', 6)).toEqual(52)

    expect(XEUtils.getYearWeek('2025-12-29', 6)).toEqual(52)
    expect(XEUtils.getYearWeek('2025-12-30', 6)).toEqual(52)
    expect(XEUtils.getYearWeek('2025-12-31', 6)).toEqual(52)
    expect(XEUtils.getYearWeek('2026-01-01', 6)).toEqual(52)
    expect(XEUtils.getYearWeek('2026-01-02', 6)).toEqual(52)
    expect(XEUtils.getYearWeek('2026-01-03', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2026-01-04', 6)).toEqual(1)

    expect(XEUtils.getYearWeek('2026-01-05', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2026-01-06', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2026-01-07', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2026-01-08', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2026-01-09', 6)).toEqual(1)
    expect(XEUtils.getYearWeek('2026-01-10', 6)).toEqual(2)
    expect(XEUtils.getYearWeek('2026-01-11', 6)).toEqual(2)

    expect(XEUtils.getYearWeek('2026-01-12', 6)).toEqual(2)
    expect(XEUtils.getYearWeek('2026-01-13', 6)).toEqual(2)

    expect(
      XEUtils.getYearWeek('2013-01-01', 6)
    ).toEqual(1)
    expect(
      XEUtils.getYearWeek('2013-01-06', 6)
    ).toEqual(2)
    expect(
      XEUtils.getYearWeek('2013-01-07', 6)
    ).toEqual(2)
    expect(
      XEUtils.getYearWeek('2013-01-27', 6)
    ).toEqual(5)
    expect(
      XEUtils.getYearWeek('2013-01-31', 6)
    ).toEqual(5)
    expect(
      XEUtils.getYearWeek('2021-01-01 08:00:00', 6)
    ).toEqual(52)
    expect(
      XEUtils.getYearWeek('2021-01-10 12:00:00', 6)
    ).toEqual(2)
    expect(
      XEUtils.getYearWeek('2021-01-31 18:00:00', 6)
    ).toEqual(5)
    expect(
      XEUtils.getYearWeek('2021-12-05', 6)
    ).toEqual(49)
    expect(
      XEUtils.getYearWeek('2021-12-08', 6)
    ).toEqual(49)

    // 周一视图
    expect(XEUtils.getYearWeek('2019-12-28', 1)).toEqual(52)
    expect(XEUtils.getYearWeek('2019-12-29', 1)).toEqual(52)

    expect(XEUtils.getYearWeek('2019-12-30', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2019-12-31', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2020-01-01', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2020-01-02', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2020-01-03', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2020-01-04', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2020-01-05', 1)).toEqual(1)

    expect(XEUtils.getYearWeek('2020-12-26', 1)).toEqual(52)
    expect(XEUtils.getYearWeek('2020-12-27', 1)).toEqual(52)

    expect(XEUtils.getYearWeek('2020-12-28', 1)).toEqual(53)
    expect(XEUtils.getYearWeek('2020-12-29', 1)).toEqual(53)
    expect(XEUtils.getYearWeek('2020-12-30', 1)).toEqual(53)
    expect(XEUtils.getYearWeek('2020-12-31', 1)).toEqual(53)
    expect(XEUtils.getYearWeek('2021-01-01', 1)).toEqual(53)
    expect(XEUtils.getYearWeek('2021-01-02', 1)).toEqual(53)
    expect(XEUtils.getYearWeek('2021-01-03', 1)).toEqual(53)

    expect(XEUtils.getYearWeek('2021-01-04', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2021-01-05', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2021-01-06', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2021-01-07', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2021-01-08', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2021-01-09', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2021-01-10', 1)).toEqual(1)

    expect(XEUtils.getYearWeek('2021-01-11', 1)).toEqual(2)
    expect(XEUtils.getYearWeek('2021-01-12', 1)).toEqual(2)

    expect(XEUtils.getYearWeek('2021-12-25', 1)).toEqual(51)
    expect(XEUtils.getYearWeek('2021-12-26', 1)).toEqual(51)

    expect(XEUtils.getYearWeek('2021-12-27', 1)).toEqual(52)
    expect(XEUtils.getYearWeek('2021-12-28', 1)).toEqual(52)
    expect(XEUtils.getYearWeek('2021-12-29', 1)).toEqual(52)
    expect(XEUtils.getYearWeek('2021-12-30', 1)).toEqual(52)
    expect(XEUtils.getYearWeek('2021-12-31', 1)).toEqual(52)
    expect(XEUtils.getYearWeek('2022-01-01', 1)).toEqual(52)
    expect(XEUtils.getYearWeek('2022-01-02', 1)).toEqual(52)

    expect(XEUtils.getYearWeek('2022-01-03', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2022-01-04', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2022-01-05', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2022-01-06', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2022-01-07', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2022-01-08', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2022-01-09', 1)).toEqual(1)

    expect(XEUtils.getYearWeek('2022-01-10', 1)).toEqual(2)
    expect(XEUtils.getYearWeek('2022-01-11', 1)).toEqual(2)

    expect(XEUtils.getYearWeek('2022-12-24', 1)).toEqual(51)
    expect(XEUtils.getYearWeek('2022-12-25', 1)).toEqual(51)

    expect(XEUtils.getYearWeek('2022-12-26', 1)).toEqual(52)
    expect(XEUtils.getYearWeek('2022-12-27', 1)).toEqual(52)
    expect(XEUtils.getYearWeek('2022-12-28', 1)).toEqual(52)
    expect(XEUtils.getYearWeek('2022-12-29', 1)).toEqual(52)
    expect(XEUtils.getYearWeek('2022-12-30', 1)).toEqual(52)
    expect(XEUtils.getYearWeek('2022-12-31', 1)).toEqual(52)
    expect(XEUtils.getYearWeek('2023-01-01', 1)).toEqual(52)

    expect(XEUtils.getYearWeek('2023-01-02', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2023-01-03', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2023-01-04', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2023-01-05', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2023-01-06', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2023-01-07', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2023-01-08', 1)).toEqual(1)

    expect(XEUtils.getYearWeek('2023-01-09', 1)).toEqual(2)
    expect(XEUtils.getYearWeek('2023-01-10', 1)).toEqual(2)

    expect(XEUtils.getYearWeek('2023-12-23', 1)).toEqual(51)
    expect(XEUtils.getYearWeek('2023-12-24', 1)).toEqual(51)

    expect(XEUtils.getYearWeek('2023-12-25', 1)).toEqual(52)
    expect(XEUtils.getYearWeek('2023-12-26', 1)).toEqual(52)
    expect(XEUtils.getYearWeek('2023-12-27', 1)).toEqual(52)
    expect(XEUtils.getYearWeek('2023-12-28', 1)).toEqual(52)
    expect(XEUtils.getYearWeek('2023-12-29', 1)).toEqual(52)
    expect(XEUtils.getYearWeek('2023-12-30', 1)).toEqual(52)
    expect(XEUtils.getYearWeek('2023-12-31', 1)).toEqual(52)

    expect(XEUtils.getYearWeek('2024-01-01', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2024-01-02', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2024-01-03', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2024-01-04', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2024-01-05', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2024-01-06', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2024-01-07', 1)).toEqual(1)

    expect(XEUtils.getYearWeek('2024-01-08', 1)).toEqual(2)
    expect(XEUtils.getYearWeek('2024-01-09', 1)).toEqual(2)

    expect(XEUtils.getYearWeek('2024-12-21', 1)).toEqual(51)
    expect(XEUtils.getYearWeek('2024-12-22', 1)).toEqual(51)

    expect(XEUtils.getYearWeek('2024-12-23', 1)).toEqual(52)
    expect(XEUtils.getYearWeek('2024-12-24', 1)).toEqual(52)
    expect(XEUtils.getYearWeek('2024-12-25', 1)).toEqual(52)
    expect(XEUtils.getYearWeek('2024-12-26', 1)).toEqual(52)
    expect(XEUtils.getYearWeek('2024-12-27', 1)).toEqual(52)
    expect(XEUtils.getYearWeek('2024-12-28', 1)).toEqual(52)
    expect(XEUtils.getYearWeek('2024-12-29', 1)).toEqual(52)

    expect(XEUtils.getYearWeek('2024-12-30', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2024-12-31', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2025-01-01', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2025-01-02', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2025-01-03', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2025-01-04', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2025-01-05', 1)).toEqual(1)

    expect(XEUtils.getYearWeek('2025-01-06', 1)).toEqual(2)
    expect(XEUtils.getYearWeek('2025-01-07', 1)).toEqual(2)
    expect(XEUtils.getYearWeek('2025-01-08', 1)).toEqual(2)
    expect(XEUtils.getYearWeek('2025-01-09', 1)).toEqual(2)
    expect(XEUtils.getYearWeek('2025-01-10', 1)).toEqual(2)
    expect(XEUtils.getYearWeek('2025-01-11', 1)).toEqual(2)
    expect(XEUtils.getYearWeek('2025-01-12', 1)).toEqual(2)

    expect(XEUtils.getYearWeek('2025-01-13', 1)).toEqual(3)
    expect(XEUtils.getYearWeek('2025-01-14', 1)).toEqual(3)

    expect(XEUtils.getYearWeek('2025-12-20', 1)).toEqual(51)
    expect(XEUtils.getYearWeek('2025-12-21', 1)).toEqual(51)

    expect(XEUtils.getYearWeek('2025-12-22', 1)).toEqual(52)
    expect(XEUtils.getYearWeek('2025-12-23', 1)).toEqual(52)
    expect(XEUtils.getYearWeek('2025-12-24', 1)).toEqual(52)
    expect(XEUtils.getYearWeek('2025-12-25', 1)).toEqual(52)
    expect(XEUtils.getYearWeek('2025-12-26', 1)).toEqual(52)
    expect(XEUtils.getYearWeek('2025-12-27', 1)).toEqual(52)
    expect(XEUtils.getYearWeek('2025-12-28', 1)).toEqual(52)

    expect(XEUtils.getYearWeek('2025-12-29', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2025-12-30', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2025-12-31', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2026-01-01', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2026-01-02', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2026-01-03', 1)).toEqual(1)
    expect(XEUtils.getYearWeek('2026-01-04', 1)).toEqual(1)

    expect(XEUtils.getYearWeek('2026-01-05', 1)).toEqual(2)
    expect(XEUtils.getYearWeek('2026-01-06', 1)).toEqual(2)
    expect(XEUtils.getYearWeek('2026-01-07', 1)).toEqual(2)
    expect(XEUtils.getYearWeek('2026-01-08', 1)).toEqual(2)
    expect(XEUtils.getYearWeek('2026-01-09', 1)).toEqual(2)
    expect(XEUtils.getYearWeek('2026-01-10', 1)).toEqual(2)
    expect(XEUtils.getYearWeek('2026-01-11', 1)).toEqual(2)

    expect(XEUtils.getYearWeek('2026-01-12', 1)).toEqual(3)
    expect(XEUtils.getYearWeek('2026-01-13', 1)).toEqual(3)

    expect(
      XEUtils.getYearWeek('2013-01-01', 1)
    ).toEqual(1)
    expect(
      XEUtils.getYearWeek('2013-01-06', 1)
    ).toEqual(1)
    expect(
      XEUtils.getYearWeek('2013-01-07', 1)
    ).toEqual(2)
    expect(
      XEUtils.getYearWeek('2013-01-27', 1)
    ).toEqual(4)
    expect(
      XEUtils.getYearWeek('2013-01-31', 1)
    ).toEqual(5)
    expect(
      XEUtils.getYearWeek('2021-01-01 08:00:00', 1)
    ).toEqual(53)
    expect(
      XEUtils.getYearWeek('2021-01-10 12:00:00', 1)
    ).toEqual(1)
    expect(
      XEUtils.getYearWeek('2021-01-31 18:00:00', 1)
    ).toEqual(4)
    expect(
      XEUtils.getYearWeek('2021-12-05', 1)
    ).toEqual(48)
    expect(
      XEUtils.getYearWeek('2021-12-08', 1)
    ).toEqual(49)

    expect(
      XEUtils.getYearWeek(new Date(2024, 5, 10))
    ).toEqual(24)
    expect(
      XEUtils.getYearWeek(new Date(2024, 5, 10, 12))
    ).toEqual(24)

    // 时间部分不影响周数
    expect(XEUtils.getYearWeek('2024-06-10 00:00:00')).toEqual(24)
    expect(XEUtils.getYearWeek('2024-06-10 23:59:59')).toEqual(24)
    expect(XEUtils.getYearWeek(new Date(2024, 5, 10, 0, 0, 0))).toEqual(24)
    expect(XEUtils.getYearWeek(new Date(2024, 5, 10, 23, 59, 59))).toEqual(24)

    // 闰日及周边界
    expect(XEUtils.getYearWeek('2024-02-29')).toEqual(9)
    expect(XEUtils.getYearWeek('2024-03-03')).toEqual(9)
    expect(XEUtils.getYearWeek('2024-03-04')).toEqual(10)
    expect(
      XEUtils.getYearWeek('2024-02-29') === XEUtils.getYearWeek(new Date(2024, 1, 29))
    ).toEqual(true)

    // 默认参数等价于周一视图
    expect(XEUtils.getYearWeek('2024-12-29')).toEqual(52)
    expect(XEUtils.getYearWeek('2024-12-29')).toEqual(XEUtils.getYearWeek('2024-12-29', 1))
  })

  test('getMonthWeek()', () => {
    expect(
      XEUtils.getMonthWeek().toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getMonthWeek(0).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getMonthWeek(null).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getMonthWeek(undefined).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getMonthWeek({}).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getMonthWeek([]).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getMonthWeek([2018, 1, 1]).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getMonthWeek({ time: 2018 }).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getMonthWeek('null').toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getMonthWeek(new Date('')).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getMonthWeek(new Date('abc')).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getMonthWeek(date)
    ).toEqual(5)
    expect(
      XEUtils.getMonthWeek('2017-01-01')
    ).toEqual(5)
    expect(
      XEUtils.getMonthWeek(new Date(2017, 0, 1))
    ).toEqual(5)
    expect(
      XEUtils.getMonthWeek('2017-01-01') === XEUtils.getMonthWeek(new Date(2017, 0, 1))
    ).toEqual(true)
    expect(
      XEUtils.getMonthWeek('2017-01-20')
    ).toEqual(3)
    expect(
      XEUtils.getMonthWeek('2018-05-20')
    ).toEqual(3)
    expect(
      XEUtils.getMonthWeek(new Date(2018, 4, 20))
    ).toEqual(3)
    expect(
      XEUtils.getMonthWeek('2018-05-20') === XEUtils.getMonthWeek(new Date(2018, 4, 20))
    ).toEqual(true)
    expect(
      XEUtils.getMonthWeek('2018-05-25')
    ).toEqual(4)
    expect(
      XEUtils.getMonthWeek('2018-05-29')
    ).toEqual(5)

    // 周日视图
    expect(
      XEUtils.getMonthWeek('2018-05-01', 0)
    ).toEqual(1)
    expect(
      XEUtils.getMonthWeek('2018-05-28', 0)
    ).toEqual(5)
    expect(
      XEUtils.getMonthWeek('2018-05-29', 0)
    ).toEqual(5)
    expect(
      XEUtils.getMonthWeek('2018-05-30', 0)
    ).toEqual(5)
    expect(
      XEUtils.getMonthWeek('2018-05-31 08:00:00', 0)
    ).toEqual(5)
    expect(
      XEUtils.getMonthWeek('2018-06-01 12:00:00', 0)
    ).toEqual(5)
    expect(
      XEUtils.getMonthWeek('2018-06-02 18:00:00', 0)
    ).toEqual(5)
    expect(
      XEUtils.getMonthWeek('2018-06-03', 0)
    ).toEqual(1)
    expect(
      XEUtils.getMonthWeek('2018-06-04', 0)
    ).toEqual(1)

    // 周一视图
    expect(
      XEUtils.getMonthWeek('2018-05-01', 1)
    ).toEqual(1)
    expect(
      XEUtils.getMonthWeek('2018-05-28', 1)
    ).toEqual(5)
    expect(
      XEUtils.getMonthWeek('2018-05-29', 1)
    ).toEqual(5)
    expect(
      XEUtils.getMonthWeek('2018-05-30', 1)
    ).toEqual(5)
    expect(
      XEUtils.getMonthWeek('2018-05-31 08:00:00', 1)
    ).toEqual(5)
    expect(
      XEUtils.getMonthWeek('2018-06-01 12:00:00', 1)
    ).toEqual(5)
    expect(
      XEUtils.getMonthWeek('2018-06-02 18:00:02', 1)
    ).toEqual(5)
    expect(
      XEUtils.getMonthWeek('2018-06-03', 1)
    ).toEqual(5)
    expect(
      XEUtils.getMonthWeek('2018-06-04', 1)
    ).toEqual(1)

    // 周二视图
    expect(
      XEUtils.getMonthWeek('2018-05-01', 2)
    ).toEqual(1)
    expect(
      XEUtils.getMonthWeek('2018-05-28', 2)
    ).toEqual(4)
    expect(
      XEUtils.getMonthWeek('2018-05-29', 2)
    ).toEqual(1)
    expect(
      XEUtils.getMonthWeek('2018-05-30', 2)
    ).toEqual(1)
    expect(
      XEUtils.getMonthWeek('2018-05-31 08:00:00', 2)
    ).toEqual(1)
    expect(
      XEUtils.getMonthWeek('2018-06-01 12:00:00', 2)
    ).toEqual(1)
    expect(
      XEUtils.getMonthWeek('2018-06-02 18:00:00', 2)
    ).toEqual(1)
    expect(
      XEUtils.getMonthWeek('2018-06-03', 2)
    ).toEqual(1)
    expect(
      XEUtils.getMonthWeek('2018-06-04', 2)
    ).toEqual(1)

    // 周三视图
    expect(
      XEUtils.getMonthWeek('2018-05-01', 3)
    ).toEqual(4)
    expect(
      XEUtils.getMonthWeek('2018-05-28', 3)
    ).toEqual(4)
    expect(
      XEUtils.getMonthWeek('2018-05-29', 3)
    ).toEqual(4)
    expect(
      XEUtils.getMonthWeek('2018-05-30', 3)
    ).toEqual(1)
    expect(
      XEUtils.getMonthWeek('2018-05-31 08:00:00', 3)
    ).toEqual(1)
    expect(
      XEUtils.getMonthWeek('2018-06-01 12:00:00', 3)
    ).toEqual(1)
    expect(
      XEUtils.getMonthWeek('2018-06-02 18:00:00', 3)
    ).toEqual(1)
    expect(
      XEUtils.getMonthWeek('2018-06-03', 3)
    ).toEqual(1)
    expect(
      XEUtils.getMonthWeek('2018-06-04', 3)
    ).toEqual(1)

    // 周四视图
    expect(
      XEUtils.getMonthWeek('2018-05-01', 4)
    ).toEqual(5)
    expect(
      XEUtils.getMonthWeek('2018-05-28', 4)
    ).toEqual(4)
    expect(
      XEUtils.getMonthWeek('2018-05-29', 4)
    ).toEqual(4)
    expect(
      XEUtils.getMonthWeek('2018-05-30', 4)
    ).toEqual(4)
    expect(
      XEUtils.getMonthWeek('2018-05-31 08:00:00', 4)
    ).toEqual(1)
    expect(
      XEUtils.getMonthWeek('2018-06-01 12:00:00', 4)
    ).toEqual(1)
    expect(
      XEUtils.getMonthWeek('2018-06-02 18:00:00', 4)
    ).toEqual(1)
    expect(
      XEUtils.getMonthWeek('2018-06-03', 4)
    ).toEqual(1)
    expect(
      XEUtils.getMonthWeek('2018-06-04', 4)
    ).toEqual(1)

    // 周五视图
    expect(
      XEUtils.getMonthWeek('2018-05-01', 5)
    ).toEqual(5)
    expect(
      XEUtils.getMonthWeek('2018-05-28', 5)
    ).toEqual(4)
    expect(
      XEUtils.getMonthWeek('2018-05-29', 5)
    ).toEqual(4)
    expect(
      XEUtils.getMonthWeek('2018-05-30', 5)
    ).toEqual(4)
    expect(
      XEUtils.getMonthWeek('2018-05-31 08:00:00', 5)
    ).toEqual(4)
    expect(
      XEUtils.getMonthWeek('2018-06-01 12:00:00', 5)
    ).toEqual(1)
    expect(
      XEUtils.getMonthWeek('2018-06-02 18:00:00', 5)
    ).toEqual(1)
    expect(
      XEUtils.getMonthWeek('2018-06-03', 5)
    ).toEqual(1)
    expect(
      XEUtils.getMonthWeek('2018-06-04', 5)
    ).toEqual(1)

    // 周六视图
    expect(
      XEUtils.getMonthWeek('2018-05-01', 6)
    ).toEqual(1)
    expect(
      XEUtils.getMonthWeek('2018-05-28', 6)
    ).toEqual(5)
    expect(
      XEUtils.getMonthWeek('2018-05-29', 6)
    ).toEqual(5)
    expect(
      XEUtils.getMonthWeek('2018-05-30', 6)
    ).toEqual(5)
    expect(
      XEUtils.getMonthWeek('2018-05-31 08:00:00', 6)
    ).toEqual(5)
    expect(
      XEUtils.getMonthWeek('2018-06-01 12:00:00', 6)
    ).toEqual(5)
    expect(
      XEUtils.getMonthWeek('2018-06-02 18:00:00', 6)
    ).toEqual(1)
    expect(
      XEUtils.getMonthWeek('2018-06-03', 6)
    ).toEqual(1)
    expect(
      XEUtils.getMonthWeek('2018-06-04', 6)
    ).toEqual(1)

    // 时间部分不影响月周数
    expect(XEUtils.getMonthWeek('2024-06-10 00:00:00')).toEqual(2)
    expect(XEUtils.getMonthWeek('2024-06-10 23:59:59')).toEqual(2)
    expect(XEUtils.getMonthWeek(new Date(2024, 5, 10, 0, 0, 0))).toEqual(2)
    expect(XEUtils.getMonthWeek(new Date(2024, 5, 10, 23, 59, 59))).toEqual(2)

    // 默认参数等价于周一视图
    expect(XEUtils.getMonthWeek('2024-06-10')).toEqual(2)
    expect(XEUtils.getMonthWeek('2024-06-10')).toEqual(XEUtils.getMonthWeek('2024-06-10', 1))
    expect(XEUtils.getMonthWeek('2024-12-29')).toEqual(4)
    expect(XEUtils.getMonthWeek('2024-12-29')).toEqual(XEUtils.getMonthWeek('2024-12-29', 1))

    // 闰日及周边界
    expect(XEUtils.getMonthWeek('2024-03-04')).toEqual(1)
    expect(
      XEUtils.getMonthWeek('2024-02-29') === XEUtils.getMonthWeek(new Date(2024, 1, 29))
    ).toEqual(true)

    // 跨年月初延续上一月周序号
    expect(XEUtils.getMonthWeek('2024-12-30', 1)).toEqual(1)
    expect(XEUtils.getMonthWeek('2025-01-01', 1)).toEqual(1)
    expect(XEUtils.getMonthWeek('2025-01-05', 1)).toEqual(1)
    expect(XEUtils.getMonthWeek('2025-01-06', 1)).toEqual(2)

    // 周日视图跨年边界
    expect(XEUtils.getMonthWeek('2025-01-01', 0)).toEqual(1)
    expect(XEUtils.getMonthWeek('2025-01-04', 0)).toEqual(1)
    expect(XEUtils.getMonthWeek('2025-01-05', 0)).toEqual(2)
  })

  test('getDayOfYear()', () => {
    expect(
      XEUtils.getDayOfYear().toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getDayOfYear(0).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getDayOfYear(null).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getDayOfYear(undefined).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getDayOfYear({}).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getDayOfYear([]).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getDayOfYear([2018, 1, 1]).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getDayOfYear({ time: 2018 }).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getDayOfYear('null').toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getDayOfYear(new Date('')).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getDayOfYear(new Date('abc')).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getDayOfYear(date)
    ).toEqual(365)
    expect(
      XEUtils.getDayOfYear(time)
    ).toEqual(365)
    expect(
      XEUtils.getDayOfYear('2017-12-20')
    ).toEqual(365)
    expect(
      XEUtils.getDayOfYear(new Date(2017, 11, 20))
    ).toEqual(365)
    expect(
      XEUtils.getDayOfYear('2017-12-20') === XEUtils.getDayOfYear(new Date(2017, 11, 20))
    ).toEqual(true)
    expect(
      XEUtils.getDayOfYear('2019-12-10', 1)
    ).toEqual(366)
    expect(
      XEUtils.getDayOfYear(new Date(2019, 11, 10), 1)
    ).toEqual(366)
    expect(
      XEUtils.getDayOfYear('2019-12-10', 1) === XEUtils.getDayOfYear(new Date(2019, 11, 10), 1)
    ).toEqual(true)
    expect(
      XEUtils.getDayOfYear('2020-12-10 08:00:00')
    ).toEqual(366)
    expect(
      XEUtils.getDayOfYear('2020-12-10 12:00:00') === 366
    ).toEqual(true)
    expect(
      XEUtils.getDayOfYear('2026-06-22 18:00:00') === 365
    ).toEqual(true)
    expect(
      XEUtils.getDayOfYear('2026-06-22') === 365
    ).toEqual(true)
    expect(
      XEUtils.isNumber(XEUtils.getDayOfYear('2026-06-22'))
    ).toEqual(true)

    // ========== 闰年年份全覆盖 ==========
    // 普通闰年
    expect(XEUtils.getDayOfYear('2016-06-15')).toEqual(366)
    expect(XEUtils.getDayOfYear(new Date(2016, 5, 15))).toEqual(366)

    // 世纪闰年
    expect(XEUtils.getDayOfYear('2000-06-15')).toEqual(366)
    expect(XEUtils.getDayOfYear(new Date(2000, 5, 15))).toEqual(366)

    // 非闰年整百年
    expect(XEUtils.getDayOfYear('1900-06-15')).toEqual(365)
    expect(XEUtils.getDayOfYear(new Date(1900, 5, 15))).toEqual(365)

    // 普通平年
    expect(XEUtils.getDayOfYear('2017-06-15')).toEqual(365)
    expect(XEUtils.getDayOfYear(new Date(2017, 5, 15))).toEqual(365)

    // ========== offset 跨年（混用） ==========
    // 平年 2017 + 1 → 2018 平年 → 365
    expect(XEUtils.getDayOfYear('2017-06-15', 1)).toEqual(365)
    expect(XEUtils.getDayOfYear(new Date(2017, 5, 15), 1)).toEqual(365)

    // 平年 2017 - 1 → 2016 闰年 → 366
    expect(XEUtils.getDayOfYear('2017-06-15', -1)).toEqual(366)
    expect(XEUtils.getDayOfYear(new Date(2017, 5, 15), -1)).toEqual(366)

    // 闰年 2020 + 1 → 2021 平年 → 365
    expect(XEUtils.getDayOfYear('2020-06-15', 1)).toEqual(365)
    expect(XEUtils.getDayOfYear(new Date(2020, 5, 15), 1)).toEqual(365)

    // 闰年 2020 - 1 → 2019 平年 → 365
    expect(XEUtils.getDayOfYear('2020-06-15', -1)).toEqual(365)
    expect(XEUtils.getDayOfYear(new Date(2020, 5, 15), -1)).toEqual(365)

    // ========== offset 大跨度 ==========
    // 2017 + 4 → 2021 平年
    expect(XEUtils.getDayOfYear('2017-06-15', 4)).toEqual(365)
    expect(XEUtils.getDayOfYear(new Date(2017, 5, 15), 4)).toEqual(365)

    // 2017 - 4 → 2013 平年
    expect(XEUtils.getDayOfYear('2017-06-15', -4)).toEqual(365)
    expect(XEUtils.getDayOfYear(new Date(2017, 5, 15), -4)).toEqual(365)

    // 2017 + 3 → 2020 闰年
    expect(XEUtils.getDayOfYear('2017-06-15', 3)).toEqual(366)
    expect(XEUtils.getDayOfYear(new Date(2017, 5, 15), 3)).toEqual(366)

    // ========== offset = 0 ==========
    expect(XEUtils.getDayOfYear('2016-06-15', 0)).toEqual(366)
    expect(XEUtils.getDayOfYear(new Date(2016, 5, 15), 0)).toEqual(366)
    expect(XEUtils.getDayOfYear('2017-06-15', 0)).toEqual(365)
    expect(XEUtils.getDayOfYear(new Date(2017, 5, 15), 0)).toEqual(365)

    // ========== 时间戳输入 ==========
    expect(XEUtils.getDayOfYear(new Date('2016-06-15').getTime())).toEqual(366)
    expect(XEUtils.getDayOfYear(new Date('2017-06-15').getTime())).toEqual(365)
    expect(XEUtils.getDayOfYear(new Date('2000-06-15').getTime())).toEqual(366)

    // ========== 年末/年初日期 ==========
    expect(XEUtils.getDayOfYear('2016-01-01')).toEqual(366)
    expect(XEUtils.getDayOfYear('2016-12-31')).toEqual(366)
    expect(XEUtils.getDayOfYear('2017-01-01')).toEqual(365)
    expect(XEUtils.getDayOfYear('2017-12-31')).toEqual(365)

    // ========== 负数 offset 大跨度 ==========
    // 2017 → -100 → 1917 平年
    expect(XEUtils.getDayOfYear('2017-06-15', -100)).toEqual(365)
    expect(XEUtils.getDayOfYear(new Date(2017, 5, 15), -100)).toEqual(365)

    // 2017 → -117 → 1900 非闰年整百年
    expect(XEUtils.getDayOfYear('2017-06-15', -117)).toEqual(365)
    expect(XEUtils.getDayOfYear(new Date(2017, 5, 15), -117)).toEqual(365)

    // 2017 → -16 → 2001... 等等 2017-16=2001 平年
    expect(XEUtils.getDayOfYear('2017-06-15', -16)).toEqual(365)
  })

  test('getDayOfQuarter()', () => {
    expect(
      isNaN(XEUtils.getDayOfQuarter())
    ).toEqual(true)
    expect(
      isNaN(XEUtils.getDayOfQuarter(0))
    ).toEqual(true)
    expect(
      isNaN(XEUtils.getDayOfQuarter(-1))
    ).toEqual(true)
    expect(
      isNaN(XEUtils.getDayOfQuarter(null))
    ).toEqual(true)
    expect(
      isNaN(XEUtils.getDayOfQuarter(undefined))
    ).toEqual(true)
    expect(
      isNaN(XEUtils.getDayOfQuarter({}))
    ).toEqual(true)
    expect(
      isNaN(XEUtils.getDayOfQuarter([]))
    ).toEqual(true)
    expect(
      isNaN(XEUtils.getDayOfQuarter([2018, 1, 1]))
    ).toEqual(true)
    expect(
      isNaN(XEUtils.getDayOfQuarter({ time: 2018 }))
    ).toEqual(true)
    expect(
      isNaN(XEUtils.getDayOfQuarter('null'))
    ).toEqual(true)
    expect(
      isNaN(XEUtils.getDayOfQuarter(new Date('')))
    ).toEqual(true)
    expect(
      isNaN(XEUtils.getDayOfQuarter(new Date('abc')))
    ).toEqual(true)
    expect(
      XEUtils.getDayOfQuarter().toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getDayOfQuarter(0).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getDayOfQuarter(-1).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getDayOfQuarter(null).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getDayOfQuarter(undefined).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getDayOfQuarter({}).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getDayOfQuarter([]).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getDayOfQuarter([2018, 1, 1]).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getDayOfQuarter({ time: 2018 }).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getDayOfQuarter('null').toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getDayOfQuarter(new Date('')).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getDayOfQuarter(new Date('abc')).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getDayOfQuarter(date)
    ).toEqual(90)
    expect(
      XEUtils.getDayOfQuarter(time)
    ).toEqual(90)
    expect(
      XEUtils.getDayOfQuarter('2017-12-20')
    ).toEqual(92)
    expect(
      XEUtils.getDayOfQuarter(new Date(2017, 11, 20))
    ).toEqual(92)
    expect(
      XEUtils.getDayOfQuarter('2017-12-20') === XEUtils.getDayOfQuarter(new Date(2017, 11, 20))
    ).toEqual(true)
    expect(
      XEUtils.getDayOfQuarter('2017-12-10', -1)
    ).toEqual(92)
    expect(
      XEUtils.getDayOfQuarter(new Date(2017, 11, 10), -1)
    ).toEqual(92)
    expect(
      XEUtils.getDayOfQuarter('2017-12-10', -1) === XEUtils.getDayOfQuarter(new Date(2017, 11, 10), -1)
    ).toEqual(true)
    expect(
      XEUtils.getDayOfQuarter('2017-12-20', 1)
    ).toEqual(90)
    expect(
      XEUtils.getDayOfQuarter('2016-06-27 08:00:00')
    ).toEqual(91)
    expect(
      XEUtils.getDayOfQuarter('2016-06-27 12:00:00')
    ).toEqual(91)
    expect(
      XEUtils.getDayOfQuarter('2016-06-27 18:00:00')
    ).toEqual(91)
    expect(
      XEUtils.getDayOfQuarter('2016-06-27')
    ).toEqual(91)

    // ========== 各季度天数（平年 2017） ==========
    // Q1: 1月(31) + 2月(28) + 3月(31) = 90
    expect(XEUtils.getDayOfQuarter('2017-02-15')).toEqual(90)
    expect(XEUtils.getDayOfQuarter(new Date(2017, 1, 15))).toEqual(90)

    // Q2: 4月(30) + 5月(31) + 6月(30) = 91
    expect(XEUtils.getDayOfQuarter('2017-05-15')).toEqual(91)
    expect(XEUtils.getDayOfQuarter(new Date(2017, 4, 15))).toEqual(91)

    // Q3: 7月(31) + 8月(31) + 9月(30) = 92
    expect(XEUtils.getDayOfQuarter('2017-08-15')).toEqual(92)
    expect(XEUtils.getDayOfQuarter(new Date(2017, 7, 15))).toEqual(92)

    // Q4: 10月(31) + 11月(30) + 12月(31) = 92
    expect(XEUtils.getDayOfQuarter('2017-11-15')).toEqual(92)
    expect(XEUtils.getDayOfQuarter(new Date(2017, 10, 15))).toEqual(92)

    // ========== 闰年 Q1 ==========
    // 2016 Q1: 1月(31) + 2月(29) + 3月(31) = 91
    expect(XEUtils.getDayOfQuarter('2016-02-15')).toEqual(91)
    expect(XEUtils.getDayOfQuarter(new Date(2016, 1, 15))).toEqual(91)

    // 2000 Q1: 世纪闰年 → 91
    expect(XEUtils.getDayOfQuarter('2000-02-10')).toEqual(91)
    expect(XEUtils.getDayOfQuarter(new Date(2000, 1, 10))).toEqual(91)

    // 1900 Q1: 非闰年整百年 → 90
    expect(XEUtils.getDayOfQuarter('1900-02-10')).toEqual(90)
    expect(XEUtils.getDayOfQuarter(new Date(1900, 1, 10))).toEqual(90)

    // ========== offset 跨季度（混用） ==========
    // Q4 2017-12 → offset -1 → Q3 → 92
    expect(XEUtils.getDayOfQuarter('2017-12-20', -1)).toEqual(92)
    expect(XEUtils.getDayOfQuarter(new Date(2017, 11, 20), -1)).toEqual(92)

    // Q1 2017-01 → offset +1 → Q2 → 91
    expect(XEUtils.getDayOfQuarter('2017-01-20', 1)).toEqual(91)
    expect(XEUtils.getDayOfQuarter(new Date(2017, 0, 20), 1)).toEqual(91)

    // Q1 2016-01(闰年91) → offset +1 → Q2(91)
    expect(XEUtils.getDayOfQuarter('2016-01-20', 1)).toEqual(91)
    expect(XEUtils.getDayOfQuarter(new Date(2016, 0, 20), 1)).toEqual(91)

    // Q1 2016-01(闰年91) → offset -1 → Q4 2015(92)
    expect(XEUtils.getDayOfQuarter('2016-01-20', -1)).toEqual(92)
    expect(XEUtils.getDayOfQuarter(new Date(2016, 0, 20), -1)).toEqual(92)

    // ========== offset 大跨度 ==========
    // Q1 2017 → offset +4 → Q1 2018(平年) → 90
    expect(XEUtils.getDayOfQuarter('2017-02-15', 4)).toEqual(90)
    expect(XEUtils.getDayOfQuarter(new Date(2017, 1, 15), 4)).toEqual(90)

    // Q1 2017 → offset -4 → Q1 2016(闰年) → 91
    expect(XEUtils.getDayOfQuarter('2017-02-15', -4)).toEqual(91)
    expect(XEUtils.getDayOfQuarter(new Date(2017, 1, 15), -4)).toEqual(91)

    // ========== offset = 0 ==========
    expect(XEUtils.getDayOfQuarter('2017-06-15', 0)).toEqual(91)
    expect(XEUtils.getDayOfQuarter(new Date(2017, 5, 15), 0)).toEqual(91)

    // ========== 时间戳输入 ==========
    expect(XEUtils.getDayOfQuarter(new Date('2017-12-20').getTime())).toEqual(92)
    expect(XEUtils.getDayOfQuarter(new Date('2016-02-10').getTime())).toEqual(91)
    expect(XEUtils.getDayOfQuarter(new Date('2017-02-10').getTime())).toEqual(90)

    // ========== 季度边界日期 ==========
    // 季度第一天
    expect(XEUtils.getDayOfQuarter('2017-01-01')).toEqual(90)
    expect(XEUtils.getDayOfQuarter('2017-04-01')).toEqual(91)
    expect(XEUtils.getDayOfQuarter('2017-07-01')).toEqual(92)
    expect(XEUtils.getDayOfQuarter('2017-10-01')).toEqual(92)

    // 季度最后一天
    expect(XEUtils.getDayOfQuarter('2017-03-31')).toEqual(90)
    expect(XEUtils.getDayOfQuarter('2017-06-30')).toEqual(91)
    expect(XEUtils.getDayOfQuarter('2017-09-30')).toEqual(92)
    expect(XEUtils.getDayOfQuarter('2017-12-31')).toEqual(92)
  })

  test('getDayOfMonth()', () => {
    expect(
      isNaN(XEUtils.getDayOfMonth())
    ).toEqual(true)
    expect(
      isNaN(XEUtils.getDayOfMonth(0))
    ).toEqual(true)
    expect(
      isNaN(XEUtils.getDayOfMonth(-1))
    ).toEqual(true)
    expect(
      isNaN(XEUtils.getDayOfMonth(null))
    ).toEqual(true)
    expect(
      isNaN(XEUtils.getDayOfMonth(undefined))
    ).toEqual(true)
    expect(
      isNaN(XEUtils.getDayOfMonth({}))
    ).toEqual(true)
    expect(
      isNaN(XEUtils.getDayOfMonth([]))
    ).toEqual(true)
    expect(
      isNaN(XEUtils.getDayOfMonth([2018, 1, 1]))
    ).toEqual(true)
    expect(
      isNaN(XEUtils.getDayOfMonth({ time: 2018 }))
    ).toEqual(true)
    expect(
      isNaN(XEUtils.getDayOfMonth('null'))
    ).toEqual(true)
    expect(
      isNaN(XEUtils.getDayOfMonth(new Date('')))
    ).toEqual(true)
    expect(
      isNaN(XEUtils.getDayOfMonth(new Date('abc')))
    ).toEqual(true)
    expect(
      XEUtils.getDayOfMonth().toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getDayOfMonth(0).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getDayOfMonth(-1).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getDayOfMonth(null).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getDayOfMonth(undefined).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getDayOfMonth({}).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getDayOfMonth([]).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getDayOfMonth([2018, 1, 1]).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getDayOfMonth({ time: 2018 }).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getDayOfMonth('null').toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getDayOfMonth(new Date('')).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getDayOfMonth(new Date('abc')).toString()
    ).toEqual('NaN')
    expect(
      XEUtils.getDayOfMonth(date)
    ).toEqual(31)
    expect(
      XEUtils.getDayOfMonth(time)
    ).toEqual(31)
    expect(
      XEUtils.getDayOfMonth('2017-12-20')
    ).toEqual(31)
    expect(
      XEUtils.getDayOfMonth(new Date(2017, 11, 20))
    ).toEqual(31)
    expect(
      XEUtils.getDayOfMonth('2017-12-20') === XEUtils.getDayOfMonth(new Date(2017, 11, 20))
    ).toEqual(true)
    expect(
      XEUtils.getDayOfMonth('2017-12-10', -1)
    ).toEqual(30)
    expect(
      XEUtils.getDayOfMonth(new Date(2017, 11, 10), -1)
    ).toEqual(30)
    expect(
      XEUtils.getDayOfMonth('2017-12-10', -1) === XEUtils.getDayOfMonth(new Date(2017, 11, 10), -1)
    ).toEqual(true)
    expect(
      XEUtils.getDayOfMonth('2017-12-20 08:00:00', 1)
    ).toEqual(31)
    expect(
      XEUtils.getDayOfMonth('2017-12-20 12:00:00', 1)
    ).toEqual(31)
    expect(
      XEUtils.getDayOfMonth('2017-12-20 18:00:00', 1)
    ).toEqual(31)
    expect(
      XEUtils.getDayOfMonth('2017-12-20', 1)
    ).toEqual(31)

    // ========== 闰年 2 月（混用写法） ==========
    expect(XEUtils.getDayOfMonth('2016-02-15')).toEqual(29)
    expect(XEUtils.getDayOfMonth(new Date(2016, 1, 15))).toEqual(29)
    expect(XEUtils.getDayOfMonth('2017-02-15')).toEqual(28)
    expect(XEUtils.getDayOfMonth(new Date(2017, 1, 15))).toEqual(28)

    // 世纪闰年 / 非闰年整百年
    expect(XEUtils.getDayOfMonth('2000-02-10')).toEqual(29)
    expect(XEUtils.getDayOfMonth(new Date(2000, 1, 10))).toEqual(29)
    expect(XEUtils.getDayOfMonth('1900-02-10')).toEqual(28)
    expect(XEUtils.getDayOfMonth(new Date(1900, 1, 10))).toEqual(28)

    // ========== 闰年 + offset 跨年（混用） ==========
    // 2016-02(闰年29天) + 12个月 → 2017-02(平年28天)
    expect(XEUtils.getDayOfMonth('2016-02-15', 12)).toEqual(28)
    expect(XEUtils.getDayOfMonth(new Date(2016, 1, 15), 12)).toEqual(28)

    // 2017-02(平年28天) + 12个月 → 2018-02(平年28天)
    expect(XEUtils.getDayOfMonth('2017-02-15', 12)).toEqual(28)
    expect(XEUtils.getDayOfMonth(new Date(2017, 1, 15), 12)).toEqual(28)

    // 2019-02(平年28天) + 12个月 → 2020-02(闰年29天)
    expect(XEUtils.getDayOfMonth('2019-02-15', 12)).toEqual(29)
    expect(XEUtils.getDayOfMonth(new Date(2019, 1, 15), 12)).toEqual(29)

    // ========== 各月份天数全覆盖（混用） ==========
    expect(XEUtils.getDayOfMonth('2017-01-15')).toEqual(31)
    expect(XEUtils.getDayOfMonth(new Date(2017, 0, 15))).toEqual(31)

    expect(XEUtils.getDayOfMonth('2017-03-15')).toEqual(31)
    expect(XEUtils.getDayOfMonth(new Date(2017, 2, 15))).toEqual(31)

    expect(XEUtils.getDayOfMonth('2017-04-15')).toEqual(30)
    expect(XEUtils.getDayOfMonth(new Date(2017, 3, 15))).toEqual(30)

    expect(XEUtils.getDayOfMonth('2017-06-15')).toEqual(30)
    expect(XEUtils.getDayOfMonth(new Date(2017, 5, 15))).toEqual(30)

    expect(XEUtils.getDayOfMonth('2017-09-15')).toEqual(30)
    expect(XEUtils.getDayOfMonth(new Date(2017, 8, 15))).toEqual(30)

    expect(XEUtils.getDayOfMonth('2017-11-15')).toEqual(30)
    expect(XEUtils.getDayOfMonth(new Date(2017, 10, 15))).toEqual(30)

    // ========== offset 跨年（混用） ==========
    // 12月 + 1 → 1月
    expect(XEUtils.getDayOfMonth('2017-12-20', 1)).toEqual(31)
    expect(XEUtils.getDayOfMonth(new Date(2017, 11, 20), 1)).toEqual(31)

    // 1月 - 1 → 12月
    expect(XEUtils.getDayOfMonth('2017-01-20', -1)).toEqual(31)
    expect(XEUtils.getDayOfMonth(new Date(2017, 0, 20), -1)).toEqual(31)

    // 3月 - 12 → 去年3月
    expect(XEUtils.getDayOfMonth('2017-03-20', -12)).toEqual(31)
    expect(XEUtils.getDayOfMonth(new Date(2017, 2, 20), -12)).toEqual(31)

    // 3月 + 12 → 明年3月
    expect(XEUtils.getDayOfMonth('2017-03-20', 12)).toEqual(31)
    expect(XEUtils.getDayOfMonth(new Date(2017, 2, 20), 12)).toEqual(31)

    // ========== 大跨度 offset（混用） ==========
    // 2017-01-31 + 13个月 = 2018-02-31 → 实际返回2月天数28
    expect(XEUtils.getDayOfMonth('2017-01-31', 13)).toEqual(28)
    expect(XEUtils.getDayOfMonth(new Date(2017, 0, 31), 13)).toEqual(28)

    // 2017-12-31 - 14个月 = 2016-10-31
    expect(XEUtils.getDayOfMonth('2017-12-31', -14)).toEqual(31)
    expect(XEUtils.getDayOfMonth(new Date(2017, 11, 31), -14)).toEqual(31)

    // ========== 时间戳输入 ==========
    expect(XEUtils.getDayOfMonth(new Date('2017-12-20').getTime())).toEqual(31)
    expect(XEUtils.getDayOfMonth(new Date('2016-02-10').getTime())).toEqual(29)

    // ========== offset = 0 ==========
    expect(XEUtils.getDayOfMonth('2017-12-20', 0)).toEqual(31)
    expect(XEUtils.getDayOfMonth(new Date(2017, 11, 20), 0)).toEqual(31)

    // ========== 月末日期 + offset 跨月 ==========
    // 1月31日 + 1个月 → 2月28天（平年）
    expect(XEUtils.getDayOfMonth('2017-01-31', 1)).toEqual(28)
    expect(XEUtils.getDayOfMonth(new Date(2017, 0, 31), 1)).toEqual(28)

    // 1月31日 + 1个月 → 2月29天（闰年）
    expect(XEUtils.getDayOfMonth('2016-01-31', 1)).toEqual(29)
    expect(XEUtils.getDayOfMonth(new Date(2016, 0, 31), 1)).toEqual(29)
  })

  test('getDateDiff()', () => {
    expect(
      XEUtils.getDateDiff()
    ).toEqual({ status: false, done: false, time: 0 })
    expect(
      XEUtils.getDateDiff(0)
    ).toEqual({ status: false, done: false, time: 0 })
    expect(
      XEUtils.getDateDiff(-1)
    ).toEqual({ status: false, done: false, time: 0 })
    expect(
      XEUtils.getDateDiff(null)
    ).toEqual({ status: false, done: false, time: 0 })
    expect(
      XEUtils.getDateDiff(undefined)
    ).toEqual({ status: false, done: false, time: 0 })
    expect(
      XEUtils.getDateDiff(undefined, null)
    ).toEqual({ status: false, done: false, time: 0 })
    expect(
      XEUtils.getDateDiff(new Date(''))
    ).toEqual({ status: false, done: false, time: 0 })
    expect(
      XEUtils.getDateDiff(new Date('abc'))
    ).toEqual({ status: false, done: false, time: 0 })
    expect(
      XEUtils.getDateDiff([])
    ).toEqual({ status: false, done: false, time: 0 })
    expect(
      XEUtils.getDateDiff(null, '2017-12-21')
    ).toEqual({ status: false, done: false, time: 0 })
    expect(
      XEUtils.getDateDiff([], {})
    ).toEqual({ status: false, done: false, time: 0 })
    expect(
      XEUtils.getDateDiff({ time: 2018 }, '2017-12-21')
    ).toEqual({ status: false, done: false, time: 0 })
    expect(
      XEUtils.getDateDiff(0, '2017-12-21')
    ).toEqual({ status: false, done: false, time: 0 })
    expect(
      XEUtils.getDateDiff([2018, 1, 1], '2017-12-21')
    ).toEqual({ status: false, done: false, time: 0 })
    expect(
      XEUtils.getDateDiff([2018, 1, 1], 0)
    ).toEqual({ status: false, done: false, time: 0 })
    expect(
      XEUtils.getDateDiff(new Date(2017, 0, 1, 14, 5, 30).getTime(), new Date(2017, 0, 1, 15, 1, 48).getTime())
    ).toEqual({ status: true, done: true, time: 3378000, yyyy: 0, MM: 0, dd: 0, HH: 0, mm: 56, ss: 18, S: 0 })
    expect(
      XEUtils.getDateDiff(new Date(2017, 0, 1, 14, 5, 30), new Date(2017, 0, 1, 15, 1, 48))
    ).toEqual({ status: true, done: true, time: 3378000, yyyy: 0, MM: 0, dd: 0, HH: 0, mm: 56, ss: 18, S: 0 })
    expect(
      XEUtils.getDateDiff('2017-11-20', '2017-12-21')
    ).toEqual({ status: true, done: true, time: 2678400000, yyyy: 0, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, S: 0 })
    expect(
      XEUtils.getDateDiff('2017-12-20', '2017-12-21')
    ).toEqual({ status: true, done: true, time: 86400000, yyyy: 0, MM: 0, dd: 1, HH: 0, mm: 0, ss: 0, S: 0 })
    expect(
      XEUtils.getDateDiff('2018-01-01', '2017-12-21')
    ).toEqual({ status: false, done: false, time: 0 })

    // ================= 补充测试用例 =================

    // 1. 毫秒级差异
    expect(
      XEUtils.getDateDiff('2017-12-21 00:00:00', '2017-12-21 00:00:00.500')
    ).toEqual({ status: true, done: true, time: 500, yyyy: 0, MM: 0, dd: 0, HH: 0, mm: 0, ss: 0, S: 500 })

    // 2. 只有秒和毫秒差异
    expect(
      XEUtils.getDateDiff('2017-12-21 12:00:00', '2017-12-21 12:00:05.123')
    ).toEqual({ status: true, done: true, time: 5123, yyyy: 0, MM: 0, dd: 0, HH: 0, mm: 0, ss: 5, S: 123 })

    // 3. 完整时间单位（年月日时分秒毫秒全包含）
    // 注意：2017是平年(365天)，1月1日到2018年2月2日实际为 365 + 32 = 397天
    expect(
      XEUtils.getDateDiff('2017-01-01 00:00:00', '2018-02-02 01:01:01.001')
    ).toEqual({ status: true, done: true, time: 34304461001, yyyy: 1, MM: 1, dd: 2, HH: 1, mm: 1, ss: 1, S: 1 })

    // 4. 闰年影响（验证 yyyy 固定 365 天的近似逻辑）
    // 2020-01-01 到 2021-01-01 实际为 366 天，按 365 天算 1 年，余 1 天
    expect(
      XEUtils.getDateDiff('2020-01-01', '2021-01-01')
    ).toEqual({ status: true, done: true, time: 31622400000, yyyy: 1, MM: 0, dd: 1, HH: 0, mm: 0, ss: 0, S: 0 })

    // 5. 跨月影响（验证 MM 固定 30 天的近似逻辑）
    // 2017-01-01 到 2017-02-01 实际为 31 天，按 30 天算 1 个月，余 1 天
    expect(
      XEUtils.getDateDiff('2017-01-01', '2017-02-01')
    ).toEqual({ status: true, done: true, time: 2678400000, yyyy: 0, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, S: 0 })

    // 6. 超大时间跨度（累积误差验证）
    // 1970-01-01 到 2000-01-01 (30年，含7个闰年，实际 10957 天)
    // 30 * 365 = 10950 天，多出 7 天
    expect(
      XEUtils.getDateDiff('1970-01-01', '2000-01-01')
    ).toEqual({ status: true, done: true, time: 946684800000, yyyy: 30, MM: 0, dd: 7, HH: 0, mm: 0, ss: 0, S: 0 })

    // 7. 时间戳输入
    expect(
      XEUtils.getDateDiff(1513756800000, 1513843200000) // 2017-12-20 到 2017-12-21
    ).toEqual({ status: true, done: true, time: 86400000, yyyy: 0, MM: 0, dd: 1, HH: 0, mm: 0, ss: 0, S: 0 })

    // 8. Date 对象与字符串混合输入
    expect(
      XEUtils.getDateDiff(new Date(2017, 11, 20), '2017-12-21')
    ).toEqual({ status: true, done: true, time: 86400000, yyyy: 0, MM: 0, dd: 1, HH: 0, mm: 0, ss: 0, S: 0 })

    // 9. 字符串格式支持（斜杠分隔）
    expect(
      XEUtils.getDateDiff('2017/12/20', '2017/12/21')
    ).toEqual({ status: true, done: true, time: 86400000, yyyy: 0, MM: 0, dd: 1, HH: 0, mm: 0, ss: 0, S: 0 })

    // 10. 跨年但不足一年（边界验证）
    expect(
      XEUtils.getDateDiff('2017-12-31', '2018-01-01')
    ).toEqual({ status: true, done: true, time: 86400000, yyyy: 0, MM: 0, dd: 1, HH: 0, mm: 0, ss: 0, S: 0 })

    // 11. 相同时间（startTime 不小于 endTime，不进入计算逻辑）
    expect(
      XEUtils.getDateDiff('2017-12-21', '2017-12-21')
    ).toEqual({ status: false, done: false, time: 0 })

    // 12. 结束时间早于开始时间（反向时间）
    expect(
      XEUtils.getDateDiff('2017-12-21', '2017-12-20')
    ).toEqual({ status: false, done: false, time: 0 })
  })
})
