// const dbUtil = require(__dirname + "/dbUtilPromise")
const dbUtil = require("../db/dbUtilPromise")
const connPool = dbUtil.getConnPool()

// 定义函数,返回的是promise对象
function getUserList() {
    const sql = "SELECT * FROM user"
    return connPool.query(sql)
        .then(([result]) => {
            return result;
        })
        .catch((err) => {
            // 也可以返回一个json对象
            throw err
        })
}

// 返回对象是一个promise
function getUserById(userId) {
    const sql = "SELECT * FROM user WHERE id = ?"
    return connPool.query(sql, [userId])
        .then(([result]) => {
            return result;
        })
        .catch((err) => {
            // 也可以返回一个json对象
            throw err
        })
}    


module.exports = {getUserList, getUserById}


