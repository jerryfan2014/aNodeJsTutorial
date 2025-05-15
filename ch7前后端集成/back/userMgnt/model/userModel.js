// 从数据库中查询数据
const dbUtil = require("../db/dbUtil")
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

function saveUser(user, callback) {
    // 如果user.id 为空，新增用户
    if (user.id == null || user.id == "undefined") { 
        let sql = "INSERT INTO user (name, age, email) VALUES (?, ?, ?)";
        pool.query(sql, [user.name, user.age, user.email], (err, result) => {
            // if (err) throw err;
            if (err) {
                // @TODO 异常日志
                callback(err, null);
            } else {        
                callback(null, result);
            }

            // 功能上等价，可读性差；不建议
            // callback(err, result) 
        })
    } else {
        // 如果user.id 不为空，修改用户信息
        let sql = "UPDATE user SET name = ? , age =? , email =? WHERE id=?";
        pool.query(sql, [user.name, user.age, user.email, user.id], (err, result) => {
            // if (err) throw err;
            if (err) {
                // @TODO 异常日志
                callback(err, null);
            } else {        
                callback(null, result);
            }

            // 功能上等价，可读性差；不建议
            // callback(err, result) 
        })
    }
}

function getUser(userId, callback){
    let sql = "SELECT * FROM user WHERE id=?";
    pool.query(sql, [userId], (err, result) => {
        // if (err) throw err;
        if (err) {
            // @TODO 异常日志
            callback(err, null);
        } else {        
            // callback(null, result);
            // 默认返回的是list，不是单条记录，
            callback(null, result[0]);
        }

        // 功能上等价，可读性差；不建议
        // callback(err, result) 
    })
}


function deleteUser(userId, callback){
    let sql = "DELETE FROM user WHERE id=?";
    pool.query(sql, [userId], (err, result) => {
        // if (err) throw err;
        if (err) {
            // @TODO 异常日志
            callback(err, null);
        } else {        
            callback(null, result);
        }

        // 功能上等价，可读性差；不建议
        // callback(err, result) 
    })
}

module.exports = {getUserList, saveUser, 
    getUser,deleteUser}