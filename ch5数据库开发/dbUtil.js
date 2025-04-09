const mysql2 = require("mysql2")

// 创建连接conn
function getConnection() {
    return mysql2.createConnection({
        host:"127.0.0.1",
        port:"3308",
        database:"test",
        user:"root",
        password:"root"
    });
}
// 关闭连接
function closeConnection(conn) {
    try{
        conn.end()
    }catch (err) {
        //@todo 处理异常
    }
}

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

module.exports = {getConnection, closeConnection, getConnPool}
