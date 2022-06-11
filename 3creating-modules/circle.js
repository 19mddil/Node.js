const area = r => 3.14 * r * r;
const circumference = r => 2 * 3.14 * r;
const msg = "hello node";

module.exports.area = area;
module.exports.circumference = circumference;
module.exports.msg = msg;

console.log(module);