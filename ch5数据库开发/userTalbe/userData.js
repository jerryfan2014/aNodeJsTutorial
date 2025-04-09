// 从数据库中查询数据
const dbUtil = require("../dbUtil")
// 获得连接池
const pool = dbUtil.getConnPool();

// 不能拿到查询结果
// function getUserList() {
//     selStr = "SELECT * FROM user"
//     pool.query(selStr, function(err, result){
//         if (err) {
//             // @todo 异常处理
//         } else {
//             console.log(result)
//             return result
//         }
//     })    
// }

// 传入一个callback，间接拿到查询数据
function getUserList(callback) {
    selStr = "SELECT * FROM user"
    pool.query(selStr, function(err, result){
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    })    
}



module.exports = {getUserList}