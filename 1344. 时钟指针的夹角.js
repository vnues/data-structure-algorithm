/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
// 以12点为界限来计算角度，首先计算时针到12点的角度，就等于整数点数模12（因为12应该取0）加上分钟/60在乘上360/12。比如12:30 就是(0+1/2)360/12=15度。
// 在计算分钟到12点的角度，就是分钟数360/60。之后求这两个角度差的绝对值就是夹角，如果夹角大于180则再求一次补角返回即可。
var angleClock = function(hour, minutes) {
    // 每分移动6°
    let oneMinAngle=6 // 360/60  1hour是不是转完一圈
    // 每小时移动30°
    let oneHourAngle=30 // 180/6
    let minutesAngle=minutes*oneMinAngle
    // 时针移动的角度 并且防止12点 所以 hour % 12
    let hoursAngle=(hour%12+minutes/60)*oneHourAngle
    // 用时针的角度减去分针的角度，得其绝对值
    let diff = Math.abs(hoursAngle-minutesAngle)
    return Math.min(diff,360-diff)
};



/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    // 每分移动6°
    let oneMinAngle = 6;  
    // 每小时移动30°
    let oneHourAngle = 30;
    // 分针移动的角度
    let minutesAngle = oneMinAngle * minutes;   
    // 时针移动的角度 并且防止12点 所以 hour % 12
    let hourAngle = (hour % 12 + minutes / 60.0) * oneHourAngle  
    // 用时针的角度减去分针的角度，得其绝对值
    let diff = Math.abs(hourAngle - minutesAngle);
    // 返回最小值
    return Math.min(diff, 360 - diff);
  }