// 封装一个日期格式化函数，需要moment
let moment = require("moment")
moment.locale("zh-cn")

function formatDate(date) {
    return moment(date, "YYYY-MM-DD").format("YYYY年MM月DD日");
}

// 导出formatDate函数
module.exports = {formatDate}
// module.exports.formatDate = formatDate
// exports.formatDate = formatDate