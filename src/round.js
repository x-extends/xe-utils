var helperCreateMathNumber = require('./helperCreateMathNumber')

/**
 * 将数值四舍五入
 *
 * @param {string|number} num 数值
 * @param {number} digits 小数保留位数
 * @param {number} awayZero 是否远离零四舍五入
 * @return {number}
 */
var round = helperCreateMathNumber('round', true)

module.exports = round
