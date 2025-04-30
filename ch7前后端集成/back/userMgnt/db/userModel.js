// 从数据库中查询数据
const dbUtil = require("./dbUtil")
// 获得连接池
const pool = dbUtil.getConnPool();

function getUserList(callback) {
    selStr = "SELECT * FROM user"
    pool.query(selStr, function(err, result){
        if (err) {
            // 这里的callback函数自定义，参数数量和类型也是根据业务需求自定义
            // 调用getUserList时，传入的函数的参数要和这里使用callback时传入的参数数量和类型必须保持一致
            callback(err, null);
        } else {
            callback(null, result);
        }
    })    
}

module.exports = {getUserList}