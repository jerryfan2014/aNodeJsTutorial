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
//             //2、 语法上没毛病，但没有意义
//             return result
//         }
//     })    
// }

// 1、undefined 未定义， 超出了result的作用域（作用范围）
// return result;
// module.exports = {result}

// 传入一个callback，间接拿到查询数据
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