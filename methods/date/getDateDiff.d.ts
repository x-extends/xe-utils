/**
 * 返回两个日期之间差距,如果结束日期小于开始日期 done 为 fasle
 * @param startDate 开始日期
 * @param endDate 结束日期或当期日期
 * @param rules 自定义计算规则
 */
export declare function getDateDiff(startDate: string | Date | number, endDate: string | Date | number, rules?: object): object;

export default getDateDiff