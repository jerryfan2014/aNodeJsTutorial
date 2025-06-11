// const mysql2 = require("mysql2")
const mysql2 = require("mysql2/promise")

// 创建连接conn
// 创建数据库连接池
function getConnPool(){
    return mysql2.createPool({
        host:"127.0.0.1",
        port:"3308",
        database:"test",
        user:"root",
        password:"root",
        waitForConnections:true,
        connectionLimit:10
    });
}


module.exports = {getConnPool}