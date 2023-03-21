const day = require("dayjs");
const add = (x, y) => x + y;
const minus = (x, y) => x - y;
const log = (...args) => console.log(...args);
const formatTime = (time, format) => day(time).format(format);

module.exports = { add, minus, log, formatTime };
