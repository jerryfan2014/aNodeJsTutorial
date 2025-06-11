// const dbUtil = require(__dirname + "/dbUtilPromise")
const dbUtil = require("./dbUtilPromise")
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
// 调用函数,注意是promise对象
getUserList()
    .then((result) => {console.log(result)})
    .catch((err) => {throw err})


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
    
getUserById(5)
    .then((result) => {console.log(result)})
    .catch((err) => {throw err})

module.exports = {getUserList}


