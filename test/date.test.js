const XEUtils = require('../index')

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
      XEUtils.isDateSame('2018-12-01', '2018-12-01')
    ).toEqual(true)
    expect(
      XEUtils.isDateSame(time, '2018-12-01', 'yyyy')
    ).toEqual(false)
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
      XEUtils.toStringDate(time)
    ).toEqual(new Date(2017, 0, 1, 14, 5, 30, 99))
    expect(
      XEUtils.toStringDate(date)
    ).toEqual(new Date(2017, 0, 1, 14, 5, 30, 99))
    expect(
      XEUtils.toStringDate('2017-12-20')
    ).toEqual(new Date(2017, 11, 20))
    expect(
      XEUtils.toStringDate('2017-12-20 10:10:30')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30))
    expect(
      XEUtils.toStringDate('12/20/2017', 'MM/dd/yyyy')
    ).toEqual(new Date(2017, 11, 20))
    expect(
      XEUtils.toStringDate('20171220101030', 'yyyyMMddHHmmss')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30))
    expect(
      XEUtils.toStringDate('2017/12/20 10:10:30', 'yyyy/MM/dd HH:mm:ss')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30))
    expect(
      XEUtils.toStringDate('12/20/2017 10:10:30.100', 'MM/dd/yyyy HH:mm:ss.SSS')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 100))
  })

  test('toDateString()', () => {
    expect(
      XEUtils.toDateString(1483250730000)
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
      XEUtils.toDateString(date, 'yyyy-MM-dd HH:mm:ss.SSS')
    ).toEqual('2017-01-01 14:05:30.099')
    expect(
      XEUtils.toDateString(date, 'yyyy-MM-dd hh:mm:ss.SSSZ')
    ).toEqual('2017-01-01 02:05:30.099+0800')
    expect(
      XEUtils.toDateString(date, 'yyyy-MM-dd hh:mm:ss.SSS zZ')
    ).toEqual('2017-01-01 02:05:30.099 GMT+0800')
    expect(
      XEUtils.toDateString('2017-01-01 14:05:30', 'yyyy-M-d h:m:s.S')
    ).toEqual('2017-1-1 2:5:30.0')
    expect(
      XEUtils.toDateString(date, 'yyyy-M-d H:m:s.S')
    ).toEqual('2017-1-1 14:5:30.99')
    expect(
      XEUtils.toDateString(date, 'yyyy-M-d h:m:s.S')
    ).toEqual('2017-1-1 2:5:30.99')
    expect(
      XEUtils.toDateString(time, 'yyyy年MM月dd日 HH时mm分ss秒S毫秒,星期E 第q季度')
    ).toEqual('2017年01月01日 14时05分30秒99毫秒,星期0 第1季度')
    expect(
      XEUtils.toDateString(time, 'yy年M月d日 HH时m分s秒S毫秒,星期E 第q季度')
    ).toEqual('17年1月1日 14时5分30秒99毫秒,星期0 第1季度')
    expect(
      XEUtils.toDateString(time, 'yyyy年MM月dd日 hh时mm分ss秒SSS毫秒zZ 星期E e 第q季 今年第D天 今年第w周 当月第W周 a A')
    ).toEqual('2017年01月01日 02时05分30秒099毫秒GMT+0800 星期0 -1 第1季 今年第1天 今年第0周 当月第0周 pm PM')
  })

  test('getWhatYear()', () => {
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
      XEUtils.getWhatYear('2017-12-20', 0, 'first')
    ).toEqual(new Date(2017, 0, 1, 0, 0, 0, 0))
    expect(
      XEUtils.getWhatYear('2017-12-20', 0, 'last')
    ).toEqual(new Date(2017, 11, 31, 23, 59, 59, 999))
  })

  test('getWhatMonth()', () => {
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
      XEUtils.getWhatMonth('2017-12-20', -1, 'first')
    ).toEqual(new Date(2017, 10, 1, 0, 0, 0, 0))
    expect(
      XEUtils.getWhatMonth('2017-12-20', 1, 'last')
    ).toEqual(new Date(2018, 0, 31, 23, 59, 59, 999))
  })

  test('getWhatWeek()', () => {
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
      XEUtils.getWhatDay(date, -1)
    ).toEqual(new Date(2016, 11, 31, 14, 5, 30, 99))
    expect(
      XEUtils.getWhatDay(time, 1)
    ).toEqual(new Date(2017, 0, 2, 14, 5, 30, 99))
    expect(
      XEUtils.getWhatDay('2017-12-20', -1)
    ).toEqual(new Date(2017, 11, 19))
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
      XEUtils.getYearWeek(date)
    ).toEqual(0)
    expect(
      XEUtils.getYearWeek('2017-01-20')
    ).toEqual(3)
    expect(
      XEUtils.getYearWeek('2018-05-20')
    ).toEqual(20)
  })

  test('getMonthWeek()', () => {
    expect(
      XEUtils.getMonthWeek(date)
    ).toEqual(0)
    expect(
      XEUtils.getMonthWeek('2017-01-20')
    ).toEqual(3)
    expect(
      XEUtils.getMonthWeek('2018-05-20')
    ).toEqual(2)
  })

  test('getDayOfYear()', () => {
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
      XEUtils.getDayOfYear('2019-12-20', 1)
    ).toEqual(366)
    expect(
      XEUtils.getDayOfYear('2020-12-20')
    ).toEqual(366)
  })

  test('getDayOfMonth()', () => {
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
      XEUtils.getDayOfMonth('2017-12-20', -1)
    ).toEqual(30)
    expect(
      XEUtils.getDayOfMonth('2017-12-20', 1)
    ).toEqual(31)
  })

  test('getDateDiff()', () => {
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
