const XEUtils = require('../func')

describe('Date functions', () => {
  let date = new Date(2017, 0, 1, 14, 5, 30, 99)
  let time = date.getTime()
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
      XEUtils.timestamp(function () {}).toString()
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
      XEUtils.toStringDate(function () {}) instanceof Date
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
      XEUtils.toStringDate(function () {}).toString()
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
      XEUtils.toStringDate('yyyy:2017 MM:01 dd:20', '[yyyy]:yyyy [MM]:MM [dd]:dd')
    ).toEqual(new Date(2017, 0, 20))
    expect(
      XEUtils.toStringDate('yyyy:2017 MM:01 dd:20', '[yyyy]:yyyy [MM]:M [dd]:d')
    ).toEqual(new Date(2017, 0, 20))
    expect(
      XEUtils.toStringDate('oo MM:01 dd:20 yyyy:2017 oo', 'oo [MM]:M [dd]:d [yyyy]:yyyy oo')
    ).toEqual(new Date(2017, 0, 20))
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
      XEUtils.toDateString(function () {})
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
    ).toEqual('2017年01月01日 14时05分30秒99毫秒,星期7 第1季度')
    expect(
      XEUtils.toDateString(time, 'yy年M月d日 HH时m分s秒S毫秒,星期E 第q季度 今年第D天 今年第W周')
    ).toEqual('17年1月1日 14时5分30秒99毫秒,星期7 第1季度 今年第1天 今年第52周')
    expect(
      XEUtils.toDateString(time, 'yyyy年MM月dd日 hh时mm分ss秒SSS毫秒 星期E e 第q季 今年第DDD天 今年第WW周 a A')
    ).toEqual('2017年01月01日 02时05分30秒099毫秒 星期7 0 第1季 今年第001天 今年第52周 pm PM')
    expect(
      XEUtils.toDateString(date, 'yyyy-MM-dd [yyyy-MM-dd] [yyyy]] [[MM]')
    ).toEqual('2017-01-01 yyyy-MM-dd yyyy] [MM')
    expect(
      XEUtils.toDateString(date, '[Week] yyyy-MM-dd [[yyyy-MM-dd]]')
    ).toEqual('Week 2017-01-01 [yyyy-MM-dd]')
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
    ).toEqual(new Date(2018, 0, 31, 23, 59, 59, 999))
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
    ).toEqual(new Date(2021, 3, 30, 23, 59, 59, 999))
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
      XEUtils.getYearDay('2018-05-20')
    ).toEqual(140)
  })

  test('getYearWeek()', () => {
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
      XEUtils.getYearWeek('2017-01-28')
    ).toEqual(4)
    expect(
      XEUtils.getYearWeek(new Date(2017, 0, 28))
    ).toEqual(4)
    expect(
      XEUtils.getYearWeek('2017-01-28') === XEUtils.getYearWeek(new Date(2017, 0, 28))
    ).toEqual(true)
    expect(
      XEUtils.getYearWeek('2018-05-20')
    ).toEqual(20)
    expect(
      XEUtils.getYearWeek('2018-11-20')
    ).toEqual(47)
    expect(
      XEUtils.getYearWeek('2018-11-20') === XEUtils.getYearWeek(new Date(2018, 10, 20))
    ).toEqual(true)
    expect(
      XEUtils.getYearWeek(new Date(2018, 10, 20))
    ).toEqual(47)
    expect(
      XEUtils.getYearWeek('2018-12-20')
    ).toEqual(51)
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
    ).toEqual(4)
    expect(
      XEUtils.getMonthWeek('2017-01-01')
    ).toEqual(4)
    expect(
      XEUtils.getMonthWeek(new Date(2017, 0, 1))
    ).toEqual(4)
    expect(
      XEUtils.getMonthWeek('2017-01-01') === XEUtils.getMonthWeek(new Date(2017, 0, 1))
    ).toEqual(true)
    expect(
      XEUtils.getMonthWeek('2017-01-20')
    ).toEqual(3)
    expect(
      XEUtils.getMonthWeek('2018-05-20')
    ).toEqual(2)
    expect(
      XEUtils.getMonthWeek(new Date(2018, 4, 20))
    ).toEqual(2)
    expect(
      XEUtils.getMonthWeek('2018-05-20') === XEUtils.getMonthWeek(new Date(2018, 4, 20))
    ).toEqual(true)
    expect(
      XEUtils.getMonthWeek('2018-05-25')
    ).toEqual(3)
    expect(
      XEUtils.getMonthWeek('2018-05-29')
    ).toEqual(4)
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
      XEUtils.getDayOfYear('2020-12-10')
    ).toEqual(366)
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
      XEUtils.getDayOfMonth('2017-12-20', 1)
    ).toEqual(31)
  })

  test('getDateDiff()', () => {
    expect(
      XEUtils.getDateDiff()
    ).toEqual({ done: false, time: 0 })
    expect(
      XEUtils.getDateDiff(0)
    ).toEqual({ done: false, time: 0 })
    expect(
      XEUtils.getDateDiff(-1)
    ).toEqual({ done: false, time: 0 })
    expect(
      XEUtils.getDateDiff(null)
    ).toEqual({ done: false, time: 0 })
    expect(
      XEUtils.getDateDiff(undefined)
    ).toEqual({ done: false, time: 0 })
    expect(
      XEUtils.getDateDiff(undefined, null)
    ).toEqual({ done: false, time: 0 })
    expect(
      XEUtils.getDateDiff(new Date(''))
    ).toEqual({ done: false, time: 0 })
    expect(
      XEUtils.getDateDiff(new Date('abc'))
    ).toEqual({ done: false, time: 0 })
    expect(
      XEUtils.getDateDiff([])
    ).toEqual({ done: false, time: 0 })
    expect(
      XEUtils.getDateDiff(null, '2017-12-21')
    ).toEqual({ done: false, time: 0 })
    expect(
      XEUtils.getDateDiff([], {})
    ).toEqual({ done: false, time: 0 })
    expect(
      XEUtils.getDateDiff({ time: 2018 }, '2017-12-21')
    ).toEqual({ done: false, time: 0 })
    expect(
      XEUtils.getDateDiff(0, '2017-12-21')
    ).toEqual({ done: false, time: 0 })
    expect(
      XEUtils.getDateDiff([2018, 1, 1], '2017-12-21')
    ).toEqual({ done: false, time: 0 })
    expect(
      XEUtils.getDateDiff([2018, 1, 1], 0)
    ).toEqual({ done: false, time: 0 })
    expect(
      XEUtils.getDateDiff(new Date(2017, 0, 1, 14, 5, 30).getTime(), new Date(2017, 0, 1, 15, 1, 48).getTime())
    ).toEqual({ done: true, time: 3378000, yyyy: 0, MM: 0, dd: 0, HH: 0, mm: 56, ss: 18, S: 0 })
    expect(
      XEUtils.getDateDiff(new Date(2017, 0, 1, 14, 5, 30), new Date(2017, 0, 1, 15, 1, 48))
    ).toEqual({ done: true, time: 3378000, yyyy: 0, MM: 0, dd: 0, HH: 0, mm: 56, ss: 18, S: 0 })
    expect(
      XEUtils.getDateDiff('2017-11-20', '2017-12-21')
    ).toEqual({ done: true, time: 2678400000, yyyy: 0, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, S: 0 })
    expect(
      XEUtils.getDateDiff('2017-12-20', '2017-12-21')
    ).toEqual({ done: true, time: 86400000, yyyy: 0, MM: 0, dd: 1, HH: 0, mm: 0, ss: 0, S: 0 })
    expect(
      XEUtils.getDateDiff('2018-01-01', '2017-12-21')
    ).toEqual({ done: false, time: 0 })
  })
})
