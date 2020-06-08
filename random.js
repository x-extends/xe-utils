/**
  * 获取一个指定范围内随机数
  *
  * @param {Number} minVal 最小值
  * @param {Number} maxVal 最大值
  * @return {Number}
  */
function random (minVal, maxVal) {
  return minVal >= maxVal ? minVal : ((minVal = minVal >> 0) + Math.round(Math.random() * ((maxVal || 9) - minVal)))
}

module.exports = random
